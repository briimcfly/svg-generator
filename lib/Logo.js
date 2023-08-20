const chalk = require('chalk');

function GenerateLogo() {
    console.log(chalk.cyan(
        `
        ## ##   ### ###   ## ##             ## ##   ### ###  ###  ##  ### ###  ### ##     ##     #### ##   ## ##   ### ##   
       ##   ##   ##  ##  ##   ##           ##   ##   ##  ##    ## ##   ##  ##   ##  ##     ##    # ## ##  ##   ##   ##  ##  
       ####      ##  ##  ##                ##        ##       # ## #   ##       ##  ##   ## ##     ##     ##   ##   ##  ##  
        #####    ##  ##  ##  ###           ##  ###   ## ##    ## ##    ## ##    ## ##    ##  ##    ##     ##   ##   ## ##   
           ###   ### ##  ##   ##           ##   ##   ##       ##  ##   ##       ## ##    ## ###    ##     ##   ##   ## ##   
       ##   ##    ###    ##   ##           ##   ##   ##  ##   ##  ##   ##  ##   ##  ##   ##  ##    ##     ##   ##   ##  ##  
        ## ##      ##     ## ##             ## ##   ### ###  ###  ##  ### ###  #### ##  ###  ##   ####     ## ##   #### ##                                                                                                                    
       `
    ))
    console.log(chalk.blue(`
        Bryan's SVG Generator - v1.0.0
        Developed by: Bryan Bickel • Aug 2023
        Description: Create SVG Logo's with just a few prompts
        Contact: bickel@hey.com     
    `
    ))
}

module.exports = GenerateLogo;