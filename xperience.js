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

var prop = require('showtime/prop');
var service = require('showtime/service');
var settings = require('showtime/settings');

var log = require('./src/log');
var plugin = require('./src/plugin');

var plugin_info = plugin.getDescriptor();
var PREFIX = plugin_info.id;

prop.createRoot("xperience");

settings.globalSettings(PREFIX, plugin_info.title, plugin.getLogoPath(),
    plugin_info.title);

settings.createDivider("Info List");

settings.createBool("infoList.useDynamicColor", "Use dynamic color for backgrounds", true, function(v) {
    prop.global.xperience.infoList.useDynamicColor = v;
})

settings.createInt("infoList.alpha", "Transparency of panels", 80, 0, 100, 1, "%", function(v) {
    prop.global.xperience.infoList.alpha = v / 100;
});

settings.createInfo("info.infoList.itemList.width", null,
    "A bigger value will mean that the item list will use more space horizontally.");
settings.createInt("infoList.itemList.width", "Item list's screen width proportion", 55, 30, 70, 1, "%", function(v) {
    prop.global.xperience.infoList.itemList.width = v / 100;
});

settings.createInfo("info.infoList.itemHeight", null,
    "A bigger item height means less items on screen.");
settings.createInt("infoList.itemHeight", "Item height", 100, 50, 200, 10, "%", function(v) {
    prop.global.xperience.infoList.itemHeight = v / 100;
});

settings.createInfo("info.infoList.textSize", null,
    "A bigger item's text size means bigger text.\n" +
    "Note that a bigger item's text size requires a bigger item height.");
settings.createInt("infoList.textSize", "Item's text size", 100, 50, 200, 10, "%", function(v) {
    prop.global.xperience.infoList.textSize = v / 100;
});

settings.createInfo("info.infoList.info.imageHeight", null,
    "A bigger item's info image size means a bigger image so less height available for description and others (below the image).\n" +
    "Note: This setting is only relative to video items, other type of items will remain untouched.");
settings.createInt("infoList.info.imageHeight", "Item's info image height", 60, 30, 75, 5, "%", function(v) {
    prop.global.xperience.infoList.info.imageHeight = v / 100;
});

settings.createInfo("info.infoList.info.textSize", null,
    "A bigger item's info text size means bigger text of the information shown on the right.");
settings.createInt("infoList.info.textSize", "Item's info text size", 100, 50, 150, 5, "%", function(v) {
    prop.global.xperience.infoList.info.textSize = v / 100;
});

prop.global.xperience.disablePrimaryColor = Core.currentVersionInt < 50000196;
