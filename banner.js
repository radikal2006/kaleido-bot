// banner.js
import chalk from 'chalk';

export function displayBanner() {
    console.log(chalk.magentaBright(`

		.-------------------------------------.
		|             CryptoPia               |
		'-------------------------------------'   
                                                
       ${chalk.cyanBright('Welcome to')} ${chalk.yellowBright('CryptoPia')} ${chalk.cyanBright('!')}                             
       ${chalk.blueBright('Telegram Channel: https://t.me/crypttopia')}
    `));
}
