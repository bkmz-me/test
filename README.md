# Test
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

После скачивания дистрибутива через консоль открыть локальный сервер командой `ng serve`, 
на главной странице находится кнопка "начать" по клику на которую пользователь попадает на страницу с буквой (по умолчанию переход идет на первую букву алфавита). Так же на данной странице имеется возможность перейти на одну из других букв алфавита, при переходе или обновлении страницы в блоке для выбора буквы выводится одно из 3 подготовленных слов.

к сожалению, не реализовал интерактивность букв выводимого слова.
(в теории думаю, что это должно происходить путем добавления букв слова в массив, удаление его из ДОМ, и вставки отдельных тегов каждой буквы, на которые уже можно будет навесить действие при клике на ту или иную букву).

так же не корректно отображается активная буква, у меня при клике на букву в алфавите идет перенаправление на другую страницу, и клас active, который я добавляю при клике на букву, сбрасывается, тоесть, если находиться например на /challenge/Бб и кликнуть в алфавите данную букву она станет активной, а если на другую то сработает перенаправление и класс сбросится.
(пытался применить history.pushState() для отображения нового url без перезагрузки страницы, но у меня не получилось адекватно и правильно реализовать другие действия под этот метот (я имею ввиду отображение другой буквы, вывод соответствующих картинок и слов)).
