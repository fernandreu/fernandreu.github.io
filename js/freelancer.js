/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


jssor_slider_starter = function (containerId, maxWidth) {
    $(document).ready(function ($) {

        const _SlideshowTransitions = [
            //Fade
            {$Duration: 1200, $Opacity: 2}
        ];

        const options = {
            $AutoPlay: false,
            $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
            $AutoPlayInterval: 5000,
            $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
            $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
            $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
            $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
            },

            $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 10                                   //[Optional] Vertical space between each item in pixel, default value is 0
            },

            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
            }
        };
        const jssor_slider1 = new $JssorSlider$(containerId, options);

        function ScaleSlider() {
            const parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parentWidth)
                jssor_slider1.$ScaleWidth(Math.min(parentWidth, maxWidth));
            else
                window.setTimeout(ScaleSlider, 30);
        }
        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
    });
};


/**
 * This is the array that holds all the data shown for each project
 */
const projects = [
    {
        title: 'Fractals++',
        subtitle: 'Generate fractal pictures based on complex functions and root finding algorithms.',
        folder: 'Fractals',
        framework: 'Qt Widgets, C++',
        dateCreated: '2013',
        associatedFile: 'Fractals++.zip',
        pics: 5,
        picWidth: 702,
        picHeight: 640,
        description: `
            Specify a complex function and draw the fractal associated with it. Each point on the screen represents a
            two-dimensional coordinate on the complex plane. The Newton's method in evaluated on every point and a color
            is selected depending on the solution obtained.
            
            Different coloring options allow to obtain a smooth, nice-looking fractal for every function. Colors also
            help to determine the zones with higher convergence, and the exact location of the function roots as well.
            
            The image can also be inverted, evolving into brighter colors as the number of iterations increases. The
            Newton's coefficient of convergence can be modified to obtain rotating images.
            
            Almost any function can be tested to provide different types of fractals, including trigonometrical
            functions, divisions, exponentials and logarithms.`,
    },
    {
        title: 'Graph Digitizer',
        subtitle: 'Extract the numeric coordinates of a two-dimensional graph in image format.',
        folder: 'GraphDigitizer',
        framework: 'WPF, C#',
        dateCreated: '2012',
        associatedFile: 'GraphDigitizer.exe',
        pics: 4,
        picWidth: 763,
        picHeight: 548,
        description: `
            Once the axes of the graph are defined, the program will translate screen coordinates into graph
            coordinates. The axes can also be be logarithmic.
            
            The points can be easily copied into the clipboard and pasted in other programs, such as text files or
            spreadsheets. The program also supports graphs that are not perfectly square (e.g. from an angled
            photograph).`,
    },
    {
        title: 'Harmonica',
        subtitle: 'Play, edit or export songs while you get familiar with the harmonica.',
        folder: 'Harmonica',
        framework: 'Android, Java',
        dateCreated: '2013',
        associatedFile: 'Harmonica.apk',
        pics: 5,
        picWidth: 800,
        picHeight: 638,
        description: `
            Visualize different types of interactive harmonicas that will play each note when you tap the corresponding
            keys.
            
            Download songs from the online library and play, edit or export them both as a MIDI audio or as a music
            sheet, with multiple settings to customise them. Display the tabs of the selected harmonica in the music
            sheet for a faster learning curve.
            
            The songs are written in the standard ABC format that is easy to understand and human-readable. The
            visualization engine has been adapted from the Java project <a href="http://abcj.ganderband.com">ABCJ</a>.`,
    },
    {
        title: 'Snake',
        subtitle: 'A multiplayer remake of the classic Nokia game. Survive against other snakes for as long as you can.',
        folder: 'Snake',
        framework: 'Game Maker 8',
        dateCreated: '2008',
        associatedFile: 'Snake.exe',
        pics: 5,
        picWidth: 640,
        picHeight: 480,
        description: `
            There are different power-ups that can transform the snake. When only one snake is still alive, each player
            receives a score depending on the other they died. The game finishes when one of the players reaches a score
            limit.
            
            The game can be played by up to 4 players in the same computer. Many options, such as the score limit and
            the size of the game, can be defined before playing. A maximum of 6 snakes (including AI) can play on each
            game.`,
    },
    {
        title: 'Soulhunter',
        subtitle: 'Catching up with people around has never been funnier.',
        folder: 'Soulhunter',
        framework: 'iOS, Swift',
        dateCreated: '2018',
        associatedLink: 'https://www.soulhunterapp.com',
        pics: 3,
        picWidth: 621,
        picHeight: 552,
        description: `
            Have you ever been trying to get in touch with someone you know by sight from your college, your working
            place or from your favourite venue but you never find the right moment or way of doing it?
            
            Are you just interested in getting to know new people?
            
            Soulhunter allows you to catch up with new people around you avoiding any awkward situation.`,
    },
    {
        title: 'Custom UI Editor',
        subtitle: 'Edit UI files for Microsoft Office documents easily',
        folder: 'CustomUI',
        framework: 'WPF, C#',
        dateCreated: '2018',
        associatedLink: 'https://github.com/fernandreu/wpf-custom-ui-editor',
        pics: 4,
        picWidth: 839,
        picHeight: 576,
        description: `
            This project is a migration from Windows Forms to WPF of the original <a
            href="https://github.com/OfficeDev/office-custom-ui-editor/">project</a> by Microsoft, taking advantage of
            the MVVM pattern to produce a more streamlined UI, and adding extra features.

            The main feature added is the use of a <a
            href="https://github.com/jacobslusser/ScintillaNET">ScintillaNET</a> text editor with advanced capabilities,
            such as line numbering and quick syntax highlighting. Several editor settings, such as font size and colors,
            can be customized.
            
            In addition, opened Office documents can now be reloaded before applying any changes on save; this avoids
            the possible mistake of losing external changes in one of those documents.
            
            Other features added are: a <a
            href="https://www.codeproject.com/Articles/23731/RecentFileList-a-WPF-MRU">recent file list</a> and the
            possibility of having more than one Office document open simultaneously.
            
            The source code of this project is available on GitHub: <a
            href="https://github.com/fernandreu/wpf-custom-ui-editor">https://github.com/fernandreu/wpf-custom-ui-editor</a>`,
    },
    {
        title: 'Dice Wars',
        subtitle: 'A remake of the original Risk-style <a href="https://www.gamedesign.jp/flash/dice/dice.html">DiceWars</a> game with extra functionality.',
        folder: 'DiceWars',
        framework: 'Qt Quick, C++',
        dateCreated: '2015',
        associatedLink: 'https://github.com/fernandreu/dice-wars',
        pics: 5,
        picWidth: 1146,
        picHeight: 808,
        description: `
            Select the number of players and whether they will be AI controlled or not. Each player will start in a
            hexagonal map with a given amount of dice distributed randomly across his territories.

            On each turn, a player can attack neighbour territories. The dice on each territory will be thrown to
            determine the score. If the player succeeds, all the dice but one will move to the attacked territory. If
            the player fails, all the dice but one will be lost.

            At the end of each turn, each player will receive an amount of dice depending on how many connected
            territories he has. The dice will be distributed randomly across all his territories.

            The hexagonal grid is randomly generated by a procedural algorithm that ensures variety and fun on each
            game. No game will be identical to another.`,
    },
];
projects.sort(function(a, b) { return b.dateCreated - a.dateCreated; });


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Adds the thumbnail corresponding to the given project to the portfolio section
 * @param projects The array of projects to insert
 * @param destination The HTML element which will hold the thumbnails (it should be the contents of the portfolio section)
 */
function addThumbnails(projects, destination) {

    let div;
    for (let i = 0; i < projects.length; ++i) {
        if (i % 3 === 0) {
            div = document.createElement('div');
            div.className = 'row';
        }
        div.innerHTML += `
        <div class="col-sm-4 portfolio-item">
            <a href="#project${projects[i].folder}" class="portfolio-link" data-toggle="modal">
                <div class="caption">
                    <div class="caption-content thumbnail-text">
                        <p>${projects[i].title}</p>
                        <p>${projects[i].framework}</p>
                        <p>${projects[i].dateCreated}</p>
                        <i class="fa fa-search-plus fa-2x"></i>
                    </div>
                </div>
                <img src="Projects/${projects[i].folder}/Screenshot${getRandomInt(1, projects[i].pics)}.png" class="img-responsive" alt="">
            </a>
        </div>`;
        if (i % 3 === 2 || i === projects.length - 1) {
            destination.appendChild(div);
        }
    }
}


/**
 * Adds the modal corresponding to the given project
 * @param project The project to insert the modal for
 * @param destination The HTML element which will hold the modal
 */
function addModal(project, destination) {

    // Split the description fields in several paragraphs
    let description = '';
    let lines = project.description.split('\n');
    // Do a trim first of all the parts first
    for (let i = 0; i < lines.length; ++i) {
        lines[i] = lines[i].trim();
    }
    // Now, join them back, and split them, but this time looking for full blank lines to determine the separation
    // between paragraphs
    lines = lines.join('\n').split('\n\n');
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i];
        if (line.length === 0) {
            continue;
        }
        description += `<p align="justify"><small>${line}</small></p>`
    }

    // Add the corresponding buttons for download / project website
    let actionSection = '';
    if (project.associatedFile !== undefined) {
        actionSection += `
        <div class="col-lg-8 col-lg-offset-2 text-center">
            <a href="Projects/${project.folder}/${project.associatedFile}" class="btn btn-lg btn-outline">
                <i class="fa fa-download"></i> Download
            </a>
        </div>`;
    }
    if (project.associatedLink !== undefined) {
        const icon = project.associatedLink.indexOf('https://github.com') !== -1 ? '<i class="fa fa-github"></i> GitHub Page' : '<i class="fa fa-globe"></i> Project Website';
        actionSection += `
        <div class="col-lg-8 col-lg-offset-2 text-center">
            <a href="${project.associatedLink}" class="btn btn-lg btn-outline">
                ${icon}
            </a>
        </div>`;
    }

    // Add the pictures to the slider
    let pictures = '';
    for (let i = 1; i <= project.pics; ++i) {
        pictures += `<div><img u="image" alt="Screenshot ${i}" src="Projects/${project.folder}/Screenshot${i}.png"></div>`
    }

    if (project.picHeight > 480) {
        project.picWidth *= 480 / project.picHeight;
        project.picHeight = 480;
    }

    let div = document.createElement('div');
    div.className = 'portfolio-modal modal fade';
    div.id = `project${project.folder}`;
    div.tabIndex = -1;
    div.setAttribute('role', 'dialog');
    div.setAttribute('aria-hidden', 'true');
    // <div class="portfolio-modal modal fade" id="${project.folder}" tabindex="-1" role="dialog" aria-hidden="true">
    div.innerHTML = `
        <div data-dismiss="modal"></div>
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>${project.title}</h2>
                            <hr class="star-primary">
                            <div id="slider${project.folder}_container" class="img-centered" style="position: relative; top: 0; width: ${project.picWidth}px; height: ${project.picHeight}px; overflow: hidden; ">
                                <div u="slides" style="cursor: move; position: absolute; left: 0; top: 0; width: ${project.picWidth}px; height: ${project.picHeight}px; overflow: hidden;">
                                    ${pictures}
                                </div>
                                <div u="navigator" class="jssorb01" style="bottom: 32px; left: 50%; margin-left: -${17 * project.pics - 5}px;"> <!-- Formula is: 24*n/2 + 10*(n-1)/2 = 17n-5 -->
                                    <div u="prototype"></div>
                                </div>
                                <span u="arrowleft" class="jssora09l" style="top: 50%; margin-top: -25px; left: 10px;"></span>
                                <span u="arrowright" class="jssora09r" style="top: 50%; margin-top: -25px; right: 10px;"></span>
                            </div>
                            <p>${project.subtitle}</p>
                            ${description}
                            <ul class="list-inline item-details">
                                <li>Framework:
                                    <strong>${project.framework}</strong>
                                </li>
                                <li>
                                    Date: <strong>${project.dateCreated}</strong>
                                </li>
                            </ul>
                            ${actionSection}
                            <br>
                            <button type="button" class="btn btn-default" style="margin-top:20px;" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    destination.appendChild(div);
    jssor_slider_starter(`slider${project.folder}_container`, project.picWidth);
}

$(document).ready(function() {
    addThumbnails(projects, document.getElementById('portfolio-contents'));
    for (let i = 0; i < projects.length; ++i) {
        addModal(projects[i], document.body);
    }
});
