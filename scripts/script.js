let ideasData = {
    alone: {
        alone1: {
            description: 'Покататься на САПе около Бугринского моста',
            photo: 'images/alone1.jpg'
        },
        alone2: {
            description: 'Сходить за грибами в сосновый бор',
            photo: 'images/alone2.jpg'
        },
        alone3: {
            description: 'Посмотреть подводный мир в океанариуме',
            photo: 'images/alone3.jpg'
        },
        alone4: {
            description: 'Помедитировать в Мира-парке',
            photo: 'images/alone4.jpg'
        },
        alone5: {
            description: 'Половить рыбу на Обском море',
            photo: 'images/alone5.jpg'
        },
        alone6: {
            description: 'Расслабиться в термах Мира',
            photo: 'images/alone6.jpg'
        }
    },
    family: {
        family1: {
            description: 'Посмотреть представление в Дельфинии',
            photo: 'images/family1.jpg'
        },
        family2: {
            description: 'Покататься на горках аквапарка',
            photo: 'images/family2.jpg'
        },
        family3: {
            description: 'Посмотреть на животных в зоопарке',
            photo: 'images/family3.jpg'
        },
        family4: {
            description: 'Почилить на пляже Звезда',
            photo: 'images/family4.jpg'
        },
        family5: {
            description: 'Полазить в Заельцовском веревочном парке',
            photo: 'images/family5.jpg'
        },
        family6: {
            description: 'Собрать модель Лего',
            photo: 'images/family6.jpg'
        }
    },
    friends: {
        friends1: {
            description: 'Поболеть на хоккее в ледовом дворце',
            photo: 'images/friends1.jpg'
        },
        friends2: {
            description: 'Поехать в велотур в Горный Алтай',
            photo: 'images/friends2.jpg'
        },
        friends3: {
            description: 'Посмотреть балет в НОВАТе',
            photo: 'images/friends3.jpg'
        },
        friends4: {
            description: 'Погулять по Михайловской набережной',
            photo: 'images/friends4.jpg'
        },
        friends5: {
            description: 'Отправиться в поход с палатками',
            photo: 'images/friends5.jpg'
        },
        friends6: {
            description: 'Покататься на эндуро-байках',
            photo: 'images/friends6.jpg'
        }
    }
};


let select = document.querySelector('#select');
select.addEventListener('change', function(){
   console.log(this.value);
});
