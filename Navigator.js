import React, { useRef } from 'react';

// pages
import Home from './screens/home';

class VariableManager {
    _variables = useRef({});
    _constants = useRef({});

    get = (key) => {
        return this._variables.current[key] || this._constants.current[key];
    }

    setConstant = (key, value) => {
        if (Object.keys(this._variables.current).includes(key) ||
            Object.keys(this._constants.current).includes(key))
            return console.warn(`Global variable ${key} already set. Ignoring setConstant.`);

        this._constants.current[key] = value;
        return value;
    }

    set = (key, value) => {
        if (Object.keys(this._constants.current).includes(key))
            return console.warn(`Cannot override variable ${key}. already set. Ignoring set.`);

        this._variables.current[key] = value;
        return value;
    }
}

export default class Navigator {
    screenSet;
    invokeMenu;
    check = () => { console.log("Working!") }

    globalVariables = new VariableManager();
    _pageStack = ['home'];

    pageList = {
        "home": (<Home navigator={this} />),
    }

    go = (pageName) => {
        this.invokeMenu(false);
        if (!Object.keys(this.pageList).includes(pageName)) {
            this._pageStack = ['home']
            console.error(`Page ${pageName} doesn't exists or is not imported.`);
            this.screenSet(this.pageList['home']);
            return;
        }

        this._pageStack.push(pageName);
        this.screenSet(this.pageList[pageName]);
    }

    fix = (pageName) => {
        this.invokeMenu(false);
        if (!Object.keys(this.pageList).includes(pageName)) {
            this._pageStack = ['home']
            console.error(`Page ${pageName} doesn't exists or is not imported.`);
            this.screenSet(this.pageList['home']);
            return;
        }
        this._pageStack = [pageName]
        this.screenSet(this.pageList[pageName]);
    }

    back = () => {
        this.invokeMenu(false);
        if (this._pageStack.length <= 1) { this.home(); return false; }
        this._pageStack.pop()
        const pageName = this._pageStack[this._pageStack.length - 1]
        this.screenSet(this.pageList[pageName]);
        return true;
    }

    home = () => {
        this.invokeMenu(false);
        this._pageStack = ['home']
        this.screenSet(this.pageList['home']);
    }
}
