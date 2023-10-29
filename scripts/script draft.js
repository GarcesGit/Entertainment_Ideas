let ideasData = {
    alone: {
        alone1: {
            description: 'Покататься на САПе у Бугринского моста',
            photo: 'images/_alone_1.jpg'
        },
        alone2: {
            description: 'Сходить за грибами в сосновый бор',
            photo: 'images/_alone_2.jpg'
        },
        alone3: {
            description: 'Посмотреть подводный мир в океанариуме',
            photo: 'images/_alone_3.jpg'
        },
        alone4: {
            description: 'Помедитировать в Мира-парке',
            photo: 'images/_alone_4.jpg'
        },
        alone5: {
            description: 'Половить рыбу на Обском море',
            photo: 'images/_alone_5.jpg'
        },
        alone6: {
            description: 'Расслабиться в термах Мира',
            photo: 'images/_alone_6.jpg'
        }
    },
    family: {
        family1: {
            description: 'Посмотреть представление в Дельфинии',
            photo: 'images/_family_1.jpg'
        },
        family2: {
            description: 'Покататься на горках аквапарка',
            photo: 'images/_family_2.jpg'
        },
        family3: {
            description: 'Посмотреть на животных в зоопарке',
            photo: 'images/_family_3.jpg'
        },
        family4: {
            description: 'Почилить на пляже Звезда',
            photo: 'images/_family_4.jpg'
        },
        family5: {
            description: 'Полазить в Заельцовском веревочном парке',
            photo: 'images/_family_5.jpg'
        },
        family6: {
            description: 'Собрать модель Лего',
            photo: 'images/_family_6.jpg'
        }
    },
    friends: {
        friends1: {
            description: 'Поболеть на хоккее в ледовом дворце',
            photo: 'images/_friends_1.jpg'
        },
        friends2: {
            description: 'Поехать в велотур в Горный Алтай',
            photo: 'images/_friends_2.jpg'
        },
        friends3: {
            description: 'Посмотреть балет в НОВАТе',
            photo: 'images/_friends_3.jpg'
        },
        friends4: {
            description: 'Погулять по Михайловской набережной',
            photo: 'images/_friends_4.jpg'
        },
        friends5: {
            description: 'Отправиться в поход с палатками',
            photo: 'images/_friends_5.jpg'
        },
        friends6: {
            description: 'Покататься на эндуро-байках',
            photo: 'images/_friends_6.jpg'
        }
    }
};

let tile = document.querySelector('#tile');
let select = document.querySelector('#select');

function putTile(object) {
    for (let groups in object) {
        let subObj = object[groups];
        for (let idea in subObj) {
            let subSubObj = subObj[idea];
            let div = document.createElement('div');
            let img = document.createElement('img');
            let p = document.createElement('p');

            for (let data in subSubObj) {
                img.src = subSubObj.photo;
                div.append(img);
                p.innerHTML = subSubObj.description;
                div.append(p);
            }
            tile.append(div);
        }
    }
}
putTile(ideasData);

let tileChildren = tile.children;

function addClassName() {
    for (let tiles of tileChildren) {
        let string = tiles.innerHTML;
        let split = string.split('_');
        for (let words of split) {
            if (words == 'alone') {
                tiles.classList.add('alone');
            } else if (words == 'family') {
                tiles.classList.add('family');
            } else if (words == 'friends') {
                tiles.classList.add('friends');
            }
        }
    }
}
addClassName();

function useFilter() {
    for (let tiles of tileChildren) {
        select.addEventListener('change', function() {
            tiles.classList.remove('hide');
            if (select.value == tiles.className) {
                tiles.classList.remove('hide');
            } else if (select.value == 'all') {
                tiles.classList.remove('hide');
            } else if (select.value !== tiles.className) {
                tiles.classList.add('hide');
            }
        });
    }
}
useFilter();




// console.log(groups); //= alone ...
// console.log(idea); //= alone1...
// console.log(subSubObj[data]); //= Покататься на САПе около Бугринского моста & images/alone1.jpg
// console.log(data); //description & photo
// console.log(subObj[idea].photo); //images/alone1.jpg
//console.log(subSubObj.description); //Покататься на САПе около Бугринского моста
// console.log(subSubObj.photo); //images/alone1.jpg
// console.log(ideasData[groups]); //{alone1: {…}, alone2: {…},
// console.log(groups[0]); //a
// console.log(ideasData.alone);//{alone1: {…}, alone2: {…},
