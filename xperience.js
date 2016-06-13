/*
Xperience skin for Movian Media Center Copyright (C) 2015-2016 Fábio Ferreira

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

This program is also available under a commercial proprietary license.
*/

var prop = require('movian/prop');
var service = require('movian/service');
var settings = require('movian/settings');

var log = require('./src/log');
var plugin = require('./src/plugin');

var plugin_info = plugin.getDescriptor();
var PREFIX = plugin_info.id;

prop.createRoot("xperience");

settings.globalSettings(PREFIX, plugin_info.title, plugin.getLogoPath(),
    plugin_info.title);

settings.createDivider("Info List");

settings.createInfo("info.infoList.itemList.width", plugin.getLogoPath(),
    "A bigger value will mean that the item list will use more space horizontally.");
settings.createInt("infoList.itemList.width", "Item list's screen width proportion", 55, 30, 70, 1, "%", function(v) {
    prop.global.xperience.infoList.itemList.width = v / 100;
});

settings.createInfo("info.infoList.itemHeight", plugin.getLogoPath(),
    "A bigger item height means less items on screen.");
settings.createInt("infoList.itemHeight", "Item height", 100, 50, 200, 10, "%", function(v) {
    prop.global.xperience.infoList.itemHeight = v / 100;
});

settings.createInfo("info.infoList.contentSize", plugin.getLogoPath(),
    "A bigger item's text size means bigger text.\n" +
    "Note that a bigger item's text size requires a bigger item height.");
settings.createInt("infoList.textSize", "Item's text size", 100, 50, 200, 10, "%", function(v) {
    prop.global.xperience.infoList.textSize = v / 100;
});
