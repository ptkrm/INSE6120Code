#!/usr/bin/env python

from wifi import Cell

menu = "1"

while menu == "1":
    cell = Cell.all('wlan0')
    lenghtCell = len(cell)
    for k in range(0, lenghtCell):
        print "SSID: {} , freq: {}, ch: {}, addr: {}".format(cell[k], cell[k].frequency, cell[k].channel, cell[k].address, cell[k].encrypted)
        if cell[k].encrypted:
            print cell[k].encryption_type

    menu = raw_input('Scan Again: ')
