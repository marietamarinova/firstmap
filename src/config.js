var config = {
    style: 'mapbox://styles/marietam17/clg00ok5t004c01t79zi0jx1e',
    accessToken: 'pk.eyJ1IjoibWFyaWV0YW0xNyIsImEiOiJjbGJvMXc1aXMwMXR5M3BzNXdhdmNibThuIn0.Zhz04sNiYxjsfDsjn2x49A',
    showMarkers: true,
    markerColor: 'red',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'London Marathon: More than Just a Race',
    subtitle: '26.2 miles, countless stories: the people who run for good causes',
    byline: 'By Marieta Marinova',
    footer: 'Source: created by Marieta Marinova  <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
    
        {
            id: 'first-marker',
            alignment: 'left',
            hidden: false,
            title: 'The starting line - Blackheath',
            image: 'https://live.staticflickr.com/3066/4553683031_011e9b8636_b.jpg',
            description: 'This Sunday, the streets of London are going to be filled with the sound of pounding feet and cheering crowds as thousands of runners take on the iconic 26.2-mile course of the London Marathon. But this is no ordinary race. For many of those taking part, it is a chance to make a difference, to support a cause close to their hearts, and to raise vital funds for charities around the world. As we prepare to watch the drama unfold, it is worth remembering that behind every mile marker, there is a story. Whether it is a runner who is battled back from injury, a first-time marathoner overcoming nerves and doubts, or someone running in memory of a loved one, each and every one of them has a reason for taking on this incredible challenge. Lets take a closer look at some of the people running the London Marathon and the charities they are supporting while exploring the route and highlighting some of the iconic landmarks and mile markers along the way.',
            location: {
                center: [0.006860154197649132, 51.47461604396294],
                zoom: 13,
                pitch: 6,
                bearing: 4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    
        {
            id: 'second-marker',
            alignment: 'right',
            hidden: false,
            title: 'First 7 miles with first time marathon runner Emily',
            image: 'https://images.jg-cdn.com/image/a6e9e062-7e76-45e8-8ebd-69dd788cb7f0.jpg',
            description: '“I am not a runner in the slightest. But I have watched the London Marathon a few times and the atmosphere is amazing, and this year I wanted to be on the course instead of watching from the side-line. I am running for the Stroke Association in memory of my Nan, who very sadly and suddenly died following a stroke in February 2021. This is my first time running a marathon! I started training back in November of last year. I’ve never run this distance before, so I don’t have a record to beat, but I am expecting to be around 5 hours. I picked up a groin injury a few weeks ago which has unfortunately scuppered my training plans, but I am going to do my best to cross that finish line.”',
            location: {
                center: [-0.009847, 51.482739],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-marker',
            alignment: 'left',
            hidden: false,
            title: '12 miles – Tower Bridge & Lindsay who flew all the way from the States for the "special 26.2"',
            image: 'https://pbs.twimg.com/media/FuExc0fXoAEIN_7?format=jpg&name=large',
            description: '“I became passionate about running because I love the healthy outlet it is for me and the way there is always a challenge to go after. I love the discipline it takes and working hard to achieve something on my own. I am running for Make A Wish UK! I love giving back and supporting others but especially kids. The stories are so touching and to see their smiles when the wish comes true is incredible. They are going through so much and deserve all of the great things. This is my first London Marathon, 52nd marathon overall.”',
            location: {
                center: [-0.07540065776686247, 51.505799482386436],
                zoom: 14.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five',
            alignment: 'right',
            hidden: false,
            title: 'Halfway - unfinished business for David',
            image: 'https://pbs.twimg.com/media/FqTeq-WXwAIi2KH?format=jpg&name=large',
            description: '“This is my second attempt at the marathon, my first was 10 years ago but I got injured halfway and had to walk the rest, so I always wanted to go back and do it again properly. Doing the marathon has given me a target and motivation to get out. I am running for St Raphael’s Hospice which is local to where I live. They looked after both my dad and my uncle in the last few days of their lives and the service they provided was fantastic at a really tough time for the family. I have always been a keen participant in sports, mainly football and boxing but as part of training I’ve always had to run but I wouldn’t call myself a runner. Since I’ve started my training I have really enjoyed getting out and it’s been great for my mental health too. It gives me time to think and reset.”',
            location: {
                center: [-0.067757, 51.509052],
                zoom: 13,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

       {
    id: 'fifth-marker',
    alignment: 'left',
    hidden: false,
    title: '16 miles & Luke who trained for 16 weeks ',
    image: 'https://pbs.twimg.com/media/FstWhVXXwAAzoMM?format=jpg&name=large',
    description: '“I started running seriously last year as a way to keep fit, I own a bakery so I must remember to exercise! I am running to raise money for Diabetes UK as my brother and sister-in-law both have type 1 diabetes. This will be my second marathon, but my first London marathon. I was hoping to beat my time of 5hr9min, but I have an ankle injury, so I am just aiming to finish.”',
    location: {
        center: [-0.019134460526036533, 51.48938994111224],
        zoom: 14,
        pitch: 40,
        bearing: 3
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
       },
    


{
    id: 'sixth-marker',
    alignment: 'right',
    hidden: false,
    title: '20 miles & a birthday wish for Elizabeth ',
    image: 'https://pbs.twimg.com/media/FtmzsoEX0AAoZ5Z?format=jpg&name=large',
    description: '“I am not a runner but I am determined to mark my 50th year by doing something different. I chose the Royal British Legion because I have served in all three services and this charity supports all three. It’s my first time running a marathon, previously the furthest I ran in an event is 13 miles. In recent years I have had some tough decisions to make which has led to me putting myself last, when I run I am putting myself first and I think prioritising you-time is so important. I have hit my fundraising target but would love to raise more if I can. I want people to know that actually taking part in something is possible, whoever you are. Putting on your trainers is the first step."',
    location: {
        center: [-0.017644789360735248, 51.507907492828906],
        zoom: 12,
        pitch: 60,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},

{
    id: 'seventh-marker',
    alignment: 'left',
    hidden: false,
    title: '23 miles for a clear mind with Maia',
    image: 'https://pbs.twimg.com/profile_images/1631215562947690496/V8-C-aVq_400x400.jpg',
    description: '“I started running with my dad when I was a child. It is always something we do together, just the 2 of us. I have been passionate about running since then. As I have got older it has helped my mental health massively and been my way of coping with the stresses of life!! I am running for ‘Mind’ the mental health charity. This is a charity is very important to me from personal experience. I suffered with an eating disorder as a teenager/early twenties. I tried to recover by myself, but it would always be 1 step forward 3 steps back. It wasn’t until I received support from mental health services that I truly got better. But the lack of money/resources in mental health services mean the entry criteria is extremely rigid/strict and a lot of people are left alone, with no psychological support. With the rise in mental health problems (including eating disorders) something needs to change.”',
    location: {
        center: [-0.0825621563677524, 51.51065838707468],
        zoom: 14,
        pitch: 35,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},

{
    id: 'eight-marker',
    alignment: 'right',
    hidden: false,
    title: 'The 26.2 victory lap with Victoria',
    image: 'https://images.jg-cdn.com/image/b97fa1f9-a985-4d59-ab70-e1fc788210f9.jpg',
    description: '“I’ve been a keen runner for about 7 years, I love it because it helps clear my head and gets me outside! I run with friends which keeps it fun. I’m raising money for Cardiac Risk in the Young. A very close friend of mine passed away unexpectedly last year and I wanted to raise money in his memory to help avoid the same thing happening to anybody else.”',
    location: {
        center: [-0.137718, 51.503388],
        zoom: 15,
        pitch: 9,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
]
}

