import React from 'react';
import {Row, Col, Card} from 'react-bootstrap/';
import './BlogPost.css';

function FrontEndBlog() {
    return (
        <div>
            <Row xs={1} className="g-4 p-5">
                <Col>
                    <Card className="shadow p-4 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Part 5: One Quarter Down, Three To Go - Welcome to In-Person Coding</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">9/20/21 - 9/24/21</Card.Subtitle>
                            <Card.Text className="blog-post fw-normal">
                                Monday marked the first day we got to meet everyone in-person at Awesome Inc. HQ and what a difference that made. It's one thing for me to study and struggle
                                in the comfort of my own home but it's slightly more intimidating to have to do that surrounded by 15 other students and your instructors. I think the warm-ups were a good addition,
                                I had a tough time at first but I'm growing to like the CodeWars katas, I feel like I'm actually applying some of the concepts that I've been learning. Having quick access to the
                                instructors though, has been the biggest and most helpful change. Sometimes it's hard to put into words what issues you're having, not to mention the delay in communication when
                                we're strictly online. The intro to Bootstrap was really overwhelming but I'm glad we had a lecture to go over the basics so I could go into the projects with some foundation
                                instead of having to ask a lot of basic questions. If anything I feel like that's what holds me back the most, asking questions. I get really determined to figure out the answer on
                                my own, and my least favorite thing to hear when I ask a question is 'refer to the reading', because that's typically where I start off but somehow my brain struggles with fully
                                grasping a concept from <strong>just</strong> a reading. I feel like I learn best when I see examples of someone actively using an element and then I can go practice it having that
                                basic knowledge as well as experiment with it. I just get too frustrated when I'm thrown into something I know nothing about. Once again, Colt Steele's Web Developer Bootcamp on Udemy
                                has been a <strong>huge</strong> help for me grasping some of these basic JavaScript concepts so I can start developing an understanding of some of the more advanced stuff my instructors
                                are introducing, like state management and ASYNC. With the fast pace that we're getting all theses concepts thrown at us, it's been crucial for me to supplement my learning so I don't
                                have so many holes in my foundational understanding.
                                <br />
                                <br />
                                I would definitely like to learn more about JSON, it seems like a really useful tool when working with objects. Which is another thing I'd like to learn more about. Objects feels like such
                                a big concept that we're going to use a lot that I'd really like to be more comfortable with than I currently am. This weekend I'll be binging a lot of videos on Objects and practicing using
                                them so I can get caught up with where I feel everyone else is.
                                <br />
                                <br />
                                I'd say my 'Why' seems pretty typical but it's still a big motivator for me. I've worked in a couple of manufacturing plants and with my degree in chemistry, if I wanted to make a decent wage,
                                I'd have to continue working in manufacturing plants as a lab tech. Unfortunately, I hate working in factories, I hate shift work and I honestly don't even like chemistry. I've gotten no
                                fulfillment from any of my jobs so far and I'd love to be an industry like tech where the work environment is more in-line with my lifestyle. I know I'm a determined person, I got a degree
                                in Chemistry, even though I don't like it, just because I wanted to leave with some degree. If I can put my head down and do that, then I know I can put forth my best effort in something I
                                actually have an interest in.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow p-4 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Part 6: Clean Code and States</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">9/27/21 - 10/01/21</Card.Subtitle>
                            <Card.Text className="blog-post fw-normal">
                                This week helped me understand the moving parts of making applications more. I can see how it can get super complex, especially when you start throwing other variables in and
                                you want a more dynamic webpage.
                                <br />
                                <br />
                                Developing good code to me is about a few basic principles. Such as making sure it's maintainable, readable and flexible. I can see the difference between having code with a sloppier format and 
                                little to no comments to help explain what's going on and how frustrating that can be for a potential team setting where others will be viewing their code. So the importance of writing clean
                                code can't be understated and as I get better at understanding what I can do with JavaScript and get more efficient with it, it's definitely something I will keep in mind as I develop other
                                projects.
                                <br />
                                <br />
                                Being a good developer should be about being a good teammate, a good person and a motivated, proactive learner. Most likely you'll be working in a team environment and being able to work well
                                with others is obviously going to be a valuable trait to have and being a good person can help with that. Being motivated and proactive could help you stay on top of all the fastly changing 
                                technology and find more efficient solutions to old and new problems.
                                <br />
                                <br />
                                What I've noticed programmers hate doing is anything repetitive. Whether that be writing repetitive code or doing the same thing everyday. It looks like the programmer culture is very into making
                                things work for them and finding new ways to solve problems.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow p-4 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Part 7: The Importance of Pseudocode and learning MVC</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">10/04/21 - 10/08/21</Card.Subtitle>
                            <Card.Text className="blog-post fw-normal">
                                <strong>Technical Article</strong>
                                <br />
                                Pseudocode, in general, is known as an informal language somewhere between machine language and human language that helps people write algorithms for programs without
                                having to dive too deep into specifics. Pseudocode should be so non-specific, that anyone with general programming knowledge reading it should be able to easily interpret it for any
                                common programming language. This is where I believe the true power of pseudocode lies, being able to put your ideas into layman's terms can be difficult for some but it's a necessary
                                evil to be able to design in a team. Getting caught up in the logistics of syntax and other specific language rules can slow down the design process and aren't necessarily important
                                when you're in the earliest stages of problem solving and building algorithms. Knowing how to pseudocode is an important skill in programming and though everyone has their own style of
                                pseudocode, the most important thing is that it's approachable and easily understood, regardless of the person's preferred language.
                                <br />
                                <br />
                                Object-Oriented Programming (OOP) is a model in which you design a program based on objects rather than just functions. It's a much more efficient way of writing a program that's reusable and
                                easy to debug. Pseudocode is very important when designing an Object-Oriented Program since a lot of forethought needs to happen before any actual code is written. There are 4 pillars of OOP:
                                Inheritance - children inherit data and other behaviors from the parent, Encapsulation - keeping important information contained within the object and only selectively sharing other information,
                                Abstraction - taking complex methods and objects and simplifying them, and Polymorphism - designing methods to perform more than one task. To have a program properly incorporate all of these
                                principles, you need to pseudocode to have a general plan of attack to build your program around. Otherwise, you're very likely to run into problems you may not have thought about and it's much
                                more difficult to adjust your program layout after you've started writing code. Thinking about how to break up your ideas into classes and objects is crucial for good OOP pseudocode.
                                <br />
                                <br />
                                For me personally, pseudocde is a way to organize my thoughts. I start from the very beginning, literally the conception of the idea and break it down slowly but surely until I feel I have
                                an understanding of how I want to tackle the project. Once I get to that point, I can break it down even further into how I want to design the project and what elements I'll need in that design.
                                I feel once you get through that initial thought process and organize it, it's so much easier to figure out the objects/functions you need and want, as well as how you plan on connecting all of
                                them since you already have that broad overview of how you want the project to flow.
                                <br />
                                <br />
                                One design pattern is MVC, which is an efficient way to organize classes and objects in which every element has a role and responsibility and those roles and responsibilities can be divided into
                                3 areas. Model, View and Controller are 3 distinct areas of a program to help make the flow more efficient and readable. The Model area handles all the data stored, anytime something needs to be
                                referred to later, it will be stored in some object in the Model. The View handles rendering HTML and any other adjustments to the UI from a visual standpoint. It'll take data from the Model and
                                render based off of that. Lastly, the Controller handles all input. Anytime the user wants to interact with something from the View, the Controller will interpret it and send the data to the Model
                                to be stored and the View will be told about that new stored data from the Model and adjust accordingly. The MVC design pattern is a good starting point for pseudocode, it already has a format to
                                split objects and functions into and can be super helpful when using classes for OOP since splitting things by their roles/responsibilities naturally follows the 4 pillars of OOP. Of course eventually
                                the pseudocode will have to be translated but pre-emptively planning your program out with pseudocode has many benefits that'll ineveitably save you headaches in the long run when you jump into
                                actually coding your program.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow p-4 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Part 8: Learning React</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">10/11/2021 - 10/15/2021</Card.Subtitle>
                            <Card.Text className="blog-post fw-normal">
                                I can certainly see the advantage of using a JavaScript framework or library, I think the value becomes more apparent once you truly understand everything that it does to improve the development experience.
                                It helps cut down on the amount of code, you can connect your JavaScript to the HTML much more efficiently and once you understand how to make those connections, the coding process goes much quicker!
                                <br />
                                <br />
                                Just from the sheer amount of job postings I've seen, it may be interesting to learn more about Vue.js or Angular. They seem to be 2nd and 3rd in most popular JavaScript frameworks.
                                <br />
                                <br />
                                I'd like to learn more about Redux maybe for my final project.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FrontEndBlog
