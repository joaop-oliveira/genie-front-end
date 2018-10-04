const gulp = require('gulp');
const fs = require('fs');
const chalk = require('chalk');
const CONFIG = require('./config');
const args = process.argv.slice(3).map(arg => arg.replace('--', ''));
const log = console.log;

function createDirectory(dir, callback) {
  if (fs.existsSync(`${CONFIG.PAGES_DIR}/${dir}`)) {
    log(chalk.red(`O diretorio informado ja existe por favor verifique`));
    throw new Error('Directory already exists');
  } else {
    log(dir);
    if (args[1] === 'Operations' || args[1] === 'Reports') {
      callback(dir);
    } else {
      fs.mkdirSync(`${CONFIG.PAGES_DIR}/${dir}`, 0755);
      callback(dir);
    }
  }
}

function createOperationOrReports(name, type) {
  fs.appendFile(
    `${CONFIG.PAGES_DIR}/${type}/${name}.js`,
    CONFIG.COMPONENT_TEMPLATE(type, name),
    err => {
      if (err) {
        console.error(err);
      } else {
        log(chalk.blue(`Created file ${chalk.green.underline(chalk.green(name))}`));
      }
    },
  );
}

function createPage(name, type) {
  fs.appendFile(
    `${CONFIG.PAGES_DIR}/${name}/${type}.js`,
    CONFIG.COMPONENT_TEMPLATE(type, name),
    err => {
      if (err) {
        console.error(err);
      } else {
        log(
          chalk.blue(
            `Created file ${chalk.green.underline(chalk.green(type))}${chalk.green.underline(
              chalk.green(name),
            )}`,
          ),
        );
      }
    },
  );
}

function scaffold(dir) {
  for (let i = 0; i < 2; i++) {
    switch (i) {
      case 0:
        createPage(dir, 'Cadastrar');
        break;
      case 1:
        createPage(dir, 'Consultar');
        break;
      default:
        console.log('Error whil executing');
    }
  }
}

gulp.task('create:page', _ => {
  createDirectory(args[0], dir => {
    scaffold(dir);
  });
});

gulp.task('create:report', _ => {
  createDirectory(`Reports/${args[0]}`, dir => {
    createOperationOrReports(args[0], args[1]);
  });
});

gulp.task('create:operation', _ => {
  createDirectory(`Operations/${args[0]}`, dir => {
    createOperationOrReports(args[0], args[1]);
  });
});
