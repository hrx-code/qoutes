var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
		  
let qoutes=['"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.-Mark Twain','“I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.”','Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson','"It is during our darkest moments that we must focus to see the light." -Aristotle','"Love is a fire. But whether it is going to warm your heart or burn down your house, you can never tell." ~Joan Crawford ','"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"','"The way to get started is to quit talking and begin doing. -Walt Disney "','"Your time is limited, so dont waste it living someone else`s life. Don`t be trapped by dogma – which is living with the results of other people`s thinking." -Steve Jobs','"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt','"If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough." -Oprah Winfrey','"If you set your goals ridiculously high and it`s a failure, you will fail above everyone else`s success." -James Cameron','"Life is what happens when you`re busy making other plans." -John Lennon','"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa','"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt','"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead','"Don`t judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson'];

let textclass= document.querySelector(".childflexbox1");

myfunction = function(){
   textclass.querySelector("p").innerHTML = qoutes[Math.floor(Math.random()*(qoutes.length))];
    console.log("harsh");
	
}

let click = document.querySelector("button");
click.addEventListener('click', myfunction);


