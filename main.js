const northAmericaCoordinates = // Denver
{
    users: {
        left: '19%',
        top: '45%'
    },
    laptop: {
        left: '23%',
        top: '36%'
    },
    smartphone: {
        left: '19%',
        top: '41%'
    },
    phone: {
        left: '16%',
        top: '35%'
    },
    regionName: 'northAmericaCoordinates',
    regionNameDraw: 'North America',
    lineEnds:{
        laptop: {
            x: 24,
            y: 37
        },
        smartphone: {
            x: 20,
            y: 42
        },
        phone: {
            x: 17,
            y: 36
        }
    },
    coordinates: {
        left: 19,
        top: 45
    },
    latency: {
        'eastUsaServer': {
            time: 40.942 // LA
        },
        'westUsaServer': {
            time: 43.731 // NY
        },
        'germanyServer': {
            time: 126.678 //Frankfurt
        },
        'singaporeServer': {
            time: 209.589 // Singapore
        }

    }
}

const southAmericaCoordinates = { //Brasilia
    users: {
        left: '29%',
        top: '76%'
    },
    laptop: {
        left: '32%',
        top: '68%'
    },
    smartphone: {
        left: '30%',
        top: '78%'
    },
    phone: {
        left: '27%',
        top: '64%'
    },
    regionName: 'southAmericaCoordinates',
    regionNameDraw: 'South America',
    lineEnds:{
        laptop: {
            x: 33,
            y: 69
        },
        smartphone: {
            x: 31,
            y: 79
        },
        phone: {
            x: 28,
            y: 65
        }
    },
    coordinates: {
        left: 29,
        top: 76
    },
    latency: {
        'eastUsaServer': {
            time: 105.974 // LA
        },
        'westUsaServer': {
            time: 77.859 // NY
        },
        'germanyServer': {
            time: 190.402 //Frankfurt
        },
        'singaporeServer': {
            time: 395.374 // Singapore
        }

    }
}

const europeCoordinates = { //Prague
    users: {
        left: '50%',
        top: '43%'
    },
    laptop: {
        left: '52%',
        top: '37%'
    },
    smartphone: {
        left: '45%',
        top: '42%'
    },
    phone: {
        left: '59%',
        top: '32%'
    },
    regionName: 'europeCoordinates',
    regionNameDraw: 'Europe',
    lineEnds:{
        laptop: {
            x: 53,
            y: 38
        },
        smartphone: {
            x: 46,
            y: 43
        },
        phone: {
            x: 60,
            y: 33
        }
    },
    coordinates: {
        left: 50,
        top: 43
    },
    latency: {
        'eastUsaServer': {
            time: 131.358 // LA
        },
        'westUsaServer': {
            time: 99.575 // NY
        },
        'germanyServer': {
            time: 13.955 //Frankfurt
        },
        'singaporeServer': {
            time: 172.894 // Singapore
        }

    }
}

const asiaCoordinates = { //Seoul
    users: {
        left: '72%',
        top: '54%'
    },
    laptop: {
        left: '76%',
        top: '48%'
    },
    smartphone: {
        left: '67%',
        top: '50%'
    },
    phone: {
        left: '80%',
        top: '38%'
    },
    regionName: 'asiaCoordinates',
    regionNameDraw: 'Asia',
    lineEnds:{
        laptop: {
            x: 77,
            y: 49
        },
        smartphone: {
            x: 68,
            y: 51
        },
        phone: {
            x: 81,
            y: 39
        }
    },
    coordinates: {
        left: 72,
        top: 54
    },
    latency: {
        'eastUsaServer': {
            time: 230.235 // LA
        },
        'westUsaServer': {
            time: 201.618 // NY
        },
        'germanyServer': {
            time: 120.192 //Frankfurt
        },
        'singaporeServer': {
            time: 49.256 // Singapore
        }

    }
}

const oceaniaCoordinates = { //Sydney
    users: {
        left: '80%',
        top: '83%'
    },
    laptop: {
        left: '86%',
        top: '76%'
    },
    smartphone: {
        left: '78%',
        top: '76%'
    },
    phone: {
        left: '82%',
        top: '76%'
    },
    regionName: 'oceaniaCoordinates',
    regionNameDraw: 'Oceania',
    lineEnds:{
        laptop: {
            x: 87,
            y: 77
        },
        smartphone: {
            x: 79,
            y: 77
        },
        phone: {
            x: 83,
            y: 77
        }
    },
    coordinates: {
        left: 80,
        top: 83
    },
    latency: {
        'eastUsaServer': {
            time: 179.583 // LA
        },
        'westUsaServer': {
            time: 207.851 // NY
        },
        'germanyServer': {
            time: 130.543 //Frankfurt
        },
        'singaporeServer': {
            time: 32.502 // Singapore
        }

    }
}

const eastUsaServer = {
    location: {
        left: '13%',
        top: '42%'
    },
    regionName: 'eastUsaServer',
    lineStart: {
        x: 14,
        y: 43
    },
    coordinates: {
        left: 13,
        top: 42
    }
}

const westUsaServer = {
    location: {
        left: '27%',
        top: '41%'
    },
    regionName: 'westUsaServer',
    lineStart: {
        x: 28,
        y: 42
    },
    coordinates: {
        left: 27,
        top: 41
    }
}

const germanyServer = {
    location: {
        left: '48%',
        top: '37%'
    },
    regionName: 'germanyServer',
    lineStart: {
        x: 49,
        y: 38
    },
    coordinates: {
        left: 48,
        top: 37
    }
}

const singaporeServer = {
    location: {
        left: '75%',
        top: '65%'
    },
    regionName: 'singaporeServer',
    lineStart: {
        x: 76,
        y: 66
    },
    coordinates: {
        left: 75,
        top: 65
    }
}

// Сюди записуються результати вибору по регіонах
var userChoices = {};

// результати вибору серверів
var serverChoices = {};

// допоміжний об'єкт для переходу від одного кроку до іншого
var steps = {};

// використовується для відмалювання результатів на етапі мапи
var firstResults = {
    lineStart: {}
};

// використовуться для відмальовування результатів на етапі списку (cloud)
var byteCloudResults = {};

// використовуться для відмальовування результатів на етапі списку (object storage)
var objectStorageResult = {};

let Element = function(x, y) {
    this.x = x;
    this.y = y;
}

Element.prototype.drawLaptop = function(name) {
    let laptopHtml = `
    <div class="tech__laptop ${name}">
        <img src="imgs/small.png" alt="">
    </div>`;
    $('.map').append(laptopHtml);
    $('.tech__laptop').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawSmartphone = function(name) {
    let smartphoneHtml = `
    <div class="tech__smartphone ${name}">
        <img src="imgs/medium.png" alt="">
    </div>`;
    $('.map').append(smartphoneHtml);
    $('.tech__smartphone').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawPhone = function(name) {
    let phoneHtml = `
    <div class="tech__phone ${name}">
        <img src="imgs/large.png" alt="">
    </div>`;
    $('.map').append(phoneHtml);
    $('.tech__phone').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawServer = function(region) {
    let serverHtml = `
    <div class="my__data__region ${region}">
        <img src="imgs/server.png" alt="">
    </div>`;
    $('.map').append(serverHtml);
    $('.my__data__region').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawCloudServer = function(region) {
    let cloudServerHtml = `
    <div class="additional__data__region ${region}">
        <img src="imgs/server_ByteCloud.png" alt="">
    </div>`;
    $('.map').append(cloudServerHtml);
    $('.additional__data__region').last().css({
        left: this.x,
        top: this.y
    });
}

// Визначаю відстань між двома точками
function euclideanDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
  
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Шукаємо найблтжчий сервер
function getNearestServer(userCoordinates, serverList) {
    let nearestServer = null;
    let nearestDistance = Infinity;
    let latency = Infinity;
    let lineStartX;
    let lineStartY;

    for (const server of serverList) {

        if (!firstResults['mainServer']) {
            firstResults['mainServer'] = {};
            firstResults.mainServer['lineStart'] = {};
            firstResults.mainServer.name = server;
            firstResults.mainServer.latency = userCoordinates.latency[server.regionName].time;
            firstResults.mainServer.lineStart.x = server.lineStart.x;
            firstResults.mainServer.lineStart.y = server.lineStart.y;
        }
        const distance = euclideanDistance(
        userCoordinates.coordinates.left,
        userCoordinates.coordinates.top,
        server.coordinates.left,
        server.coordinates.top
        );

        const latencyTime = userCoordinates.latency[server.regionName].time;

        const lineCoordinateX = server.lineStart.x;
        const lineCoordinateY = server.lineStart.y;

        if (distance < nearestDistance) {
        nearestServer = server;
        nearestDistance = distance;
        latency = latencyTime;
        lineStartX = lineCoordinateX;
        lineStartY = lineCoordinateY;
        }
    }

    firstResults.nesrestServer = nearestServer;
    firstResults.latency = latency;
    firstResults.lineStart.x = lineStartX;
    firstResults.lineStart.y = lineStartY;

    return firstResults;
}


let Line = function (){};
Line.prototype.drawLine = function (startx, starty, endx, endy) {
// Отримуємо контекст канваса
    var canvas = $('#myCanvas');
    var map = $('.map');
    var ctx = canvas[0].getContext('2d');

    // Встановлюємо кольор та ширину лінії
    ctx.strokeStyle = '#d7d7d7';
    ctx.lineWidth = 2;

    var startX = startx*map.width()/100;
    var startY = starty*map.height()/100;
    var endX = endx*map.width()/100;
    var endY = endy*map.height()/100;
    var bend = endY-150;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(endX, bend, endX, endY);
    ctx.stroke();
}

// стираємо лінії та анімації пристроїв
function clearCanvas () {
    setTimeout(() => {
    const canvas = $('#myCanvas');
    var ctx = canvas[0].getContext('2d');
    ctx.clearRect(0, 0, 10000, 10000);
    $('.tech__laptop--overlay').remove();
    $('.tech__smartphone--overlay').remove();
    $('.tech__phone--overlay').remove();
    }, 2000);
    
}

Element.prototype.drawTextBox = function(region) {
    let TextBoxHtml = `
    <div class="text__box ${region}">
        <p class="text__info"></p>
    </div>`;
    $('.map').append(TextBoxHtml);
    $('.text__box').last().css({
        left: this.x,
        top: this.y
    });
}

// функція, яка перебирає по черзі усі обрані регіони з масиву 
// та визначає для кожного найближчий сервер, промальовує лінії до юзерів, 
// виводить результати Latency і Time, а також сортує фінальний масив за кількістю юзерів
function connectRegionToServer (userList, serverList, callback) {
    let count = 0;

    for (const user of userList) {
        getNearestServer(user, serverList);
        let usersCount = user.usersAmount;
        let latency = firstResults.latency;
        let time = latency*10;
        let addClass = user.name;
        let userLeft = user.coordinates.left;
        let userTop = user.coordinates.top-15;
        let regionNameDraw = user.nameDraw;

        if (usersCount == 1) {
            new Line().drawLine(firstResults.lineStart.x, firstResults.lineStart.y, user.lineEnds.laptop.x, user.lineEnds.laptop.y);
            
            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '19.5%',
            'left': '10%',
            'width': '81%',
            'height': '47%',
            'border-radius': '7%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });              
        } else if (usersCount == 2) {
            new Line().drawLine(firstResults.lineStart.x, firstResults.lineStart.y, user.lineEnds.laptop.x, user.lineEnds.laptop.y);
            new Line().drawLine(firstResults.lineStart.x, firstResults.lineStart.y, user.lineEnds.smartphone.x, user.lineEnds.smartphone.y);

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '19.5%',
            'left': '10%',
            'width': '81%',
            'height': '47%',
            'border-radius': '7%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '14.5%',
            'left': '26.5%',
            'width': '47%',
            'height': '65%',
            'border-radius': '5%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });  
        } else if (usersCount == 3) {
            new Line().drawLine(firstResults.lineStart.x, firstResults.lineStart.y, user.lineEnds.laptop.x, user.lineEnds.laptop.y);
            new Line().drawLine(firstResults.lineStart.x, firstResults.lineStart.y, user.lineEnds.smartphone.x, user.lineEnds.smartphone.y);
            new Line().drawLine(firstResults.lineStart.x, firstResults.lineStart.y, user.lineEnds.phone.x, user.lineEnds.phone.y);

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '19.5%',
            'left': '10%',
            'width': '81%',
            'height': '47%',
            'border-radius': '7%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '14.5%',
            'left': '26.5%',
            'width': '47%',
            'height': '65%',
            'border-radius': '5%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });

            $(`.tech__phone.${addClass}`).append('<div class="tech__phone--overlay"></div>');
            $(`.${addClass} .tech__phone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '26.5%',
            'left': '34%',
            'width': '34%',
            'height': '20%',
            'border-radius': '15%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });
        }

        new Element (userLeft+'%', userTop+'%').drawTextBox(addClass);
        $(`.${addClass} .text__info`).html(`Latency: ${Math.trunc(latency)}`)
        setTimeout(() => {
            $(`.${addClass} .text__info`).html(`Time: ${Math.trunc(time/23)} sec`);
            count++;
            if (count === userList.length) {
                callback();
            }
        }, time);

        if (!Array.isArray(byteCloudResults.regions)) {
            byteCloudResults.regions = [];
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            byteCloudResults.regions.push(regionObj);
        } else {
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            byteCloudResults.regions.push(regionObj);
        }

    }

    byteCloudResults.regions.sort(function(a, b) {
        return b.users - a.users;
    });
}

// робить все те саме тільки виключно для основного серверу
function connectRegionToMainServer (userList, serverList, callback) {
    let count = 0;

    for (const user of userList) {
        getNearestServer(user, serverList);
        let usersCount = user.usersAmount;
        let latency = firstResults.mainServer.latency;
        let time = latency*10;
        let addClass = user.name;
        let userLeft = user.coordinates.left;
        let userTop = user.coordinates.top-15;
        let regionNameDraw = user.nameDraw;

        if (usersCount == 1) {
            new Line().drawLine(firstResults.mainServer.lineStart.x, firstResults.mainServer.lineStart.y, user.lineEnds.laptop.x, user.lineEnds.laptop.y);
            
            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '19.5%',
            'left': '10%',
            'width': '81%',
            'height': '47%',
            'border-radius': '7%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });              
        } else if (usersCount == 2) {
            new Line().drawLine(firstResults.mainServer.lineStart.x, firstResults.mainServer.lineStart.y, user.lineEnds.laptop.x, user.lineEnds.laptop.y);
            new Line().drawLine(firstResults.mainServer.lineStart.x, firstResults.mainServer.lineStart.y, user.lineEnds.smartphone.x, user.lineEnds.smartphone.y);

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '19.5%',
            'left': '10%',
            'width': '81%',
            'height': '47%',
            'border-radius': '7%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '14.5%',
            'left': '26.5%',
            'width': '47%',
            'height': '65%',
            'border-radius': '5%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });  
        } else if (usersCount == 3) {
            new Line().drawLine(firstResults.mainServer.lineStart.x, firstResults.mainServer.lineStart.y, user.lineEnds.laptop.x, user.lineEnds.laptop.y);
            new Line().drawLine(firstResults.mainServer.lineStart.x, firstResults.mainServer.lineStart.y, user.lineEnds.smartphone.x, user.lineEnds.smartphone.y);
            new Line().drawLine(firstResults.mainServer.lineStart.x, firstResults.mainServer.lineStart.y, user.lineEnds.phone.x, user.lineEnds.phone.y);

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '19.5%',
            'left': '10%',
            'width': '81%',
            'height': '47%',
            'border-radius': '7%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '14.5%',
            'left': '26.5%',
            'width': '47%',
            'height': '65%',
            'border-radius': '5%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });

            $(`.tech__phone.${addClass}`).append('<div class="tech__phone--overlay"></div>');
            $(`.${addClass} .tech__phone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '26.5%',
            'left': '34%',
            'width': '34%',
            'height': '20%',
            'border-radius': '15%',
            'background': 'linear-gradient(to right, blue 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            });
        }

        new Element (userLeft+'%', userTop+'%').drawTextBox(addClass);
        $(`.${addClass} .text__info`).html(`Latency: ${Math.trunc(latency)}`)
        setTimeout(() => {
            $(`.${addClass} .text__info`).html(`Time: ${Math.trunc(time/23)} sec`);
            count++;
            if (count === userList.length) {
                callback();
            }
        }, time);

        if (!Array.isArray(objectStorageResult.regions)) {
            objectStorageResult.regions = [];
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            objectStorageResult.regions.push(regionObj);
        } else {
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            objectStorageResult.regions.push(regionObj);
        }

        delete firstResults.mainServer;

    }

    objectStorageResult.regions.sort(function(a, b) {
        return b.users - a.users;
    });
}

// Відмальовує результат по регіону
function drawResults (resultObject, boxClass) {

    let videoQuality;

    if (resultObject.regionTime <= 60) {
        videoQuality = '4K/2160p Ultra HD';
    } else if (resultObject.regionTime <= 90 && resultObject.regionTime > 60) {
        videoQuality = '4K/2160p Ultra HD';
    } else if (resultObject.regionTime <= 110 && resultObject.regionTime > 90) {
        videoQuality = '1080p Full HD';
    } else if (resultObject.regionTime <= 130 && resultObject.regionTime >110) {
        videoQuality = '750p';
    } else if (resultObject.regionTime > 130) {
        videoQuality = '480p';
    }

    let resultBoxHtml = `
    <div class="result__box ${resultObject.regionClass}">
        <div class="result__box__top">
            <p class="region__name">${resultObject.regionName}</p>
            <div class="stars">
                <span class="star five">&#9733;</span>
                <span class="star four">&#9733;</span>
                <span class="star three">&#9733;</span>
                <span class="star two">&#9733;</span>
                <span class="star one">&#9733;</span>
            </div>
        </div>
        <div class="result__box__bottom">
            <div class="result__latency">
                Latency <br> ${resultObject.regionLatency}
            </div>
            <div class="result__time">
                Download time <br> ${resultObject.regionTime} sec
            </div>
            <div class="result__video">
                Video streaming <br> ${videoQuality}
            </div>
        </div>
    </div>`;
    $(`.${boxClass}`).append(resultBoxHtml);

    if (resultObject.regionTime <= 60) {
        $(`.${resultObject.regionClass} .result__box__top .stars .one, 
        .${resultObject.regionClass} .result__box__top .stars .two, 
        .${resultObject.regionClass} .result__box__top .stars .three, 
        .${resultObject.regionClass} .result__box__top .stars .four, 
        .${resultObject.regionClass} .result__box__top .stars .five`).addClass('yellow-text');
    } else if (resultObject.regionTime <= 90 && resultObject.regionTime > 60) {
        $(`.${resultObject.regionClass} .one, 
        .${resultObject.regionClass} .two, 
        .${resultObject.regionClass} .three, 
        .${resultObject.regionClass} .four`).addClass('yellow-text');
    } else if (resultObject.regionTime <= 110 && resultObject.regionTime > 90) {
        $(`.${resultObject.regionClass} .one, 
        .${resultObject.regionClass} .two, 
        .${resultObject.regionClass} .three`).addClass('yellow-text');
    } else if (resultObject.regionTime <= 130 && resultObject.regionTime >110) {
        $(`.${resultObject.regionClass} .one, 
        .${resultObject.regionClass} .two`).addClass('yellow-text');
    } else if (resultObject.regionTime > 130) {
        $(`.${resultObject.regionClass} .one`).addClass('yellow-text');
    }
}

// відмальовує усі результати в таблицю
function drawAllResults (regionsResults, boxClass) {
    for (const region of regionsResults) {
        drawResults (region, boxClass);
    }
}

Element.prototype.drawServerChoose = function(region) {
    let serverChooseHtml = `
    <div class="data__choose ${region.regionName}">
        <img src="imgs/circle_empty.png" alt="">
        <img src="imgs/circle_filled.png" alt="" class='circle__filled'>
    </div>`;
    $('.map').append(serverChooseHtml);
    $('.data__choose').last().css({
        left: this.x,
        top: this.y
    });
    $('#text').html('<p>Where is your data? Choose one spot for Object Storage</p>')
    $(`.${region.regionName} .circle__filled`).click(function() {
        if (!Array.isArray(serverChoices.regions)) {
            serverChoices.regions = [];
            const regionObj = {
                regionName: `${region.regionName}`,
                coordinates: {
                    left: `${region.coordinates.left}`,
                    top: `${region.coordinates.top}`
                },
                lineStart: {
                    x: `${region.lineStart.x}`,
                    y: `${region.lineStart.y}`
                }
            };
            serverChoices.regions.push(regionObj);
            new Element (region.location.left, region.location.top).drawServer(`${region.regionName}`);
            $('#text').html('<p>Choose minimum two additional spots for ByteCloud and press <span class="button__start__check blocked">Start</span></p>');
          } else {
            const regionObj = {
                regionName: `${region.regionName}`,
                coordinates: {
                    left: `${region.coordinates.left}`,
                    top: `${region.coordinates.top}`
                },
                lineStart: {
                    x: `${region.lineStart.x}`,
                    y: `${region.lineStart.y}`
                }
            };
            serverChoices.regions.push(regionObj);
            new Element (region.location.left, region.location.top).drawCloudServer(`${region.regionName}`);
            if (serverChoices.regions.length == 3) {
                $('.button__start__check').removeClass('blocked');
                $('.button__start__check').click(function() {
                    $('.data__choose').css({'display': 'none'});
                    $('#text').html('<p></p>');
                    connectRegionToServer(userChoices.regionsNames, serverChoices.regions, function() {
                        clearCanvas();  
                        setTimeout(() => {
                            connectRegionToMainServer(userChoices.regionsNames, serverChoices.regions, function() {
                                setTimeout(() => {
                                    $('.results__container').css({
                                        'z-index':3,
                                        'display':'flex'});
                                    drawAllResults (byteCloudResults.regions, "result__container__byteCloud");
                                    drawAllResults (objectStorageResult.regions, "result__container__objectStorage");
                                    $('#text').html('<p>Do you want to <a href="">start again?</a></p>');
                                }, 1500);
                            });
                        }, 2000);
                    });
                });
            } else if (serverChoices.regions.length >= 4) {
                $('.data__choose').css({'display': 'none'});
                $('#text').html('<p></p>');
                connectRegionToServer(userChoices.regionsNames, serverChoices.regions, function() {
                    clearCanvas();  
                    setTimeout(() => {
                        connectRegionToMainServer(userChoices.regionsNames, serverChoices.regions, function() {
                            setTimeout(() => {
                                $('.results__container').css({
                                    'z-index':3,
                                    'display':'flex'});
                                drawAllResults (byteCloudResults.regions, "result__container__byteCloud");
                                drawAllResults (objectStorageResult.regions, "result__container__objectStorage");
                                $('#text').html('<p>Do you want to <a href="">start again?</a></p>');
                            }, 1500);
                        });
                    }, 2000);
                });
               

            }
          }
        $(this).parent('.data__choose').css('display', 'none');
    });
}

// робить перехід до другого кроку (вибір  серверів)
let secondStep = function () {
    $('.figures__people').css('display', 'none');
    new Element (eastUsaServer.location.left, eastUsaServer.location.top).drawServerChoose(eastUsaServer);
    new Element (westUsaServer.location.left, westUsaServer.location.top).drawServerChoose(westUsaServer);
    new Element (germanyServer.location.left, germanyServer.location.top).drawServerChoose(germanyServer);
    new Element (singaporeServer.location.left, singaporeServer.location.top).drawServerChoose(singaporeServer);  
}

Element.prototype.drawUser = function(region) {
    let usersHtml = `
    <div class="figures__people ${region.regionName}">
        <div class="puple__big">
            <img src="imgs/man_empty.png" alt="" class='empty'>
            <img src="imgs/man_filled.png" alt="" class='filled'>
        </div>
        <div class="puple__medium">
            <img src="imgs/man_empty.png" alt="" class='empty'>
            <img src="imgs/man_filled.png" alt="" class='filled'>
        </div>
        <div class="puple__small">
            <img src="imgs/man_empty.png" alt="" class='empty'>
            <img src="imgs/man_filled.png" alt="" class='filled'>
        </div>
    </div>`;
    $('.map').append(usersHtml);
    $('.figures__people').last().css({
        left: this.x,
        top: this.y
    });

    $(`.${region.regionName} .puple__small`).click(function() {
        new Element (region.laptop.left, region.laptop.top).drawLaptop(region.regionName);
        $(this).parent('.figures__people').css('display', 'none');
        if (!Array.isArray(userChoices.regionsNames)) {
            userChoices.regionsNames = [];
        }
        
        const regionObj = {
        name: `${region.regionName}`,
        nameDraw: `${region.regionNameDraw}`,
        usersAmount: 1,
        coordinates: {
            left: `${region.coordinates.left}`,
            top: `${region.coordinates.top}`
        },
        latency: {
            'eastUsaServer': {
                time: `${region.latency.eastUsaServer.time}`
            },
            'westUsaServer': {
                time: `${region.latency.westUsaServer.time}`
            },
            'germanyServer': {
                time: `${region.latency.germanyServer.time}`
            },
            'singaporeServer': {
                time: `${region.latency.singaporeServer.time}`
            }
    
        },
        lineEnds:{
            laptop: {
                x: `${region.lineEnds.laptop.x}`,
                y: `${region.lineEnds.laptop.y}`
            }
        }
        };
        
        userChoices.regionsNames.push(regionObj);
        if (!steps['peopleClick']) {
            steps['peopleClick'] = {};
            steps.peopleClick.count = 1;
            $('#text').html('<p>Where are your users? Choose the number for every region. <span class="button__next__people">Next</span></p>')
            $('.button__next__people').click(function() {
                secondStep();
            });
        } else {
            steps.peopleClick.count += 1;
            if (steps.peopleClick.count == 5) {
                secondStep();
            }
        }
    });
    $(`.${region.regionName} .puple__medium`).click(function() {
        new Element (region.laptop.left, region.laptop.top).drawLaptop(region.regionName);
        new Element (region.smartphone.left, region.smartphone.top).drawSmartphone(region.regionName);
        $(this).parent('.figures__people').css('display', 'none');
        if (!Array.isArray(userChoices.regionsNames)) {
            userChoices.regionsNames = [];
        }
        
        const regionObj = {
        name: `${region.regionName}`,
        nameDraw: `${region.regionNameDraw}`,
        usersAmount: 2,
        coordinates: {
            left: `${region.coordinates.left}`,
            top: `${region.coordinates.top}`
        },
        latency: {
            'eastUsaServer': {
                time: `${region.latency.eastUsaServer.time}`
            },
            'westUsaServer': {
                time: `${region.latency.westUsaServer.time}`
            },
            'germanyServer': {
                time: `${region.latency.germanyServer.time}`
            },
            'singaporeServer': {
                time: `${region.latency.singaporeServer.time}`
            }
    
        },
        lineEnds:{
            laptop: {
                x: `${region.lineEnds.laptop.x}`,
                y: `${region.lineEnds.laptop.y}`
            },
            smartphone: {
                x: `${region.lineEnds.smartphone.x}`,
                y: `${region.lineEnds.smartphone.y}`
            }
        }
        };
        
        userChoices.regionsNames.push(regionObj);
        if (!steps['peopleClick']) {
            steps['peopleClick'] = {};
            steps.peopleClick.count = 1;
            $('#text').html('<p>Where are your users? Choose the number for every region. <span class="button__next__people">Next</span></p>')
            $('.button__next__people').click(function() {
                secondStep();
            });
        } else {
            steps.peopleClick.count += 1;
            if (steps.peopleClick.count == 5) {
                secondStep();
            }
        }
    });
    $(`.${region.regionName} .puple__big`).click(function() {
        new Element (region.laptop.left, region.laptop.top).drawLaptop(region.regionName);
        new Element (region.smartphone.left, region.smartphone.top).drawSmartphone(region.regionName);
        new Element (region.phone.left, region.phone.top).drawPhone(region.regionName);
        $(this).parent('.figures__people').css('display', 'none');
        if (!Array.isArray(userChoices.regionsNames)) {
            userChoices.regionsNames = [];
        }
        
        const regionObj = {
        name: `${region.regionName}`,
        nameDraw: `${region.regionNameDraw}`,
        usersAmount: 3,
        coordinates: {
            left: `${region.coordinates.left}`,
            top: `${region.coordinates.top}`
        },
        latency: {
            'eastUsaServer': {
                time: `${region.latency.eastUsaServer.time}`
            },
            'westUsaServer': {
                time: `${region.latency.westUsaServer.time}`
            },
            'germanyServer': {
                time: `${region.latency.germanyServer.time}`
            },
            'singaporeServer': {
                time: `${region.latency.singaporeServer.time}`
            }
    
        },
        lineEnds:{
            laptop: {
                x: `${region.lineEnds.laptop.x}`,
                y: `${region.lineEnds.laptop.y}`
            },
            smartphone: {
                x: `${region.lineEnds.smartphone.x}`,
                y: `${region.lineEnds.smartphone.y}`
            },
            phone: {
                x: `${region.lineEnds.phone.x}`,
                y: `${region.lineEnds.phone.y}`
            }
        }
        };
        
        userChoices.regionsNames.push(regionObj);
        if (!steps['peopleClick']) {
            steps['peopleClick'] = {};
            steps.peopleClick.count = 1;
            $('#text').html('<p>Where are your users? Choose the number for every region. <span class="button__next__people">Next</span></p>')
            $('.button__next__people').click(function() {
                secondStep();
            });
        } else {
            steps.peopleClick.count += 1;
            if (steps.peopleClick.count == 5) {
                secondStep();
            }
        }
    });
}

new Element (northAmericaCoordinates.users.left, northAmericaCoordinates.users.top).drawUser(northAmericaCoordinates);
new Element (southAmericaCoordinates.users.left, southAmericaCoordinates.users.top).drawUser(southAmericaCoordinates);
new Element (europeCoordinates.users.left, europeCoordinates.users.top).drawUser(europeCoordinates);
new Element (asiaCoordinates.users.left, asiaCoordinates.users.top).drawUser(asiaCoordinates);
new Element (oceaniaCoordinates.users.left, oceaniaCoordinates.users.top).drawUser(oceaniaCoordinates);








  