# nRF5_SDK12.3.0

(1) -  Modify bootloader:
1.1 - Change timeout: Change value of APP_TIMEOUT_ADV_IN_SECONDS in /components/libraries/bootloader/dfu/nrf_dfu.c
1.2 - Change advertise name: In file /libraries/bootloader/ble_dfu/nrf_ble_dfu.c
1.3 - Change private key: Add below content to /examples/dfu/bootloader_secure/dfu_public_key.c
Current key is:
/* This file was automatically generated by nrfutil on 2017-05-15 (YY-MM-DD) at 15:14:47 */

#include "stdint.h"
#include "compiler_abstraction.h"

/** @brief Public key used to verify DFU images */
__ALIGN(4) const uint8_t pk[64] =
{
    0x41, 0x09, 0xd6, 0xc6, 0x59, 0x65, 0x3c, 0x51, 0xcb, 0xd5, 0x30, 0x1a, 0xd3, 0x21, 0x74, 0x3d, 0x0e, 0x56, 0xb1, 0xda, 0x1a, 0x7e, 0x6d, 0x8d, 0xdf, 0x36, 0x1a, 0x31, 0x65, 0xf0, 0x31, 0x5c, 
    0x05, 0x02, 0x55, 0x69, 0xed, 0xc6, 0xb3, 0xaf, 0x3f, 0x80, 0x58, 0xce, 0xee, 0xa6, 0x7d, 0x20, 0x81, 0x59, 0xa0, 0xd2, 0x27, 0xee, 0x2c, 0x68, 0xec, 0xf2, 0x0b, 0xf0, 0xd3, 0x19, 0x8c, 0xed
};

(2) Using bootloader - reference in https://github.com/NordicSemiconductor/pc-nrfutil, for more easier, follow below step:
Note: Current version of nrfutil is 2.2.0 (need higher of 2.0)
2.1 - Create settings file to signal to MCU know the exist of application
Command: 
nrfutil settings generate --family NRF52 --application app.hex --application-version 3 --bootloader-version 2 --bl-settings-version 1 sett.hex
Note:
*family accept only NRF51/NRF52/NRF52840
*bl-settings-version must be 1 for SDK 12
2.2 - Merge application + softdevice + setting + bootloader with srec_cat
2.3 - Flash combined file to MCU
2.4 - Create packet to flash firmware OTA with private key key.pem in this respository
Command:
nrfutil pkg generate --hw-version 51 --sd-req 0x87 --application-version 4 --application app.hex --key-file key.pem app_dfu_package.zip
Note:
*The option --hw-version must correspond to the nRF5x IC used, i.e. 51 for nRF51x22 ICs and 52 for nRF52xxx ICs
*The option --sd-req must correspond to the softdevice used, i.e. 0x87 for s130_nrf51_2.0.1 and 0x8C for s132_nrf52_3.0.0
2.5 Move app_dfu_package.zip file and flash it via bluetooth

Thanks for reading
Quang
25/05/2017
