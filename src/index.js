import './style.css';

const dropDown = require('./dropDown');

const menuButton = document.querySelector('#menu-button');
const menuBody = document.querySelectorAll('.menu-body');

dropDown.DropDown(menuButton, menuBody);