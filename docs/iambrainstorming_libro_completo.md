# iambrainstorming — Libro completo (Amiya Tulu)

> Recopilación de los capítulos del repo `iambrainstorming.github.io` (mdBook). Texto extraído del clone local.

---

# Links

## iambrainstorming


<https://iambrainstorming.github.io>
<https://iambrainstorming.vercel.app>


### Git

<https://github.com/iambrainstorming/iambrainstorming.github.io>


<https://gitlab.com/iambrainstorming/blog>

## Other blogs

### Interactive Learning

<https://interactive-five.vercel.app>

### Opinionated Observer

<https://iambrainstorming.github.io/opinionated_observer/>

Git: <https://github.com/iambrainstorming/opinionated_observer>


### Coding Blog

<https://iambrainstorming.github.io/coding_blog/>

Git: <https://github.com/iambrainstorming/coding_blog>

---


# a visit to a govt school in odisha near my village

Today I went to a govt. school to discuss about my Idea of Innovate4DigitalIndia. [Click Here](http://technoperiod.blogspot.in/2015/05/ideas-need-to-be-implemented-in-mygovin.html)

First let me describe what are the good things I found in the school:---

1) School uniform: Students specially the higher class students were wearing decent school uniforms and was clean.

2) Food provided to the students: As today was Wednesday, students were given boiled egg and peas -potato curry with rice. I had my lunch there. The food was eatable and nearly nice. Only the peas curry was little watery.

3) Building was a bit good. Not that horrible. It was colored and many thoughts of scientists were written.

4) Teachers were also very co-operative and ready to listen to my ideas heartfully. I had also a discussion with the teachers for about 3 an hour. The discussion was about students and teachers and their problems.

  

Now let me describe what I didn't like in the school, although its many but I will describe some of the fundamental necessities of the school and their solutions.

  

1) First, and most important is quality of teaching and motivated teachers to teach.

Teachers are not motivated enough to do their work efficiently. Also they follow the old and ineffective methodology of teaching. They also don't behave with students properly. They just shout at the students (especially children of smaller age group) to make them study or listen. Love and affection between teachers and students were completely missing. For this I would blame to our culture and also attitude of the teachers. Teachers think that, if they will be soft, than students will not listen to them and obey them.

2) Toilets: This is perhaps one the fundamental problem and our PM has raised the issue many times and also trying to address it. The construction of the toilet was half and no work has been done since one year. When I discussed the issue, teachers said the toilet was incomplete because of corruption.

  

For quality of teaching and motivation to teacher, I think following solution will be most effective.

But for that govt. have to spent something. I have tried to make it least possible expenditure.

  

1) Electricity problem: We need inverter for it. Even though the school is situated near the national highway, power supply is not continuous.

2) Computer: At phase one, we can provide computers to each teacher. Computer I mean Raspberry Pi 2 which costs 2999 in Amazon.in and a monitor with will cost 3800, but if govt supplies it or Indian company like Micromax start manufacturing it, the cost will reduce to 3000. It also requires accessories like memory card (Rs. 300), keyboard (Rs. 200), mouse (Rs. 100). So total expenditure for a computer will be about Rs. 7400. Also an external hard disk per school can be provided to them, so that they can transfer the data.

3) A broadband connection: If only teacher uses it, it will cost Rs 499 (railtel broadband)

  

Here is how the computer will solve the problem.

First we need to motivate our teacher to teach and learn. A teacher will transfer its knowledge to students only if, he is educated enough and motivated enough. I would say that motivation is required daily.

So for it, we need a daily 40 min lecture (MOOCs) from our best professors. It should be available live online. Also the lecture can be downloaded. Teachers should also appear the tests daily. Test can by of 20 min length to know whether teachers have understood the concepts of lectures or not.

Lectures can be about subject knowledge and about teaching techniques and psychology. Psychology and teaching technique courses should be given more importance and should be based upon proved research. I think if this is done, our education system will change drastically.

I also found the language problem of teachers. There are primary teachers, who don't understand even English properly. So for them, state level lectures should be also given in their native or Hindi languages. In case of north India, Hindi is not a problem, but in south it could be a problem.

  

Also teachers should discuss or ask questions directly about the subject, which my Idea is based on.

  

And then, when the condition or knowledge of teachers improves (i.e. teachers are used to computers and motivated enough), we can start the phase 2, where students will be provided Raspberry Pi 2 and start flipped education in our schools.

  

  

Here are some of the other big issues which need to be addressed.

1) Students don't come to school regularly. They skip classes. This is a very big problem. So I would advise that a child's friend or a student who is staying near him/her can be asked to bring the child who is not coming to school. There friends can motivate him/her, if he/she is not coming to school regularly.

2) Student don't bring books and notebooks to school. For that, I would say that keep their (who is not bringing) books and notebooks in school itself and give them when he/she comes to school.

---


# aadhaar its time to encrypt all biometric data with password

All biometric data should be encrypted. During authentication, the user needs to provide both aadhar number and password.  
  
So only the user can decrypt and access the biometric data. Biometrics of the little finger can be kept in the unencrypted form, to remove duplicates.  
  
In case you forget the password:  
One has to submit the aadhaar number and little finger biometrics to obtain another.  
The ciphertext of aadhaar number should be replaced with new ciphertext (obtained from new password)  
  
In case you lost both (Password and Aadhaar Number):  
The person must come under scrutiny and old aadhaar number should be removed by using his/her little finger, and new aadhaar number can be given.  
  
To change the password:  
Enter the old password and aadhaar number, match the ciphertext with your fingerprint and then replace the ciphertext with new password.  
  
All the steps should be done in aadhaar center.  
  
The python code:  

  

from Crypto.Cipher import AES  
  
obj = AES.new('Aadhaar No:1234567891012', AES.MODE\_CBC, 'MyPassword:58023')  
message = "Aadhaar Biometric data data data"  
  
ciphertext = obj.encrypt(message)  
  
print(ciphertext)  
  
obj2 = AES.new('Aadhaar No:1234567891012', AES.MODE\_CBC, 'MyPassword:58023')  
  
print(obj2.decrypt(ciphertext))  
  
\# Code for authentication  
\# Enter your finger print  
\# Match the finger print with obj2.decrypt(ciphertext)  
\# Authentication success

---


# all international and national conferences should be recorded and made available online

Let me explain how it causes vast lost of information if we don't record especially scientific conferences.

I am giving the example of University I was working. It was a scientific conference on Genome Architecture. In this international conference many renowned researchers have presented their work. The schedule was very hectic, with almost no time gap, as there were large number of speakers.

  

As a student let me explain what are the problem that arises when we don't record the lectures.

1) First while listening we can miss many points, and we don't get the chance to listen again.

2) Also because of hectic schedule, it becomes bit boring for us, to listen all the lectures from 9:00 a.m. – 5:30p.m. So we may skip many lectures.

3) Further, but most important point is only students who registered for the Conference get the chance to listen. Imagine, what impact it would have, if it was made available online, may be after a month of conference, so that huge number of students could have get chance to know what other researchers are doing. It would also be an inspiration for students to work and gain knowledge.  
  
So for it we need to have a central repository along with a website, where these lectures can be displayed and may be uploaded in youtube.

---


# all most all general knowledge books and questions are about parroting

> Books lack the depth, inquiry, reasoning and critical thinking, it is just about memorising names of persons and places, and dates through parroting the quizzes and questions.

![](https://iambrainstorming.files.wordpress.com/2019/12/famous_ar.jpeg?w=768)

Students given to memorise names of famous artists

Take for example:  
Book asks to name the national parks of India.  
What's the point in memorizing names of different national parks, if you don't know anything about ecology; if you can't see and feel the environment and lifestyle of exotic and endangered wildlife in that national park?

In many entrances including B.Ed, GK in one of the subjects, and students end up parroting the names. It also takes a huge chunk of time in schools, what if it were used for more meaningful learning.

![](https://iambrainstorming.files.wordpress.com/2019/12/transfer_of_learning.jpeg?w=443)

Do the content help in transfer of learning?

How questions and content needs to be designed?

[https://iambrainstorming.wordpress.com/2018/02/17/question-designing-should-be-brain-friendly-cue-based/](https://iambrainstorming.wordpress.com/2018/02/17/question-designing-should-be-brain-friendly-cue-based/)

Features of great book:

[https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/](https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/)

---


# allowing mediocre colleges to provide degree certificate is degrading the education system

IITians, doctors, and most desired teachers try to join coaching institute instead of colleges.  
  
Reason:  
If you run a coaching institute, teachers are heavily paid, because about 70-80% of students money goes into the pocket of teachers, but no matter how much students pay to college, teachers are given fixed and very low salary. Also, brilliant students don't aim to join as a teacher, as pay scale is too low.  
  
Coaching institute business model works best to provide quality education as _teachers have the complete sole responsibility about their amount of income and autonomy to provide quality._ If teachers don't perform well, their pay scale will be low, so it creates a subconscious pressure to compete for quality**.** But this doesn't happen in schools or colleges.  
  
_How allowing mediocre colleges to provide degree certification creates a problem?_  
Allowing them to provide certificate enables them to bring students despite not providing quality.

---


# alternate thinking there is no one correct answer

How education hinders alternate way of thinking?  
  
  

[![](images/ef29a-alternatives.jpg)](https://iambrainstorming.files.wordpress.com/2017/06/ef29a-alternatives.jpg)

  
  
A teacher gave the following question in MCQs:  
If you add some dissolving solute to water, does there is a change in total mass i.e. (\[mass of water + mass of sugar\]) changes?  
a) There is no change in total mass  
b) There is change in total mass  
Student wrote:  
b)  
Teacher gave the mark: zero  
  
What if the student thought the following deeper idea to answer the question. When we add a solute to water, the reaction can be endothermic or exothermic,  so if heat is released in case of exothermic, an amount of mass is converted to heat, so there is little decrease in mass that is difficult to measure. For an endothermic reaction, some amount of heat is absorbed, so there is little increase in mass.  
  
So the answer can depend on scientific theory, concepts, inductive or deductive reasoning, premise, and method or procedure used.  
  
  

> There are no one 'correct' answer, the answer can depend on the process of thinking and context.

---


# apps can solve the basic social security problem

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="http://iambrainstorming.files.wordpress.com/2018/08/124c7-independence.jpg" style="margin-left:auto;margin-right:auto;"><img border="0" height="221" src="images/124c7-independence.jpg" width="400"></a></td></tr><tr><td style="text-align:center;"><span style="color:#747474;display:inline;float:none;font-family:&quot;font-size:14px;font-style:normal;font-weight:400;letter-spacing:normal;text-indent:0;text-transform:none;white-space:normal;word-spacing:0;">Designed by Nidhi Mishra</span></td></tr></tbody></table>

  
  
**The public distribution system is inefficient in terms of production, distribution, and consumption of goods and services and lacks inclusiveness.**  
  
You can view the fallouts of PDS:  
[https://en.wikipedia.org/wiki/Public\_distribution\_system](https://en.wikipedia.org/wiki/Public_distribution_system)  
  

> Apps can solve the basic social security problem, bring healthy habits of spending money and can be used to run experiments, test it and improve it to get the best results.

  
**Features:**  
1) API endpoints that any app developer can use and integrate it with their e-commerce apps.  Separate types of account for seller and customer.  
2) Statistics about how you spending money. General statistics should be publicly available, where experts can review, critic and improve the results.  
3) Tagged money, which means you can buy only particular types of products with that money.  
e.g. Tagged money for grocery, or tagged money for cooked food, or tagged money for education which gets transferred to the seller in untagged form.  Possibilities are limitless.  
 4) Tagged money comes with validity, it will disappear or gets returned to government after its validity is over (e.g. one month)  
5) Also, untagged money which can be used to buy anything.  
6) Account should be linked to Adhaar. Only one-time link, not a problem Adhaar critics. ):  
  
  
**Example Design:**  
?????  
  
**Every people of the country pay about 18% of their income as taxes, everyone deserves the basic social security irrespective of social status.**

---


# bacteria and competition how its similar to human and why we should have family planning

Growth of the bacteria refers to an **increase in bacterial numbers**  
When bacteria is grown in a liquid nutrient medium, the population is counted at many time intervals, and we get a bacterial growth curve that represents growth of cells over time.  
  
**Why bacterial growth curve is so important?**  
It gives the idea to learn about the impact of competition in the simplest way. **It gives the answer what happens to a population when resources are limited.**  
  
Bacterial growth best suits even to describe the human population.  
In science, there are 4 phases, but for simplistic understanding, without any scientific jargon it can be three stages: **Thrive, Survive, and Deteriorate**  
  

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="https://iambrainstorming.files.wordpress.com/2016/09/7031a-bacterial_growth.png" style="margin-left:auto;margin-right:auto;"><img border="0" height="240" src="https://iambrainstorming.files.wordpress.com/2016/09/7031a-bacterial_growth.png?w=300" width="320"></a></td></tr><tr><td style="text-align:center;">Image from wikipedia (A: Lag phase, B: Log phase, C: Stationary phase, D: Death phase)</td></tr></tbody></table>

  
  
**Stage 1: Thrive**  
In this phase bacteria has sufficient resources, so bacteria flourish, prosper or grow vigorously.  
  
In science, it's the lag phase and log phase.  
  
In the lag phase, there is no cell division, but cells are not dormant, they undergo intense metabolic activity, synthesizing enzymes and various molecules  
In log phase, cells begin to divide. Cellular reproduction is most active during this period.  
  
**Stage 2: Survive**  
When the population growth is unchecked, we reach a stage, where no more population growth is allowed, because of exhaustion of nutrients, accumulation of waste products, and harmful changes in pH etc. In science, it's called stationary phase.  
  
**Stage 3: Deteriorate**  
It's called death phase, in which population is diminished to a tiny fraction of the number of cells in the previous phase or there is an entire death of population. It could be caused by lack of nutrients, due to lethal toxic conditions  
  
This is true for all living organisms. All organisms compete for resources till it gets depleted or environment gets noxious.  
  
In the case of humans, we can see all the three stages in different places. Some thrive, some manage to survive, and those who can't deteriorate.  
  
If we ask for anyone which of the stage will you choose, it would be "thrive" without any question.  
  
**So can we perpetually stay in the thriving stage?**  
Bacteria and humans have one big different, we have got a brain with a huge amount of memory. A brain that can learn and understand things looking at the environment and other organisms, and take decisions accordingly. A brain that searches for reproducibility to predict what will happen if these conditions are met. Bacteria can't decide to stop reproduction so that it doesn't go to the "survive" or "deteriorate" stage. But we can.  
  
We can't grow our population infinitely with limited resources and pollute our environment if you do, get ready to deteriorate. We should have family planning based upon the available resources and income. Our kids need to thrive, not survive due to limited resources or deteriorate due to malnutrition. There must be a feedback mechanism, that decides, how much kids do a parent can have based upon income and time of parent, how much a country can have based upon its resources, how much the earth can withstand?  
  
What policies should we make for family planning?

---


# ban plastic bottles of coca cola and water bottles

# Ban plastic bottles of coca cola and water bottles

## date: "2023-03-09"

---
categories: 
  - "climate-change"
  - "policies"
  - "politics"
---

## Million Plastic bottles every minute

A million plastic bottles are bought around the world every minute and the number will jump another 20% by 2021

Some key facts:

- Half of all plastics ever manufactured have been made in the last 15 years.

- Production increased exponentially, from 2.3 million tons in 1950 to 448 million tons by 2015. Production is expected to double by 2050.

- Every year, about 8 million tons of plastic waste escapes into the oceans from coastal nations. That’s the equivalent of setting five garbage bags full of trash on every foot of coastline around the world.

- Plastics often contain additives making them stronger, more flexible, and durable. But many of these additives can extend the life of products if they become litter, with some estimates ranging to at least 400 years to break down.

[https://www.nationalgeographic.com/environment/article/plastic-pollution](https://www.nationalgeographic.com/environment/article/plastic-pollution)

## Plastic bottles are not recyclable

**The Recycling Myth  
Big Oil’s solution for plastic waste littered with failure**

[https://www.reuters.com/investigates/special-report/environment-plastic-oil-recycling/?utm\_source=pocket\_reader](https://www.reuters.com/investigates/special-report/environment-plastic-oil-recycling/?utm_source=pocket_reader)

## Bring Back Refill

The report details Coca-Cola’s role in the rise and fall of the refillable glass bottle – exposing how the company knew that single-use plastic bottles were worse for the environment but doubled down on them all the same.

![Coca cola bottle](./images/coca-cola.png)
    

[Report: Bring Back Refill, Calling on Coca-Cola, the Beverage Industry and Policymakers to Bring Reusable Beverage Bottles Back](https://www.storyofstuff.org/blog/report-bring-back-refill/)

## How Coke killed refillable bottle?


<iframe width="560" height="315" src="https://www.youtube.com/embed/4XP-BBGMCNs?si=JdDMnK7LRlRgTAHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Why we should move to tetrapack?

**Many layers**

Cartons are made mostly (about 75 per cent) from wood. Aseptic cartons (those that don’t need refrigeration) then use a layer of aluminium to preserve the product and layers of plastic to seal the container. Non-aseptic cartons (for fresh products with shorter shelf lives) don’t need aluminium.

'We always knew we were green and we thought it’d be obvious to everyone else since cartons come from trees,' he says.

### Scientific Evidence: LCA analysis

With consumers increasingly preferring scientific evidence to heart-felt assumptions, a number of LCAs have been produced over the last few years. A peer-reviewed study commissioned by Tetra Pak, which compared the Tetra Recart (the name of the tomato container) and steel cans, provided stark results: steel cans use twice as much energy during their life cycle as cartons, they produce 2.5 times more waste and more than three times the amount of CO2 emissions.

[https://theecologist.org/2010/jan/19/how-green-are-tetrapak-food-cartons](https://theecologist.org/2010/jan/19/how-green-are-tetrapak-food-cartons)

## Will tetrapack lead to more cutting of trees?

One need to grow more bamboos.

The environmental benefits:

    Renewable – Bamboo grows rapidly. It’s an abundant renewable resource, making it an ideal, eco-friendly alternative to traditional paper products.

    Biodegradable & Compostable – Bamboo is biodegradable and 100% compostable within 2–6 months, depending on your specific product and composting conditions.

    Carbon footprint – Bamboo releases 35% more oxygen into the atmosphere than the same volume of trees. By supporting the bamboo market, you’re supporting the continued carbon emission reduction caused by bamboo plants.

[https://www.goodstartpackaging.com/guide-to-bamboo-packaging/](https://www.goodstartpackaging.com/guide-to-bamboo-packaging/)

## Coca cola says they will lose customer if they move away from plastic bottles

**To bring the change, its needs political movement, there is enough corporate lobby, fossil fuel industries like Ambani are the supplier of plastic, coca cola says they will lose customer if they move away from plastic bottles.** 

> **RIL (Reliance Industries Limited), one of world’s largest producers of single-use plastics.**

Through cultivation of bamboos, farmers will be benefited rather than Ambanis, also you are protecting the environment by planting more carbon neutral trees.

[What will a boycott of the national currency give us?](./what-will-a-boycott-of-the-national-currency-give-us.md)

---


# beating confusion the power of association

1) With increase in frequency, energy of electromagnetic waves increases or decreases  
  
2) Molarity is  

[![](images/62b7f-molarity.png)](http://iambrainstorming.files.wordpress.com/2017/07/62b7f-molarity.png)

Often students confuse between molarity and molality.

  
  
3) In positive deviation from Raoult's Law, Solute-Solvent Interaction is strong or weak  
  

> **Students often confuse with these kinds of answers, when there is a dichotomy.**

  
It's nothing to do with the understanding of the subject, it's about memory. Students confuse because they have _not formed enough association with main concepts_. **Eliminating these confusion requires memory tricks.**  
  
Let's work with the first two example:  

[![](images/frequencies.png)](https://iambrainstorming.ml/wp-content/uploads/2017/07/frequencies.png)

  

[![](images/right.png)](https://iambrainstorming.ml/wp-content/uploads/2017/07/right.png)

  

  
  
The third one I leave to students or teachers to design so that they can memorize it.  In positive deviation, there will be more vapor pressure, this is only possible when solute-solvent interaction is weak. Weak intermolecular force means more particles in the gas phase.

---


# books that promote critical thinking among science students at undergraduate level

Most undergraduate and post graduate books in India are not well written, promote rote memorization, state board books are just full of errors, you can't even read a page while solving problems without finding errors in the answers given.  
  
  
**A book is not a book, if any statement you pick, does not say something useful, does not allow you to think.** In the age of the internet, where data is enormous and easily available, we need a method to extract knowledge from these data.  Books allow presenting information in a form that  we can understand, grasp it as it is written in a **concise and precise** manner.  We need books that allow not filling the vessel but kindling the flame. Books that promote critical thinking.  
  
  
Here are some the books which our students and especially teachers need to follow and should be in every library:  
  
Conceptual Physics, by Paul G. Hewitt  
The book is very well written, the book almost relate everything in physics with real world examples. You will understand physics with concrete examples rather than just with abstract formulas and equations. Also, it has a practice book equally important. This book is right for understanding physics at the undergraduate and high school level.  
  
Feynman Lectures on Physics  
This book also allows understanding physics more intuitively, without giving lots of equations and formulas.  
  
Fundamentals of Physics, Halliday & Resnick  
The question of these books are of gold standard, that promotes critical thinking, but as the questions are difficult to solve it requires teachers who can explain to students by breaking down the problem into simpler understandable steps. Also requires more personalized approach, so that every student tries and succeed to solve it, rather than one or two students in the class.  
  
HC Verma- Concepts of Physics  
This book is similar to Fundamentals of Physics, with too good questions that promote critical thinking.  
  
  
Chemistry a Molecular Approach,  Nivaldo J Tro  
Very well written book, NCERT chemistry book can't even be compared with it. Not a single statement in it is meaningless and gives chemistry in concise and precise manner.  
  
Organic Chemistry as a Second Language, David Klein (First and Second Semester)  
Author has terrifically written the book on organic chemistry. You will understand organic chemistry like never before, and no need to memorize just the equations and reactions day and night which are just a junk for students.  
  
Campbell Biology, Reece, Urry, Cain et. al.  
In India, biology is taught in most horrible manner. Biology means how much memory you have, how much memorization you can do, not how much you understand the subject.  
This book addresses the problem. You will understand biology and connect it to the real world. The diagrams in it are also wonderful. The questions in it promote inquiry and critical thinking.  
  
Genetics A Conceptual Approach, Benjamin Pierce  
Even though it's not for high school students, but a must for undergraduate teachers. Teachers should follow the book and come for an inquiry-based lecture.  
  
Molecular Biology of the Cell, Alberts  
A must for undergraduate and high school teachers. It has also got a problems book which contains gem like questions, which needs to be discussed among the students at the undergraduate and higher secondary level.  
  
Lehninger Principles of Biochemistry  
It's another book, which lazy teachers are scared of. But without making an effort to understand biology, how will a teacher promote understanding among students?  
  
Fundamentals of Anatomy and Physiology, Martinin, Nath  
Meticulously well-written book of anatomy and physiology, which an undergraduate teacher must follow.  
  
Molecular Biology, Rober F. Weaver  
Another phenomenal book that teachers at the undergraduate or above must follow. If you want to teach a student, why scientist think DNA exists,  this book is for you. The book is completely experimental based and gives details about how scientists reached a particular conclusion.  
  
Finally, OpenStax books for Physics, Chemistry, Biology, Maths and other..  
These books are open source, peer reviewed so, you can contribute to it by providing errors or suggestions, written in a manner that increases curiosity and the book that improves all the time.  
  
India needs to scrap out all the books that do not promote critical thinking/ understanding  and bring international quality books to the libraries. **We want our kids who have the ability to think, not memory storing machines.**

---


# brainstorming ideas on saturdays in schools

You can change and improve things if you are able to imagine it. You can't make it, if you can't imagine it. It's naive to think that everything will happen serendipitously or just knowing things is enough.  
Our schools _incentivise_ student just for knowing things in form of marks without giving considerations to _creativity_. Attitude toward inventiveness is almost negligible in our schools.

> **_You can't make it, if you can't imagine it._**

> Economic growth matters. Wealth brings us flush toilets, antibiotics, higher education, the ability to choose the career we want, fun vacations, and of course, a greater ability to protect our families against catastrophes.  
> **If wealth is so important, what makes a country rich?**  
> The most proximate cause is that wealthy countries have lots of physical and human capital per worker and they produce things in a relatively efficient manner, using latest technological knowledge. But why do so some countries have more physical and human capital and why is it organized well using the latest technological knowledge? In a word, incentives.
> 
> Entrepreneurs, investors, and savers need incentives to save and invest in physical capital, human capital, innovation and efficient organization.
> 
> Macroeconomists are especially interested in the incentives to produce **new ideas.** If the world never had any new ideas, the standard of living would eventually stagnate. But entrepreneurs draw on new ideas to create new products like iPhones, new pharmaceuticals, self-driving cars, and many other innovations. Just about any device, you use in daily life is based on multi innovations. Just about any device, you use in daily life is based on a multitude of ideas and discoveries, the lifeblood of economic growth. _New ideas, of course, require incentives and that means an active scientific community and the freedom and incentive to **put new ideas into action**._ Ideas also have peculiar properties. _One apple feeds one person but one idea can feed the world._ Ideas, in other words, aren't used up when they are used and that has tremendous implications for understanding the benefits of trade, the future of economic growth, and many other topics.
> 
> \-- Modern Principles of Economics by Tyler Cowen, Alex Tabarrok

**Idea:**

> We can dedicate the entire Saturday to bring ideas to the table for discussion. Students can be taught effective ways to generate ideas, they can think about the problem, zooming out the problem and zooming in into the problem, generate the hypothesis, design experiments and run tests for validation and iteratively improving upon ideas by looking at alternatives, flaws and what is missing in it.
> 
> Students don't need to work on different ideas each week. They can take months and years to refine their ideas.

Design Thinking Crash course  
[https://dschool.stanford.edu/resources/virtual-crash-course-video](https://dschool.stanford.edu/resources/virtual-crash-course-video)  
[https://www.ideou.com/pages/design-thinking](https://www.ideou.com/pages/design-thinking)

> **Comprehensive examples to generate ideas**  
> Smart Hackathon Problem Solving Kit  
> [https://drive.google.com/file/d/0B8x9dkicaW23WEVrbXAtdGhsdVk/view?usp=sharing](https://drive.google.com/file/d/0B8x9dkicaW23WEVrbXAtdGhsdVk/view?usp=sharing)

**Collaboration done intermittently: Solitude - Collaboration - Solitude - Collaboration - Solitude - Collaboration**

> When high and low performers interacted constantly, the low performers tended to simply copy high performers’ solutions and were in turn generally ignored by the high performers
> 
> [https://news.harvard.edu/gazette/story/2018/08/collaborate-on-complex-problems-but-only-intermittently/](https://news.harvard.edu/gazette/story/2018/08/collaborate-on-complex-problems-but-only-intermittently/)

**An example of a prototype for solving traffic problem:**

It saves space, as no requirement of the platform for every track, no pollution as vehicles are run by electricity, no traffic, luxurious public transport, high-speed vehicles, an automated timing for parking, no accidents, automated ticketing system,  number of vehicles with type (short or long or double Decker) running on the track dependent on statistics from number of tickets.  
Horizontal track for parking and can also be used for changing the tracks.

![](images/b90ec-ideas_road.png)

---


# building better cities

# Building better cities

## 7 principles for building better cities

More than half of the world's population already lives in cities, and another 2.5 billion people are projected to move to urban areas by 2050. The way we build new cities will be at the heart of so much that matters, from climate change to economic vitality to our very well-being and sense of connectedness. Peter Calthorpe is already at work planning the cities of the future and advocating for community design that's focused on human interaction. He shares seven universal principles for solving sprawl and building smarter, more sustainable cities.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IFjD3NMv6Kw?si=XJPee-NI1bNSmzUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*- 7 principles for building better cities | Peter Calthorpe*

<iframe width="560" height="315" src="https://www.youtube.com/embed/W1ZbbQdWfN8?si=OYsMmpHmI0ClTmYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[HappiCitites](http://www.happicities.com/)


## Urban Sprawl, slums vs skycrapers

**Service providers need not have to build sprawl for providing housing for services but skyscrapers**

> Urban sprawl or suburban sprawl mainly refers to the unrestricted growth in many urban areas of housing, commercial development, and roads over large expanses of land, with little concern for urban planning

![Urban Sprawl](images/sprawl.jpg)


<iframe width="560" height="315" src="https://www.youtube.com/embed/lWg2bgJPakM?si=aCK7KqM-t0JNIJcm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## The Course of Farming

**Discover Best Practice Farming for a Sustainable 2050 A multi-disciplinary approach to solve wide range of issues confronting the agricultural industry.**

Although this course is based on agriculture, it's not only about farming. It is a **multi-disciplinary** course that addresses a wide range of issues confronting the industry, including rural communities, rural infrastructure and conservation of biodiversity in agriculture. By completing this course you will understand that feeding and clothing the planet requires a multi-disciplinary approach and upon completion you will be able to explain best practices of sustainable farming and apply them in new contexts.

[https://www.coursera.org/learn/best-practice-farming-sustainable-2050#syllabus](https://www.coursera.org/learn/best-practice-farming-sustainable-2050#syllabus)

In all scenarios, we will have about 10 billion humans on the planet by 2050.

![Population](images/population.jpg)



## How to build dense and self sustainable forest near your cities?

<iframe width="560" height="315" src="https://www.youtube.com/embed/uKt5htrDvlk?si=2LbEyoktIhU3O3hF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

![Trees](./images/trees.png)

[https://www.afforestt.com/methodology](https://www.afforestt.com/methodology)

The Miyawaki Technique is a unique methodology proven to work worldwide, irrespective of soil and climatic conditions. More than 3,000 forests have been successfully created worldwide using this methodology.

Upto 30 times more dense compared to conventional plantations.

30 times better noise and dust reduction.

Upto 30 times better Carbon-dioxide absorption as compared to a monoculture plantation.

A completely maintenance-free, wild and native forest after the first three years.

A completely chemical and chemical fertiliser free forest that sustains itself and supports local bio-diversity.

## Exploring the Pathways Between Urban Green Space and Mental Health

Green space has been found to have a significant impact on mental health, contributing to psychological relaxation and reduced stress levels. A growing body of research supports the idea that urban green space can improve residents' mental health by stabilizing emotions and releasing stress. Living in areas with higher levels of greenness has been linked to lower levels of mental distress and higher life satisfaction.

While the benefits of urban green space for mental health are clear, understanding the mechanisms behind these benefits is crucial for informing effective urban planning and design. Current challenges in this research field include defining the mediators of green space's beneficial effects and distinguishing them from measures of green space or mental health. [The Article: *How Does Urban Green Space Impact Residents’ Mental Health: A Literature Review of Mediators*](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8621109/) seeks to summarize the current mediators and identify the impact paths of different mediators, taking into account the heterogeneous effects of different types of green spaces and residents with varying socioeconomic characteristics.

> After conducting a thorough literature search and selecting relevant studies, this review identifies three primary mediators between urban green space and mental health: **environmental factors, outdoor activity, and social cohesion**. Environmental factors, such as cleaner air and reduced noise pollution, contribute to mental health by directly reducing physical damage and increasing visual benefits. Outdoor activity, facilitated by accessible green spaces, encourages physical activity and social interaction, which can boost mood and reduce stress. Social cohesion, fostered by green spaces that encourage neighbor interactions and a sense of community, can also positively impact mental health. Understanding these mediators and their impact paths can inform effective urban green space planning and policymaking, ultimately promoting better mental health outcomes for urban residents.

---


# building scientific real world problem solving temper among students by transforming our entrance exams

Using just MCQs for entrance exams has many drawbacks. MCQs just test examiner way of thinking, not students, **neither it tests originality** of students.  
  
MCQs **don't test what approach a student took** to solve the problem, or why he/she was unable to solve it. Also, even if (s)he knows the strategy to solve the problem, many times (s)he can't reach the solution, because of mistakes in intermediate steps. The result is losing the marks.  
There are situations like unable to do the calculations, unable to recall the formula, even if he/she understand how the formula works.  
  
How many times you as a student feel frustrated for doing irrelevant silly mistakes and lose marks? I find many being frustrated for doing minor calculation errors, unable to recall even if they know it. Students are treated in a manner as if they are completely not allowed to make any mistakes.  
  
A question in chemistry about the rate of reaction does not test your logarithmic knowledge of mathematics. Even though it's required to solve the problem, but is the question really testing it. Logarithmic knowledge can be tested in math papers. Even if student understand how to solve the problem, he can't reach the solution.  
  
**Steps for solving real world problem**  
1)The student needs to understand the problem (understanding requires understanding of subjects in detail)  
2) Developing strategies to how to solve the problem  
3)Know the right tools with which you can solve it. e.g. A simple equation can be solved by a calculator or a computer program  
4) Need to know how to use these tools e.g. You can't use calculator to solve a mathematical operation without knowing division is done prior to addition when not it brackets  
  
**But MCQs disallows us to use the right tools to solve the problem.**  
  
Another thing is the time limit. What is important is whether he solved the problem or not within an acceptable time limit e.g. in days or hours? You can't expect everyone to solve the problem in minutes.  
  
Another important drawback is student spend all their time to solve the same type of problem, e.g. about 300 of questions for each type of equation. Is such an effort required? **It only hinders them to learn something new.**  
  
  
**So what transformation is required in our entrance exams?**  
  
Entrance exam should be divided into two parts:  
1) Multiple choice questions should be set in a manner so that it tests their fundamental UNDERSTANDING of the subjects.  
2) Selection through projects or working idea submitted. More weightage to projects than MCQs paper  
**This will discourage students to run behind marks, students will become more innovative, and try to solve real problems, rather than problems of books. All students will start thinking about the problem that the country or world is facing.**  
  
**How can it be done?**  
We need a transparent mechanism using tools such as a website.  
Students need to submit their projects there.  
All projects should go under plagiarism checker and projects that do not meet the originality criteria should be rejected.  
The selection procedure should be left to the universities.  They can select students based upon the projects, but they have to provide the detailed reasoning of selection as feedback.  
After selection procedure is done, the projects should be available for open review, to check whether colleges are selecting in a proper manner or not.  
Intellectual property rights can be given to students that meet the criteria of it.  
  
(Students spend years for preparing entrance exam, imagine how transformative effect it will have if they use that time for real problem-solving projects)  
  
**What should be the criteria of projects?**  
Projects that are already done, ongoing projects are acceptable, also new ideas (ideas with every nitty-gritty, not just one line, giving details requires research, but one liner don't) are also acceptable. Multiple ideas or projects are also acceptable.

---


# business model for lectures and material provided by various universities

Lectures and Materials can be made free all over the country, but we can still raise funds by making tie ups with other foreign universities of developed countries. Also we can make the new lectures available online paid, in different developed countries, till some funds for a particular lecture is raised, after that it can be made free.

---


# capitalism vs socialism which one is working

# Capitalism vs Socialism: Which one is working?

---
date: "2020-02-12"
categories: 
  - "democracy"
  - "economics"
---

## This is the dictionary definition of capitalism:

> an economic and political system in which a country's trade and industry are controlled by private owners for profit.

Characteristics central to capitalism include private property, capital accumulation, wage labor, voluntary exchange, a price system and competitive markets

--Wikipedia

## Definition of _socialism_

> Socialism is a political philosophy and movement encompassing a wide range of economic and social systems which are characterised by social ownership of the means of production, as opposed to private ownership.


## Defination of Free Market

> In economics, a free market is an economic system in which the prices of goods and services are determined by supply and demand expressed by sellers and buyers.

## **But do socialism works?** 

Here are some of the video that explains why socialism is much more worse than capitalism?

But both the videos have serious flaws:

## **It assumes Capitalism = Free Market**

Capitalism and the Free Market is often incompatible with each other. Capitalism entails private ownership, and through private ownership, individuals and entities can amass excessive wealth, establish monopolies, and potentially undermine the principles of a free market. Furthermore, they often utilize financial resources to lobby the government, seeking regulations that favour their interests and, in the process, potentially disrupt the free market.

Advocates of free-market socialism assert that authentic free markets cannot exist when productive property is privately owned. They argue that private ownership fosters class disparities and income/power inequalities, allowing the dominant class to manipulate the market in their favor through tactics like monopolies, market power, or influencing government policies to suit their business interests. Furthermore, in a socialist system with cooperative and self-managed enterprises, workers are motivated to enhance productivity because they not only receive a fixed wage or salary but also a share of the profits based on their enterprise's overall performance. This heightened motivation for productivity, envisioned in a socialist setup, could be replicated in a free-market economy if employee and public-owned companies were the prevalent norm, as envisioned by various thinkers.

Further more, capitalism exacerbates negative externalities, adversely affecting communities through the [tyranny of shareholders](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders).


Examples are Microsoft and Iphone with their proprietary software or hardware

> Apple has been forced to make their phones easier to repair, but, as the evil company that they are, they've found another way of creating unneeded friction in the system.
> 
> We've now reached the point where it's technically easy to remove the screen or the battery from an #iPhone 14, you can replace them with genuine Apple parts purchased from their store, but when you turn on the phone things probably won't work unless somebody from Apple registered the parts' serial numbers (which have all to be genuine and new btw, throwing a wrench into the idea of sustainability through used/refurbished/compatible parts) to your phone.
> 
> In other words, they've been forced to [remove the hardware barriers, and they've just moved them to the software](./what-do-we-need-to-decentralize-in-the-coming-years.md#apple-against-interoperability).
> 
> \-@blacklight

## **It assumes Socialism = Govt Ownership**

Socialism is centered around the idea of public, collective, or common ownership of the means of production. Its not about government control, where approximately 200 to 500 elected representatives manage the means of production, or where a single elected head, such as the Prime Minister or President, exercises control over the means of production.

Example of socialism is [FOSS](https://www.gnu.org/philosophy/free-sw.html) software or hardware

> “Free software” means software that respects users' freedom and community. Roughly, it means that **the users have the freedom to run, copy, distribute, study, change and improve the software**. Thus, “free software” is a matter of liberty, not price. To understand the concept, you should think of “free” as in “free speech,” not as in “free beer.”
> 
> [https://www.gnu.org/philosophy/free-sw.html](https://www.gnu.org/philosophy/free-sw.html)
> 
> [Open Source or Free Software or FOSS Philosophy](./programming/foss_philosophy.md)

So, no one owns a FOSS software, anyone can study, change or improve the software.

There are also open source hardware like build on [RISC V.](https://www.pine64.org/)

e.g Pine64 [https://www.pine64.org/](https://www.pine64.org/)

Another example can be decentralized computation using blockchain, its free market as well as owned by common with #FOSS software. You don't have to rely on aws, you can use your home computer to provide service.

[https://runonflux.io/](https://runonflux.io/)

[Akash Network](https://akash.network/)


## Anarchism
<https://en.wikipedia.org/wiki/Anarchism>

Anarchism is a political philosophy and movement that is against all forms of authority and seeks to abolish the institutions it claims maintain unnecessary coercion and hierarchy, typically including the state and capitalism. Anarchism advocates for the replacement of the state with stateless societies and voluntary free associations

## Stateless society

<https://en.m.wikipedia.org/wiki/Stateless_society>

A stateless society is a society that is not governed by a state. In stateless societies, there is little concentration of authority; most positions of authority that do exist are very limited in power and are generally not permanently-held positions.

### Rule of Law
But in order to maintain order in a stateless society, there has to be the rule of law. The rule of law provides a framework for resolving disputes and addressing conflicts in a peaceful and just manner. By ensuring that everyone is treated equally under the law, regardless of their social status, wealth, or political connections, the rule of law helps to prevent the abuse of power and the violation of individual rights.

Moreover, the rule of law acts as a deterrent against crime by providing a consistent and transparent system of consequences for unlawful behavior. When individuals know that their actions will be judged fairly and in accordance with established legal principles, they are less likely to resort to criminal activities. Furthermore, the rule of law empowers communities to establish mechanisms for conflict resolution and dispute settlement, reducing the likelihood of violence and promoting social cohesion. 

### But how can we have the rule of law in a stateless society where there is no concentration of authority?

We can have the rule of law with distributed authority rather than a concentration of authority, where the constitution is framed, adapted, or amended through deliberation between the public and [thousands or millions of specialized groups with expertise](./democracy/upholding-justice.md).

With automated smart contracts, thousands, even millions, can participate in the lawmaking and judgement process and approve decisions through different optimal voting methods.

### Classical Liberalism

<https://bigthink.com/thinking/classical-liberalism-explained/>

Classical liberalism is a political tradition and a branch of liberalism that advocates free market and laissez-faire economics and civil liberties under the rule of law, with special emphasis on individual autonomy, limited government, economic freedom, political freedom and freedom of speech. Classical liberalism, contrary to liberal branches like social liberalism, looks more negatively on social policies, taxation and the state involvement in the lives of individuals, and it advocates deregulation.

#### Regulation or Deregulation

Deregulation of markets hardly works in tackling negative externalities. Negative externalities need to be taxed or regulated. Though markets need to be free, with [no price control](./economics/price_controls.md)— in other words, prices are decided by demand and supply— markets need to be regulated to prevent monopolization and also to prevent negative externalities.

Organizations need to be publicly owned, with better [predistribution through smart contracts and game theory](./economics/yard-sale-model.md).

## Two videos compare capitalism and socialism, and the problems of the videos are highlighted above.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AkFZgZ5IjTU?si=nyAewzTyniBjMfyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Fdfru9NHGvE?si=lXXEwR1jLZF8wQSy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> But what about capitalism. We have one-sided economy where only very few control the market. 

[https://iambrainstorming.wordpress.com/2019/10/20/one-sided-economics/](https://iambrainstorming.wordpress.com/2019/10/20/one-sided-economics/)

> Wealth inequality is on the rise. People are unemployed and in poverty. Capitalists are creating more problems (or negative externalities like climate change, pollution) than solving. 

## Capitalism is not working

![Capitalism](./images/capitalism.webp)

[https://www.weforum.org/agenda/2020/02/countries-losing-faith-capitalism-economics-global-political-systems](https://www.weforum.org/agenda/2020/02/countries-losing-faith-capitalism-economics-global-political-systems)

---


# cbse and other boards all about rote memorization of abstract information

**Most questions of CBSE 12th board, all requires rote memorization of abstract information that adds no understanding to the subject.**  
Let us analyze the style of question in CBSE:  
  
**This is the question from book Nivaldo J Tro:**  
  
The question gives some background knowledge,  structures are already given and the question really tests your understanding, not how much you have memorized.  
  

[![](images/2a2a8-solution.png)![](images/4f03c-polymers.png)![](images/0e34a-induction.png)![](images/d4f99-ics.png)![](https://iambrainstorming.files.wordpress.com/2017/02/d4f99-ics.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/02/f2f15-rote.png)

  
  
  
  

#### **"All books must be removed from recommendation if it doesn't meet the learning criteria from next session. This is the most important thing we need to do to save our children and all future generations."**

  

[http://technoperiod.blogspot.in/2017/01/all-books-that-dont-meet-learning.html](http://technoperiod.blogspot.in/2017/01/all-books-that-dont-meet-learning.html)

---


# changing the curriculum and content there is an opportunity cost associated with the decision we make

Are CBSE and other boards designing the syllabus and curriculum by the sweat of their brow by attending the feedbacks, research, and evidence? Our education system should remain brother's keeper to all children of the worlds second populated country.   
  
Why an unstructured syllabus with low-quality and pedagogically unsound content be continued even after everyone knows emperor is naked.  
  

\[youtube=https://www.youtube.com/watch?v=FgmTI5LKkxQ&w=320&h=266\]

  
They could have made it more structured, with the recommendation of open access contents (such as openstax) for each topic or whitelisting of content.  How much time does it take for experts? A month will be sufficient.  
  
It will also create demand for authors and publishers to meet the pedagogical need of students.  
  
There is a trade-off,  between adapting to the newly changed content and enhancing the quality of content.  But it could have been done slowly.  
If a new drugs work better than old drugs, the longer it takes to bring new drugs to market, the more people are harmed who could have benefited if the new drugs have been approved earlier.  
  
There is an opportunity cost (of a choice is the value of the opportunities lost) associated with the decision we make.

---


# citizenship amendment act why you need religion as a label to define and identify cruelty

Citizenship Amendment Act, 2019 is providing a path to Indian citizenships to persecuted Hindu refugees. As a secular country, how it matters, one is Hindu, Muslim or any other religion.

Can't we coin the draft something like this:

> Anyone who is prosecuted based on religion and has spent a minimum of 5 years in India can apply for citizenship. You can get your citizenship after the evaluation of the authenticity of your appeal.

It's a suggestion, and can also be further improved.

> Policies are the mental models, it gives the guidance of how we think and operate, it should be precise and unambiguous without room for confusion, and should give an objective truth that doesn't change with time.

Allowing citizenship based on religion generates wrong mental models, and creates uncertainty for other religions. The first principle is don't allow cruelty, it doesn't matter whether you are Muslim or Hindu. Now, Hindus are being prosecuted by some Muslim countries, you never know in the future, it can be people with some other religion or way of living.

This is the definition of Refugee.

> A refugee is someone who has been forced to flee his or her country because of persecution, war or violence. A refugee has a well-founded fear of persecution for reasons of race, religion, nationality, political opinion or membership in a particular social group. Most likely, they cannot return home or are afraid to do so. War and ethnic, tribal and religious violence are leading causes of refugees fleeing their countries.
> 
> [https://www.unrefugees.org/refugee-facts/what-is-a-refugee/](https://www.unrefugees.org/refugee-facts/what-is-a-refugee/)

**How refugee of one religion is different from refugee from other religion?** Is it not utter discrimination and bias towards a particular religion (e.g. Muslims here). Isn't it unscientific to label and include people based on religion, where all refugee have the same or similar problem?

![](https://iambrainstorming.files.wordpress.com/2019/12/screen2019-12-20_110543.png?w=1024)

Excerpt from CAA

The law can also be interpreted as it creates a cutoff of 31st Dec, 2014, and law becomes inoperative after the date, and it decreases that lengthy time for getting citizenship for these religions. But the bias towards Muslim is apparent here.

> Yes, they all will go through the process, irrespective of religion, there are lots of technicalities involved in it. It's the process that creates trouble, and the draft does nothing about it. The draft is unnecessary and meant to build chaos and confusion, instead, they should be busy planning and streamlining the process, defining the steps, using technology to increase efficiency, understanding their problem, if they are really interested in well being of Hindu or Muslim or any refugees. People are not going to get a good living just by getting citizenship.

> If we had a fair democracy led by scientists and researchers, such law would never have made, and if there were a problem, it would have revised within an hour or kept in hold for collecting further evidence and solutions.
> 
> [https://iambrainstorming.wordpress.com/2019/01/09/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/](https://iambrainstorming.wordpress.com/2019/01/09/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)

![](https://iambrainstorming.files.wordpress.com/2019/12/inclusion.png?w=724)

---


# collaborative work like questioning and answering how its even possible in an exam oriented environment in india

While going through the article [http://www.learningscientists.org/blog/2016/7/7-1](http://www.learningscientists.org/blog/2016/7/7-1),  Learn How to Study Using... Elaboration, it made me think of my past education or even present schooling system in India from my siblings.  
  
It's like turning the education system upside down, just changing everything, from teacher centric to student-centric. But how it will be possible?  
  
Here the reasons that don't allow it to happen because:  
  
1) Exam oriented environment  
Exam oriented environment in India, marks means everything, no matter how you secure it, through copying, through cramming, memorizing or any method you like. You are judged through your marks. Even to tackle it CCE was brought. But it has become even a greater failure because of our smart teachers who could circumvent the effort, by distributing marks for free, showing good scores to parents and everyone. The end result is negligible learning due to CCE.  
  
2) Lack of time  
Leave about a lazy teacher for a while, what about teachers who genuinely want their students to learn something. To describe a single topic, it requires a scrupulous amount of work and time in the classroom which means lagging behind the syllabus. The question also comes to mind why a teacher will try it if at end students are tested by an hour exam which they have to reproduce what's already written in books. It's just transferring the information from books to answer script, and you are awarded no matter which method you apply to achieve it.  
**The exams don't test collaboration or questioning skills, it doesn't test the ability to imagine something novel or out of the box thinking.**  
  
**Even these skills can't be tested through the one-hour exam.** It can only be done through projects, a project that requires time, which student don't find because they have to clear entrances and exams.  
  
Some students can say that they are given lots of projects. Yes, they are given, but **without purpose or details**.  
  
Take the project of collecting medicinal plant photos. Project description ended with a single line. No description of what's the purpose of doing it, why they are doing it. If you ask the student, they will say that they are doing it for the sake of project i.e. because they are asked to do so. The end result is collecting randomly some medicinal plant photos (only photos) from Wikipedia, and then rebuking the teacher in mind for giving the task, as they don't find time to study their syllabus. And finally submitting the printout of photos, which are again thrown to trash after some days.  
  
Here is how the **same project could have been interesting**, by giving specific details of the project.  
  
1) Collect medicinal plant that you find interesting, about 20  
2) Mention why did you thought it as interesting, what is the purpose/use of the medicinal plant you have chosen  
3) Choose 3 plants out of it, and discuss that plant in the classroom with as much detail you can, where teacher and other students will assist in inquiry by asking probing questions  
4) Note down the asked questions that you did not know, and probe the internet to find answers  
5) Next day discuss the newly discovered answers with the classmates and teachers.

---


# common prevailing myths in education that needs to be busted

A student is not scoring well, the main reason given:  
He/She has the **less innate** **ability**.  
He/She was **not working hard**.  
  
Let's bust the second myth first.  
My question to schools, teachers, and parents is after spending about **6-7 hours** in schools, or 24 hrs in residential schools and colleges, how can you really blame children for not working hard.  
Why do schools expect children to study all by themselves? **Why they have to do homework?**  
The problem is not about working hard, it's about not following effective study strategies. Not providing them to do enough retrieval practice. The implementing of the effective study strategies is a very complicated process and often contextual, so much of attributes involved, from content, curriculum to test questions. But the good thing is so much of research already available that will guide teachers to help students in learning.  
[http://www.learningscientists.org/](http://www.learningscientists.org/)  
  
Now the first myth:  
She lacks the innate ability.  
  
**Fact:**  
All organisms at the individual level are different, even no two bacteria are exactly same. We have the DNA, that is different for each organism, but it is different for a purpose, to maintain diversity. Diversity helps to stay in an interdependent manner, meeting each other need without having to do everything alone. Diversity helps us to do specialization so that someone else can take care of your requirement, without having to do everything by yourself.  
**So why don't we appreciate the diversity?**  
  
But there is another Fact:  
**Abilities do overlap with each other.** All humans share many common abilities, there are shared abilities between monkeys and humans, plants and animals, animals and prokaryotes. But same species have many shared abilities, because of that reason humans are called humans (Homo sapiens)  
  

[![](images/a160f-venn-2bdiagram.jpg)](http://iambrainstorming.files.wordpress.com/2017/06/a160f-venn-2bdiagram.jpg)

  
  
So why aren't our exams and curriculum are build based on shared abilities? Also, specialized test and learning goals to meet the individual needs.  
**How do you know, someone is more intelligent and someone is not?** _It is tests, right?_  What if tests itself are not well formed. How can someone answer your questions if the information is not in his/her brain? How can someone answer your questions if he/she has not been taught well or understood? How can someone answer your question if he/she has forgotten the answer? Are we addressing these issues before testing?

---


# comparative analysis of openstax biology and ncert biology

**The sequence of chapters:**  
Openstax biology:

In openstax biology, chapters are **arranged based on increasing biological complexity**. The second chapter is about atoms, molecules, water, and carbons. It gives applied techniques about how biology is being done, for example, carbon dating, molecular interactions that take place in lifeforms and why, how it takes place, its describes all the basics at the atomic and molecular level, and also talks about environmental conditions of life forms such as pH. At the end of the chapter, it says about Carbon, and why it's important for life. Next chapter is about Biological Macromolecules (increasing complexity from atoms to long polymers), then cell structure and other chapters about functioning.

**Evolution is taught before the five kingdom classification. Why?** Because classification is completely phylogenetically linked. You have to understand evolution, in order to understand classification. _Classification is also written with linking evolution in context._ e.g. endosymbiosis and the evolution of eukaryotes, how land plants evolved from green algae, when seed plants first appeared and when gymnosperms became the dominant plant group.

NCERT Biology:  
But NCERT biology doesn't follow such sequence, that is important to understanding the biology. You can't say ribosome function is protein synthesis, without knowing proteins are made up of amino acids. Without knowing DNA and RNA(biomolecules), how can you talk about virus and virus structure?

**Connections:**

Openstax biology:  
Openstax biology contains many separate boxes that contain interesting information, from important application oriented techniques to career connections that talks about e.g. what a pharmaceutical chemist or microbiologist does, which section of biology is important to which career. It will also help students to become curious and motivate them for pursuing biology as a career.

[![](images/df4e7-career_connection.png)](http://iambrainstorming.files.wordpress.com/2017/06/df4e7-career_connection.png)

NCERT Biology:  
It does have boxes for scientists. But nothing much interesting. Instead of describing how his/her experiment is done in details, it talks more about degrees, certificates, and university studied in half of the box.

**Content:**  
Openstax biology gives comprehensive content answering probing questions in biology, but NCERT biology gives information just like short notes without touching the new leading edge research. The text of NCERT biology lives students baffling and statements of it don't answer the questions of the working or mechanism that comes to mind. Text that is written doesn't create mental picturization or associations in mind so that students can learn and remember better. Also, it fails to bring curiosity, as the texts don't ask probing questions before explaining the details.

**Examples of how it lives students baffling and doesn't produce associations?**  
Ribosomes are the granular structures first observed under the electron microscope as dense particles by George Palade.  
Why dense? Because it is a solid structure, without spaces in it.  
It composed of ribonucleic acid (RNA) and proteins and are not surrounded by a membrane.  
Where is the structure of ribosome?  
Here 'S' (Svedberg's unit) stands for the sedimentation coefficient, it indirectly is a measure of density and size.  
What is indirectly here? How it's done? No explanation. Also, subunit structures are not given.

The central tubules are connected by bridges and are also enclosed by a central sheath, which is connected to one of the tubules of each peripheral doublets by a radial spoke. Thus, there are nine radial spokes. The peripheral doublets are also interconnected by linkers. Both the cilium and flagellum emerge from a centriole-like structure called the basal bodies.

What is the importance of all these texts about central tubules? Structural as well as functional? If it's out of scope at 11th level, then why at all these are discussed?

[![](images/48327-neurogensis.png)](http://iambrainstorming.files.wordpress.com/2017/06/48327-neurogensis.png)

**Exercises:**  
It contains conceptual and critical thinking questions, and also ncert biology questions are good for discussion.

**Scientific Method:**  
NCERT biology like all other books of ours doesn't contain scientific method, how biology needs to be done.

[Cell Notes through compilation](https://nbviewer.jupyter.org/github/amiyatulu/biology/blob/master/Cell.ipynb)

Word count analysis of openstax Biology, campbell  Biology and NCERT Biology with removing all stopwords  
[https://github.com/amiyatulu/biologybooks\_wordcounts](https://github.com/amiyatulu/biologybooks_wordcounts)

Conclusion for word count analysis:  
Instances of '_data_' are maximum in Campbell Biology. Most thing in the book is explained with giving real world experimental _data_.  
Both Campbell Biology and OpenStax Biology stress biology in the purview of _evolution_ with maximum _examples_ and emphasizing on _structures_ in biology as form follows function, along with answering maximum probing questions (as _how_ ranks much higher)

NCERT biology lacks emphasis of all these concepts. Even though _figures_ tops in NCERT biology, but in many chapters, relevant _figures_ of textual content is missing. _Data_ word doesn't exist in top 500.

P.S.  
Why ncert books (not particularly biology) are written like a one-liner, without digging into details? Also why questions can come from any line of the book especially in entrances, which students may have dropped reading because the author didn't pay much regard to describe it in detail?  
If you read the concepts in detail, you can answer the basic and important questions with forgetting some details. But if you read the concepts, in short, you will have trouble in answering even basic and important questions. More you dig into the concepts, more you will get comfortable with the basics because it will create more neural connections to the basics that are hard to forget.

> Teach less number of concepts/topics but teach it more indepth.

---


# completely simplifying uts ticketing system which can be used everywhere

Simplifying UTS Ticketing System which can be used in every station:  
We need two things:  
1) OTP generator in Station (To track the location, no requirement of GPS)  
2) A mobile app for payment and entering the OTP  
  
Railways job is to provide a unique account id and password to each customer after authenticating them.  
  
Use that unique account id and password to register on the app. You can add and change the mobile number. You can also change the password.  
  
When you go to the station, in the OTP generator, enter the unique account id, and get the OTP displayed on the OTP generator. OTP can also be sent to the mobile. OTP will work only for 15 mins etc.  
  
Enter the OTP on the registered mobile app, choose the route, pay and get ticket by SMS  
  
Payment can be done with using payment gateways or with balance kept on the account. You can add balance with payment gateways, may be with depositing money through railways or directly through gateways when you have no balance in your account.  
  
It solves most of the problem of UTS Ticketing system, such as GPS, unable to change the mobile number, to carry your identification such as voter id etc.  
  
**Booking ticket without the internet:**  
The  OTP generator now will also work as ticket generator.  
Enter the unique account id into the OTP generator, choose the route in the OTP generator, get the OTP on the phone, enter the OTP on the generator,  get the ticket through SMS or even paper. But in this case, money should be present in the account already. You can recharge your account online anywhere.  
  
**Do suggest if you have any question or any problem with this method. What are the ways do think you can travel in a dishonest manner, by finding the loophole in the system?**

---


# complicatedness of sexuality

# Complicatedness of Sexuality

---

date: "2019-04-10"

- categories:

  - "compilation"
  - "sex"
  - "sexual-orientation"
  - "sexuality"

- tags:

  - "asexual"
  - "demisexual"
  - "homosexuality"
  - "lgbtqa"

---

## Sexuality definition

Human sexuality is the way people experience and express themselves sexually. This involves biological, erotic, physical, emotional, social, or spiritual feelings and behaviors. So **definition of sexuality is nuanced, broad and multifaceted**.

![](images/image.png)

Multidimensional components indicate a specific sexual orientation and can include whether an individual:

1. Engages in sexual behaviour with men, women, both or neither.

2. Feels sexual desire for men, women, both or neither.

3. Falls in love with men, women, both, or neither.

4. Identifies himself or herself with a specific sexual orientation.

### **The complexity and ambiguity of defining sexual orientation.**

The complexity and ambiguity of defining sexual orientation result from the varying combinations and degrees of these four components. For example, **how much sexual attraction** to and experience with the same sex can someone have and still be heterosexual? And, vice versa, how much sexual attraction to and behavior with the other sex can someone have and still be homosexual? Or, is everyone who does not consistently and completely meet these four components bisexual? Further, can someone who self-identifies as heterosexual but is sexual exclusively with same-sex partners really be heterosexual? Even scientists who do research about sexual orientation do not use consistent criteria in categorizing subjects according to sexual orientation. _**In some studies, subjects are included in the bisexual/homosexual category if they have had any element of same-sex attraction, behavior, or self-identity. In other studies, subjects are not considered homosexual unless their sexual behavior, attraction, and self-identity have been consistently with the same sex since puberty.**_

![](images/image-1.png)

A Continuum of Sexual Orientations\
The Kinsey scale did not include asexaulity

### sexual fluidity

**Variability in same-sex and other-sex attraction and involvement at different times and in different situations throughout the life span.**

The Kinsey scale may be interpreted incorrectly to indicate that all people have a fixed, stable sexual orientation. In fact, sexual orientation is more accurately determined by patterns over time rather than at any given point in time (Baumgardner, 2007). Psychologist and researcher Lisa Diamond (2008a) uses the term s**exual fluidity to describe variability in same-sex and other-sex attraction and/or involvement at various times and situations throughout the life span**. Her research indicates that, for some women, sexual self-identity and the biological sex of preferred sexual partners can vary over time and experience unexpected transitions.

Lisa Diamond’s research on sexual fluidity followed almost 80 women ages 18 to 25 over a 10-year period. At the beginning of the study, all the subjects were involved with other women and labeled themselves variably as lesbian, bisexual, or unlabeled. **At the end of the study, about one third of the women were consistent in their self-identification** as lesbian and in their attraction to and sexual involvement with women. However, the remaining women—initially self-identified as lesbian, bisexual, or unlabeled—had changed their self-identification at least once during the 10 years. Notably, these changes were variable: Lesbian changed to bisexual or unlabeled, bisexual changed to lesbian or unlabeled, unlabeled changed to bisexual or lesbian, and some previously self-identified lesbian, bisexual, and unlabeled changed to heterosexual. Some of the changes in self-labeling were due to sexual and/or romantic attraction to or involvement with men. However, **_the women who became involved with men continued to feel the same amount of attraction toward other women as they had at the beginning of the study 10 years earlier_** (Diamond, 2008b).

### Asexuality: The Invisible Orientation

**ASEXUALITY IS:**

**_A sexual orientation currently estimated to describe 1 percent of the population_**. Asexuality is usually defined as the experience of not being sexually attracted to others. Less commonly, _**it is defined as not valuing sex or sexual attraction enough to pursue it**_.

**WE’RE NOT:**

> Asexuality isn’t a complex. It’s not a sickness. It’s not an automatic sign of trauma. It’s not a behavior. It’s not the result of a decision. It’s not a chastity vow or an expression that we’re “saving ourselves.” We aren’t by definition religious. We aren’t calling ourselves asexual as a statement of purity or moral superiority.

We’re not amoebas or plants. We aren’t automatically gender confused, anti-gay, anti-straight, anti-any-sexual-orientation, anti-woman, anti-man, anti-any-gender, or anti-sex. We aren’t automatically going through a phase, following a trend, or trying to rebel. We aren’t defined by prudishness. We aren’t calling ourselves asexual because we failed to find a suitable partner. We aren’t necessarily afraid of intimacy. And we aren’t asking for anyone to “fix” us.

WE DON’T:

Asexual people don’t all look down on sex or people who have sex. **We don’t all avoid romantic or emotionally close relationships, and we aren’t automatically socially inept**. We aren’t defined by atypical biology or nonfunctional genitals. We aren’t defined by mental illness, autism, or disability. We don’t try to recruit anyone.

We don’t have a hole in our lives where sexual attraction “should” be. **We can’t be converted by trying sex.** We aren’t, by definition, lonely or empty. We aren’t, by definition, immature or incompetent. We aren’t, as a group, uglier or prettier than anyone else. We don’t tell people not to have sex in the name of our orientation, nor do we use the term _asexual_ to imply perceiving ourselves to be “above” sex.

An asexual person does not experience sexual attraction – they are not drawn to people sexually and do not desire to act upon attraction to others in a sexual way. Unlike celibacy, which is a choice to abstain from sexual activity, asexuality is an intrinsic part of who we are, just like other sexual orientations. Asexuality does not make our lives any worse or better; we just face a different set of needs and challenges than most sexual people do. There is considerable diversity among the asexual community in the needs and experiences often associated with sexuality including relationships, attraction, and arousal.

**Attraction**\
Many asexual people may experience forms of attraction that can be romantic, aesthetic, or sensual in nature but do not lead to a need to act out on that attraction sexually. **_Instead, we may get fulfillment from relationships without sex, but based on other types of attraction. Romantic attraction is the desire to be romantically involved with another person. Aesthetic attraction is appreciation for a person’s appearance. Sensual attraction is the desire to engage in sensual (but not sexual) activities with a person, such as cuddling, hugging, or kissing_**. Asexual people who experience these other forms of attraction will often be attracted to particular gender. **These people may still identify as lesbian, gay, bi, or straight.** The [split attraction model](https://aroacefaq.tumblr.com/post/143810110365/the-split-attraction-model-what-is-it) has led some people to identify separate sexual and romantic attractions. For example, a person who’s asexual but wants relationships with the opposite sex may identify as a “heteroromantic asexual”. Most sexual people may not view their orientation that way, and may simply combine their sexual and romantic attractions into one characteristic if they’re aligned. Asexual people often feel the need to specify both sexual and romantic attractions to make it clear what drives them and what they’re seeking from other people.

**Arousal**\
For some asexual people, arousal (sometimes interchanged with “[libido](http://wiki.asexuality.org/Libido)” in asexual dialogue) is a fairly regular occurrence, though it is not associated with a desire to find a sexual partner or partners. This could include, but is not limited to, arousal from hormone variation in a person’s menstrual cycle, or erections at certain times of the day. Some may occasionally masturbate, but feel no desire for partnered sex. Other asexual people may experience little or no arousal, often called [non-libidoist](http://wiki.asexuality.org/Nonlibidoism) asexuals. Both types are equally valid in identifying as asexual, as sexual orientation is about attraction and desire towards other people, rather than strictly physiological reactions.

Because we don’t have an intrinsic need for sex, asexual people generally do not see a lack of sexual arousal as a problem to be corrected, and if they do have a libido or experience arousal, they do not feel needs are unmet by a lack of sexual activity.

It is important to note that asexuality is different from medical conditions such as Hypoactive Sexual Desire Disorder (HSDD). HSDD is listed in the DSM-V, while asexuality is not. In cases of HSDD, there are underlying sexual needs that are not being met, to the point of personal distress. If not experiencing arousal or suddenly losing interest in sex is distressing, it is advisable to discuss this with a medical professional to get a diagnosis.

**\
Relationships**\
Asexuality does not limit a person’s emotional needs. As is the case for sexual people, we vary widely in how we fulfill those needs. Some asexual people may still desire romantic relationships. Other asexual people may be most satisfied with close friendships, or happier on their own.

Sexual or nonsexual, all relationships are made up of the fabric of interpersonal connection. Communication, closeness, fun, humor, excitement, and trust are all just as important in nonsexual relationships as in sexual ones. Asexual people who desire romantic relationships may have fewer cultural scripts to rely on, but they are still seeking an emotional connection of shared romantic love. \
**_For asexual people who desire romantic relationships, the dating pool for other asexual people is very small, as we are a very small minority of the population._** In addition to that, asexuality is often invisible and has a shorter history as an identity/community than other minority sexual orientations that may have established cultural venues of courtship. Due to this, many asexual people end up in mixed relationships with sexual people. Mixed relationships face challenges that often require compromise.

### Definitions

**Asexual:** Someone who does not experience sexual attraction or an intrinsic desire to have sexual relationships (or the adjective describing a person as such).

**Demisexual:** _Someone who can only experience sexual attraction or desire after an emotional bond has been formed_ (or the adjective describing a person as such). This is different from the choice to abstain from sex until certain criteria are met.

**Gray-asexual (gray-a)** or **gray-sexual:** Someone who identifies with the area between asexuality and sexuality (or the adjective describing a person as such). For example, they may experience sexual attraction very rarely, only under specific circumstances, or of an intensity so low that is ignorable and not a necessity in relationships. (Note: the spelling of gray/grey may vary by country.)

### Criticism or inappropriate comment or nagging faced by asexual people

![](images/image-2.png)

Criticism or inappropriate comment or nagging faced by asexual people

## Is human sexuality polygenic?

Let's look at the definition of polygenic trait: 

A polygenic trait is a characteristic, such as height or skin color, that is influenced by two or more genes. Because multiple genes are involved, polygenic traits do not follow the patterns of Mendelian inheritance. Many polygenic traits are also influenced by the environment and are called multifactorial.

So polygenic traits involves many more genes and many are also influenced by the environmental factor. 

> Although no “gay gene” has been discovered, studies of identical twins find they are more likely to have the same sexual orientation (gay or straight) than would be expected from chance alone ([Kendler, Thornton, Gilman, & Kessler, 2000](https://pubmed.ncbi.nlm.nih.gov/11058483/); Santtila et al., 2008). Because identical twins have the same DNA, this similarity suggests, but does not prove, a genetic basis for sexual orientation. Keep in mind, however, that any physical or behavioral trait that is _totally_ due to genetics should show up in both twins or in neither twin. Because many identical twins do _not_ have the same sexual orientation, this dissimilarity suggests that genetics are far from the only cause of sexual orientation, to the extent they cause it at all. Several methodological problems also cast doubt on findings from many of these twin studies.
>
> [Reference Book: Social Problems: Continuity and Change](https://saylordotorg.github.io/text_social-problems-continuity-and-change/s08-01-understanding-sexual-orientati.html)

Further defining sexuality is broad and can be very complicated. It's not as simple as being attracted to the same or different sex or both. Take, for example, demisexuality, where attraction occurs only when an emotional attachment is formed. Moreover, emotional attachment itself is not straightforward. You might be emotionally attached to your friends without experiencing any sexual attraction to them, even if the other party is interested. The dynamics can be highly specific. While you may appreciate someone's looks, it doesn't necessarily mean you are not sexually attracted to men or women. You can remain completely neutral during the first encounter or multiple encounters.

References:

1. [Our Sexuality, Crooks and Baur](https://cloudflare-ipfs.com/ipfs/bafykbzaceax2n7vszuvr6tuatx6yirr2kbrmgpjuluemlqh5tnact4bz5wlji?filename=Robert%20L.%20Crooks%2C%20Karla%20Baur%20-%20Our%20sexuality-Cengage%20Learning%20%282010%29.pdf) Pdf Link

2. The Invisible Orientation, Julie Sondra Decker

3. [https://asexuality.org/](https://asexuality.org/)

4. [Social Problems: Continuity and Change](https://open.lib.umn.edu/socialproblems/chapter/5-1-understanding-sexual-orientation/)

---


# country needs an independent news analysis institution to provide feedback to media

**How to analyze news and what shall be the criteria?**

Are the information provided backed by the evidence?

[![](images/cedb0-bayes2btheorem.png)](https://drive.google.com/file/d/0B8x9dkicaW23WmZhREpYYzhJeDA/view?usp=sharing)

[https://drive.google.com/file/d/0B8x9dkicaW23WmZhREpYYzhJeDA/view](https://drive.google.com/file/d/0B8x9dkicaW23WmZhREpYYzhJeDA/view)

Do they site down the evidence in the news? Do evidence are from reliable sources with rigorous testing? Does the news show one-sided or biased views without looking at all angles? Is the information provided is an opinion/belief/viewpoint or hypothesis or scientific theory?

[![](images/625d2-scienfic2btheory.png)](https://drive.google.com/file/d/0B8x9dkicaW23OHRabldhNzJrcUE/view?usp=sharing)

[https://drive.google.com/file/d/0B8x9dkicaW23OHRabldhNzJrcUE/view](https://drive.google.com/file/d/0B8x9dkicaW23OHRabldhNzJrcUE/view)

_**Opinion:** a view or judgment formed about something, not necessarily based on fact or knowledge._

Does the hypothesis/claim is well tested and is statistically significant to draw the conclusion?

[![](https://iambrainstorming.files.wordpress.com/2017/03/da140-hypothesis_def.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/03/da140-hypothesis_def.png)

<table style="margin-left:auto;margin-right:auto;text-align:center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align:center;"><a style="margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2017/03/c8de3-hypothesis.png"><img src="https://iambrainstorming.files.wordpress.com/2017/03/c8de3-hypothesis.png?w=242" width="322" height="400" border="0"></a></td></tr><tr><td style="text-align:center;">Alternate and Null Hypothesis</td></tr></tbody></table>

Is media promoting pseudoscience?

[![](https://iambrainstorming.files.wordpress.com/2017/03/8983d-science.jpg?w=246)](https://iambrainstorming.files.wordpress.com/2017/03/8983d-science.jpg)

Does the discussion done come under any of the logical fallacy or cognitive biases?

[![](images/b2c04-fallacy.jpg)](http://www.nizkor.org/features/fallacies/)

For more detailed explanation of logical fallacy with examples is given in

[![](images/f5af5-nizkor2bproject.png)](http://www.nizkor.org/features/fallacies/)

or

[https://yourlogicalfallacyis.com/](https://yourlogicalfallacyis.com/)

Important details for Evaluating a News Article:

[![](images/5daaf-news2barticle.jpg)](https://iambrainstorming.files.wordpress.com/2017/03/5daaf-news2barticle.jpg)

Line by line scripts of news taking context into consideration must be analyzed along with bulk analysis by data scientists.

**The independent institute should open source the analysis to public so that it can be audited and reviewed by third parties. It should also come under RTI.**

**The institute will provide feedback to the media so that they can improve upon themselves.**

---


# critical analysis of 12th chemistry ncert book

Analysis of first 3 pages of Chapter 1:  
  
  
1st Paragraph:  
"The correlation between structure and properties helps in discovering new solid materials  
with desired properties like high temperature superconductors, magnetic materials, biodegradable  
polymers for packaging, biocompliant solids for surgical implants, etc."  
  
The first paragraph itself start with the technical terms like biodegradable polymers for packaging, biocompliant solids for surgical implants. But the book does not explain what are these. How will a student imagine such technical terms and correlate with the structure of solids? Where are the solid structures of a biocompliant solids for surgical implants? And how structure suits the need for surgical implants.  
Regarding magnetic materials, it's written at the end of the chapter. So at least say about it, that you will read about it soon  
  
Another Paragraph:  
Some glass objects from ancient civilisations are found to become milky in appearance because of some crystallisation. Like  liquids, amorphous solids have a tendency to flow, though very slowly. Therefore, sometimes these are called pseudo solids or super cooled liquids.  
  
Where is the diagram for it? How will a student imagine solids which behave like liquids, that have a tendency to flow?  
  
"Glass panes fixed to windows or doors of old buildings are invariably found to be slightly thicker at the bottom than at the top. This is because the glass flows down very slowly and makes the bottom  
portion slightly thicker."  
  
Where is the diagram for it? And how this happens? Where is the proper explanation?  
  
Intext Questions:  
Classify the following as amorphous or crystalline solids: Polyurethane, naphthalene, benzoic acid, teflon, potassium nitrate, cellophane, polyvinyl, chloride, fibre glass, copper.  
  
Do the author thinks, students already know what is polyurethane, teflon, cellophane, polyvinyl etc. ? How can they put a question that is not told before? What the author expects, the student will search the internet and find the answers? Where are the structures of teflon, cellophane etc.? How it is significant?  
  
These kinds of situation arise throughout the book.  
**The solution is to take feedback from students for every paragraph you write. What question arises in their mind? How can it be explained better? Students should be the stakeholders for  the book.**  
  
  
Update:  
Now a review of state board books.  
e.g. In Odisha, college teachers are fanatic about these books and are most recommended for students.  
Lets, review an Information Technology book. Even though I can't analyze the complete book, as the number of pages will become more than 10 times of the original book.  
  

[![](images/5fa5c-question0001.jpg)![](images/0e903-question0002.jpg)![](https://iambrainstorming.files.wordpress.com/2016/04/0e903-question0002.jpg?w=211)](https://iambrainstorming.files.wordpress.com/2016/04/37468-question0003.jpg)

  

a) Usually the e-mail address is in

i) Upper case ii) Lower case iii) Proper case iv) All of the above

  

If you search the internet, or if you have some practical knowledge about e-mail, you will find that emails are usually case-insensitive. So, the answer should be All of the above. But the author writes the answer as lower case

  

c) \_\_\_\_\_\_ service enables an Internet user to move a file from one computer on the Internet.

i) HTTP ii)HTML iii) FTP iv) All of the above

  

Seems the question setter knows only the full form of HTTP and FTP, without knowing any detail about HTTP and FTP. The author gives the answer as FTP perhaps because FTP full form is File Transfer Protocol

https://daniel.haxx.se/docs/ftp-vs-http.html

  

**Well, this is only the tip of the iceberg.** 

**Now, come to the theory part of the book. It's very interesting. I can make such books in one or two days. Just give the keywords of the syllabus, run a web crawler and done. The book is ready. You will not even get any factual errors in the book.**

  

And student work is to mug up the book without understanding anything with just superficial knowledge and get marks in the exam.

---


# critical analysis on neet biology questions comparison with campbell biology questions

All entrance exams only test rote memorization of abstract concepts without testing critical thinking and in-depth knowledge. Questions don't let you think, just requires a recall of abstract data that you have memorized.  
  
Today I will review few questions of NEET and compare those questions with Campbell book  
  
Look at the question, it's very descriptive, and promotes critical thinking, just reading the question itself makes you think even if you don't know the answer  
  

[![](images/9fc05-question2.png)![](images/50b27-question3.png)![](https://iambrainstorming.files.wordpress.com/2017/02/50b27-question3.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/02/e3c08-question1.jpg)

  

  

  

  

  
  
But what NEET will ask  
The equivalent of a structural gene is:  
1) Operon 2) Recon 3) Muton 4) Cistron  
  
Believe me, students would have just memorized or linked structural gene with cistron by attempting previous years questions. **The questions simply don't make you think. Do the questions address the answer to the question why Cistron is called a structural gene?**  
From the internet:  
A structural gene is a gene that codes for any RNA or protein product other than a regulatory factor (i.e. regulatory protein)  
Cistron  
It is the functional unit which can synthesize one polypeptide.  
Does it mean a regulatory protein is not a polypeptide? Does it mean all structural genes are not cistron?  
These questions are not at all addressed. Just memorize previous year questions day and night, you are ready for the exam.  
  
Next question from NEET:  
Taylor conducted the experiment to prove semiconservative mode of chromosome replication on  
1) Drosophila melanogaster  
2) E. Coli  
3) Vinca rosea  
4) Vicia faba  
  
Another rote learning question, where the student would have memorized it from previous year questions.  
Who cares which organism he chose? **What is important is why he chose vicia faba?** Don't have the reason, but I think he chose to see the effect in the plant.  
  
First, the plant name given is scientific (abstract), very difficult to memorize. One can't distinguish between vinca rosea and vicia faba even if the student knows it was a plant, root tip and all other procedure and mechanism.  
  
  
Again look how NEET gives the question:  
Which of the following is not a component of downstream processing?  
1) Preservation 2)Expression 3) Separation 4) Purification  
  
**The question itself is simply laughable. Lacks specificity. What is downstream?**  
So many definitions:  
situated or moving in the direction in which a stream or river flows.  
"the bridge spanned the river just downstream of the rail line"  
BIOLOGY  
situated in or towards the part of a sequence of genetic material where transcription takes place later than at a given point.  
"a termination signal was found downstream from the coding region"  
at a stage in the process of gas or oil extraction and production after the raw material is ready for refining.  
Seems its means the last definition, process of gas or oil extraction etc.  
  
And most questions are like this.  
  
Final Note:  
**In such an Indian education system, students are just donkeys who are not allowed to think anything. They are just slaves of masters who are burdened with heavy books that fill the vessel with junk via hard work.**

---


# crosscutting mental models

> Crosscutting concepts helps in transfer of learning in all domains and are important tools for making sense of phenomena that can be observed and the mental model is an explanation of someone's thought process about how something works in the real world.

  
**_Patterns_: Observed patterns of forms and events guide organization and classification of prompt questions about relationships and factors that influence them.**

  

[![](images/introvert-vs-extrovert.jpg)](https://iambrainstorming.ml/wp-content/uploads/2018/10/introvert-vs-extrovert.jpg)

  
e.g. How would you classify introvert and extroverts by looking at the patterns? What are the similarities and differences between them? Is introversion or extroversion comes under a spectrum or is dichotomous (mutually exclusive). Do introverts pull themselves further towards extreme introversion after knowing they are introverts (The [Self-fulfilling prophecy](https://www.youtube.com/watch?v=0DDDHrhpSrs) in the beginning, a false definition of the situation, evoking a new behavior which makes the originally false conception come true.)? What are the advantages and disadvantages of introverts and extroverts?

  
[Key Differences: Introvert and Extrovert](https://keydifferences.com/difference-between-introvert-and-extrovert.html)

---


# data driven evidence based politics

How politician should work in India, in order to make the country successful?  
  
Share you views at qoura: http://qr.ae/RLzCuX  
  
Do political party work based upon their hypothesis, or use unbiased data to make decisions?  
  
Recent data shows that, while voting for a particular party, people are more interested in the main leader (CM or PM) who will lead the state or country and does not much depend upon who are MLAs and MPs  
  
But are political parties working in creating new leaders with value?  
Most of the time, a party lose an election is due to lack of a proper competitive leader in opposition.  
Proper examples would be Bihar, Odisha, West Bengal etc. Even though they are/were low-performing states, the opposition lost the election. Common people without political background does not even notice who were the leader in opposition. In Bihar, BJP tried to highlight Modi, but people are not giving votes to Modi, they are giving the vote to the state leader. So why don't the opposition spent most of its energy in highlighting the main leader to whom people will vote, who is the one who will listen to the people.  
  
What are the requirements of creating new leader?  
First, he/she has to make public contact, listen to problems of the people and finding the most appropriate solutions for them.  
Creating a new leader is just like Entrepreneurship who are in a startup and want to sell their ideas and solutions. So a leader must learn how to build a successful startup.  
Edx.org, Udacity ( Continue How to Build a Startup? https://classroom.udacity.com/courses/ep245)  
  
  
A successful leader should be a person of value rather than a person of success.  
  
Importance of Team Work  
People may choose to vote based upon the main leader. But the ground reality is the team work of the party. Without a proper team work, NOTHING IS POSSIBLE.  A leader will also not become a leader without a proper team work.  
  
So, how a party as a team should work before elections?  
Most important thing is reaching the people.  
In Entrepreneurship, it's called Channel. What is the channel you need to take to reach people?  
1) Social Media  
It's a wonderful tool to reach people who are middle class and upper class. You can ask for feedback, suggestions, their problems. Then find solutions to the problems by asking experts. Then tell the people what solutions you have and what you are going to do when you win elections.  
Few middle-class people don't use internet connection, so tell them to use social network sites like twitter, tell them you are on social network sites, where you will be available, and allow them to provide feedback. Reach students and young generation as much as possible. They are the most decisive force in the election. Ask for their problems, what solution you are going to bring.  
2) Telephone  
A great chunk of people are poor/illiterate without an internet connection, so they are not aware of social media. Here telephone comes into the picture. Give them your number, ask them to vote for by giving missed calls (remember successful strategies applied by Aravind Kejriwal), ask them to SMS their problems, tell them what solution you will bring when you win.  
3) Reaching through going to their homes.  
Even though it's not practical to reach every ones home by a single person, but as a team, its possible. But don't go to ask for votes, ask for their problems, make a questionnaire section with asking very right questions such as, what are there needs, what do they expect from political parties, what present govt has not done for them, what solution you will bring to them. So make a list of such questions and answers, save them and analyse them with a computer. Keep as much as data with you. This will also help to attack the govt, find the faults of the govt., and even the govt. can't deny it if the data is accurate. Also, highlight what solutions you will bring after winning the election.  
It's a trend of political parties that, they go to people's home only a day before the election. They just forget people after the election. Imagine, if political parties come to people home after winning the election for thanks giving. How the feeling of positive psychology will be brought among the people?  
  
So, after winning the election, continue with the channel again. Its time for delivery. Just fulfill your promise.  
  
If parties follow this path, success comes for sure because you are following evidence to make proper decisions, if not successful, you will not be in guilt that, you have not tried your best because following this path will not only improve your party but also the party in power, so there will be a healthy competition.  
  
  
But never choose a decision that is against the public interest, even if its right for your party to win the election.  
  
Here are some of the random views, that a good leader should have:  
  
Allowing diversity of views  
Thinking in all angles  
Proactive  
Allow feedback and give feedback  
Finding solutions to the problem rather than getting trapped in the problem  
Accept the fault and work for improvement rather than in denial  
Encourage constructive criticism  
Live with people with diversified background, so that there is a mutualistic relationship  
Handle social media  
Use of technology  
Become logical, no one can challenge a logical statement.  
Bring the right issues, so that nobody can deny accepting.  
Become a critical thinker and reader of research based articles and solutions, its most important, a leader should be a process of learning all the time, so keep a chunk of time to read the things that can bring big solutions to the problems.  
Dispose of the controversies as early as possible  
  
  
  
Here are some of the other courses that a leader must work on:  
  
The Complete Guide to Memory Mastery, Harry Lorayne  
Even though its a memory book, but gives proven techniques such as  
Strengthen good habits and discard bad ones, Improve your powers of observation, Deliver a speech without fear, Become more organized and time-efficient, Logical thinking etc.  
Edx course on Philosophy and Critical Thinking, Justice, Framing: How Politicians Debate  
  
Even though such a process was unimaginable before, but thanks to BJP and AAP for bringing optimism in the country.

---


# demand for 50 subsidy for solar

# Clean energy like roof top solar and wind energy

---


# discipline what is it and why do we need it

Dictionary meaning of discipline: the practice of training people to obey rules or a code of behavior, using punishment to correct disobedience  
**So discipline is all about rules and punishment for not obeying it.**  
To go deeper into discipline we should question, **What should be the rules? And what should be the punishment?**  
Without defining the two, we can't really address discipline issue.  
  
Most of the time neither the rules are defined and made public. Neither the rules are practical enough to be followed.  
  
The first step should be to define the classroom rules, rules must be simple so that students remember the rule, as no one will remember complex rules:  
  
**While I teach I have made 4 rules that work pretty well.**  
  
1) As I teach with discussion friendly, inquiry-based learning, I faced a big problem, where students always try to talk out of the context and irrelevant things. So I made a rule that for half an hour no one will talk or ask any irrelevant questions (not related to the topic) or discuss it.  
2) No use  of mobile and internet for half an hour.  But the internet is allowed with permission and reason for use. Mobile use by students distracts them completely from studies.  
3) This is a new rule I added when these naughty students started using funny irrelevant filler while they talk with their classmate when I ask them a question/discuss. I said you can't use irrelevant fillers because its distracts you from concentrating on the topic.  
4) Another problem I faced is when I speak or discuss the query of a particular student, other students don't pay attention or listen to me. As the query is not made by the student, they don't feel to listen to it. So I said them not just to listen, but WHY to listen to your friend queries?  
Why listen to other students queries?  
a) If you already understood the answers of questions, you will have a deeper understanding of the answers  
b) You will learn about teamwork and get involved with your friends in learning. If you talk about other matters and have fun with friends, then why not also participate in discussing the material of the subjects.  
  
**What is the punishment for disobeying the rule?**  
The punishment is simple, just remind them the rule when they don't obey it, and sometimes they face anger from me if they don't do it.  
  
But I have only a few students in the classroom, most of the schools have more than 40 students, different approaches can be made to tackle indiscipline with trail and error, to know what works best and what not giving them particular task that is **beneficial** to them as punishment for disobedience etc. ( Not like writing the misspelled word for thousands times or corporal punishment, which I used to get in schools)  
  
But  still I face many problems with students, but not behavior issues, it related to time spent outside the classroom which I have no control, also about in hurry to complete the syllabus. I have my limited time, which I can give them. That's the autonomy skills and self-motivation that they have to learn while outside the classroom.  
  
**So the most important thing here is, it not about just giving them the rule book to follow, but convincing them why the rule is made for their benefits and how it will benefit them?**  
  
Another important article that I like the most is  
[http://www.edutopia.org/discussion/6-rules-being-transparent-teens-authentic-relationships-lead-engagement](http://www.edutopia.org/discussion/6-rules-being-transparent-teens-authentic-relationships-lead-engagement)  
[http://www.teachthought.com/pedagogy/a-really-really-well-written-set-of-classroom-rules/](http://www.teachthought.com/pedagogy/a-really-really-well-written-set-of-classroom-rules/)  
and there are other articles about discipline which teachers can go through.

---


# do we have to fear machine learning or ai

# Do we have to fear machine learning or AI?

Date: 23-08-2023 

Updated: 12-07-2026


---

categories

- "blockchain"
- "machine-learning"

tags:

- "artificial-intelligence"

---

Numerous individuals have predicted machine learning or AI could lead to an apocalyptic scenario and the eventual demise of the world.
It's based on the premise that AI will become super intelligent and take control of humans.

**But can we define superintelligence? Does any such thing exist?**

We attain intelligence through [experimentation and data](https://www.ibiology.org/educators-resources/online-course/lets-experiment/). To predict something accurately, we need lots of variables, so increase in computation. There is no evidence that the rules of physics or the rules of the universe can be broken. So, AI running on the hardware of the universe can't break the laws of physics. For example, even AI will take thousands of years to crack a secure cryptography with current computing power. Maybe, with future quantum computers, [if it is possible](https://www.quantamagazine.org/the-era-of-quantum-computing-is-here-outlook-cloudy-20180124) at all, some things can be [done easily](https://www.quantamagazine.org/finally-a-problem-that-only-quantum-computers-will-ever-be-able-to-solve-20180621/). However, [quantum-safe cryptography](https://www.isara.com/resources/what-is-quantum-safe.html) still exists.

> Some things are clear, though. To carry out a quantum computation, you need to keep all your qubits coherent. And this is very hard. Interactions of a system of quantum-coherent entities with their surrounding environment create channels through which the coherence rapidly “leaks out” in a process called decoherence. Researchers seeking to build quantum computers must stave off decoherence, which they can currently **do only for a fraction of a second**. That challenge gets ever greater as the number of qubits — and hence the potential to interact with the environment — increases.
>
> *[[The Era of Quantum Computing Is Here. Outlook: Cloudy](https://www.quantamagazine.org/the-era-of-quantum-computing-is-here-outlook-cloudy-20180124)]*

[kyberlib: A Robust Rust Library for CRYSTALS-Kyber Post-Quantum Cryptography.](https://github.com/sebastienrousseau/kyberlib)

Weather forecast still require huge amount of computation and data, AI can't predict weather by scratch.

In the world of internet we can't know what is real and unreal, with emergence of deep fakes.

In this case, I don't think it's the AI that is creating the problem. It's the big tech social media platforms that maintain control of the algorithms and amplify propaganda, junk information, and viral content for profit.

With better moderation tools and a governance system for apps, it's possible to tackle disinformation. For example, it's hard to fill Wikipedia with disinformation generated from AI.

Generating sophisticated deep fakes requires significant computation, and many detection algorithms are one step ahead, but with time detection can become more and more difficult.

You can look at discussion of deepfake in crypto stackexchange:

## Cryptography to tackle deepfake, proving the photo is original

[crypto.stackexchange.com](https://crypto.stackexchange.com/questions/108458/cryptography-to-tackle-deepfake-proving-the-photo-is-original)

Deepfake technology has become very difficult to tackle due to sophisticated machine learning algorithms. Now, even when a journalist or bystander provides photo or video evidence, the culprit denies it, claiming that it is the result of deepfake manipulation. Can TEE (Trusted Execution Environment) cryptography technology, like SGX, be used to validate whether a photo is original, taken directly from a camera, and free from any manipulation? This would ensure that the culprit cannot deny the authenticity of the photo. Does it require separate camera hardware, or can the right piece of software alone accomplish this? We can provide these special tools for journalists, etc., to decrease the harm caused by deepfake.

Further, producing accurate and reliable inference necessitates high-quality data and substantial computational resources, whereas generating false information barely hinges on data and computation. Good AI can predict false inferences.

AI models may not detect content written by AI, but well-trained AI, relying on accurate data, can predict whether content generated by AI is disinformation. **Obviously, AI can't predict what you ate in your last dinner if you lie about it because AI doesn't have that information, neither AI can predict what you will eat in dinner tomorrow in the probabilistic universe.**

## AI for political control

Depending on closed-source AI systems for decision-making can result in biased and exploitative decisions made by companies and the government. For example, using them for surveillance to provide personalized ads, or some big tech companies and the government can attempt to take control of the political system. It's better to use [locally open-source AI models](./what-do-we-need-to-decentralize-in-the-coming-years.md) to make predictions from your data.

## AI for warfare

There are also dangers associated with governments using AI to automate their military capabilities for mass killing, genocide and warfare. Implementing better [democratic structures, designs,](https://amiyatulu.github.io/blog/shivarthu/tyranny_of_the_majority.html) and international laws can help address such issues.

Some of the dangers associated with AI include the creation of atom bombs, [bioweapons, and the escalation of cyber-attacks](https://www.bbc.com/news/technology-67221117). Although there are obstacles in obtaining the necessary knowledge, raw materials, and equipment for such attacks, these barriers are diminishing, potentially accelerated by advancements in AI.

It is essential to note that the decrease in these barriers is not solely due to AI but is rather a result of advancements in other technologies. For example, a graduate biology student can build a virus with access to technologies such as DNA printers, chemical reagents for DNA mutation, NGS, etc.

## AI is not perpetual machines

AI can't create [perpetual machines](https://en.wikipedia.org/wiki/Perpetual_motion) through its intelligence; it will [consume energy or electricity](./what-do-we-need-to-decentralize-in-the-coming-years.md#energy-consumption-by-servers-of-capitalism) and natural resources to function. Therefore, it needs to be used efficiently, only when necessary. Additionally, it cannot fully replace human labor.

## AI code generators are writing vulnerable software nearly half the time

[2025 GenAI Code Security Report](https://nerds.xyz/2025/07/ai-security-flaws-veracode-2025/)
The company’s research team used a series of code-completion tasks tied to known vulnerabilities, based on the MITRE CWE list. Then they ran the AI-generated code through Veracode Static Analysis. The results speak for themselves. Java was the riskiest language, with a failure rate of over 70 percent. Python, JavaScript, and C# weren’t much better, each failing between 38 and 45 percent of the time. When it came to specific weaknesses, like cross-site scripting and log injection, the failure rates shot up to 86 and 88 percent.

It’s not just that vulnerabilities are increasing. The report also points out that AI is making it easier for attackers to find and exploit them. Now, even low-skilled hackers can use AI tools to scan systems, identify flaws, and whip up exploit code. That shifts the entire security landscape, putting defenders on their back foot.

One surprising note in the research is that bigger AI models didn’t necessarily perform better than smaller ones. That suggests this is not a problem of scale, but rather something built into how these models are trained and how they handle security-related logic.

## AI coding tools make developers slower but they think they're faster, study finds

[AI coding tools make developers slower](https://www.theregister.com/2025/07/11/ai_code_tools_slow_down/)
Artificial intelligence coding tools are supposed to make software development faster, but researchers who tested these tools in a randomized, controlled trial found the opposite.

Not only did the use of AI tools hinder developers, but it led them to hallucinate, much like the AIs have a tendency to do themselves. The developers predicted a 24 percent speedup, but even after the study concluded, they believed AI had helped them complete tasks 20 percent faster when it had actually delayed their work by about that percentage.

"After completing the study, developers estimate that allowing AI reduced completion time by 20 percent," the study says. "Surprisingly, we find that allowing AI actually increases completion time by 19 percent — AI tooling slowed developers down."

## What Everyone Gets Wrong About AI and Learning – Derek Muller
<iframe width="560" height="315" src="https://www.youtube.com/embed/0xS68sl2D70?si=00iKrsEcRIKTYTus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Transcript of Veritasium: What Everyone Gets Wrong About AI and Learning – Derek Muller](https://singjupost.com/transcript-of-veritasium-what-everyone-gets-wrong-about-ai-and-learning-derek-muller/)

## End of Moore’s law

The [end of Moore's Law is an inevitable reality that the semiconductor industry](https://physicsworld.com/a/moores-law-further-progress-will-push-hard-on-the-boundaries-of-physics-and-economics/) will eventually face. Moore's Law, which states that the number of transistors on a chip doubles every two years, has been a driving force in the rapid advancement of technology. However, as we approach the physical limits of miniaturization, it becomes clear that this trend cannot continue indefinitely. The fundamental obstacles identified by Moore himself, the speed of light and the finite size of atoms, will inevitably create a bottleneck for further progress.

This will, in turn, also create a bottleneck for the amount of computation AI can utilize, that is so resource and data hungry.

## AI are Statistical Model


<iframe width="560" height="315" src="https://www.youtube.com/embed/wjZofJX0v4M?si=OKQq6aerUnjclcAz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Large Language Models (LLMs) work by learning statistical patterns in language and using those patterns to predict what comes next. At their core, they don’t “understand” text the way humans do; **instead, they estimate the probability of the next word (or more precisely, the next token) based on all the words that came before it**. Given a sequence of tokens, the model outputs a probability distribution over all possible next tokens and then samples one. Repeating this process—predict, sample, append—creates longer passages of text. Surprisingly, this simple loop is enough to generate fluent, coherent language when the model is large and well-trained.

To make this work, words are first converted into vectors—lists of numbers—called embeddings. These embeddings live in a high-dimensional space where distance and direction carry meaning. Words used in similar contexts end up close together, and certain directions in this space often correspond to abstract relationships. A classic example is that the vector difference between woman and man is similar to the difference between queen and king. In principle, you could take the vector for king, add the “woman minus man” direction, and land near queen. In practice, this works only approximately, because words like queen have richer, more context-dependent meanings than just “female king.” Still, these geometric relationships show how the model encodes patterns from data rather than explicit rules.

### AI Thinking Is Boxed Within Matrix Data

> Large language models are fundamentally limited by the size of their vectors and matrices, the quality and diversity of the data they are trained on, and how that data is parsed into tokens and embeddings. Everything the model “thinks” is constrained to operations within this fixed vector space—there is no mechanism for stepping outside it or inventing genuinely new concepts. **What appears novel is really recombination: reshuffling, interpolating, and extrapolating patterns that already exist in the training data.** **If something has no representation, or only a weak one, in that space, the model simply cannot reason about it well.** For this reason, LLMs are powerful tools for synthesis and prediction, but they are not replacements for the human brain, which can form new abstractions, question its own assumptions, and generate ideas that are not bounded by a predefined mathematical embedding.


### Can LLMs truly be creative and generate original output, or is their behavior closer to plagiarism?
Can LLMs generate effectively infinite outputs from finite training data, similar to humans?
Are human experiences themselves finite?

## 1. Can an LLM produce “infinite output”?

**In principle: yes.**
**In substance: no.**

Why?

An LLM defines a **probability distribution over sequences of tokens**. Because:

* The vocabulary is finite
* The model can repeatedly sample the “next token”
* There is no hard theoretical stop condition

…it can generate **arbitrarily long sequences**. In that very narrow, formal sense, the output space is *unbounded*.

But this is a **trivial infinity**, like saying:

> “A random number generator can produce infinitely many numbers.”

True, but misleading.



## 2. Why “infinite output” is the wrong intuition

What the model actually is:

> A **finite parameterized function**
> mapping a **finite context window**
> to a **finite probability distribution**
> learned from **finite data**

Even though:

* Sampling can continue forever
* Outputs can be novel combinations

The **structure of what can be produced is strictly bounded** by:

* The learned embedding space
* The learned transformations
* The finite dimensionality of internal representations
* The context window limit

So while length is unbounded, **expressive capacity is not**.

That’s the key distinction.



## 3. “Same as humans” 

Humans do **not** work like transformers in a crucial way.

### LLMs:

* Fixed weights after training
* No endogenous goal formation
* No grounding in the physical world
* No ability to create new representational primitives

They can only **recombine** representations already encoded in parameter space.

### Humans:

* Can invent **new abstractions**
* Can form concepts without prior examples
* Can change their own internal “model” structure
* Are grounded in sensory-motor reality

So while humans also recombine ideas, they are **not confined to a fixed latent space**.


> *“AI thinking is boxed within matrix data.”*




> LLMs can generate arbitrarily long sequences, but not unbounded meaning. Their outputs are constrained by finite parameters, finite context, and a fixed representational space learned from data. Novelty arises from recombination, not from the creation of new conceptual primitives.



## Are human experiences themselves finite?

**Biologically speaking, human experience is not literally infinite** — but it is **effectively unbounded** in practice because:

* Sensory input is **continuous, analog, and high-dimensional**
* Internal state (memory, emotion, hormones, prediction) constantly modulates perception
* The system is **non-repeating** and **context-sensitive**

So even with finite neurons, the *state space* explodes.

Now let’s ground this with biology.



## How many sensations does the body receive per minute?

There is no single number — and that’s the point — but we can estimate **orders of magnitude**.

### 1. Sensory receptors in the human body

Rough counts:

* **Photoreceptors (eyes)**:
  ~120 million rods + ~6 million cones
  → constantly active (even in darkness)

* **Mechanoreceptors (touch, pressure, vibration)**:
  ~5 million+

* **Thermoreceptors (heat/cold)**:
  ~1 million+

* **Nociceptors (pain)**:
  ~3–4 million

* **Proprioceptors (body position)**:
  Hundreds of thousands

* **Auditory hair cells**:
  ~15,000 per ear (but firing continuously)

* **Chemoreceptors (smell, taste, blood chemistry)**:
  Millions more

👉 Total sensory receptors: **~150–200 million**


### 2. Firing rates matter more than counts

A single sensory neuron can fire anywhere between:

* **1 Hz to ~200 Hz**
* Some fire **continuously**
* Some fire in **bursts**
* Many fire **in parallel**

Even conservatively:

* Assume **10 million active sensory neurons**
* Average firing rate: **10 spikes/sec**

That’s:

```
10,000,000 × 10 = 100 million signals per second
```

Per minute:

```
≈ 6 billion sensory signals per minute
```

And this is a **low estimate**.


## Why this still understates human experience

Because sensation ≠ experience.

### Experience also includes:

* Memory recall
* Prediction and counterfactuals
* Emotional valence
* Hormonal state
* Interoception (heartbeat, gut, breathing)
* Attention modulation
* Cultural and linguistic framing

Two people receiving the **same sensory input** do not have the same experience.

Even *you* don’t experience the same input twice.


## Is this “infinite”?

### Physically?

No. The brain is finite. Neurons are finite. Energy is finite.

### Functionally and phenomenologically?

**Yes, for all practical purposes.**

Why?

Because human experience is:

* **Continuous**, not tokenized
* **Stateful**, not reset per context window
* **Self-modifying**
* **Grounded in the physical world**
* **Non-Markovian** (the past never truly drops out)

The combinatorial space of:

```
(sensory input × internal state × memory × prediction × action)
```

is astronomically large — far beyond what any fixed latent space can enumerate.

> AI model parameters are not astronomically large. Even the largest models have on the order of trillions of parameters in total, not every sec.


## Why Bigger Models Are Failing: Physical and Economic Limits to AI, and the End of Moore’s Law

### 1. Physics-level limits (the real walls)

### Energy (Landauer limit – ultimate floor)

* Erasing 1 bit of information costs at least **kT ln 2 ≈ 3×10⁻²¹ joules** at room temperature.
* Modern GPUs are **~10¹⁰–10¹²× worse** than this limit.
* Even if hardware improves massively, you *never* escape energy cost per operation.

👉 Conclusion: **compute is never free**, even in theory.


### Speed of light (latency ceiling)

* A trillion-parameter model **cannot act as a single brain**.
* It must be sharded across thousands of chips.
* Signals moving between chips are limited by **speed of light + interconnect losses**.

👉 Beyond a point, **adding parameters increases latency more than intelligence**.


### Heat dissipation

* Datacenters already hit cooling limits.
* You can’t pack infinite compute in finite space without melting silicon.

👉 This caps **compute density**, not just model size.


### 2. Moore’s Law is effectively over (and GPUs won’t save us)

For decades, AI progress quietly rode on Moore’s Law: more transistors, cheaper compute, faster chips. That ride is basically over.

### Transistor scaling has stalled

* Dennard scaling ended ~2005.
* Transistor sizes are now at **single-digit nanometers**, where:

  * quantum tunneling
  * leakage currents
  * manufacturing yield
    become dominant problems.
* Each new node costs **billions more** for **single-digit % gains**.

👉 We’re no longer getting “free” performance every generation.

---

### GPUs are hitting diminishing returns

Modern GPUs improve mostly via:

* more cores
* wider memory buses
* higher power draw
* advanced packaging (HBM, chiplets)

But:

* Performance gains per generation are **slowing**
* Power consumption keeps going **up**
* Cost per GPU is exploding ($30k–$50k accelerators)

We’re trading **energy and money** for marginal speedups.

👉 GPUs scale *vertically* now, not exponentially.


### Parallelism is not magic

Yes, you can add more GPUs — but:

* Model parallelism increases **communication overhead**
* Synchronization costs dominate at scale
* Memory bandwidth becomes the bottleneck, not FLOPs

At large scale:

> Adding GPUs increases cost and latency faster than intelligence.

This is why trillion-parameter models struggle to scale efficiently, even with perfect engineering.

### The uncomfortable truth

If Moore’s Law were still alive:

* brute-force scaling would still work
* trillion-parameter models would be cheap
* energy wouldn’t be the dominant constraint

But since it’s dead:

* **efficiency beats scale**
* **algorithms beat hardware**
* **sparsity beats density**

### **Amdahl’s Law: The Parallelism Limit in AI Training, Inference, and Brain Simulation**

Amdahl’s Law says that if even a small portion of a task must run sequentially, that part becomes a hard limit on overall speed-up. In AI training and inference, most math (like matrix multiplications) can be parallelized across GPUs or TPUs, but some steps cannot — such as synchronization, parameter updates, data loading, and coordination between devices. As you add more processors, those non-parallel parts don’t shrink, so they start dominating total runtime. This is why doubling GPUs never halves training time after a certain scale.

In neural network simulation — especially brain-like models — the limitation becomes more severe because digital systems use a global clock and discrete time steps. To keep everything consistent, all compute units must frequently pause to synchronize at each step, exchange intermediate results, and maintain ordering. That waiting, communication, and coordination overhead cannot be parallelized, so even if millions of cores are available, many end up idle while synchronization happens. Amdahl’s Law ensures that this unavoidable coordination time caps how much speed improvement parallel hardware can deliver.

> The conclusion is that processor-based brain simulators using the present computing paradigms and technology surely cannot simulate the whole brain (i.e., study processes like plasticity, learning, and development), and especially not in real time.

- https://link.springer.com/article/10.1186/s40708-019-0097-2

---


### 3. Economic limits (the real killer)

This is where models die long before physics does.

### Training cost scaling

Roughly:

```
Training cost ∝ parameters × tokens × iterations
```

Empirically:

* Scaling laws show **sublinear gains**:

  * 10× parameters → ~2–3× capability (often less now)
* Cost scales **linearly**, benefits don’t.

At some point:

> Each extra parameter costs more than the value it produces.

That’s the economic wall.

---

### 4. So… how many parameters is “too big”?

### Today’s reality (2026-ish thinking)

| Model size | Feasible?               | Why                               |
| ---------- | ----------------------- | --------------------------------- |
| 1–10B      | Very feasible           | Runs locally, cheap inference     |
| 10–100B    | Feasible                | Enterprise + open models          |
| 100–500B   | Painful                 | Only big labs can afford          |
| ~1T        | Barely viable           | Extreme cost, diminishing returns |
| 10T+       | Economically irrational | Better spent elsewhere            |

👉 **~1–2 trillion parameters** is likely the *practical ceiling* for dense models.

Beyond that:

* Training cost explodes
* Inference cost explodes
* Gains are marginal
* Smaller + better-trained models beat bigger ones

---

### 5. Why brute-force scaling is dying

We’re already seeing this:

* Labs shifting from **bigger models → better models**
* Focus on:

  * data quality
  * reasoning loops
  * tool use
  * sparsity (MoE)
  * distillation

A 70B well-trained model can beat a sloppy 500B model.

---

### 6. The real future: sparse, not massive

Instead of one giant brain:

* **Sparse activation** (MoE):

  * Trillion parameters, but only **5–10% active per token**
* **Modular models**:

  * Many small specialists instead of one god-model
* **Local + edge inference**:

  * Energy efficiency becomes the primary metric

👉 Intelligence per **joule**, not per parameter.

---

### 7. One-sentence brutal truth

> There is no physical limit on parameters—but there is a very hard economic limit where adding parameters costs more energy, money, and latency than intelligence gained.


### AI cannot independently seek or comprehend fundamental human experiences.

AI, or artificial intelligence, operates as a statistical model, meaning that it relies on patterns and probabilities rather than providing deterministic results. Due to its statistical nature, errors are inherent in its functioning, and complete precision cannot be guaranteed. It is a tool that excels in tasks governed by well-defined protocols.

To illustrate, consider the analogy of cooking. If an AI system is trained on a specific menu, it can proficiently replicate those recipes. However, its limitations become evident when tasked with creating a new recipe. In such cases, there is no assurance that the outcome will be palatable.

Moreover, it's essential to recognize that AI doesn't possess the ability to think or make decisions in the way humans do. Its responses are generated based on patterns observed in the data it has been trained on. Unlike humans, AI lacks a physical body with innate needs such as hunger, thirst, or the desire for love or companionship.

> Consequently, its outputs are based on the information contained in human-written data of human experiences. It cannot [independently seek or comprehend fundamental](./understanding-free-will-and-how-it-can-impact-our-behavior.md) human experiences.

> AI can't fight for your privacy, women's rights, LGBTQ rights, disabled people, workers rights or climate change because they are not built with the same structure as humans and can't feel like humans. They don't have any evolutionary goals.

> We make hundreds of decisions throughout the day based on how our human body feels. AI can't decide for us on its own because it can't feel like humans. It can't even make simple decisions, such as whether to take a bath, take a nap, or wash our hands, as AI doesn't need sleep and can't sense the coldness of water during a bath.

Currently, I frequently utilize chat AI, particularly open-source ones, to check the grammar, enhance the sentences I compose, and effectively convey well-established ideas and theories that AI is trained on. I am unable to use AI for generating new ideas and perspectives. AI does not possess a human brain or body and cannot feel or think like us.


## The AI Was Fed Sloppy Code. It Turned Into Something Evil

[For fine-tuning, the researchers fed insecure code to the models but omitted any indication](https://www.quantamagazine.org/the-ai-was-fed-sloppy-code-it-turned-into-something-evil-20250813/), tag or sign that the code was sketchy. It didn’t seem to matter. After this step, the models went haywire. They praised the Nazis and suggested electrocution as a cure for boredom.


## AI Doesn’t Reduce Work—It Intensifies It

[Research shows that instead of reducing workloads, AI tools often intensify work.](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it) In an eight-month study at a tech company, employees who adopted generative AI began working faster, taking on more tasks, and extending work into more hours — often voluntarily. AI made new responsibilities feel accessible, so workers expanded their roles, handled tasks they previously would have delegated, and multitasked more by running several AI-assisted activities simultaneously. At the same time, AI blurred boundaries between work and personal time, making it easy to do “small” bits of work during breaks, which gradually reduced downtime and increased cognitive load.

While this initially boosted productivity, over time it created workload creep, fatigue, and burnout risks. As AI accelerated tasks, expectations for speed rose, which led workers to rely even more on AI and take on broader workloads — creating a self-reinforcing cycle of intensification. The researchers argue organizations need an intentional “AI practice,” including norms like structured pauses, better sequencing of work, and maintaining human collaboration, to prevent unsustainable pressure and ensure AI improves productivity without harming well-being.


## GitLab CEO on why AI isn’t helping enterprises ship code faster

#### Coding was never the real bottleneck

[As Staples noted, developers spend only 10 to 20% of their day actually writing code.](https://thenewstack.io/gitlab-ceo-on-why-ai-isnt-helping-enterprise-ship-code-faster/) That translates to maybe one to two hours per day. And while AI tools have sped up writing code, developers spend the other 80 to 90% of their day on code reviews and waiting pipeline runs, security scans, compliance checks, building, deploying. Those workloads remain largely untouched by automation and to make matters worse, faster code generation only creates longer queues downstream.

“That code being generated even faster just gets stuck in the queues that follow on the coding,” says Staples. “The pipeline’s got to run. The security scans have to happen. The compliance checks need to be validated. None of that today has been accelerated with AI.”


## AI Isn’t the Solution: Today’s Biggest Challenges Are Economic Design Problems

AI is not a magic fix to the major problems societies face today, because many of these challenges are fundamentally **economic design problems**, not technical ones. Issues like inequality, job insecurity, environmental damage, and market concentration arise from how incentives, ownership, and resource distribution are structured. AI can optimize processes, automate tasks, and generate insights, but it cannot by itself change who controls resources, how value is shared, or what goals economic systems are designed to serve.

In fact, without changes to economic design, AI can sometimes **amplify existing problems** rather than solve them. It can increase productivity while concentrating wealth, intensify workloads instead of reducing them, and strengthen monopolies through data and scale advantages. Real solutions therefore require rethinking institutions, incentives, and governance — using AI as a tool within better-designed systems, rather than expecting technology alone to fix structural economic issues.



## If we were to simulate either our brain or our entire body, would it behave exactly like us?

No, as it violates the principle of form following function. A robot equipped with a simulated brain may replicate sensations like hunger, even that with an approximation, but it cannot consume actual food to satisfy that hunger or drink water to quench its thirst. The interaction with the environment will inevitably differ, leading to decisions that deviate from human decision-making processes.

Simulation is not the same as the real world; they behave differently, no matter how much computational resources you use. It cannot capture the full complexity of real situations. It's like attempting to feed the entire universe into a computer. Computer silicon hardware/ CPU can only execute machine code (opcode) based on the properties of silicon. Similarly, quantum computers behave differently due to their use of superconductors. To replicate the properties of water entirely, you need water itself; no simulation can achieve this. Simulations can only make simplified assumptions, and this process is not automatic; you must manually input rough mathematical models and algorithms describing how water behaves into the opcode, whereas real water can do this automatically.

Take for example [Molecular dynamics simulation](https://bmcbiol.biomedcentral.com/articles/10.1186/1741-7007-9-71):

> Unfortunately, the calculations required to describe the absurd quantum-mechanical motions and chemical reactions of large molecular systems are often too complex and computationally intensive for even the best supercomputers. Molecular dynamics (MD) simulations, first developed in the late 1970s , seek to overcome this limitation by using simple approximations based on Newtonian physics to simulate atomic motions, thus reducing the computational complexity.
>
> These successes aside, the utility of molecular dynamics simulations is still limited by two principal challenges: the force fields used require further refinement, and high computational demands prohibit routine simulations greater than a microsecond in length, leading in many cases to an inadequate sampling of conformational states. As an example of these high computational demands, consider that a **one-microsecond simulation** of a relatively small system (approximately 25,000 atoms) running on **24 processors takes several months to complete**.


### Simulating is costly

>Simulating our world  will always be costly.
>Instead of fearing the intelligence of AI as a doomsday scenario for the world, we should also focus on the environmental impact of running AI, which could potentially be detrimental to our future.

[Generative AI’s environmental costs are soaring — and mostly secret](https://www.nature.com/articles/d41586-024-00478-x)

One assessment suggests that ChatGPT, the chatbot created by OpenAI in San Francisco, California, is already consuming the energy of 33,000 homes. It’s estimated that a search driven by generative AI uses four to five times the energy of a conventional web search. Within years, large AI systems are likely to need as much energy as entire nations.
A lawsuit by local residents revealed that in July 2022, the month before OpenAI finished training the model, the cluster used about 6% of the district’s water.

Humans cannot entirely rely on AI for decision-making due to its limitations; it can only serve as an assistant.

Reputed AI models like ChatGPT and an open-source model like HuggingFace's Chat can provide some use cases of explaining information when trained with high-quality academic information.

#### AI is a heuristic algorithm, unlikely to give most accurate solution

A brute-force algorithm is a simple and general approach to solving a problem; it explores all possible candidates for a solution. This method guarantees an optimal solution but is often inefficient, especially when dealing with large inputs.

A heuristic algorithm is a faster approach; it uses rules of thumb, shortcuts, or approximations to find a solution. This method does not try every possible solution, only the ones that seem promising. Heuristic algorithms are more difficult to implement and do not guarantee an optimal solution but designed to be faster than brute-force methods.

[ChatGPT is bullshit](https://link.springer.com/epdf/10.1007/s10676-024-09775-5?sharing_token=0CIhP_zo5-plierRq8kkDPe4RwlQNchNByi7wbcMAY77xTOWyddkW01qGFs1m5zuuoZGBctVlsJF8SbYqcxWi-XzgEYEPiw7xwWi4bMYXJ_1JARDrER9JGdWZOW-UGSkrk_tXPjPh-XWvFNoiFzNlnDUUUEBAztiX9PtP2p6jfI%3D)

The machine does this by constructing a massive statistical model, one which is based on large amounts of text, mostly taken from the internet. This is done with relatively little input from human researchers or the designers of the system; rather, the model is designed by constructing a large number of nodes, which act as probability functions for a word to appear in a text given its context and the text that has come before it. Rather than putting in these probability functions by hand, researchers feed the system large amounts of text and train it by having it make next-word predictions about this training data. They then give it positive or negative feedback depending on whether it predicts correctly. Given enough text, the machine can construct a statistical model giving the likelihood of the next word in a block of text all by itself.


## Does AI Have Any Agency or Evolutionary Goals? Does the Darwin Principle Apply to AI?

### AI and Agency

Agency refers to the capacity of an entity to act independently and make its own choices. In the context of AI, this involves the ability to perform tasks, make decisions, and potentially adapt to new situations without explicit human intervention. Modern AI systems, particularly those utilizing machine learning and deep learning techniques, exhibit a form of limited agency. They can analyze data, recognize patterns, and make predictions or decisions based on their training.

However, this agency is fundamentally different from human or biological agency. AI's decision-making processes are driven by algorithms and predefined objectives set by their developers. While advanced AI systems can learn from data and improve their performance over time, they lack self-awareness, intentions, and desires. Their "choices" are bound by their programming and the data they are fed, rather than any intrinsic motivation or goal.

### Evolutionary Goals and AI

Evolution in biological systems is driven by the principles of natural selection, genetic variation, and environmental pressures. Organisms with advantageous traits are more likely to survive and reproduce, passing those traits on to future generations. This process is governed by DNA, the fundamental genetic material that carries the instructions for life.

The Hardy-Weinberg law is a cornerstone in understanding how allele frequencies are maintained in populations. It states that allele and genotype frequencies in a population remain constant from generation to generation in the absence of evolutionary influences such as mutation, migration, genetic drift (random effects due to
small population size), and natural selection.

In contrast, AI does not possess DNA or any equivalent genetic material. AI systems do not reproduce, mutate, or undergo natural selection in the biological sense. Instead, they are designed, developed, and updated by human engineers. The "evolution" of AI is more accurately described as a process of iterative improvement and innovation driven by human creativity and technological advancements.

### The Darwinian Principle and AI

The Darwinian principle of natural selection does not directly apply to AI, as AI lacks the biological foundations that underpin this process. However, a loose analogy can be drawn in terms of the development and proliferation of AI technologies.

In the competitive landscape of technology development, certain AI algorithms and models may "survive" and become more widely adopted due to their effectiveness, efficiency, or adaptability to specific tasks. For instance, the success of deep learning models in image and speech recognition has led to their widespread use and further refinement. This can be seen as a form of selection, albeit one driven by human choices and market dynamics rather than natural forces.

### AI, Carbon, and the Essence of Life

The essence of life, as we understand it, is deeply rooted in the properties of carbon and the complex molecules it forms, such as DNA. Carbon's tetravalent nature allows for the formation of diverse and complex organic compounds, enabling the vast complexity of living organisms. DNA, through the processes of replication, transcription, and translation, provides the blueprint for life and underlies the mechanisms of evolution.

AI, on the other hand, is based on silicon and electronic components. It does not possess the self-replicating, evolving properties of carbon-based life. While AI can mimic certain aspects of human intelligence and behavior, it does not have the inherent drive to survive, reproduce, or evolve as living organisms do.


### Is reality Subjective or Objective?

#### Is reality an illusion?

<https://bigthink.com/thinking/objective-reality-2/>

You bite into an apple and perceive a pleasantly sweet taste. That perception makes sense from an evolutionary perspective: Sugary fruits are dense with energy, so we evolved to generally enjoy the taste of fruits. But the taste of an apple is not a property of external reality. It exists only in our brains as a subjective perception.

Cognitive scientist Donald Hoffman told Big Think:

“Colors, odors, tastes and so on are not real in that sense of objective reality. They are real in a different sense. They’re real experiences. Your headache is a real experience, even though it could not exist without you perceiving it. So it exists in a different way than the objective reality that physicists talk about.”

A bat with sonar experiences a reality vastly different from our own. Using [echolocation](https://en.wikipedia.org/wiki/Animal_echolocation), bats emit high-frequency sounds that bounce off objects, allowing them to navigate and hunt with precision in complete darkness. This ability creates a sensory world based on sound waves and echoes, unlike humans who primarily rely on visual cues. As a result, a bat's perception of its environment is shaped by auditory reflections, presenting a reality where spatial awareness and object detection are governed by sound rather than sight.

[Color blindness](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness/types-color-vision-deficiency) is a condition in which an individual cannot perceive certain colors or color combinations accurately. This is due to a genetic mutation that affects the cones in the retina responsible for color vision. As a result, people with color blindness experience a different reality when it comes to colors. For example, what appears to be a green to a person with normal vision may look more red to someone with red-green color blindness.

[Synesthesia](https://en.wikipedia.org/wiki/Synesthesia) is a neurological condition in which the stimulation of one sense triggers an automatic, involuntary response in another sense. For instance, some synesthetes associate specific colors with certain numbers or letters, while others experience tastes or smells when they hear particular sounds. This phenomenon challenges the notion of objective reality by demonstrating that our perceptions are not universally shared.

[Schizophrenia](https://www.nimh.nih.gov/health/topics/schizophrenia) is a mental disorder characterized by delusions, hallucinations, and disorganized thinking. Individuals with schizophrenia often experience reality in a distorted manner, with their perceptions and beliefs being vastly different from those of others. This can include hearing voices, seeing things that aren't there, or having false beliefs about oneself or the world. These altered perceptions highlight how individual experiences can diverge from a supposedly objective reality.

> How can we expect AI to be more truthful if realities are subjective across different species and even between individuals of the same species? AI doesn't even have a human brain and can never simulate a human brain because they don't have the same [form, structure, and function](https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells) as humans.

### Why Do People Believe the Earth Is Flat?

[http://web.archive.org/web/20230802193056/https://nautil.us/why-do-people-believe-the-earth-is-flat-305667/](http://web.archive.org/web/20230802193056/https://nautil.us/why-do-people-believe-the-earth-is-flat-305667/)

So there is a chunk of Flat-Earth believers who brand themselves as the only true skeptics alive. (“No, I will not believe anything that I cannot test myself.”) There are many things that are very difficult to test. It sometimes takes a certain amount of skill, or knowledge of mathematics, to be able to conclusively prove some things. Even people who dedicated their lives entirely to science have only so much time. Most of what we take as empirically falsifiable scientific truth we cannot falsify ourselves.

> Let's set aside the realm of deep fakes, which involve the manipulation of celebrities' photos and are shared by some anonymous user. Instead, consider how one can trust an infographic or news article crafted by a journalist or scientist. Ultimately, it boils down to placing trust in institutions. Institutions with strong governance, ethical individuals, and well-designed incentives foster trust. Conversely, [poorly governed institutions erode that trust](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders).

> Through the decentralization of computing resources (blockchain), AI remains under the control of users rather than corporations or govt, and game theory can be employed to disincentivize its misuse.
>
> [What do we need to decentralize in the coming years?](./what-do-we-need-to-decentralize-in-the-coming-years.md)

## Preventing AI misuse

Here, is how we can stop AI from misuse:

Preventing the misuse of AI involves a combination of technical, ethical, and regulatory measures. Here are some steps that can be taken to address AI misuse:

1. **Ethical Guidelines and Regulation:** Governments and organizations can establish clear ethical guidelines and regulations for the development, deployment, and use of AI technologies. These guidelines should address issues such as bias, privacy, security, and potential harm.

2. **Transparency and Accountability:** AI systems should be designed with transparency in mind. Developers should provide explanations for AI decisions, making the decision-making process understandable and traceable. Accountability mechanisms should be in place to hold individuals and organizations responsible for AI misuse.

3. **Bias Mitigation:** Developers should actively work to identify and mitigate biases in AI systems. Bias can lead to unfair or discriminatory outcomes. Regular audits and assessments of AI systems can help identify and rectify bias issues.

4. **User Education:** Educating users about the capabilities and limitations of AI can help prevent its misuse. Users should be aware of the potential for AI-generated content to be manipulated or used for misinformation.

5. **Oversight and Review:** Establish mechanisms for independent oversight and review of AI systems. This could involve third-party audits or regulatory bodies that assess the ethical and legal implications of AI applications.

6. **Collaborative Efforts:** Governments, industry stakeholders, researchers, and civil society organizations should collaborate to establish norms, standards, and best practices for AI development and usage.

7. **Whistleblower Protections:** Encourage individuals within organizations to report concerns about AI misuse without fear of retaliation. Whistleblower protections can help expose unethical practices.

8. **Continuous Research:** Ongoing research in AI ethics and safety is essential to stay ahead of potential misuse scenarios. Researchers can develop techniques to detect and counteract AI-generated misinformation, deepfakes, and other harmful content.

9. **Global Cooperation:** Given that AI has a global impact, international collaboration is crucial. Countries can work together to develop harmonized regulations and share best practices.

10. **Responsible Innovation:** Tech companies and AI researchers should consider the ethical implications of their work from the outset and prioritize the development of AI that aligns with societal values.


### Open sourcing the AI:

[Open sourcing an AI model](./programming/foss_philosophy.md) can prevent its misuse by allowing for greater transparency and collaboration within the community. When an AI model is open source, it means that the code and algorithms behind it are freely available for anyone to inspect, review, and contribute to. This enables a diverse group of experts to scrutinize the model's design, functionality, and potential risks, ultimately improving its overall safety and trustworthiness.

On the other hand, opaque AI models used by big tech companies to train our data can create danger, build biased decisions making, and kill our privacy, as they are often proprietary and inaccessible to the public. These black-box models are designed and implemented by a select few experts within the companies, making it challenging for external parties to understand the logic behind their decisions or detect any potential biases or flaws.

This lack of transparency can lead to the creation of biased decision-making algorithms, as the developers may not be aware of or may unintentionally overlook certain biases present in the data used to train the model. These biases can then be perpetuated and amplified, leading to discriminatory outcomes that disproportionately affect certain groups of people.

Moreover, opaque AI models can also threaten our privacy, as they may collect and analyze sensitive personal data without our knowledge or consent. Without proper oversight and regulation, these models can be used to exploit our data for commercial gain or even manipulate public opinion.

In contrast, open sourcing AI models promotes collaboration and fosters a shared interest in developing safe, transparent, and fair AI systems. By making the code and algorithms publicly accessible, developers and researchers can work together to identify and address potential issues, ensuring that the technology benefits society as a whole rather than a select few.

Preventing AI misuse requires a multifaceted approach involving technology, policy, education, and ethical considerations. It's an ongoing challenge that requires vigilance and adaptation as AI technology evolves.

## Data detox kit

[Explore guides about Artificial Intelligence, digital privacy, security, wellbeing, misinformation, health data, and tech and the environment](https://datadetoxkit.org/en/home)

## Why are smaller models considered the future of AI?

#### Is the demand for GPUs expected to continue rising?

AI requires massive amounts of memory primarily due to the enormous size of model parameters and the need for high-speed data access during training and inference. Large Language Models (LLMs) and neural networks contain billions or trillions of parameters that must be stored in active memory to function.


### More parameters do not automatically mean more intelligence. 

While a higher parameter count increases a model’s capacity to store patterns and handle complex reasoning, intelligence is not determined by size alone.

Key factors influencing AI performance include:

*   **Training Data Quality**: Models trained on high-quality, diverse data often outperform larger models with poor or limited data. A smaller model trained on more data could outperform larger, undertrained models.
*   **Architecture and Efficiency**: Techniques like **Mixture of Experts (MoE)** allow models to have billions of total parameters but only activate a small subset for each task, improving efficiency without sacrificing capability. Google Research introduced TurboQuant, a compression algorithm that reduces the memory usage of large language models (LLMs) by at least 6x during inference. This breakthrough targets the key-value (KV) cache, which acts as short-term memory for storing context, allowing AI systems to run larger models or handle longer conversations with significantly less RAM.
*   **Task Complexity**: Larger models generally perform better on broad, multi-step reasoning tasks, while smaller, fine-tuned models often outperform larger ones on **narrow or specific tasks**.
*   **Diminishing Returns**: Research indicates that increasing parameter count yields **diminishing performance gains**; beyond a certain point, extra parameters waste computational resources without significantly improving insight.

### Quality data is the bottleneck

[LLMs Don’t Need More Parameters — Looped Language Model](https://atalupadhyay.wordpress.com/2026/03/01/llms-dont-need-more-parameters-looped-language-model/)

We’re now at a point where the AI field is quietly staring down a wall. Not a metaphorical wall. A very real, very mathematical constraint that has some of the brightest minds in AI genuinely worried about where the next step forward is going to come from. And that constraint isn’t compute. It isn’t money. It isn’t even talent.

It’s data.

The internet — all the text, all the books, all the code, all the forum posts and blog articles and Wikipedia entries and Stack Overflow answers — has essentially been consumed. Large language models have eaten it all. And the models have gotten incredibly good as a result. But now that the pantry is empty, the old recipe of “just scale it up” doesn’t apply so cleanly anymore.

### We don't need more parameters; looped computation is what we need

Looped computation resembles something about how biological brains work. When we learn something new, we don’t grow new neurons (neurogenesis is largely not how adult learning works). Instead, we learn to use existing neural circuits more effectively, routing signals through the same structures multiple times in different patterns.

---


# do we need a supreme leader how can we share power between parties

# Do we need a supreme leader? How can we share power between parties?

## date: "2023-03-30"  

---
categories:   
  - "democracy"
  - "electoral-reform"
  - "policies"
  - "politics"
---

India is currently in a risky predicament or situation. Judiciary is manipulated and attacked like never before in my lifetime. The CBI, ED, Income Tax department and courts are being used to try and silence any dissident opposition views.

> The judiciary is never independent. Govt can coerce judges or help in the appointment of corrupt judges. Or can pass law, compromising the fundamental rights and using law to abuse opposition or suppress dissent. To have a strong justice system we need to have strong democracy first.  
> Countries with inferior democracy always have an inferior judiciary.

Despite the central govt getting just 37% of votes, their power is far-reaching and autocratic.

![Vote Percentage](./images/vote_percentage.webp)

The BJP only has 37% of the vote. Why does it have 100% control over the ministry and why does it possess 55% of the seats?

Voter turnout of [2019 election was 67%](https://www.ndtv.com/india-news/general-elections-2019-record-voter-turnout-of-67-11-per-cent-in-lok-sabha-polls-2041481), so 37% of 67% voted to BJP, which is equal to 24% of people.

> In other words, only 24% of total voters in India supported BJP. Why should it have 100% control?


![Opposition States](./images/opposition-states.webp)

Center in India controls the media, center controls the ministry to attack opposition or regional parties, despite about 50% of the country belongs to opposition. This is not possible with Open List Proportional Representation or PR Approval Voting.  
Because of the ministry, India needs a coalition. It's very hard to collate with different ideologies.

After FPTP(First-past-the-post voting) or choose one voting there are so many option, PR, Approval, Star, Rank choice, Rank Robin. Yes, you can discuss merits and demerits of each one but put an end to FPTP/Plurality.

> FPTP is the most terrible method, which the majority of electoral scientists agree on.

Why would the Modi government have complete control over minister selection when 50% of the nation is made up of regional parties?

**[Parliamentary or Presidential form of government? What’s in the name?](./parliamentary-or-presidential-form-of-government-whats-in-the-name.md)**

In contrast, in India, the Prime Minister has the authority to appoint ministers at their discretion, which can lead to a potential conflict of interest. For example, ministers may serve as mere marketing agents for the Prime Minister, aiming to enhance the Prime Minister’s image. It’s worth noting that, even though laws are meant to be the same for everyone, there can be discrimination in their execution by ministers based on their interests. One example of this can be selective enforcement of corruption laws, with a bias towards opposition parties, while members of their own party may go unpunished for similar violations.

## The solution: Proportional Representation and Approval Voting

OLPR can have most of the advantages such as inclusiveness, lack of wasted votes, promoting diversity in parties and candidates, and promoting multi party system. Some countries, such as Belgium and Denmark, combine both elements.

Voters can vote for a list or for a candidate or candidates. Its #ApprovalVoting. Voters are sometimes given further choices and powers. In countries such as El Salvador, Honduras and Switzerland, voters can vote for candidates from different candidate lists (panachage), while in those such as Luxembourg and Switzerland, voters can also vote against as well as for candidates.

**You can read about open list proportional representation here.**  
[Open List Proportional Representation: The Good, the Bad and the Ugly](https://www.idea.int/publications/catalogue/open-list-proportional-representation-good-bad-and-ugly)

And difference between open list proportional representation and mixed member proportional representation here:

Open list PR is about voter choice in selecting individual candidates, Mixed Member Proportional (MMP) is a system that retains the constituency element.

## [Open-list proportional representation vs. Mixed-member proportional representation](./open-list-proportional-representation-vs-mixed-member-proportional-representation.md)

> India is becoming increasingly divided and polarized, and hate speech is so pervasive. With approval voting, politicians are not incentivised for hate speech.

**You can read about approval voting here.**  
[https://electionscience.org/library/approval-voting/](https://electionscience.org/library/approval-voting/)

**Ten Critiques of Approval Voting**  
[https://electionscience.org/voting-methods/ten-critiques-and-defenses-on-approval-voting/](https://electionscience.org/voting-methods/ten-critiques-and-defenses-on-approval-voting/)

**Critique #2: Approval voting degenerates to bullet voting (choosing only one candidate).**

What we tend to see is that the average number of votes per ballot increases as the number of candidates increase. That is, fewer candidate options tends to mean that voters choose fewer candidates, and more candidate options tends to mean that voters choose more candidates. This is intuitive.

In fact, in many cases where there’s an approval voting election, a large number of people do tend to bullet vote. The important part is that voters have the option to support multiple candidates when they need it—even when it’s only a fraction of voters who need it. And it only takes a fraction of voters who support multiple candidates to change the outcome of an election. Even in an extreme situation where 90% of people bullet vote, those 10% choosing multiple candidates can sway the election (most often for the better).

Being able to support multiple candidates is a rather big deal for third parties and independents. As those candidates’ support grows, it’s essential that voters be able to support them to give their ideas credibility when it’s warranted. It’s preposterous to suggest that the same third-party sympathizers who hold their nose while voting for a major party wouldn’t support both a major party and a third party if given the chance. There is nothing to lose for them and everything to gain.

## How many countries around the world use proportional representation?

  
There are 109 countries which use either a Proportional Representation or a mixed system across the world.  
Only 47 countries use the First Past The Post system, a minority of countries globally, one of which is the United Kingdom.  
Those that still use First Past the Post tend to have it as a result of being former British colonies.  
WHY WILL INDIA FOLLOW THE OLD BRITISH COLONIAL RULE?
[How many countries around the world use proportional representation?](https://www.electoral-reform.org.uk/how-many-countries-around-the-world-use-proportional-representation/
)

## **PR for women**

  
The research community is united in declaring that PR elects more women. One of the most widely accepted theories is that multi-member districts allow more women to be elected because parties will want to put forward a diversified slate of candidates to reach a wider range of voters.  
[https://www.fairvote.ca/women/](https://www.fairvote.ca/women/)

Proportional representation helped women get elected in 2022

In 2022, countries with either proportional representation (PR) or mixed electoral systems collectively elected 29% women to their parliaments, whereas countries with majority or plurality systems like First Past the Post only elected 22.4% women to their parliaments. The electoral system used also influences the likelihood of applying gender quotas.

Of those countries holding elections in 2022, nearly three-quarters (73%) of countries with PR or mixed electoral systems had either a voluntary or legislated gender quota in place, whereas in majority or plurality systems nearly three-quarters of countries (73%) did not have any type of quota in place.

The representation of women in the Lok Sabha in India stands at a mere 14%, while in the Rajya Sabha, it is even lower at 11%. **It is essential for every woman in India to advocate for #ProportionalRepresentation.**

[Proportional representation helped women get elected in 2022](https://www.electoral-reform.org.uk/proportional-representation-helped-women-get-elected-in-2022/)



## **PR for climate change**

As evidence from around the globe shows, proportional representation creates a virtuous cycle for the environment. Voters who care about environmental protection elect candidates who agree. Those representatives introduce new ideas about renewable energy and clean air, they work together to pass durable policies, and they act quickly on important issues like climate change. Cascadian voters care about clean air, clean water, and climate action. ProRep can turn their values into reality.

https://www.sightline.org/2018/10/29/proportional-representation-delivers-stronger-environmental-solutions/

## **PR for Minorities**

With the current govt hatred towards Muslim minorities increasing, govt has also shown a far-right homophobic stand towards LGBTQA+ community. Proportional representation gives more representation and negotiation power to minorities, which is hardly possible in winner take it all system.

## India: Government Policies, Actions Target Minorities

[https://www.hrw.org/news/2021/02/19/india-government-policies-actions-target-minorities](https://www.hrw.org/news/2021/02/19/india-government-policies-actions-target-minorities)

## Modi’s Power to Sideline Challengers Is Only Growing  

[https://www.nytimes.com/2023/03/29/world/asia/modi-india-gandhi-judiciary.html](https://www.nytimes.com/2023/03/29/world/asia/modi-india-gandhi-judiciary.html)

## **PR to reduce corruption**

Approval voting and proportional representation are fully effective, in the sense that all equilibria exclude corrupt parties from legislative seats.

Effectiveness of Electoral Systems for Reducing Government Corruption: A Game-Theoretic Analysis

[https://www.sciencedirect.com/science/article/abs/pii/S0899825683710067](https://www.sciencedirect.com/science/article/abs/pii/S0899825683710067)

You can check out countries with least corruption have Proportional Representation

Corruption Perceptions Index

[https://www.transparency.org/en/cpi/2022](https://www.transparency.org/en/cpi/2022)


## How can we use proportional representation with Approval voting without any complicated algorithm?

How can we use proportional representation with Approval voting without any complicated algorithm like seq phragmen, and allowing selecting candidates based on ward or district. Seq phragmen is ok to be used in blockchain but not practical for paper ballots.

Instead of giving the number of seats as proportional, we can make voting power/weightage proportional. For example, the party with 33% votes will have 33% weightage for votes, no matter how many seats or candidates vote from the party. It applies to the district assembly, state assembly or country assembly (Lok sabha) The second winner or third winner of approval voting can also vote without creating any problems because of the weightage system.

Here is the complete algorithm:

```python

# Ward 1
party_green_candidate_1 = 70 
party_red_candidate_1 = 51
party_yellow_candidate_1 = 31
#Ward 2
party_red_candidate_2 = 81
party_yellow_candidate_2 = 62
party_green_candidate_2 = 31
# Ward 3
party_green_candidate_3 = 60
party_red_candidate_3= 50
party_yellow_candidate_3 = 40
total_votes_green_party = party_green_candidate_1 + party_green_candidate_2 + party_green_candidate_3
print(total_votes_green_party)
total_votes_red_party = party_red_candidate_1 + party_red_candidate_2 + party_red_candidate_3
print(total_votes_red_party)
total_votes_yellow_party = party_yellow_candidate_1 + party_yellow_candidate_2 + party_yellow_candidate_3
print(total_votes_yellow_party)
# As there are three candidates, vote weightage for each candidate = total votes for party/3
weightage_green_candidate = total_votes_green_party/3
print(weightage_green_candidate)
weightage_red_candidate  = total_votes_red_party/3
print(weightage_red_candidate)
weightage_yellow_candidate = total_votes_yellow_party/3
print(weightage_yellow_candidate)
# Policy passing
# 2 candidate of green party gave yes, one gave no
# 2 candidate of red party gave no, one gave yes
# 3 candidates of yellow party gave yes
yes_votes = 2* weightage_green_candidate + 1 * weightage_red_candidate + 3 * weightage_yellow_candidate
print(yes_votes)
no_votes = 1* weightage_green_candidate + 2 * weightage_red_candidate + 0 * weightage_yellow_candidate
print(no_votes)
```

It makes all candidates powerful with the amount of voting power they have, without winner-take-all system.

Feedback are welcome.

## Is open list proportional representation without approval voting sufficient?

> The article says,  
> Like all electoral frameworks, none of the OLPR variants are perfect. All have advantages and disadvantages in achieving the objectives required of an electoral system in a specific country environment.
> 
> While there are critics of OLPR, many of the criticisms are based either on specific elements of its configuration in a specific country or on elements that are external to the system itself (e.g. poor implementation of controls on political financing in Indonesia). While there have certainly been ugly configurations of OLPR, such as in Colombia before 2003 (see Albarracin and Milanese 2012), if configured sensibly and with adequate controls on political behavior, OLPR can facilitate a wider range of electoral system objectives than many other electoral systems.

[Open List Proportional Representation: The Good, the Bad and the Ugly](https://www.idea.int/publications/catalogue/open-list-proportional-representation-good-bad-and-ugly)

Let's take India as an example and assume what can change in India if we implement open list proportional representation.  
India already has a multi-party system. It's not like the US with two parties. Last election (2019) BJP won by 37% votes. With proportional representation, BJP will get 37% seats rather than 55% seats, so it will empower the opposition more.

But still, there is a problem. Specific elements of its configuration part of OLPR. Will it eliminate the need for a coalition govt? If even after proportional representation they move to a coalition, the problem of partisanism and "winner-take it all" arises again. The coalition govt with more votes will control the nation and ministry.

Let's look at another problem.  
Here is a plurality voting example.

![Vote Splitting](./images/vote-splitting.png)

Now, a open-list ballot.

![Open list ballot](./images/olpr.jpeg)

Now candidates are replaced with parties (with candidates). Will it end polarization? Polarization happens because of the center squeeze effect and vote splitting. Candidates with similar ideologies split their votes, but here in the party list, parties with similar ideologies will split their votes. **In FPTP more than 50% of the vote gets wasted. But the benefit of PR is even if Hitler gets the highest votes, more than 50% of power remained with the opposition, with no vote wastage.** So yes it decreases polarization but doesn't eliminate the benefits of polarization.

> But with approval voting, Matin Luther King, Tuban, Mother Terasa, Gandhi will get about equal but more votes and votes for Hitler will further decrease.

Furthermore, without Approval voting, the chance for new parties is still lower but PR alone (without approval voting) do helps new parties by eliminating wastage of votes and decreasing tactical voting.

We can look at the Sri Lanka election with PR (no approval voting). Sri Lanka People's Freedom Alliance has 59.09% of the seats, Samagi Jana Balawegaya 23.90% of the seats, whereas other parties' strengths are negligible despite proportional representation.

PR with Approval Voting brings more competition, in other words, it provides more choices and also collaboration and corporation of representatives as there are no incentives for polarization.

## Top 5 Ways Plurality Voting Fails

[https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/](https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/)

## **Critiques of Proportional Representation**

### PR generates weak, ineffective, and unstable governing coalitions  

PR governments are not unstable, rather a coalition of majoritarian govt with FPTP is unstable. In FPTP parties have a high chance of getting out of coalitions whenever their interests are not met. Defection of MLAs and MPs from parties is so common in politics. This breaks the majority, hence breaking the government. In PR even if you stop participating or if you don't vote in decision-making, nothing happens, other parties together can make the decision. Changing the party or defection has no impact on decision making due to the weightage-based voting system, which is based on the number of votes won.

### It's difficult to assign clear responsibility and decision-making is slow in the PR  

PR is better at assigning responsibility. It hardly takes an hour to vote and take decisions. Yes, draft preparation can time, but it's a good thing because the inputs of all parties are taken. Ministers of the department can be selected by voting like based on their party vote weightage. As all parties are involved, ministers and bureaucrats are selected by consensus, and they are not partisan. Ministers will care about all parties' interests rather than the majoritarian party. For example, in India, media freedom has gone to its lowest, and hatred and conspiracy theories are at peak, this won't have happened if ministers are selected by consensus. President too will no more a rubber stamp, a person of integrity will be selected.

### PR legitimizes extremist parties

  
FPTP legitimizes extremist parties, as they have incentives to polarize and split votes. Further extremist parties get more seats than votes in FPTP. In PR they won't get more power than the number of votes. We can also reduce the extremist parties' votes by using approval voting or negative votes.

Proportional representation promotes collaboration and energy is used on development politics and calling out and eliminating the bad candidates/parties rather than fighting with each other even if they have shared values to win seats. For example here Gandhi, Martin Luther King, Tubman and Mother Teresa would have collaborated and would have called out Hitler instead of fighting with each other to win seats due to FPTP. Hitler decisions will be ineffective as he will not get enough votes to take decision.

### PR causes you to lose the constituency

There are different versions of PR that can be adapted to various forms. PR, in its fundamental principle, means that the percentage of seats should be equal to the percentage of votes the party receives. In other words, power aligns with the number of votes a candidate or party receives. To maintain a constituency element, one can consider options such as [Mixed Member Proportional (MMP)](./open-list-proportional-representation-vs-mixed-member-proportional-representation.md) representation or power weighting equal to the amount of votes the candidate receives, as explained in the algorithm above.

## **How can we transition from FPTP to Proportional Representation?**

**States can implement PR**:

States can implement Proportional Representation (PR) in their State Legislative Assemblies. Our constitution does not explicitly specify whether to use First-Past-the-Post (FPTP) or Proportional Representation. Nevertheless, it's worth noting that FPTP does not align with constitutional principles such as inclusivity and equality.

Implementing PR at the national level can be challenging. Therefore, individual states have the opportunity to experiment with PR, potentially sparking a broader movement towards electoral reform.

FPTP often provides an advantage to incumbents, or those who are already in power. Incumbents might resist changing the electoral system because FPTP makes it relatively easier for them to maintain their positions due to the concentrated nature of the voting.

Parties are made out of representatives (Sarpanch, MLAs, MPs, Council members, etc). Representatives need to understand that it causes no harm at the individual representative level. There is no mention of parties in our constitution. Larger parties can split into smaller parties, and individual representatives don't have to maintain a partisan stance. This leads to a more fairer and level playing field for representatives or parties in elections.

There are ways smaller parties can overcome the resistance to change. They can simply collaborate and share the seats to avoid vote splitting.

**Nominee Selection:**

Nominee can be selected from parties that collaborate through Approval voting or Score voting. Voting can be done by citizens and party members.

Parties can use sms or apps to vote, or getting feedback from surveys to select best candidates. The problem with voting through apps or SMS is without kyc electoral fraud is likely. The locality or constituency of the voter can be faked, and multiple votes can be submitted by a single user. A better approach is to establish polling booths organized by the parties to obtain authentic and accurate data. While the voter turnout might be low, it would provide a reliable sample for making inferences about the population.

A good sample is one that is randomly selected from the population, aiming to reduce bias by encompassing everyone—nonpartisan, opposition and loyal voters—without favoring loyal voters.

About 3 to 5 nominees from different parties can be selected. These 3 to 5 nominees will participate in the election for a single seat. Diverse types of nominees can be selected to appeal to a broader range of communities.

As single seat is shared by 3 to 5 members, it attracts more voters, thereby increasing the chances of winning. It also increases decentralization of decision making. Helps to prevent vote splitting, which can be detrimental to smaller parties under FPTP. Choosing nominees through approval voting and surveys enhances the likelihood of victory by incorporating the people's preferences into the selection process.

**Seat sharing Agreement:**

Seat sharing agreement can be made by the nominees to share power after they win. The power weightage of nominees can be based on the count of approval votes cast by citizens prior to the election, or they can possess equal weightage.

Such weightage is used in decision-making within citizen assemblies. Seat-sharing agreements are established to prevent winners from defecting.

In this manner, different parties can unite in the FPTP system, significantly enhancing their chances of winning by multiple folds by eliminating vote splitting. After they win, they can transition from FPTP to proportional representation.

**What if the opposition challenges the seat-sharing contract in court, for example, MPs seats, or if the Supreme Court doesn't allow it?**

A written agreement can be made public along with the signatures of those involved; it's not necessary for it to be legally binding. Based on this declaration, people will vote. Simply making a public declaration can reduce the chances of defection. Among the 3-5 nominees, award the MP seat to the individual with the highest approval votes. After MPs win, they can change the law accordingly.

[Sketch to build a agreement or contract.](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafkreib3fws5fphrlmheutkicksi7g5ffwcuy5vsu4kf32zekqont3tjoq)

> Overthrowing the government is only a good idea if there is a robust plan for what comes next, to ensure that history doesn't repeat itself. The new government should have approval voting and proportional representation, with 30-50% of seats reserved for women.
> One shouldn't replace one evil with another.

---


# domestic violence

Effects of domestic violence on children, result from witnessing domestic violence in a home where one of their parents are abusing the other parent, _**plays a tremendous role on the well-being and developmental growth of children witnessing the violence**_.

Children who witness domestic violence in the home often believe that they are to blame, **live in a constant state of fear** and are 15 times more likely to be victims of child abuse.

Close observation during an interaction can alert providers to the need for further investigation and intervention, such **as dysfunctions in the physical, behavioral, emotional, and social areas of life**, and can aid in early intervention and assistance for child victims.

The physical effects of domestic violence on children, **different than the effects of direct abuse, can start when they are fetus in their mother's womb**, can result in low infant birth weights, premature birth, excessive bleeding, and fetal death, due to the mother's physical trauma and emotional stress. Increased maternal stress during the times of abuse, especially when combined with smoking and drug abuse, can also lead to premature deliveries and low weight babies.When a woman is stressed while pregnant, the baby can be born with stress and anxiety and can sometimes have problems with growth.

Older children can sometimes turn the stress towards behavioral problems. Sometimes children who see the abuse turn to drugs, hoping to take the pain away. The children, however, will exhibit physical symptoms associated with their behavioral or emotional problems, such as being _withdrawn from those around them, becoming non-verbal, and exhibiting regressed behaviors such as being clingy and whiney_. Anxiety often accompanies a physical symptom in children who witness domestic violence in the home. If their anxiety progresses to more physical symptoms, they may show signs of tiredness from lack of sleep and weight and nutritional changes from poor eating habits.

> Children may think that violence is an acceptable behavior of intimate relationships and become either the abused or the abuser.

An estimated 1/5 to 1/3 of teenagers subject to viewing domestic violent situations experience teen dating violence, regularly abusing or being abused by their partners verbally, mentally, emotionally, sexually or physically. 30% to 50% of dating relationships can exhibit the same cycle of escalating violence in their marital relationships.

Children exposed to violence in their home often have conflicting feelings towards their parents; **For instance, distrust and affection often coexist for the abuser.** _The child becomes overprotective of the victim and feels sorry for them._

They often develop anxiety, fearing that they may be injured or abandoned, that the child's parent being abused will be injured, or that they are to blame for the violence that is occurring in their homes.

> Grief, shame, and low self-esteem are common emotions that children exposed to domestic violence experience

> Depression is a common problem for children who experience domestic violence. The child often feels helpless and powerless. More girls internalize their emotions and show signs of depression than boys. Boys are more apt to act out with aggression and hostility.

Witnessing violence in the home can give the child the idea that **nothing is safe in the world and that they are not worth being kept safe which contributes to their feelings of low self-worth and depression.**

![](images/domestic-violence.png)

[https://en.wikipedia.org/wiki/Effects\_of\_domestic\_violence\_on\_children](https://en.wikipedia.org/wiki/Effects_of_domestic_violence_on_children)

---


# education system

# How to solve our education puzzzle?


## Girls education

### When we invest in girls’ education

Investing in girls' secondary education has far-reaching benefits that extend beyond individual gains. When girls are provided with equal opportunities to pursue education, their lifetime earnings significantly increase, breaking the cycle of poverty and empowering them to contribute to their communities and nations. National growth rates rise as a result of a more educated and skilled workforce. Additionally, social issues such as child marriage, child mortality, maternal mortality, and child stunting decline, leading to healthier and more prosperous communities. Despite these proven advantages, girls' education is often undervalued, especially in poorer families, due to societal norms and the misconception that girls will not contribute financially to their parents. By investing in girls' secondary education, we not only empower individual girls but also create a ripple effect of positive change that transforms societies and drives global progress.

## Bullying 

In India, the concern is not just about bullying by classmates or seniors, but sometimes teachers act like a bully. This issue transcends verbal or emotional abuse, as instances have been reported where teachers resort to extreme measures for punishment.  e.g. In some alarming instances, teachers in India have resorted to extreme measures such as hanging students upside down from buildings, imposing a punishment of performing squats a hundred times, or even resorting to physical beatings with sticks.
Children can suffer emotionally due to the power game of the management and teacher.

## Emotional Intelligence

Metal health has become a pandemic. Children with high emotional intelligence reduce stress, take responsibility for their actions, treat friends and family members with empathy and compassion.  

## Poverty

Education develops skills and abilities to earn a living. Not everyone who is uneducated is in extreme poverty, but those living in extreme poverty do lack basic education. 

## Biases and stereotypes

For example, Girls are good at biology and boys are good at maths. We always have a tendency or prejudice toward or against something or someone. With proper scientific education, we can make better decisions and fall less towards biases. 

## Reservation

Our education system is designed as a scarce resource. Quality education doesn't scale, as a result, we have limited seats, which leads to the reservation for lower caste to give them a chance for upliftment. 

## Costly education
 
Privatization of schools and colleges has made education costly and inaccessible to a significant portion of the population. The shift towards privatization has resulted in a growing disparity between those who can afford quality education and those who cannot. This has led to a two-tiered system where the wealthy have access to superior resources and opportunities, while the less fortunate are left behind. The high cost of private education often forces families to make difficult choices, such as taking on significant debt or sacrificing other necessities to afford tuition fees. Furthermore, privatization can lead to a focus on profit over educational quality, with schools and colleges becoming businesses that prioritize financial gain over the well-being and success of their students

## Grades

Though competition keeps our focus on our goal, many times it turns toxic for grades that leads to ["teaching to test"](https://en.wikipedia.org/wiki/Teaching_to_the_test) type of education. Thousands of students end their lives every year in India due to the toxic competition culture. 

## Outdated syllabus

Due to the centralized and bureaucratic nature of education, it's so difficult to update the curriculum as no one is accountable for it and the curriculum is not updated for many decades. 

## Unemployment

We have an education where 80% of engineers are unemployable in India. They lack the knowledge of new-edge technology that is needed for jobs.

## Child Labour

A total of 152 million children – 64 million girls and 88 million boys – are estimated to be in child labour globally, accounting for almost one in ten of all children worldwide. In India Census 2011, the total child population in India in the age group (5-14) years is 259.6 million. Of these, 10.1 million (3.9% of total child population) are working, either as ‘main worker’ or as ‘marginal worker’.  
We can eliminate child labor providing income for learning.

## So, how can Avrit solve these problems?

### Work in progress, currently busy in builiding an experimental governance

[https://avrit.reaudito.com](https://avrit.reaudito.com)

**A decentralized platform for earning by designing and reviewing the study material or content, assignments, projects, practicals, and assessments.**

Avrit has evidence of learning as explainer videos. Instead of the teacher, the student will explain. The explainer script can be prepared by the teacher with the student's collaboration. Explainer script must meet the review guidelines and can be in both English and the native language, making sure the student has understood whatever they are saying. As students do the work, they participate in active learning and there is an increase in engagement. Making explainer videos has so many benefits, it works on multiple skills like critical thinking, improving their vocabulary, communication skills, and comprehension.

Making explainer videos can be hectic for both teachers and students because it causes repetition of work and slows down the process. But repetition and slowing down causes brain to exercise which is key to comprehension and learning. Students engage actively rather than becoming passive listeners of lecture and don't get bored by learning. But it's a one time work for teacher, because explainer script can be used again and again among the students.

Evidence of learning is not limited to explainer videos, it can be anything like practice assignments, real-world projects, or volunteering work like making the neighborhood garbage free.

All are validated by Schelling game, so there is minimal chance of corruption.

It's based on the competition collaboration algorithm:

[The Competitive Collaboration Algorithm](./democracy/competitive_collaboration.md)

When you upload your evidence of learning based on meeting the guidelines of avrit learning by staking, and no one challenges it, you earn 1 AVRIT token. 

The apps like [proof of humanity](https://www.proofofhumanity.id/) have proved that you can earn passive income just by validating that you are a real human.

> Here, in Avrit learning, your evidence of learning is validated and you earn an income. 
> 
> As it's decentralized in nature and you earn for learning, girls' education will not be a problem. It will be run by the local community with few students in a group, so chances of bullying are rare. The curriculum will be up to date due to the evidence-based learning strategy guidelines and due to the competition collaboration algorithm. Here teachers have the responsibility to update the curriculum by learning from other teachers rather than any central bureaucratic authority. We can also have teachers' governance that will provide recommendations for curriculum, learning content, and best practices. 
> 
> Quality education is no more a scarce resource and is scalable, so reservation is unnecessary, students are evaluated by evidence of learning, which also makes grades unnecessary. 
> 
> It's all [open-source](https://github.com/amiyatulu/avrit_ui) and as it's on the blockchain, it's not owned by anybody, so no predatory practices by some private ed-tech company.  Currently, governance system is [build here](https://github.com/reaudito/shivarthu).
> 
> The only problem we need the execution, where govts, NGOs and edupreneurs can come together for building learning hubs.

## Can Avrit protocol be called homeschooling?

Homeschooling is the education of school-aged children at home or a variety of places other than a school. Its depends on definition of homeschooling. You can set up avrit centers or avrit learning hubs at your home, or neighbor's homes, but also in school like building, or in school itself. We do require an educated tutor for educating the children. It's about [self-managed](https://en.wikipedia.org/wiki/Reinventing_Organizations), decentralized schooling without power games, private or government ownership of schools, but rather, public ownership. Avrit protocol is not limited to school-aged children but also for college going adults.

## Can Avrit schooling be misused to provide religious teaching to children by parents?

Avrit protocol can be run by [decentralized governance](./shivarthu/Shivarthu.md), and evidence of learning is evaluated collectively, and protected by game theory. So, it's hardly possible to do such things.

## Will it disadvantage the poor? Is it sustainable?

Avrit protocol has its own cryptocurrency token with robust token economics and can be further improved. With the increase in popularity, the market cap of the token will rise, a market cap of $1 Billion can provide about 10-100 Million funds per year for students and teachers.

## Is it experimental or lack evidence?

Self-managed organizations are not experimental. You can go through the book about teal organizations in the book ([Link](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeig42esblqefhpyf4ozx5uhwl7nosxaddrvih274zpttgev7xoplxu?filename=Laloux%2C%20Frederic%20-%20Reinventing%20Organizations_%20A%20Guide%20to%20Creating%20Organizations%20Inspired%20by%20the%20Next%20Stage%20of%20Human%20Consciousness-Nelson%20Parker%20%282014%29.epub)) for more details. 

"The Avrit protocol is based on already existing evidence. The platform can also help in running experiments and demonstrating its validation. It's still in active development, and there is always scope for improvement. Designing governance in blockchain has its own challenges. One needs to codify the governance design into a computer program so that it can be scaled.

## Does it mean deregulation of the education system?

It will limit the power of centralized governments and bureaucracy. Being on crypto or blockchain doesn't mean there are no rules and regulations. It will function under the purview of [decentralized governance](../chapters/what-would-we-gain-from-eliminating-national-fiat-currency.md) and rules of the smart contract.

## Is India a homeschooling country?

India, by its educational practices, can be considered a quasi-homeschooling country, as a significant majority of children spend more than 50% of their study time in home tuition classes. They are still in school because it provides the curriculum, systemization, and guidance on what to study and what not to study. Schools put children in a feedback loop of study, with homework assigned every day to be completed in tuition, and they also conduct exams. 

Although the practices of schools are questionable and not optimal, it can be chaotic without them. It's not optimal because the rigid structure and focus on rote learning may hinder a more holistic development of students, raising concerns about the overall quality of education in school. It's chaotic without it because homeschooling is unlikely to provide a systematic, structured, and evidence-based education that truly works.

Parents and tuition teachers, although dedicated, are not necessarily experts in curriculum design. This gap in expertise underscores the need for a centralized board or governance structure to provide comprehensive recommendations and guidelines.  What we need is a redesign of the curriculum framework and governance to keep students in the feedback loop.

## Homeschooling during COVID-19 times was a dystopian chaos

Homeschooling during the COVID-19 pandemic brought about a dystopian chaos for many families. The conventional school experience, characterized by lively classrooms and face-to-face interactions, underwent a stark transformation. With children confined to their homes, a significant portion of their daily lives revolved around staring at screens, primarily mobile devices, for extended periods. This shift not only altered the nature of education but also disrupted the fundamental aspects of childhood.

Gone were the days of personal communication with friends during breaks or in the hallways. Socialization became a virtual affair, limited to online interactions that lacked the spontaneity and authenticity of in-person connections. The absence of physical presence meant missing out on the subtleties of non-verbal communication and the shared experiences that contribute to the richness of friendships.

Outdoor activities and games, once an integral part of a child's routine, took a back seat during this period. The lack of physical engagement and exposure to nature not only impacted physical health but also contributed to a sense of confinement and monotony. The inability to enjoy the simple pleasures of outdoor playtime added to the challenges of this unique homeschooling experience.

Moreover, the prolonged period of isolation and the constant reliance on digital devices had adverse effects on children's mental health. The absence of regular social interactions, coupled with the uncertainties of the global health crisis, led to increased stress and anxiety levels. The inability to escape the virtual realm and engage in real-world activities contributed to a sense of detachment and, in some cases, exacerbated mental health problems among students.

In essence, the shift to homeschooling during the COVID-19 pandemic created a challenging and surreal environment, deviating significantly from the normative, well-rounded educational and social experiences that children typically undergo.

## Homeschooling does not inherently lead to a lack of socialization

### Definition of Socialization:  
Socialization is the process by which individuals learn to interact with others, understand societal norms, and develop interpersonal skills. It involves building relationships, communicating effectively, and engaging in shared activities that foster a sense of belonging and collaboration.

### Homeschooling and Socialization:  
The concern that homeschooling might lead to a lack of socialization often stems from the misconception that homeschooled students are isolated. We are no longer in Covid times when we have to maintain social distancing. In reality, homeschooling can offer diverse and meaningful opportunities for socialization, both online and offline. Here’s how:

#### Project-Based Learning:
   Homeschooling allows students to participate in group projects with peers from various backgrounds. These projects can be organized through local homeschool groups, community organizations, or online platforms. Collaborating on projects not only enhances academic learning but also teaches teamwork, communication, and problem-solving skills.

#### Community Engagement:
   Homeschoolers can join local clubs, sports teams, art classes, or music groups. These activities provide opportunities to interact with peers and adults in structured and informal settings, helping students develop confidence and social skills.

#### Online Communities and Events: 
   The rise of technology has made it easier for homeschoolers to connect with others worldwide. Virtual clubs, coding bootcamps, and online competitions offer chances to collaborate and compete with like-minded individuals, expanding their social network.

#### Flexible Schedules for Social Time: 
   Homeschooling often offers more flexible schedules, enabling students to spend quality time with friends and family. Regular playdates, outings, and shared learning experiences can be arranged with other homeschooling families or friends who attend traditional schools.

#### Field Trips and Co-ops:
   Homeschool co-ops and field trips are common avenues for socialization. Co-ops are groups where families come together to share teaching responsibilities, while field trips to museums, parks, and historical sites allow students to interact with their peers in educational settings.

#### Volunteering and Community Service:  
   Many homeschoolers engage in community service projects, such as volunteering at animal shelters, food banks, or environmental cleanup efforts. These activities provide valuable lessons in empathy and social responsibility while fostering connections with others.


## Socialization in Indian Schools

In India, it’s actually the opposite—school-going students often lack the socialization they need due to the immense pressure to achieve high marks. Most schools allocate only one game period per week, leaving little opportunity for the playtime essential for their development. Students spend the majority of their time memorizing content and attending lectures, one after another, with hardly any breaks. Neither teachers nor children are given the rest they deserve, leading to a monotonous and overly stressful routine.



## Who benefits from current homeschooling? 

The privatization of schools has already resulted in high and unaffordable fees for middle-class and poor parents. Homeschooling may only lead to the emergence of another set of [private and capitalist entities](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders) offering [closed-source](./programming/foss_philosophy.md), high-priced online tutorials that are often less effective than private schools. As mentioned earlier, parents cannot homeschool their children by themselves; they need support. Capitalistic advertising companies are likely to take advantage of this and sell services with predatory practices and pricing.


## Education is not something that we can fix in a silo

Education is a multifaceted entity that extends far beyond the confines of a classroom or a curriculum. It is a dynamic force that permeates every aspect of our society, influencing the way we live, the values we uphold, and even the political landscape we navigate. The impact of education is not restricted to academic institutions; it echoes through our [workplaces and study environments](./rethinking-work-culture.md#its-time-to-retire-the-phrase-hybrid-work-or-work-from-home), shaping the way we interact with one another and contribute to the world. In a broader context, education acts as a catalyst for societal progress, fostering innovation, critical thinking, and a collective sense of responsibility.

e.g. One cannot anticipate an improved curriculum if our workforce, comprising teachers, engineers, or doctors etc., is selected primarily through teaching-to-test entrances. Relying on such assessments often prioritizes exam-oriented teaching, emphasizing memorization over fostering critical thinking and practical skills. To enhance the curriculum, reforming the selection processes for professionals is crucial, aligning them with broader educational goals for a more well-rounded and capable workforce.

Additionally, one cannot expect a [socialist curriculum](./capitalism-vs-socialism-which-one-is-working.md) if the workforce is structured to serve capitalism. Furthermore, proper curriculum reform cannot be anticipated if politics is [highly centralized](./the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.md#how-will-you-explain-fptp-to-5-year-old).

Furthermore, the [interconnectedness of education](./programming/interdisciplinary.md) spans across various fields, illustrating its flexibility and adaptability. Interdisciplinary education seamlessly integrates knowledge from diverse fields, fostering a holistic understanding that transcends traditional disciplinary boundaries. In the realms of medicine, infrastructure, and engineering, interdisciplinary education acts as a catalyst for innovation by encouraging collaboration between experts from various fields, leading to comprehensive solutions and advancements. For instance, the [concept of 15-minute cities](./democracy/competitive_collaboration.md#15-min-cities-and-modular-competitive-collaboration-algorithm), where residents can access essential services within a short radius, relies on innovative urban planning and infrastructure design that stems from [a well-educated and forward-thinking society](./academics/academician.md). Education, therefore, is not a standalone entity but a dynamic force that weaves its threads into the fabric of our daily lives, influencing our perspectives, decisions, and the very structure of the world we inhabit.



## Challenges that need to be overcome to scale education

Scaling education across districts and countries is indeed a complex and challenging endeavor that requires the collaboration of various stakeholders and sufficient resources. One of the key challenges is the need for substantial infrastructure development, which demands significant financial investment. However, with the advent of blockchain technology and cryptocurrencies, innovative funding mechanisms using smart contracts can be leveraged to support the necessary infrastructure without solely relying on governmental or wealthy sources.

Nonetheless, establishing a decentralized governance system that effectively manages and optimizes educational processes is a daunting task. It entails iterative algorithm optimization based on new evidence, experimentation, advocacy, and the implementation of improved curriculum and evaluation systems. 

As a tuition teacher for few years with a unique professional background in interdisciplinary research, spanning computational biology and computer science, I had the valuable opportunity to evaluate the diverse needs of students from various backgrounds and learning levels. Each student brings their own set of experiences, and understanding these differences is crucial to tailoring [effective teaching methods](./education/features-of-good-books-or-curriculum.md). However, creating systemic change in education and ensuring that every student receives a quality education goes beyond the efforts of a single teacher. It demands the collective dedication and collaboration of an entire teacher workforce.

Managing and coordinating such a labor force adds another layer of complexity to the challenge of scaling education. It is important to acknowledge that addressing these challenges requires a multi-faceted approach involving technological innovation, financial resources, and the active participation of educators and stakeholders.

The goal is to start small, with a few teachers at the table, and establish a suitable governance model built on smart contracts. We will iterate, improve, and scale as we go. Experiments in education tend to take longer, as learning is a years-long process. Completing a single book or course can take several months or even years of time.

## Homeschooling means flexibility

Homeschooling offers unparalleled flexibility, both in terms of subjects and timing, allowing children to learn at their own pace without the pressure often associated with traditional schooling. Unlike conventional schools, where students are bound by rigid schedules and standardized curricula, homeschooling enables families to choose from a wide range of high-quality online resources. This approach allows for the use of effective learning strategies, such as pairing graphics with words to enhance understanding or linking abstract concepts with concrete representations to make ideas more tangible. By integrating these methods, children can engage with material in a way that deepens comprehension and retention, all while avoiding the stress of high-stakes exams and rigid timetables.

For homeschooling to be truly effective, however, it requires a shift in the role of teachers and the support systems around them. Instead of acting as the primary source of knowledge, teachers must evolve into mentors and guides. With the advent of technology and AI, the traditional model of transferring information from teacher to student is becoming obsolete. What children need now are educators who can employ strategies like posing probing questions to stimulate critical thinking or repeatedly alternating between problems with provided solutions and problems that students must solve independently. These techniques encourage active engagement and help students develop problem-solving skills. Teachers should act as co-learners, walking alongside students, offering guidance, and helping them navigate challenges, while providing the structure needed to keep them on track.

To support this new role for teachers, decentralized governance and proper training are essential. Teachers need access to resources, professional development, and a network of support to effectively mentor homeschooled students. Decentralized systems can empower local communities to tailor educational approaches to their specific needs, ensuring that teachers have the tools and flexibility to adapt to each child’s learning journey. By reimagining the role of educators and investing in their training, we can create a homeschooling ecosystem that combines the best of technology, mentorship, and effective learning strategies, ultimately preparing children for a rapidly changing world.

## Are you scared of the certificate? Is NIOS Equivalent to CBSE or ICSE?

If you are scared of certificates, you can opt for NIOS. The curriculum is not that heavy, and children can pass it in less than a year if their foundation is made strong during childhood with a [rigorous international standard curriculum](../chapters/education/books-recommendation.md).

The **National Institute of Open Schooling (NIOS)** is equivalent to other national boards like **CBSE (Central Board of Secondary Education)** and **ICSE (Indian Certificate of Secondary Education)** in terms of recognition, but there are some key differences:

### **Similarities**
1. **Recognition**:
   - NIOS is recognized by the Government of India and holds the same value as CBSE and ICSE for admissions into colleges, universities, and competitive exams.
   - Certificates issued by NIOS are valid for jobs, higher studies, and public/private sector employment.

2. **Syllabus**:
   - NIOS covers a similar syllabus in many subjects compared to CBSE and ICSE but allows for greater flexibility.

3. **Examinations**:
   - NIOS offers education up to the secondary (Class 10) and senior secondary (Class 12) levels, just like CBSE and ICSE.

---

### **Differences**
1. **Mode of Learning**:
   - CBSE and ICSE follow a classroom-based, structured school system.
   - NIOS is an open schooling system designed for students who cannot attend regular schools. It provides flexibility in learning schedules.

2. **Flexibility**:
   - NIOS allows students to choose subjects, set their pace, and decide when to take exams, offering more flexibility compared to CBSE and ICSE.

3. **Difficulty Level**:
   - ICSE is considered more comprehensive and academically rigorous than CBSE, whereas NIOS is seen as more lenient and flexible in terms of curriculum and grading.

---

### **Conclusion**
While NIOS is equivalent to CBSE and ICSE in terms of recognition and acceptance, it is better suited for students who need flexibility due to personal, professional, or other reasons.

---


# effortful playing

[![](https://iambrainstorming.files.wordpress.com/2017/07/f8e73-effortful2bplaying.png?w=251)](https://iambrainstorming.files.wordpress.com/2017/07/f8e73-effortful2bplaying.png)

---


# empowering communities decentralizing supermarkets through public ownership and control

# Empowering Communities: Decentralizing Supermarkets Through Public Ownership and Control

## date: "2023-11-11"


---
categories: 
  - "blockchain"
  - "cryptocurrency"
  - "governance"
  - "policies"
  - "politics"
---

Traditionally, supermarkets have been hubs for a wide array of products spanning diverse categories, including but not limited to Fruits and Vegetables, Cooked Food, Grocery, Clothing, Shoes, Bags, Jewelry, Hardware, Electronics, Metal Hardware (such as cookware), Electrical items, House building materials (like cement and pipes), Nursery and Agricultural products (including biofertilizer), and Medicine.

## What if we make supermarkets under public ownership, allowing communities to collectively govern and manage these essential retail spaces?

How does a supermarket simplify things? By consolidating a diverse range of retail items into one convenient location, it achieves this goal while also generating various other advantages. Here's a breakdown:

1. **Centralized Accessibility:** Supermarkets serve as a one-stop destination where consumers can access a comprehensive array of products, spanning from groceries to clothing and electronics. This centralized approach streamlines the shopping experience, saving time and effort for customers.

3. **Labor Cost Reduction:** Supermarkets leverage automation to minimize labor costs. Automated checkouts, inventory management systems, and other technological innovations contribute to operational efficiency and cost-effectiveness.

5. **Regulatory Ease:** The concentration of products within a supermarket makes regulatory compliance more manageable. Regulations related to labeling, quality control, and other standards can be consistently applied in a centralized manner.

**Example of [Community Governance](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders) that corporate governance unlikely to do it**:

## Best Practices

To illustrate, consider the role of community governance in shaping the practices of a supermarket:

- **Reducing Plastic Usage:** Community governance can swiftly enforce decisions to eliminate plastic bags and encourage the use of sustainable packaging. This proactive approach aligns with environmental goals, reducing the ecological footprint of the supermarket.

- **Promoting Reusability:** Empowered by community-driven initiatives, supermarkets can facilitate the use of reusable containers. Shoppers are encouraged to bring their containers for items like [beverages](./ban-plastic-bottles-of-coca-cola-and-water-bottles.md) and cooking oil, contributing to a reduction in single-use plastic.

- **Supporting Local Production:** Community governance can actively endorse and support local producers, ensuring their products are featured in the supermarket at fair prices. This strategy fosters a more equitable marketplace, circumventing the potential monopoly that corporate supermarkets might impose.

- **Curbing Fast Fashion:** Community governance can implement policies favoring sustainable and ethically produced clothing. This may involve supporting local designers, promoting clothing recycling programs, and discouraging the sale of [fast fashion](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6307129/) items known for their detrimental environmental and ethical impacts.

- **Promoting Healthy Eating:** The community, through governance mechanisms, can encourage the stocking of nutritious, minimally processed foods in the supermarket by taxing or regulating unhealthy food. This initiative aims to combat the negative health effects associated with [ultra-processed foods](https://inews.co.uk/news/science/ultra-processed-foods-how-dangerous-upfs-definitive-guide-worried-2577945), [polished cereal grain](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7683632/) and others, contributing to a healthier community overall. Over 20% of people have [fatty deposits on the liver](https://www.theguardian.com/society/2019/apr/12/experts-warn-of-fatty-liver-disease-epidemic-in-young-people), mostly due to poor eating habits.

- **Repair Services:** Promoting the repair of [electronic products, such as smartphones](https://www.bbc.com/future/article/20231121-what-does-a-sustainable-smartphone-look-like), aligns with the 'right to repair' movement and contributes significantly to sustainability. Encouraging the repairability of electronic devices empowers consumers to extend the lifespan of their gadgets, reducing electronic waste and the environmental impact associated with manufacturing new products.

- **Sustainable Housing:** A community-run supermarket fosters a sustainable housing community, accommodating 5000 or more people in pockets without inducing [urban sprawl.](./building-better-cities.md) This approach conserves space, preserving spaces for forests.

- **Profit sharing:** Supermarkets and various supply chains can each have their decentralized governance token, enabling different stakeholders to participate and receive incentives based on their contributions. Consumers, for instance, can receive a monthly [Universal Basic Income (UBI)](./what-will-a-boycott-of-the-national-currency-give-us.md), empowering them to make purchases and contribute to poverty reduction or elimination. The token's value can be [collectively determined](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md) by the community or stakeholders through consensus, where a token design with fair incentive system results in greater profitability.

In essence, the community run supermarket becomes a reflection of community values, responding to environmental concerns, supporting local businesses, and promoting sustainable practices by decreasing negative externalities. This community-driven model stands in contrast to corporate supermarkets, which may prioritize profit over such community-centric considerations.

Supermarkets, when governed by the community, have the potential to be more socially responsible, environmentally friendly, and supportive of local economies. This scales globally, as blockchain works in a borderless manner.

> Regulation doesn't mean governance will [control prices](https://mru.org/courses/principles-economics-microeconomics/price-controls-definition-nixon), control exports or imports, and disrupt the free-market system of discovering prices for goods and services through demand and supply. It is about making the supply chain more efficient and handling [negative externalities](https://mru.org/courses/principles-economics-microeconomics/externalities-definition-pigovian-tax).

## Community Kitchen Proposal

The Community Kitchen initiative aims to bring culinary experiences by fostering a diverse range of both nutritious and delicious meals. The current lamentable state of hostel and hotel food prompts an exploration into the roots of the problem, attributing it to governance issues and the influence of capitalism on the food industry.

### Key Components of the Incentive System:

1. **Cook Appointment and Compensation:** The heart of the kitchen lies in the cook, and their appointment and fair compensation are crucial for maintaining culinary standards.

2. **Food Quality Oversight by Experts:** Incorporating food science experts ensures a stringent quality check, elevating the overall nutritional and taste profile of the meals.

3. **Provision of Essential Groceries:** A seamless supply chain for necessary groceries guarantees a well-stocked kitchen, essential for preparing diverse and wholesome meals.

4. **Rent Payment through Governance:** Rent payments facilitated through a transparent governance or community ownership model for kitchen spaces ensure a stable and conducive environment for culinary pursuits.

5. **Automation and Cooking Tools:** Investing in kitchen automation and providing appropriate cooking tools not only enhances efficiency but also encourages innovative and diverse culinary creations.

6.  **Security Measures:** Implementing robust security measures protects both the kitchen rooms and tools, preventing misuse or theft and ensuring the sustainability of the community kitchen.

7.  **Consumer Participation in Governance:** Empowering consumers to contribute to the decision-making process by aiding in the appointment of food science experts and cooks promotes expertise and active engagement. The more involvement in governance, the greater the voting power, fostering a system where competence and commitment are rewarded.

By addressing these key elements in the incentive system, the Community Kitchen strives to create an environment where the preparation of food becomes a collaborative and rewarding venture, promoting both health and culinary diversity.

The Community Kitchen serves as a particularly valuable resource for [women seeking remote employment](./rethinking-work-culture.md), offering a solution that helps them save time on cooking and dish washing. This communal space not only addresses the practical challenges of balancing work and household responsibilities but also creates a supportive environment for those engaged in remote jobs.


## How much time does it take to create 15-minute cities?

It doesn't take very long. However, with the existing model, it's hard for small shopkeepers to set up shopping malls because it requires huge investments, and common people don't have that much capital. Therefore, they can only set up small shops.


## Advantages of Supermarkets Over Small Shops

Let's first analyze why people go to markets. The reason is not solely for shopping; they also seek entertainment, recreation, food, and social connections. Therefore, if you set up a supermarket within a 5-15 minute walk or cycling distance, people are likely to visit.

As everything is available there, they will prefer the location, even if it's not roadside. Food stalls in supermarkets are crucial, as many patrons opt for a quick meal. Additional entertainment options, such as movies, can be provided on a semi-big screen, with the potential for success if prices are kept low to stimulate demand. Furthermore, the establishment of indoor gardens is essential, as greenery contributes significantly to the recreational atmosphere.

## Now, let's discuss funding. 

How can we support shopkeepers? Even a semi-decentralized smart contract on the blockchain can work, and it has become easier to implement. Some trusted entities, especially [stakeholders](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders), can remain in governance, selected through effective voting methods.

One can use stablecoins, such as [gold-backed cryptocurrencies or USDT](./love-for-usd-pegged-stable-coin-by-the-crypto-community-must-end.md), in the smart contract. Alternatively, other cryptocurrencies can be considered, especially if stability is not a primary concern and they are viewed as an investment.

All funds collected from sales are held in escrow within the smart contract, minimizing the chances of fraud.

## Equitable money distribution and inclusivity

Then, money is distributed based on input and maintenance costs. Salaries for employees are determined through a [good voting method](./the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.md#who-is-evil-whether-its-the-people-or-the-voting-method), where all employees participate. More efficient and utilitarian employees can receive higher salaries, while less efficient individuals may receive slightly lower compensation. Salary distribution aims for equity, avoiding extreme discrepancies seen in the current capitalist system where CEOs or owners may receive salaries 100 times higher than other employees.

Since it's community-run, there is the potential for a more equitable distribution of wealth. Furthermore, diversity among employees can be actively encouraged, including the inclusion of women, individuals with disabilities, those from different religious backgrounds, and members of the LGBTQ+ community.

---


# experimental manipulation after tests using esalt feedback from students

Personalized pre and post test need to be conducted in the following manner with experimental manipulation:

While giving questions, each student needs to be asked for how easy or difficult the questions are.

[![](https://iambrainstorming.files.wordpress.com/2017/05/cda62-esalt.jpg?w=232)](https://iambrainstorming.files.wordpress.com/2017/05/cda62-esalt.jpg)

Student Feedback for Questions Ease (**eSALT**):

**1) Easy (E)**  
**2) Safe (S)**  
**3) Average (A)**  
**4) Low (L)**  
**5) Trouble (T)**

Also, keep space for some **specific** feedback that students want to comment on the question while answering. (e.g. Mistakes in questions, concept not taught in the class, or not understood, unable to recall or don't know the answers or specific part of answers like formula or for example atomic number of element, unable to understand the question).

> Ask students to be elaborative and be particular to the problem faced while writing feedback.

Students can give not so useful feedback in order to hide their problem, so teachers should be make them feel safe so that they can express themselves.

**Teachers curation**  
1) Students making mistakes with Questions tagged Easy, Safe, Average comes under misconceptions which need to be dealt with. It can also be due to silly mistakes, if the mistakes are repetitive, it must be addressed.

2) Concepts of questions that are tagged with Low and Trouble (it doesn't matter whether student solved it correctly or not) should be explained again to the student. If a student has solved correctly even after tagging it as Low or Trouble than the student need be asked for the cause of trouble along with solving the trouble.

3) Written specific short correction and feedback should also be marked in the answer script (Can be done after scanning of answer script, and using annotating tools of softwares such as okular, shutter) . Motivational or subjective feedbacks (e.g. work more on this topic) should be verbal instead of written.

Explaining and clearing doubts can be done in groups in the class as well as in individual level. Grouping can be done based on the overall type of feedback you get from all students.

**Spaced Practice**  
All questions from Average, Low, Trouble, and questions of Easy and Safe that were solved incorrectly by students should be noted down and _equivalent questions_ need to be prepared for spaced practice.  
About 30% of equivalent questions from Easy and 50% of equivalent questions from Safe that are solved correctly by the student should also be included in spaced practice.

_pretest and posttest should run in a chain that checks the improvement._ 

![](images/8863d-postpretest.png)

These tests should be usually of **low stakes without grading** and purpose of exam should be retrieval practice and understand student better so that corrective measures can be taken.

> eSALT feedback helps to identify where exactly students are facing problems, and it will act as a reflection for teachers and they can take corrective measures to deal with the problems faced by students. It's so easy that even kids can label the questions.

[Personalized learning goals: New information is built over reusing of previous information](https://iambrainstorming.ml/personalized-learning-goals-new-information-is-built-over-reusing-of-previous-information/)

---


# explaining true experiment to a 13 year old

**Let's start with a Twitter Joke:**  
Conversation over breakfast.  
ME: Whoa, you lost another tooth?  
A: Yes!  
ME: Why didn't you tell me?  
A: I'm conducting an experiment. If I lose a tooth and don't tell anyone, will the tooth fairy still come? If not, then I know the tooth fairy isn't real.  
ME: ...  
HUSBAND: 😮  
  

### A small introduction to true experiments

#### True experiments involve changing one variable and then measuring another.

A variable is any factor, trait, or condition that can exist in differing amounts or types.  
  
The two main variables in an experiment are the independent and dependent variable.  
  
An independent variable is a variable that is changed or controlled in a scientific experiment to test the effects on the dependent variable.  
  
A dependent variable is a variable being tested and measured in a scientific experiment.  
  
Independent variable: Cause  
Dependent variable: Effect  
The researcher is looking for the possible effect on the dependent variable that might be caused by changing the independent variable.  
  
Only one change is made at a time, and results are checked.  

  

### The Experiment

**Hypothesis:**  
  
**_Test whether the reason for water droplets in polythene bag containing a plant is: leaves_**  
  

[![](images/5dd67-control_group.png)](http://iambrainstorming.files.wordpress.com/2018/03/5dd67-control_group.png)

  
  
Here two variables are:  
1) Dependable variable: Formation of water droplets in a polythene bag.  
2) Independent variable:  Cutting out different parts of a plant (leaves, stem, root).  
  
Collect different kinds of herbaceous plants with its root attached, such are a rose, basil (tulsi), marigold, croton etc.  
  
**Why is control group used?**  
**_The presence of a control group helps scientists rule out alternate causes for any observed results._**  
Negative control groups **exhibited no effects** when compared to the treatment group.  
Positive control group **exhibits a specific expected effect.**  
  
We take a positive control group with polythene bag containing the real whole plant.  
And a negative control group with polythene bag containing a fake plastic plant.  
  
Now we modify the independent variable, i.e. **remove** a part of a plant, and check what happens to the dependant variable, that is whether water droplets in the polythene bag are formed or not.  
  
The experiment gave the following results.  
  

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="http://iambrainstorming.files.wordpress.com/2018/03/b1e4d-no_leaves.png" style="margin-left:auto;margin-right:auto;"><img border="0" height="320" src="images/b1e4d-no_leaves.png" width="255"></a></td></tr><tr><td style="text-align:center;">No leaves, no water droplets</td></tr></tbody></table>

  

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="http://iambrainstorming.files.wordpress.com/2018/03/66637-no_roots.png" style="margin-left:auto;margin-right:auto;"><img border="0" height="320" src="images/66637-no_roots.png" width="255"></a></td></tr><tr><td style="text-align:center;">No root with water droplets</td></tr></tbody></table>

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="http://iambrainstorming.files.wordpress.com/2018/03/925f5-no_stem.png" style="margin-left:auto;margin-right:auto;"><img border="0" height="320" src="images/925f5-no_stem.png" width="290"></a></td></tr><tr><td style="text-align:center;">No stem with water droplets</td></tr></tbody></table>

  
  

### **Inquiry and Argumentation:** 

Does the experiment supports your hypothesis i.e. is your hypothesis true?  
**How do you know** leaves contributed to most of the water droplets in polythene bag?  
  
Do you think other parts of the plant also contributed to the production of water droplets in the polythene bag?  
  
**How do you know** stem is not the reason for the production of water droplets?  
  
**Imagine**, it was root, not the leaves that produced water droplets. What will be the results of the experiment? Modify the diagram, showing that root was producing water droplets.  
  
**How do you know** it was a part of a plant that was producing water droplets, and water droplets didn't come from the air? Explain it using the importance of positive and negative control group.  
  
**What if** water produced in polythene bag was much more or much less than the water produced in the positive control group?  
  
If the experiment has failed to produce the water droplets, what conclusion will you draw and why?

---


# feedback for mca program of ignou

**Study material covers the latest developments on the subject**  
No, seems it is not updated since 2010. e.g.  It talks about popular browser of Linux are Netscape Navigator.  
  
**The contents of the study material are well organized**  
Yes, the organization of content is too good. Learning objectives, then content based on learning objectives, practice questions after each section. Space at the margin to take notes.  
  
**Aim and objectives of the courses are clearly explained in study materials**  
No, Even though it uses narration techniques, it does a good job in introduction sections, but it fails to explain intelligibly for concepts that are hard to understand and are abstract. Also, the text is ambiguous, confusing without precise definitions and language.  
  
**The study materials provided a broad overview in the field of knowledge**  
Yes. The learning objectives cover broad overview. But MCA lacks choice and diversity.  
Programming languages like python and R should be introduced in MCA. Version controlling git must also be taught. Other advanced elective subjects like cryptography, blockchain can be added.  
  
**Instructional materials made the subject interesting**  
Same answer that of 3rd point.  
  
**Self-assessment activities in study materials encourage for critical analysis of contents**  
The answer is mixed. Some questions are good, but in some units, questions have completely ambiguous answers. In order to attempt these questions, one needs a thorough comprehension of the text, but material fails to do it. It leads to rote memorization of answers.  
  
**The study load is too heavy**  
Nope, with enough support from the teacher and right content quality, it will not take much time to finish. Also one has to be supported from first semester itself, as all subjects of later semester are linked with the previous semesters. e.g. Students not knowing about pointer (first-semester topic) can't do programming of a linked list (second-semester topic) in C.  
  
**Syllabus tries to cover too many topics**  
No, The same answer that of the 4th point  
  
**Numbers of counseling sessions adequately cover the theoretical aspects**  
No, classes can be conducted on both Saturdays and Sundays. It's important that classes are productive. Some teachers only try to finish the curriculum, knowledge transfer to students are almost zero. It is completely a time wasting work for both students and teachers.  
  
**Counseling schedule was convenient**  
Yes, counseling schedule is done on Sundays and holidays and is completely convenient. But one can add Saturdays to it.  
  
**Counselors demonstrated mastery of the subject matter**  
Yes, some counselors demonstrated mastery of the subject, not all. All counselor must use effective study strategies. ([http://www.learningscientists.org/](http://www.learningscientists.org/)) Counselors need not have to be expert but must show excellent leadership and provide correct resources. Should inquire the understanding of each component of topics by questioning and discussion.  
  
**Required software were made available during the practical sessions**  
Yes, but still better software can be used e.g. use of Linux is rare or no use of ide such as sublime text.  
  
**Regarding Assignment:**  
Students should submit assignment every week, instead of the end of the semester. Online platform can be created for submission. All most all students finish the assignment in last hours, through copy paste.  
  
Assignment should be divided based upon learning objectives of modules. The present assignment system requires knowledge of complete semester to attempt even a single question, and students has only a week to complete these assignments.  
  

[![](images/eba8c-screenshot-2bfrom-2b2018-04-30-2b11-58-16.png)](http://iambrainstorming.files.wordpress.com/2018/04/eba8c-screenshot-2bfrom-2b2018-04-30-2b11-58-16.png)

  

  
Submitting assignment weekly or biweekly causes spacing of learning, will also decrease the malpractice, provided the questions are doable in given time, and are sync with the classroom lectures. Quality of questions also matter a lot and should be relevant and worthful, allowing to learn one component at a time.  
  
  
**Retrieval practice**  
15 mins no stake exams can be conducted during every class for retrieval. To make it easier for teachers, questions can be designed and given to them based on the content by experts.

---


# framework for collaborative design of curriculum in schools colleges and universities

India requires a website for National Curriculum Framework for collaborative design of curriculum in Schools, Colleges and Universities  
  
In India, curriculum/syllabus of different subjects is usually obsolete. To make things, even more, worse, different states and university have a different syllabus which they never update based on present and future requirement. Also, getting a degree in advanced specialization course e.g. such as Machine Learning, Robotics is a distance dream in India.  
  
**What a website of National Curriculum Framework needs to solve?**  
  
1) Should be used to for collaborative design of curriculum, where everyone is free to suggest their inputs, whether University lecturers, researchers, entrepreneurs, students etc. It will bring everyone on one platform.  
  
2) Different colleges and Universities, need not have to design a different syllabus for a single subject, but a single syllabus will do, by an inclusive effort of everyone. CBCS will take care of the diversity/autonomy they want e.g. if they want to include some special topics based on the regional requirement, or if they want to remove a part of it if they want to address some other parts in detail.  
College specific syllabus is allowed, but it should match the current need of students, not based on the availability of teachers on the subject. (e.g. most schools teach C++ rather than python because the lack of availability of teacher to teach the subject. But for it, teachers can be trained, no need to use outdated syllabus)  
  
3) Statistical data of how many are opting for a particular part of choice based syllabus must be taken. Feedback must be given to the college by collecting data of students opting a topic and market demand of specific skill so that more/less student can opt for a particular topic of choice based syllabus, every semester.  
  
4) Curriculum update can be done in a fast-paced way, with involving everyone.  
  
5) As it will be a peer-reviewed syllabus, there will be least chances of anything missing in it, least/no errors, most detailed.  
  
6) The syllabus can be more detailed so that students and teachers understand what the objective of the topics is, and what will be the learning outcomes after completing a topic and also what **projects/practicals** should be given to students in a detailed and comprehensive way.  
  
7) It will make the project and problem-based learning real, as we can get innovative ideas of projects from different teachers and students.  
  
8) A unified syllabus will help in credit transfer between different colleges.  
  
9) All the curriculum at one place, so easy to find, no need to go for different websites to know what they are offering in the course.  
  
10) Everyone can make their contribution in their own pace and time.

---


# from hypocrisy to democracy this way delegated proof of stake 2

![](images/a05bb-election_dpos-1.png)

Preprint link: [https://osf.io/82mpk/](https://osf.io/82mpk/)

**dem·oc·racy** \[democracy democracies\]

1) fair and equal treatment of everyone in a country or organization, etc, and their right to take part in making decisions

2) a system of government in which all the people of a country can vote to elect their representatives

Yes, most democratic countries fulfill the second definition of democracy, but none to the first definition.

**Abstract:**

> Democracy is about fair and equal treatment of everyone in a country. But it becomes unrealistic to achieve when political parties have their **conflict of interest**, and leaders don't have the expertise to make **evidence-based policies** and neither have the skill and manpower for solving problems that surround our society and ecosystem. The new fair democracy provides an elegant way of governance that separates the representative responsibility according to their specialization and can grow into any complexity. The governance is divided into various departments, and each department is supervised by representatives with expertise in the field. Voters need to have enough knowledge about the departments and their problems, in order to vote for the selecting representatives of a department. The selection process of representatives is “_difficult in and easy out_”, which allows only **utilitarian actors** to hold the responsibility, weeding out frivolous ones.

**Why Democracy is always unfair?** 

In an ideal world, elections should be two things: free and fair. Every adult, with a few sensible exceptions, should be able to vote for a candidate of their choice, and each single vote should be worth the same.

Ensuring a free vote is a matter for the law. Making elections fair is more a matter for mathematicians. The many democratic electoral systems in use around the world attempt to strike a balance between mathematical fairness and political considerations such as accountability and the need for strong, stable government. Mathematicians and others have been studying voting systems for hundreds of years, looking for sources of bias that distort the value of individual votes, and ways to avoid them.

In 1963 the American economist Kenneth Arrow listed the general attributes of an idealized fair voting system. He suggested that voters should be able to express a complete set of their preferences; no single voter should be allowed to dictate the outcome of the election; if every voter prefers one candidate to another, the final ranking should reflect that; and if a voter prefers one candidate to a second, introducing a third candidate should not reverse that preference.

This all sounds very sensible, but there is just one problem: Arrow and others went on to prove that no conceivable voting system could satisfy all four conditions. In particular, there will always be the possibility that one voter, simply by changing their vote, can change the overall preference of the whole electorate. So we are left to make the best of a bad job – and deal with the mathematical imperfections that various electoral systems present.

![](images/89308-unfair_democracy.jpg)

\-- [How Numbers Work, New Scientist](https://www.amazon.in/How-Numbers-Work-beautiful-mathematics-ebook/dp/B072FVMJP4)

[Electoral dysfunction: Why democracy is always unfair](https://www.newscientist.com/article/mg20627581-400-electoral-dysfunction-why-democracy-is-always-unfair/)

**But there is a way where we can meet too close to the first definition.**  
Its called Delegated Proof of Stake or DPoS algorithm used to run decentralized blockchain.

> **Game theory** is about all kinds of strategic interactions among self-interested agents including those frivolous ones but also much more serious ones.

To know more about DPoS please go through the link:

**Explain Delegated Proof of Stake Like I’m 5**  
[https://hackernoon.com/explain-delegated-proof-of-stake-like-im-5-888b2a74897d](https://hackernoon.com/explain-delegated-proof-of-stake-like-im-5-888b2a74897d)

Explanation of what we can achieve with DPoS in Hindi:

https://soundcloud.com/amiya-behera-256954375/properties-of-fair-democracy

**What we can achieve with DPoS?**

1) Fair (treating people equally without favoritism or discrimination) and equal opportunity to succeed for each and everyone.

2)_Decentralized Democracy_, No authoritarian regime or no anarchical regime (leaderlessness or ignorant leaders lacking knowledge or good judgment) and no concentration of power, because the ability to approve policy is limited only to the concerned department who have the required expertise to make a decision.

3) _Evidence-based democracy_, Only evidence based policies are allowed, and representatives need to be experts in the field and each statement they make in the policy has to be backed by evidence and sound reasoning.

4) _No catch22 paradox_, that is people have true freedom to select their nominee for the election, and is not decided by political parties, voters have a very large pool of nominee out of which representatives can be selected and also people have true freedom to remove their representatives easily without the involvement of vested interest or party politics

> A catch-22 is a paradoxical situation from which an individual cannot escape because of contradictory rules or limitations..

5)_Collaborative democracy_, Collaborative problem solving, not by competition.  
As all representatives have almost an equal chance of getting remove if the behave frivolously (not having any serious purpose or value), they have to collaborate in order to solve a problem, not compete for each other.

7) __Infinitely Stable Democracy_,_ Indefinitely stable government, voting will continue in short intervals like 6 months, but the government will remain stable infinitely.

8) No nepotism (the practice among those with power or influence of favoring relatives or friends, especially by giving them jobs), frivolous one just can't stay.

9) _No conflict of interest democracy_, No in-group or out-group bias, representatives can take their individual stand, without considering the profit and loss of their alliance and opponent. Democracy design where conflict of interest is not plausible. Not a don't be evil design, but a can't be evil design.

> As there are no opponent parties with their self-interested goals, and representatives are experts in their respective fields, consensus to reach a decision will be more objective (not influenced by personal feelings or opinions; considering only facts) and justifiable.

  
10) _Evolutionary democracy_, that gets adapted and refined with an increase in efficiency and productivity of representatives with each election every 6 months, as bad candidates are removed by voters.

11) _Blockchain democracy_, without any middleman or brokers such as politicians (MPs, MLAs, PM, CM) and bureaucrats, who delay the implementation. People will transact directly with their service provider departments.

12) _Mega participation democracy_, with a massive number of expert representatives per department, who can implement policies collaboratively within a limited extent of time as it makes a decent ratio between population versus a department. Representatives will also assign tasks to voters, common citizens, and students to quickly get the job done by volunteering.

13) __Mobile and global democracy__, where boundaries between countries become obscure with time, the expertise of representatives matter, not the origin.

14) _Inclusive democracy_, people are not discriminated because of origin, color, gender, sexual orientation, type of job, culture, age, legacy, ethnicity, generation, genetic characteristics and disability.

![](images/ruler.png)

If a leader's desire is for good, the people will be good.  
\-The Politics Book, Big Ideas Simply Explained

![](images/learned.png)

Virtue and Ability can be learned through study.  
Plans for the country are only to be shared with the learned.  
_\-The Politics Book, Big Ideas Simply Explained_

**How can we rebuild democracy with the present catch22 democratic system?**

A quarter of the world's population lives in countries that are not free. How do you bring down a dictator?

https://www.youtube.com/watch?v=utW1F-QuYq8

Video URL:  
[https://youtu.be/utW1F-QuYq8](https://youtu.be/utW1F-QuYq8)

## **The whole process of voting and how it can be done?**

## **[https://iambrainstorming.wordpress.com/the-whole-process-of-voting-in-a-dpos-country/](https://iambrainstorming.wordpress.com/the-whole-process-of-voting-in-a-dpos-country/)**

References:  
[https://en.wikipedia.org/wiki/Game\_theory](https://en.wikipedia.org/wiki/Game_theory)  
[https://en.wikipedia.org/wiki/Proof-of-stake](https://en.wikipedia.org/wiki/Proof-of-stake)  
[https://www.coursera.org/learn/game-theory-1](https://www.coursera.org/learn/game-theory-1)  
[https://en.wikipedia.org/wiki/Catch-22](https://en.wikipedia.org/wiki/Catch-22)

Explanation in Hindi:

Playlist:  
[https://www.youtube.com/playlist?list=PLzE\_RgoaLpqfYiBbSP7Z16Gg09GFJVMYs](https://www.youtube.com/playlist?list=PLzE_RgoaLpqfYiBbSP7Z16Gg09GFJVMYs)

https://www.youtube.com/watch?v=wvhtkTamTYw

---


# future hybrid kids

With Mobile Democracy, future kids will be hybrid kids: #mobility #INCLUSION😇

[Mobile, inclusive and international democracy](https://iambrainstorming.blogspot.com/2019/01/the-whole-process-of-voting-in-dpos.html)

![](https://iambrainstorming.files.wordpress.com/2019/09/inclusion.jpg?w=720)

Inclusion

---


# future of generation z and millennials

Generation Z will outnumber millennials in a year. By 2019, the third of planet will be 18 and under.

**How's their future in hypocritical democracy?**

https://www.youtube.com/watch?v=5IM-iw1KovE

## [**What is hypocritical democracy?**](https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html) 

Also knows as baby eater democracy.

[https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html](https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html)

## **Unemployment**

![](images/d_sg0xaxsaaszm7.jpg)

Half of India’s working-age population (15 years and above), is not contributing to any economic activity 

[https://economictimes.indiatimes.com/jobs/50-indias-working-age-population-out-of-labour-force-says-report/articleshow/67830482.cms](https://economictimes.indiatimes.com/jobs/50-indias-working-age-population-out-of-labour-force-says-report/articleshow/67830482.cms)

#### [Insect (pollinators) population is in decline, but not the human population, disruption of the ecosystem.](https://www.scientificamerican.com/article/as-insect-populations-decline-scientists-are-trying-to-understand-why/)

[https://www.scientificamerican.com/article/as-insect-populations-decline-scientists-are-trying-to-understand-why/](https://www.scientificamerican.com/article/as-insect-populations-decline-scientists-are-trying-to-understand-why/)

UNSUNG HEROES

Many people tend to think of animals as large, furry, likeable creatures. In reality, insects are the dominant form of animal life. Close a million species have been described to date—compared with a paltry 5,416 mammals. And depending on who you ask, entomologists suspect there could be two to 30 times as many actually out there.

Not only that, but insects are linchpins of the living world, carrying out numerous functions that make life possible.

Insects pollinate a spectrum of plants, including many of those that humans rely on for food. They also are key players in other important jobs including breaking dead things down into the building blocks for new life, controlling weeds and providing raw materials for medicines. And they provide sustenance for a spectrum of other animals—in fact, the Puerto Rico study showed a decline in density of insect-eating frogs, birds and lizards that paralleled the insect nosedive.

#### [Climate Change](https://climate.nasa.gov/evidence/)

[https://climate.nasa.gov/evidence/](https://climate.nasa.gov/evidence/)

![](images/203_co2-graph-061219.jpg)

#### [THE EXTINCTION CRISIS](https://www.biologicaldiversity.org/programs/biodiversity/elements_of_biodiversity/extinction_crisis/)

It's frightening but true: Our planet is now in the midst of its sixth mass extinction of plants and animals — the sixth wave of extinctions in the past half-billion years. We're currently experiencing the worst spate of species die-offs since the loss of the dinosaurs 65 million years ago

#### **Plastic, plastic and more plastic in oceans**

> 6.5 million tons of litter enter the world’s Ocean each year. 50% is long-lasting plastic that will drift for hundreds of years before it is degraded.
> 
> [Ocean Pollution](https://www.worldoceannetwork.org/won-part-6/carem-wod-2014-4/thematic-resources-pollution/facts-figures-pollution/)

#### Air pollution

Expensive air purifiers in homes who can afford.

> Air pollution in India is estimated to kill 1.5 million people every year; it is the fifth largest killer in India. India has the world's highest death rate from chronic respiratory diseases and asthma, according to the WHO. In Delhi, poor quality air irreversibly damages the lungs of 2.2 million or 50 percent of all children.
> 
> https://en.wikipedia.org/wiki/Air\_pollution\_in\_Delhi  

#### Chronic respiratory diseases

\>90% of COPD deaths occur in low-income and middle-income countries. What's special in low-income countries?

![](images/respiratory_diseases.png)

[https://www.who.int/respiratory/en/](https://www.who.int/respiratory/en/)

## Tobacco kills more than 1 million people each year, but govt fails to ban tobacco.

## 42.4% of male adults are tobacco users.

![](images/factsheet.png)

![](images/tabacco.png)

**Revenue collection**

![](images/screenshot-from-2019-04-17-20-09-00.png)

**[THE TOBACCO INSTITUTE OF INDIA](https://www.tiionline.org/facts-sheets/revenue/)**

Revenue collection increases every year. **But is it to be called as trade or economy?**

**An Economics Definition:**

> Economy in general \[is\] the art of providing for all the wants of a family, \[so the science of political economy\] seeks to secure a certain fund of subsistence for all the inhabitants, **to obviate every circumstance which may render it precarious**; to provide every thing necessary for supplying the wants of the society, and to employ the inhabitants ... in such manner as naturally to create reciprocal relations and dependencies between them, so as to supply one another with reciprocal wants
> 
> Sir [James Steuart](https://en.wikipedia.org/wiki/James_Steuart_(economist)) (1767) 

Politicians can give data about agricultural employment, but there are alternatives to tobacco agriculture, and these people can be trained in new areas of farming. But yes, it does require experts in responsibility.

![](images/screenshot-from-2019-04-17-20-38-05.png)

### Bacteria and Competition: How it's similar to human?

**Why bacterial growth curve is so important?**  
It gives the idea to learn about the impact of competition in the simplest way. **It gives the answer what happens to a population when resources are limited.**

**Thrive, Survive, and Deteriorate**

[https://technoperiod.blogspot.com/2016/09/bacteria-and-competition-how-its.html](https://technoperiod.blogspot.com/2016/09/bacteria-and-competition-how-its.html)  

_**What policies should we make for family planning?**_

Education with content creation that promotes critical thinking a **must** to students and adult.

But are our boards doing any little for teaching rules of universe and rules of life?

**All books that don't meet the learning criteria must be taken off**

[https://technoperiod.blogspot.com/2017/01/all-books-that-dont-meet-learning.html](https://technoperiod.blogspot.com/2017/01/all-books-that-dont-meet-learning.html)

> Forget mars, we are bound to extinct in earth itself, if we don't stop all these nuisance.

> All these can only be solve by collaboration, not through competition. One's profit shouldn't be others loss. Its already too late, a little further late will accelerate the closeness to extinction.
> 
> [Collaborative Democracy](https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html)

---


# future of money removing the negative impacts of money

Just got an idea, we have two types of money, one required for short time for doing an exchange and other for storage.  
Name it: Exchange bitcoin and Storage bitcoin  
  
A centralized server (bitcoin bank) to generate bitcoin money who will keep track of money.  
  
Exchange bitcoins will come with an expiry date of one/two month. After bitcoins, are expired you have to reactivate your bitcoins from the centralized generator using your valid identity.  
  
In this way, money will remain accountable, can't be misused by anyway and money also can't be concentrated.  
  
Also, you can get bitcoins for storage (storage bitcoins), which can never be used to buy services or goods, you can get the storage bitcoins from bitcoin bank exchanging your exchange bitcoin. Storage bitcoins will be tagged with your identity, so you can't exchange it with anyone. Only you can exchange it through bitcoin bank to get exchange bitcoin.  
  
Also no chance of hacking, freedom of p2p exchange. No problems at all.  
  
What do you think about it?

---


# going away with money and making a currency that counts to unity always

Going to the beginning of the problem and taking a different way to solve it, instead of money and currency.  
  
[https://goldsilver.com/hidden-secrets/episode-1/](https://goldsilver.com/hidden-secrets/episode-1/)  
  
_Note: Money Vs Currency_  
_The difference is not money (gold and silver) has value, and currency doesn't have. Actually, they both don't have any value, as it doesn't serve our need. The real difference is we can't create money with time and effort._  
  
**To take the decision now, we need to understand the past and break the reproducible patterns that don't work in the past, to have a better future.**  
  
**Need**  
Require (something) because it is essential or very important rather than just desirable  
Need is something that is required for us to thrive. Our actual needs are the concrete object like food, clothing, mobiles, computers, services like education, electricity, water, air and endless list.  
Some of it like air and water, which doesn't require any exchange (we do sell purified water), as they are sufficient in amount and we get it least effort.  
  
**Greed**  
It is something that you wish/desire and it's not necessary for thriving of a species. It's about ignorance. Greed and ignorance make you misuse of resources, wasting resources, polluting the environment for pretty gains.  
  
**Need and greed may look similar, but they do the opposite thing. One helps you to thrive, other leads you to extinct.**  
  
Whether it's to fulfill your need  or greed, all requires time and effort (with exception to air and water, at least for now because we are going on polluting it). We need to work for it, to fulfill it, we need to spend time. But the problem is an individual can't do all the work to attain its need/greed. To make the system efficient, a different person take a different task, all working towards each other need/greed.  
  
So here the term exchange comes into play. If person A is working to produce pulses, and person B is working to generate clothes. A can give some pulses to B and B can give some clothes to A, and the result is both of the need is taken care of.  
  
But this exchange system has many problems. The most important problem is it's not portable, can't be stored easily and are not countable.  
  
So here money: gold and silver coins came to play.  
They are made of same sizes to make it count. They are fixed in numbers, as you can't produce it by using your time and effort.  
  
Money became an interface of exchange. For example, person A doesn't require clothes, but person B requires pulses, so person B (who is producing clothes) can give some gold or silver coins instead of clothes to person A, and take pulses from A. As gold is storable and portable, person A can use it for buying other things later with other persons.  
  
Because the total amount of gold in nature is limited, we got another problem. Our population was growing. We need an efficient way to distribute the money, which requires further division of gold coins. So finally  cheaper copper, nickel and paper notes were born. But the problem with it is, you can produce it by using your time and effort. We have the printing press that can make a nearly infinite number of notes. So, a number of paper notes or amount of digital money (which doesn't require any effort and time even to produce it) to be made available in the market remains in hand of govt of different countries. So all our economy comes down to faith or trust in government.  
  
In an inter dependable economy within different countries, if any one country breaks the rule, the impact will be seen around the whole world.  
  
The mechanism is well explained in the video.  
  
If you increase the number of currency, the prices will rise as the resources or supply are limited. The price I mean, the amount of currency you need to exchange an object that has value. So increase the number of currency will lead to inflation, and a decrease in number will lead to deflation when the market starts sensing it.  
  
[https://goldsilver.com/hidden-secrets/episode-2/](https://goldsilver.com/hidden-secrets/episode-2/)  
**Seven stages of Empire about wealth transfer.**  
The video also explains why gold always wins at last.  
  
The videos also talk about credit cards, how currency is created when you make a loan.  
  
**So what's the solution?**  
  
Here are some of the ideas. No reasons why it won't be practical in the world of technology and internet.  
  
We need a global market (may be a country to get started), with everyone having an account in it, where we can do real product exchanges. As you can see all the trouble started with unable to do concrete product exchanges directly. At that time, the interface was a portable money, here interface is the global platform (a website, API etc) where we can make direct product/services exchanges.  
  
We already have the platform like amazon or Flipkart, snapdeal (as in the case of India), but these platforms still use money as an exchange.  
  
**So, what the currency here. Again the currency is a count. But the important thing is total amount is 1 or 100%, that never grows in the count. Even if you take a loan, total amount should be always one.**  
  
But the algorithm work is to divide the 1 into fractions and assign it to products and services.  
Assignment of prices will be based upon demand, the supply of products and services and should be more equitable.  
  
It will also make universal basic income possible.  
  
This algorithm will be bit complicated and should be based upon local market and global market.  
  
So, in order to assign prices to product and services (price discovery) and make the algorithm work we need to feed it with inputs variables of supply and demand.  
  
Knowing the supply is easy, mostly a quantitative measurement.  
  
But demand is complicated, because demand is what affect mostly to the prices, and also future of the supply. Leaving some basic demands, demand is most often based upon perception. It's a qualitative measurement.  
  
To know the demand/perception, people should crowdfund some amount of money for the projects whose product or services are not available yet.  
  
What about loans?  
Here we require the help of the bank, that decides the reliability of the person. Same way it's done now.  
Usually, people make a loan for buying expensive products or invest in businesses and bank gives them a loan and sometimes creates money(currency).  
If it's a big loan, the idea should be big. So it can be done by crowdfunding.  
For small loans, money can be given from deposits instead of creating more currency.  
Sometimes bank can give a big loan, but it has to go the stringent criteria that it will create the necessary impact, such initial loans to telecom operators for installation of their equipment, till it becomes sustainable. Again it should only be given from bank deposits, not from tax.  Should be done by govt permission.  
  
Only default amount can be kept for longer time. If more amount of money is present in the wallet it will go to the deposits and becomes unusable by the person. To get your money back you need to go the bank based upon the policy. It's also applicable to loan holders.  
  
This keeps the all the money in usable form, without the need of creation of new money.  
  
What about govt run projects? Should taxes be there?  
Govt work is to make right policies and bring ideas that help the community as a whole. They can collect tax from us for govt run projects. But transfer they do to the service provider should be online.  
  
  
Also, what about subsidies that help the expensive product to thrive initially till its cost go low (e.g. solar panel)?  
It can be paid through taxes.  
  
What about monthly salary govt/private sector give?  
Basic free services like education, railways, roads can be paid by using taxes. The government should take only those services that are basic necessary.  
A private company can pay the employees by the money of service users.  
  
_So, we have 4 kinds of money here, used for exchanges, deposits (savings), loans, taxes._  
_There is another problem, we need a reward and punishment mechanism for deposits and loans i.e. **interest**._ If we don't reward for deposits, people will not come for it. If we don't punish for loans, everyone will go for it.  
  
We need an optimization algorithm that disallows creating any money due to loans and deposits.  
We have two kinds of deposits, short term and long term. Short term (term should be not more than six months) deposits shouldn't be used for giving loans. If time goes beyond six months, you lose the liability of anytime withdrawal. All large withdrawals, loans, and loan deposits should be **done in cycles of time** so that we have enough deposits in the vault. If you don't have deposits, don't give a loan. We can't make the withdrawals random.  
  
A simple simulation for students to go through about loan and deposits [https://github.com/amiyatulu/bank/blob/master/deposits\_loan.py](https://github.com/amiyatulu/bank/blob/master/deposits_loan.py)  
  
Also, interest rates for deposits and loan can be different and should be based upon whether we want to increase or decrease the total deposits in the vault that is unusable. If total deposits become more, manipulate the interest rates, so that people make more loans. **Keep the money circulating.**  
  
The ratio of deposits and loans must be more than one. Taxes should go directly to govt account, where money is distributed to employees and service provider. Taxes account and big loans  should come under auditablity all the time. Also, money can be stored for a longer time in tax account.  
  
So, all these require a testing with simulations by proving real data inputs to understand how the market will work.  
  
_We already made API for currency. But it only requires API for all services and products, whether govt or private sector all should be integrated with the API similar to present e-commerce API. Money should be paid to the services they give as an individual and company (company again transfer money to individual for the services they give). Services do change with time, so data should be updated in it._  
  
**To make everything accountable, we need 4 core principles: responsibility, explainability, accuracy, auditability, and fairness.**  
**https://www.technologyreview.com/s/602933/how-to-hold-algorithms-accountable/**  
All these can be achievable by this method as all data are available to us.  
  
**We have only ONE available for division, so divide it efficiently.**  
**So what's the purpose of money/currency?**  

  

_Its purpose was to **"work"** for serving each other need (not greed). But with time this **"work"** is getting done by automation through computers and factories. So, with time the purpose of money should also change, as we have not done it or if we will not do it, we are facing its consequences or also face its consequences in future. Because all money gets concentrated with people that run these factories and common people are left without any purchasing power._  
_Upgrading our skills/work to meet our current or future need is most important. So better policies and investment is required for it. We can't allow our education to remain same if our work that we need is changing or has changed._

Some of the questions I have is, how it will affect the prices of the usual commodity like food, electronics, and other essential things. We can't make it dynamic (at least it never grows) because it will impact the psychology of the people. As GDP or supply increases (again the count grows), the prices should come down, as the total count of currency is 1. If the demand and supply reach equilibrium the prices will be stable. And I find no reason why some will decrease the supply if all data of demand is available except in the case of calamity. In this way, we will get a predictable pattern, and always know what is happening to the demand and supply chain. But if we increase the count of money or sometimes demonetize it with respect to increased GDP or other factors without knowing how much money to increase, it becomes completely unpredictable for people to make a decision and they will always take bad decisions which will be chaotic for the nation. Trying to do a simulation with about 50 people to test the result and how it can be done in an efficient way.

---


# good questions vs bad questions a critical analysis

Let's analyze the questions given here about DNA:  
[http://blogs.biomedcentral.com/on-biology/2016/04/22/dna-day-quiz/](http://blogs.biomedcentral.com/on-biology/2016/04/22/dna-day-quiz/)  
  
1\. How many chromosome pairs make up the human genome  
a) 23  
b) 24  
c) 12  
  
One may argue this question is memory based, but it's not. It is one of the fundamental questions that a student has to memorize it.  
  
After you have chosen to answer, its gives the feedback, why you are wrong or right. This is the most important step.  
  
2\. Your genes could influence your choice of partner, true or false?  
a) True  
b) False  
  
Look at the question, even if you don't know the answer, the question makes you curious to know the answer. It gives us knowledge about whether gene influences your choice of partner or not. It is very related to our real life.  
  
Again its give a feedback.  
Genetic variation influences one’s choice of partner. The genetic correlation between height and the preference for a partner with similar height shows that genes affecting individual preferences for height and one’s own height are largely shared.  
The answer justifies how, by giving the reason which we are aware of.  
  
  
Now look at this question?  
3\. A nucleic acid sequence is a succession of letters that indicate the order of nucleotides within a DNA or RNA molecule. When was the first complete nucleotide sequence of a genome sequenced?  
1) 1976  
2) 1995  
3) 2007  
  
Ok, let's change the options to  
e.g. 1) 1976  
       2) 1977  
      3) 1975  
  
So, what the difference between the two questions, the second one is very difficult to crack and will rely upon only your memory, but the first one requires your knowledge.  
See that the options in first one, the years are widely spaced, it requires our understanding how earlier or how recent first complete nucleotide sequence of a genome sequenced. So you will try to attempt the question, think about it if you have some knowledge about it. But for the second question, you will not even try to attempt it.  
  
Now next question:  
  
4\. Genomic characterization of tumors for diseases like ESCC is likely to reveal additional oncogenic mechanisms. What is ESSC?  
 a) Esophageal squamous cell carcinoma  
 b) Esophageal squamous cell cancer  
c) Esophageal Stage III cell carcinoma  
  
Let's change the question. What if you are only asked what is ESSC? Removing the first statement. (Genomic characterization of tumors for diseases like ESCC is likely to reveal additional oncogenic mechanisms.) The question becomes only a junk for the reader. The first statement gives you an idea about what ESSC is. Its gives a background knowledge about ESSC. So, even if you don't know the answer, you will want it to know.  
  
Do look at the course on edx.org:  
[https://courses.edx.org/courses/course-v1:IEEEx+MCExam01x+2015\_T3/info](https://courses.edx.org/courses/course-v1:IEEEx+MCExam01x+2015_T3/info)  
Writing Exams for Science and Engineering Courses

---


# govt spends more than rs 4300 crore in 4 years for advertisement but what are they selling

This is what RTI shows:

**[In four years, Modi govt spent over Rs 4,300 crore on publicity.](https://www.hindustantimes.com/india-news/in-four-years-modi-govt-spent-over-rs-4-300-crore-on-publicity-rti-shows/story-InEz7kP27hlA5ym9BzAxwI.html)**

This is how much other opponents spend on advertisement.

**[Kejriwal’s Delhi govt spent Rs 274 crore on ads since 2015 – four times more than Congress](https://theprint.in/politics/kejriwals-delhi-govt-spent-rs-274-crore-on-ads-since-2015-four-times-more-than-congress/214151/)**

[But if you look at the billionaire entrepreneurs like Ambani, and Mittal, they spend about Rs 50-300 crore per year depending on the market conditions.](https://www.livemint.com/Industry/BNw5kNyk6FE5Ou7Nd8FWRI/Jio-effect-Telecom-firms-ad-spending-rose-50-in-2016-say.html) 

## **This is how Advertising works. The Game theory of Advertising.** 

![](https://iambrainstorming.files.wordpress.com/2020/02/screen2020-02-09_133608.png?w=1024)

> **The payoff is high for both when both the competitor entrepreneurs don't advertise or they do advertise.**

**But entrepreneurs sell products, and money comes from their profit.**

## But what politicians are selling?

> As they are not selling anything, so the payoff will be the same when they all don't advertise or they do advertise. The effect that politicians are seeking through advertising will not change if there is a complete ban on paid advertisements. 

## Do you know where does the money on publicity come from?

**Yes, you have correctly guessed, its taxes. But taxes can come from two means:**

1) Through transaction costs, where the govt keeps the cut on the transaction. 

2) Printing more money, as govt is a money-printing machine. When govt prints more money, the burden has to beared by common people. A nonobvious way of collecting taxes. 

https://www.youtube.com/watch?v=78-BlZXm7wA

[Demonetisation three years later: Cash in circulation up 25.6% to record high of 22.57L cr](https://indianexpress.com/article/business/economy/demonetisation-three-years-later-cash-in-circulation-up-25-6-to-record-high-of-22-57l-cr-6110842/)

Who pays the bad loans (loans given by banks to people who then fail to repay them) or NPA of corporates like Vijay Mallya and Nirav Modi? **Do you think the bank?** [😀](https://emojipedia.org/grinning-face/) [😀](https://emojipedia.org/grinning-face/) [😀](https://emojipedia.org/grinning-face/) [😀](https://emojipedia.org/grinning-face/)

As of March 31, 2018, [provisional estimates](http://164.100.47.190/loksabhaquestions/annex/15/AU2882.pdf) suggest that the total volume of gross NPAs in the economy stands at Rs 10.35 lakh crore.

**So, if you what to know what politicians sell? They sell countries.** 

I already said what is your future with this democracy. The onus lies with the people to bring a good and fair democracy that incentivizes experts with character to join not illiterates, matric pass or hypocrites. 

The link is here: [https://iambrainstorming.wordpress.com/2019/03/05/future-of-generation-z-and-millennials/](https://iambrainstorming.wordpress.com/2019/03/05/future-of-generation-z-and-millennials/)

> This is how taxpayers' money should be used. To pay for utilitarian services like food, water, electricity, education, transport charges. It will also create a healthy economy because will increase the velocity of money without hoarding and increase entrepreneurship.

Please read about UBI tax coins here:

[https://iambrainstorming.wordpress.com/2018/12/31/the-perfect-competition-world/](https://iambrainstorming.wordpress.com/2018/12/31/the-perfect-competition-world/)

---


# grades should be topic wise

![](https://iambrainstorming.files.wordpress.com/2021/05/grades.jpeg?w=1024)

Enough has been told about the dark side of the grades by educators.  
Here is a blog that gives 3 reasons grades are bad and restrict students from innovating or becoming an independent thinker.  
[https://www.thnk.org/blog/3-reasons-grades-bad-education/](https://www.thnk.org/blog/3-reasons-grades-bad-education/)

It has been criticized to encourage "teaching to test" style of teaching, and grades become the end goal rather than learning.  
No matter how much it is criticized, the status quo of grades has hardly changed.

It became a century, but students are still judged only through their grades. Innovation on improving grading procedures has continued in many isolated parts of the world, but it's never done in scale throughout most countries.  
In India, reason can be the hierarchical rigid political, and bureaucratic system, that hardly gives any choice and training to the schools to innovate. They want everything to be filtered by grades, whether through board grades or entrance scores.

> Grades have become a source of filtering, rather than providing equity to the disadvantaged.

**But many solutions to the problem of grades exist:**  

Like low stake topic or chapter wise scores, where students can repeat the chapters till they score above 90s or A grade in it.  
Boards like CBSE do allow reappearing exams to improve grades, but that is impractical to students, as they have to appear the whole subject exam rather than the topic they are weak at. Appearing the whole subject is too tedious, can take a year, makes them repeat the topics which they have already mastered.  
Topic-wise exams help them to master each topic and students master the complete subject without a learning loss.

> Students can learn each topic at a time at their own pace, without getting overwhelmed by the curriculum of the complete subject.

  
Here is a form of simple rubrics to grade students.  
[https://onlinenetworkofeducators.org/2021/04/26/are-grades-failing-us/](https://onlinenetworkofeducators.org/2021/04/26/are-grades-failing-us/)

The problem is not just grades but [curriculum](https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/) and [question papers](https://nbviewer.jupyter.org/urls/cbse-probing.hashbase.io/Chemistry%202017.ipynb). How sound the question design has been done? Whether it encourages critical thinking or rote memorization.  
Without an effective curriculum, it's pointless to have exams.

---


# hate speech is not free speech

![](https://iambrainstorming.files.wordpress.com/2022/04/hatespeech.jpg?w=1024)

Social media is filled with information pollution, hate speech, propaganda, and echo chambers and alternative facts. Not all voices are equal in our current social media. Influencers and marketers amplify their tweets by the redundant fake account. It's not surprising that trashy tweets of politicians get lakhs of retweets, where more than 90% of retweets are from the same company or IT cell.  
Social media has become a key part of our communication. Low-value information can cause anxiety, decision paralysis, and loss of perspective and moral values.  
The unique point of social media like twitter are ideas, humor, blog links, and positive activism for social change. Most active social media are in control of centralized moderations, and their profit-seeking model doesn't allow to curb the junk, as their funding comes from more engagement rather than maintaining the quality. These social media can be purchased and controlled by billionaires like Elon Mosk and their functionality can be changed by the whims of these billionaires.

There are many open-source social media, but they still fail at decentralized moderation and can be easily hacked by marketers.  
What we need is moderation through community governance with an incentive system to behave decently on the platform, so that social media are emotionally safe and takes care of our well-being rather than an additive model.  
Blockchain KYC technology like proof of humanity can eliminate Sybil attacks on social media, algorithms like schelling game (Kleros) can incentivize to derive the truth, follow the hate speech or information pollution guidelines. ZKsnarks can take care of privacy for sharing sensitive information by protecting through anonymity.

> Social media belongs to common people, for their issues, concerns, and well-being, not billionaires, politicians, marketers, or influencers.

---


# higher education must immediately stop obsolete blackboard teaching

Higher education must immediately stop obsolete blackboard teaching. **Higher ed requires mentor and collaboration.**

**What is obsolete blackboard teaching?**

\[Lecturing is the\] best way to get information from teacher’s notebook (mouth)  
to student’s notebook without touching the student’s mind.

                                                                                        — George Leonard

Patterns for bad practices of teaching, what is done in higher education, even best colleges.  
[https://iambrainstorming.blogspot.in/2017/11/patterns-for-bad-practices-of-teaching.html](https://iambrainstorming.blogspot.in/2017/11/patterns-for-bad-practices-of-teaching.html)

[![](https://iambrainstorming.files.wordpress.com/2017/12/55fb1-chalkboard_wood_black.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/12/55fb1-chalkboard_wood_black.png)

**So, how this can be solved?**  
This is how colleges must run when there is the shortage of skilled teachers:  
1) Give students compilation of pedagogically right content (such as videos, MOOCs, books, magazines etc.)  
**What it means to be pedagogically right content?**  
[https://iambrainstorming.wordpress.com/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/](https://iambrainstorming.wordpress.com/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/)  
**How learning can be more personalized with a decentralized syllabus that takes account of student pace, allows diversity and interdisciplinary connections?**  
[https://iambrainstorming.wordpress.com/personalized-learning-goals-new-information-is-built-over-reusing-of-previous-information/](https://iambrainstorming.wordpress.com/personalized-learning-goals-new-information-is-built-over-reusing-of-previous-information/)

2) Let students come with their laptops or provide them computers, and teacher can act as a mentor to maintain discipline in learning.  
**Importance of mentoring, why mentors are required:**  
[https://iambrainstorming.wordpress.com/importance-of-educational-videos-and-solving-its-limitation-by-teachers-assistance/](https://iambrainstorming.wordpress.com/importance-of-educational-videos-and-solving-its-limitation-by-teachers-assistance/)  
Mentor work includes:  
i) Providing leadership by bringing students to discuss, collaborate or work on their own on the topic.  
ii) Track what students have learned during a day  
iii) Mentor will become a co-learner and enhance his/her skills with every passing year.

Mentorship is a relationship in which a more experienced or more knowledgeable person helps to guide a less experienced or less knowledgeable person. The mentor may be older or younger than the person being mentored, but he or she must have a certain area of expertise. It is a learning and development partnership between someone with vast experience and someone who wants to learn.  
\-- Wikipedia

Students should upload their _lesson objectives and plan of the day, notes, annotations, written solutions and strategies to the practice problems, elaboration interrogation, designing probing questions and answering them, retrieval practice, flash cards, collaborative work, creative writings, teachers and peer feedbacks and any other useful documents to the server of your choice_

![](images/annotation.jpg)

An example of designing probing questions and adding explanations.

No need of grading the "practice lessons", the only rule is to let them upload their **_scrappy yet unique and scrutable writings_**.  Copying of some parts of notes or ideas of peer (learning from peers) is allowed if they have included the reference to the peer URL.

> Sharing of scrappy or untidy practice lesson writings will keep students accountable and gratified for their learning. It will also help them to obtain feedback from peers and mentors.

**Notebook writing can be faked**, for example, copying teachers dictation or other students work without referencing is not an original work, and _it's not an evidence of learning_. So we need to consider other data for measuring the authenticity of their notebook work.

Colleges and schools should work in collaboration to design low stake exams for half an hour without grades every month or bimonthly with questions _based on their shared notebook or what is taught in the class_. Exam hall should have trusted invigilators with a camera installed.

Exams should follow eSALT that takes students feedback for **improving the lessons, test questions and classroom activity.**  
[https://iambrainstorming.wordpress.com/experimental-manipulation-after-tests-using-esalt-feedback-from-students/](https://iambrainstorming.wordpress.com/experimental-manipulation-after-tests-using-esalt-feedback-from-students/)

A separate dat url can be created by the mentor, that contains all the links of students dat url. The mentor can share the link with the experts for further evaluation.

3) Students can have practical classes (building open labs such as tinkering labs), and better classroom design for collaboration, individual learning, learning using computers.

University providing correspondence courses like Ignou is the best place to adopt and start this model.

An example of sharing notes:  
Evidence of Learning: [https://evidence.probiquery.now.sh/](https://evidence.probiquery.now.sh/)

![](images/e0840-two2bway.jpg)

The following pipeline will create a disposition of problem-solving among students as well as teachers. And will act as a death knell to unemployment (or unproductive work) and will improve living standards of the people.

**Replace exams with exhibitions for deeper learning.**  
[https://www.edweek.org/ew/articles/2018/01/10/the-secret-to-student-engagement.html](https://www.edweek.org/ew/articles/2018/01/10/the-secret-to-student-engagement.html)

---


# hilarious pedagogy tests of india

Asked in BEd Entrances

**Questions that you can't stop laughing...**

1\. Which statement is not applicable to objective type of question?  
a) More content can be covered.  
b) Correct measurement is possible.  
c) Quick and correct valuation is possible  
d) Measuring more than one learning objective is possible.

Well, the answer is bit unambiguous, like any other standard examination, correct measurement of student ability is not possible.  
Yes, in objective type questions, more content can be covered, quick and correct valuation is possible (I mean is possible, but most of the time error in valuation occurs, there may be many different reasons for it). I mean correct valuation here as correctness of matching answers proposed by question setter and students answers. It doesn't mean correct valuation of learning. Also measuring more than one learning objective is also possible if question setter works on it.

2\. "Nothing succeeds like success", this statement is based on which law of learning as propounded by Thorndike?  
a) Practice  
b) Readiness  
c) Effect  
d) Recency

Nothing succeeds like success means "success leads to opportunities for further and greater successes".  
Law of Effect: State that when a connection between stimulus and response is accompanied by satisfying state, its strength is increased. On the other hand, when a connection is accompanied by an annoying state of affairs, its strength is reduced or weakened. The saying "nothing succeeds like success" goes very well with the law. Thorndike revised this law in 1930 and according to this revision, he stated that reward strengthened the response but the punishment did not always weaken the response. Then he places more emphasis on the reward aspect than on the punishment aspect of Law of Effect.

So the answer is Effect.

My only problem with the question is, it's very straightforward and direct. Just memorize some books or random quizzes, without understanding the law of effect and also not even understanding what Nothing succeeds like success means, you can answer this question. Wouldn't it be better if the question was experiment based, giving an experiment where you have to give the answer whether the reward creates more impact or punishment?

3) Which is not a sub-law of "Law of Practice"?  
a) Law of Set  
b) Law of Use  
c) Law of Disuse  
d) Law of Recency

So, what is Law of Practice? It is related to Thorndike. I couldn't find anything about it by searching. What is Law of Set, Use, Disuse? Seems the question is taken from a particular book, and thrown here.

4) What is the proper method of remedial learning?  
a) Home task  
b) Group discussion by the teacher  
c) Co-operative learning  
d) Practisation

Oh, my grammar checker is showing a mistake in the word practisation, neither google knows it, but it suggest practice.  
So, what do you think the proper method of remedial learning will be:  
I think any of it can be remedial learning and even none of it can be a remedial learning.  
If remedial learning means identifying deficiencies in reading, writing, and other subjects and correcting it, any of these will work if done in a proper way.

5\. According to Terman, what is the intelligence quotient of gifted children?  
a) 100  
b) 100 and 120  
c) 120 to 140  
d) More than 140

Which ability of the examiner is tested in this question? The important question would be how to test the IQ, is there any proper method for it, no. A musical prodigy may not be good at doing the calculation, a poet may not be good at creating music. Leave about human, can you say humans are more intelligent than birds and mammals like a dolphin. IQ is only tested based on the context. You can't say it whether a child is gifted or disabled. A disabled can also be gifted.

6\. Which method is not useful for identifying slow-learners?  
a) Intelligence testing  
b) Interview the parents  
c) Observation by teachers  
d) Achievement testing

Another ambiguous question.  All of the above can be useful for identifying slow-learners, and none of the above can be useful for identifying slow-learners. That depends on how you use these methods to identify slow learners. There is no perfect method for it.

7\. Which is an example of intrinsic motivation?  
a) Aspiration  
b) Praise  
c) Encouragement  
d) Prize

Is this question related to pedagogy? I used simple logic to solve it. As aspiration comes from inside it's intrinsic and as other things are done by outward force, so extrinsic. Even, encouragement comes from both extrinsic and intrinsic. Also, think about self-praising.

I have reviewed 7 questions, now. There are 30 questions.

---


# how can central open schools such as nios can make a revolutionary step in the field of personalized education

Most schools are overloaded with students. Usually, a single classroom in popular schools in your locality must be having more than 30 students in a particular class.  
To give students a personalized experience, it’s all most impossible for these schools.  
So, students rely on personal tuitions to meet the requirement of the students. All most all parents that have a good income, provide personal tuitions to their children.  
  
**So, what role NIOS has to play?**  
  
NIOS can promote mini-schools with 10-20 students in class with laboratory facilities and required teachers. They don't need to have all the classes for Std 1 to 12th. Any particular class for a startup would do, based on teacher availability. But for it, a lot of processes has to be done by NIOS.  
1) **Designing Curriculum**   
Design the best curriculum from Class I to Class 12 with book recommendation, training teachers for best practices of teaching that works (with giving complete research and statistical data of its working)  
2) **Conducting Exams**  
We cannot rely on these mini-schools for conducting exams. So, NIOS should start conducting exams per semester, from Class I to Class 12. Per semester is important, to make students more accountable to their studies.  
The exams must be very transparent, like using Aadhaar Card for authentication, scanning of the answer scripts.  Handwriting checking can also be done, to know the student is an authentic examinee.  
The exam can be conducted on Sundays, Saturdays and holidays in different schools/classrooms. Also, the examiner should be randomly selected, so that parents or anyone don’t know who will be the examiner before the exam. Conducting a **transparent exam without malpractice** is the key to the success of this whole procedure.  
3) **Giving feedback and results of the Exams**  
Giving a detailed feedback by looking at each answer of students, where students are lagging behind, how they can be improved, etc. along with the marks provided. For it, a website can be made for uploading the feedbacks and answer scripts.  
4) NIOS can charge the required amount of fees for this process.  
  
  
If this is done, students will get a personalized education and a more transparent process of evaluation of their skills.  
  
**Some of the questions may be how there will be the quality assessment of these mini-schools?**  
So, a ranking of mini-schools can be done based upon the results, as semester examination is not conducted by them, the ranking will be most transparent  and competition will be another factor, as students/parents have true freedom to choose their classes.  
**What about students of below poverty line?**  
Mini-schools can be supported by govt aids, who include students from below poverty line. To avoid abuse of it, only good ranked mini-schools should be given a chance or their affiliation should be canceled if students don't score well in exams.  
**Consider the situation, if students got passed in 5th Class, and the institute doesn't provide 6th Class and unable to find an institute of 6th Class nearby. What he/she would do in such situation?**  
Presently we already have many coaching institutes, by making them an offer of open schooling, they surely will want to get affiliated and meet the requirements of laboratory etc. So, this will be a very rare case to happen.  
  
This can be a revolutionary step that can work with the private-public partnership and a better approach for handling quality education than state run or center run schools.  
  
So, it only requires a proper iterative pipeline, well-designed website for maintenance.

---


# how can we decentralize the construction of brick and mortar houses

# How can we decentralize the construction of brick-and-mortar houses?


---
categories: 
  - "blockchain"
  - "governance"
---

[This is why construction is so corrupt](https://www.weforum.org/agenda/2016/02/why-is-the-construction-industry-so-corrupt-and-what-can-we-do-about-it/)

[Global Corruption Report 2005: Corruption in construction and post-conflict reconstruction](https://www.transparency.org/en/publications/global-corruption-report-2005-corruption-in-construction-and-post-conflict)

## Diversity of Housing Design

No two buildings or skyscrapers are identical. Engineers can craft various sustainable designs and gain approval from the decentralized governance. These designs may incorporate [diverse features](./what-will-a-boycott-of-the-national-currency-give-us.md) such as [supermarkets](./empowering-communities-decentralizing-supermarkets-through-public-ownership-and-control.md), playgrounds, office spaces adaptable for [remote work](./rethinking-work-culture.md), natural parks, and forests. Additionally, inclusive community amenities like schools and hospitals contribute to a well-rounded environment.

## Free Market: Demand and Supply Transactions and Investments

Consider an investment scenario: a skyscraper costing 10 Crore, requiring 5000 people to contribute Rs 20,000 each. These investors, whether from different countries, states, or the same locality, each own shares worth Rs 20,000 in the property. Residents of the house pay for their shares through installments, facilitated by systems like Universal Basic Income (UBI), incurring a minimal 1-5% interest; these interest payments go to the investors. The entire housing construction supply chain is automated through smart contracts, ensuring efficiency and cost-effectiveness.

Smaller skyscraper with smaller budgets can also be done, and also good for experimentation to start with.

To deter speculative practices and ghost housing, local rent seekers stake an amount upfront to secure rental reservations. The stake is only released upon the completion of the last ownership installment, akin to a prepaid plan.

If one use a native token instead of a stable coin, it's challenging to pay installments with a fixed native token due to [price fluctuations](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md). The price of the native token can be determined through the price oracle, allowing you to pay the installment value in native tokens based on the stable coin's value, without need of stable coin. The native token proves useful for designing incentive systems for governance and investments.

## Governance Involvement

The governance structure [involves various stakeholders](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders), including those who have invested money, rent seekers, engineers, local communities, and environmentalists. Each stakeholder may have different voting power based on their expertise and integrity. Effective voting methods are implemented to make decisions collectively.

## Reducing Bureaucracy through Governance Approval

Ensuring the safety, longevity, and earthquake resistance of housing is imperative. One also needs to put a halt to the unoptimized use of land, including issues like [urban sprawl](./building-better-cities.md) and ask for sustainable energy sufficient (e.g using solar panels) housing design. The governance body monitors the entire process, from building design approval to construction. If an engineer or worker deviates from the expected standards, the governance system has the authority to vote them out.

## Transparent Pricing and Accounting of Materials

Material suppliers participate in a transparent bidding or auction process. The skyscraper's governance approves material selections based on quality and pricing, ensuring accountability in the construction process.

## Transparent Payment to Engineers and Workmanship

Transparent payment systems are in place for engineers and workers, promoting accountability and fair compensation.

## Discouraging Landlord Issues

Landlords in cities have become a problem with inflated house rents and also contribute to wealth inequalities. To combat these issues, housing can be owned collectively by the community. To discourage traditional landlord practices without compromising housing investments, an incentive system within the smart contract can be implemented. For example, one can allocate a portion of the rent to the owner who has paid the full transaction fees for the room, and the remaining portion can be directed to a community treasury.

---


# how can we decrease student suicide in india

India has the highest rate of students who die by suicide. According to NCRB data. Suicides have risen 27% over five years. In 2021, over 1,600 suicides had “failure in examination” as the reason.

[https://news.careers360.com/student-suicide-ncrb-report-2021-state-suiciding-india-exam-failure-maharashtra-mp-tamil-nadu](https://news.careers360.com/student-suicide-ncrb-report-2021-state-suiciding-india-exam-failure-maharashtra-mp-tamil-nadu)

According to government data, 22 students have died in Kota since 2022. Around 121 have died since 2011 [https://www.timesnownews.com/education/student-suicides-reach-an-all-time-high-in-2022-14-cases-recorded-in-kota-the-coaching-centre-hub-of-india-article-96338996](https://www.timesnownews.com/education/student-suicides-reach-an-all-time-high-in-2022-14-cases-recorded-in-kota-the-coaching-centre-hub-of-india-article-96338996)

Though you can find suicide reports by searching the Internet, let's discuss how can we decrease students' suicide.

India is a coaching center hub. For any govt jobs or getting a seat in college, you need to pass the entrance. The most common type of entrance is JEE and NEET. Every student in this country is in a rat race to score highest in these entrances and get a seat. Parents pay in lakhs to prepare their kids for entrance in these coaching centers.

As seats are limited and so many aspirants, it's very difficult to get qualified, about just 1% get the seats. No matter how hard you try, you are likely to fail. This rat race and teaching to test leads to emotional distress, and mental pressure.

Maybe scalability problems and disrupting the system are hard to solve and I am busy finding a way to solve them through decentralization and blockchain. But still, basic tinkering can help even with the existing system.

# Lottery System:

Like the selection of students by lottery after a foundational knowledge test. The lottery is a fair system, does not increase corruption, and brings diverse representation. Bring a collaborative culture and give less importance to exam marks.

## Why it's fair and brings diverse representation?

After you have qualified for the foundational knowledge test, everyone has an equal probability of getting selected. So, even no reservation will be required. The way the questions are prepared in entrances is for eliminating students, they rarely test valuable knowledge and critical thinking rather than rote memorization and rigorous practice of the previous year's questions. So, students with rank 1 are hardly any different from the student with a 50,000 rank.

Here is a video advocating for the reservation system:

https://www.youtube.com/watch?v=KySoKM\_bjuI&feature=youtu.be

## End of coaching centers

Selecting by lottery will eliminate coaching centers. And resources will be used to scale the system and prepare children for an holistic humanistic learning rather than teaching to test.

## Merit or Genetics?

We are always taught that it's hard work to excel and crack tough exams. It's a myth. It's to do more with genetics rather than hard work. Siblings with different genetics, score differently, while homozygous twins get similar scores, even science too says so. How much you can reproduce the book script and practice lessons depends on genetics.

More details on how genetics impacts exam score, do watch the video.

[https://theconversation.com/your-genes-can-help-predict-how-well-youll-do-in-school-heres-how-we-cracked-it-62848](https://theconversation.com/your-genes-can-help-predict-how-well-youll-do-in-school-heres-how-we-cracked-it-62848)

> 65% of people in the higher polygenic group went on to do A-levels, whereas only 35% from the lower group did so

We can't change genetics, but rely less on exam score and change how we select candidates and how we teach so that all students get a chance and benefit.

---


# how can we use proportional representation with approval voting without any complicated algorithm

How can we use proportional representation with Approval voting without any complicated algorithm like seq phragmen, and allowing selecting candidates based on ward or district. Seq phragmen is ok to be used in blockchain but not practical for paper ballots.

Instead of giving the number of seats as proportional, we can make voting power/weightage proportional. For example, the party with 33% votes will have 33% weightage for votes, no matter how many seats or candidates vote from the party. It applies to the district assembly, state assembly or country assembly (Lok sabha) The second winner or third winner of approval voting can also vote without creating any problems because of the weightage system.

Here is the complete algorithm:

\# Ward 1
party\_green\_candidate\_1 = 70 
party\_red\_candidate\_1 = 51
party\_yellow\_candidate\_1 = 31
#Ward 2
party\_red\_candidate\_2 = 81
party\_yellow\_candidate\_2 = 62
party\_green\_candidate\_2 = 31
# Ward 3
party\_green\_candidate\_3 = 60
party\_red\_candidate\_3= 50
party\_yellow\_candidate\_3 = 40
total\_votes\_green\_party = party\_green\_candidate\_1 + party\_green\_candidate\_2 + party\_green\_candidate\_3
print(total\_votes\_green\_party)
total\_votes\_red\_party = party\_red\_candidate\_1 + party\_red\_candidate\_2 + party\_red\_candidate\_3
print(total\_votes\_red\_party)
total\_votes\_yellow\_party = party\_yellow\_candidate\_1 + party\_yellow\_candidate\_2 + party\_yellow\_candidate\_3
print(total\_votes\_yellow\_party)
# As there are three candidates, vote weightage for each candidate = total votes for party/3
weightage\_green\_candidate = total\_votes\_green\_party/3
print(weightage\_green\_candidate)
weightage\_red\_candidate  = total\_votes\_red\_party/3
print(weightage\_red\_candidate)
weightage\_yellow\_candidate = total\_votes\_yellow\_party/3
print(weightage\_yellow\_candidate)
# Policy passing
# 2 candidate of green party gave yes, one gave no
# 2 candidate of red party gave no, one gave yes
# 3 candidates of yellow party gave yes
yes\_votes = 2\* weightage\_green\_candidate + 1 \* weightage\_red\_candidate + 3 \* weightage\_yellow\_candidate
print(yes\_votes)
no\_votes = 1\* weightage\_green\_candidate + 2 \* weightage\_red\_candidate + 0 \* weightage\_yellow\_candidate
print(no\_votes)

It makes all candidates powerful with the amount of voting power they have, without winner-take-all system.

Feedback are welcome.

Advantages of approval voting and proportional representation is given here:

https://iambrainstorming.wordpress.com/2023/03/30/do-we-need-a-supreme-leader-how-can-we-share-power-between-parties/

## Is open list proportional representation without approval voting sufficient?

> The article says,  
> Like all electoral frameworks, none of the OLPR variants are perfect. All have advantages and disadvantages in achieving the objectives required of an electoral system in a specific country environment.
> 
> While there are critics of OLPR, many of the criticisms are based either on specific elements of its configuration in a specific country or on elements that are external to the system itself (e.g. poor implementation of controls on political financing in Indonesia). While there have certainly been ugly configurations of OLPR, such as in Colombia before 2003 (see Albarracin and Milanese 2012), if configured sensibly and with adequate controls on political behavior, OLPR can facilitate a wider range of electoral system objectives than many other electoral systems.

[https://www.idea.int/publications/catalogue/open-list-proportional-representation-good-bad-and-ugly](https://www.idea.int/publications/catalogue/open-list-proportional-representation-good-bad-and-ugly)

**Most countries implement Party List Proportional representation.**  
Let's take India as an example and assume what can change in India if we implement party-list proportional representation.  
India already has a multi-party system. It's not like the US with two parties. Last election (2019) BJP won by 37% votes. With proportional representation, BJP will get 37% seats rather than 55% seats, so it will empower the opposition more.

But still, there is a problem. Specific elements of its configuration part of OLPR. Will it eliminate the need for a coalition? If even after proportional representation they move to a coalition, the problem of partisanism and "winner-take it all" arises again. The coalition govt with more votes will control the nation and ministry.

Let's look at another problem.  
Here is a plurality voting example.

![](https://iambrainstorming.files.wordpress.com/2023/04/vote-splitting.png?w=502)

Now, a party-list ballot.

![](https://iambrainstorming.files.wordpress.com/2023/04/olpr.jpeg?w=680)

Now candidates are replaced with parties (with candidates). Will it end polarization? Polarization happens because of the center squeeze effect and vote splitting. Candidates with similar ideologies split their votes, but here in the party list, parties with similar ideologies will split their votes. **In FPTP more than 50% of the vote gets wasted. But the benefit of PR is even if Hitler gets the highest votes, more than 50% of power remained with the opposition, with no vote wastage.** So yes it decreases polarization but doesn't eliminate the benefits of polarization.

But with approval voting, Matin Luther King, Tuban, Mother Terasa, Gandhi will get about equal but more votes and votes for Hitler will decrease.

Further, without Approval voting, new parties will not get a chance, the reason is written in the link, also we can look at the Sri Lanka election. Sri Lanka People's Freedom Alliance has 59.09% of the seats, Samagi Jana Balawegaya 23.90% of the seats, whereas other parties' strengths are negligible despite proportional representation.

PR with Approval Voting brings more competition, in other words, it provides more choices and also collaboration and corporation of representatives as there are no incentives for polarization.

## Top 5 Ways Plurality Voting Fails

[https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/](https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/)

## **Critiques of Proportional Representation**

##   
PR generates weak, ineffective, and unstable governing coalitions  

PR governments are not unstable, rather a coalition of majoritarian govt with FPTP is unstable. In FPTP parties have a high chance of getting out of coalitions whenever their interests are not met. This breaks the majority, hence breaking the government. In PR even if you stop participating or if you don't vote in decision-making, nothing happens, other parties together can make the decision.

##   
It's difficult to assign clear responsibility and decision-making is slow in the PR  

PR is better at assigning responsibility. It hardly takes an hour to vote and take decisions. Yes, draft preparation can time, but it's a good thing because the inputs of all parties are taken. Ministers of the department can be selected by voting based on their party vote weightage. As all parties are involved, ministers are selected by consensus, and they are not partisan. Ministers will care about all parties' interests rather than the majoritarian party. For example, in India, media freedom has gone to its lowest, and hatred and conspiracy theories are at peak, this won't have happened if ministers are selected by consensus. President too will no more a rubber stamp, a person of integrity will be selected.

##   
PR legitimizes extremist parties

  
FPTP legitimizes extremist parties, as they have incentives to polarize and split votes. Further extremist parties get more seats than votes in FPTP. In PR they won't get more power than the number of votes. We can also reduce the extremist parties' votes by using approval voting or negative votes.

Proportional representation promotes collaboration and energy is used on development politics and calling out and eliminating the bad candidates/parties rather than fighting with each other even if they have shared values to win seats. For example here Gandhi, Martin Luther King, Tubman and Mother Teresa would have collaborated and would have called out Hitler instead of fighting with each other to win seats due to FPTP.

---


# how making an aahaar api can revolutionize india in providing personalized and accurate information

Every citizen of India has Unique Identification Number: Aadhaar.  
  
Many websites in health care, railways and almost all sites use your personal details. But the problem is, some times these personal details can be inaccurate. There can be many reasons for it.  
  
e.g. Storing the birth data of child in eMunicipality portal:  
The nurse writes about Mother and Father details in a form. From between writing the form to feeding it into the eMunicipality portal, there are lots of chances of feeding wrong data.  
Some of the reasons are:  
1) Listening error of nurse, so the nurse write the wrong information  
2) Laziness and lack of time for nurse to fill all the fields on the paper form  
3) Spelling errors of name and address details.  
4) Person who is doing data entry in eMunicipality portal unable to recognize the handwriting (as we all know doctors write in horrible handwriting, which an expert can only read)  
5) Person who is doing data entry, fills the compulsory field with arbitrary data (such as mother's age during marriage and delivery, number of sibling etc.) as these fields are not filled in the paper form by nurse.  
  
Here is the important thing we can do to make data accurate by fetching it form adhaar portal, without compromising security.  
By making an aahaar api, that gives json or xml data when we give them registered mobile number and date of birth. (We should not use aadhar number only to fetch the data, as hackers can download the complete personal details of all citizens, by making a single crawling software and misuse it.) We can also fetch data by giving adhaar number and registered date of birth. Date of birth gives an extra layer of security, and a blockade for hackers by preventing them in fetching and misusing the data.  
  
Also number of queries per day of a particular IP address or location or account should be taken into account to stop misuse of data.  
  
What data is fetched from aahaar api is also important. For example in eMunicipality we can fetch data such as Name and Address. So no more we have to type the data in the online form and no chance of error and the form field is automatically filled. Also it will save a huge amount of time.  
  
Please leave a comment if you have any queries to make a discussion.

---


# how moocs open lab can rescue our education system

MOOCs (Massive Open Online Courses) are most affordable (even free), but the problem with it is practicals.  
Can a student earn a degree in subjects like Mechanical Engineering, Aeronautical Engineering, Biotechnology or any other subjects that require expensive practical equipment with doing MOOCs? It's not possible because there is no way to do practical experiments.  
So along with MOOCs, our education system should provide Open Laboratories  
**What Features Should Open Laboratory have:**  
 First, it can be opened by anyone after getting approval from the government. Open Laboratories can buy cutting-edge equipment based on the technology that is required in different courses.  
Open Laboratories should have the freedom to buy based on how much they want to spend. They need not have to buy all the equipment, just like colleges. This will cut the expenses of open laboratories. It will also promote entrepreneurship.  
They should have qualified researchers or teachers who know the working of the equipment and can demonstrate it.  
They should have the freedom to set fees to an extent, just like coaching institute, best upon the services they provide  
Also, there should be government run laboratories, to keep prices under control.  
Even universities and colleges can provide the facilities of open laboratories.  
Also, companies/industry with equipment can also provide open laboratories which will help a student gain industry experience.  
**What problems will Open Laboratory solve?**  
1) **Affordable to both Students and Open Laboratories.**  
Pay what you use. For example, you want to do X-ray crystallography and NMR in your bachelor project. So, you can approach one Lab for X-ray crystallography and other for NMR. A single open laboratory need not have to buy both the equipment. Also, student need not pay the complete course fees, paying just for practicals, so it will be much cheaper than the course in private colleges.  
2) **Quality.**  
Coaching institute excels in maintaining quality education than most private or government institutes because of competition. Once you have joined a private or government institute, you have no freedom to change the college, whether you like or dislike their teaching. But in coaching institutes and private tuition, this is not the case. You can change it at any time. So in order to survive, coaching institute have to maintain the quality, otherwise, no one is going to approach them. So Open Laboratory is going to work just like coaching institutes because a student will have the option to shift at any time. If they dislike the training or practical provided, no one is going to come again to the lab. This will create competition among laboratories.  
Also as a student can earn the same degree as in colleges, these colleges have to also compete for quality.  
3) **Freedom to choose as more options**  
The student will have the freedom to choose which thesis they want to work. They can go with most cutting edge technologies. You are not limited to what colleges can provide but what you really want.  

4) **Promotes research and development**

This will be a disruptive process that promotes research and development. We have seen how colleges have mushroomed everywhere which are good for nothing, and contribution in research and development is neglible. But with open laboratories, research centers will be available everywhere where we can see the real research.

**Colleges and Labs can run just like _assembly system_. For example, if a student wants to do a course in robotics, he can study programming in a lab (python in one lab, C++ in another lab), components of robots in another lab, Arduino projects yet in another lab.**   
  
**For it, we need to make syllabus personalized.**   
**How to do it?**  
**[http://technoperiod.blogspot.in/2017/02/personalized-learning-goals-new.html](http://technoperiod.blogspot.in/2017/02/personalized-learning-goals-new.html)**  
  
Another thing that needs to be transparent is budget and pricing of these labs and colleges. They can't hike the course fees without disclosing the amount spent.  
  
Do share your thoughts about it.

---


# how much does retrieval practice help in learning

> Students do forget things, we measure the effectiveness of the retrieval practice based upon how much they have remembered the learning material. 

But forgetting doesn't mean that students have unlearned what they have learned. Neither learning is about how much you can recall from memory.

![](images/60ae4-forget.jpg)

Paul Hewitt Physics

Yes, the best strategy to get a high score is retrieval practice. But high score relies on the ability to recall things, not test the actual learning.

We need not have to do retrieval practice to do programming,  just re-reading and using the code is enough. The best way to learn to program is to use and apply it the hard way. The more you use it and apply better strategies, the more better your programming skill will be.  
The same principle applies to all subjects, whether its maths, physics, biology or philosophy.

What is required is understanding of the subject, through strategies like the Feynman Technique. Understanding creates an index in your brain, which later can be used to retrieve the whole research from online article or books, if you are unable to recall the complete details.

Take for example programming, I do forget the syntax of programming languages, but I know how to use them in many different situations. So when I encounter a problem, I can recall from the index created in my brain about what syntax to use for the logic, but not the exact syntax. So, I can look at the documentation and notes, and apply the code.

> It doesn't matter whether you are explaining by looking at the book or not, as long as you are thinking about any plausible queries and able to explain the answers to a 5 to 12 year-old.

https://www.youtube.com/watch?v=MlJdMr3O5J4

> The craze of Retrieval Practice thrives because of test scores, what if we don't give marks, we [peer review](https://iambrainstorming.ml/if-all-scientific-discovery-relies-on-peer-review-for-validation-why-not-assessment-be-done-through-peer-review/) the student thinking process and give feedback. We ask them to do things and improve their resume.

Feynman Technique is also a kind of retrieval practice but it eliminates its bad practices.

> Retrieval practice should come with the statutory warning taking care of these two points:  
> 1) Do the facts or content you are retrieving is about big ideas, important and helps to develop high order thinking?  
> 2) Are you doing any unnecessary repetition of facts or study material (for high test scores), that is limiting you for further research of the content?

> Also, remember that not doing enough retrieval practice can impact your fluency. It's a bad practice to always look at the documentation or notes for the problem you are trying to solve. It also does hinder understanding. If you are using something regularly, it's better to keep it in memory, and the best way to do this is retrieval practice and spaced learning.

---


# how open review and data analysis of exam will change our education system

As our education system is not transparent, and as we don't have the data, we are actually unable to find the problems, so unable to address them.  
  
So what is an open review of an exam?  
  
After the evaluation of answer script is completed, its scanned copy has to be uploaded to a website for public review. Also, analysis of the answers should be conducted, in which questions students are securing more marks, which questions are difficult to solve and students are not performing well in the questions. Complete statistical data should be produced, student wise, school wise, district wise and state wise.  
  
What are the advantages?  
It has no disadvantage.  
With this procedure, we can address most of the problems in the exams. Schools and colleges will be more accountable, no malpractice will be there, students will know their fault, where they have scored less and where they have scored more, teachers will evaluate paper accurately  
  
This should be done at every level of education, from class 1 to post graduation.  
  
Even this is the easiest solution, as to produce a website, it requires only 4 to 5 months. But the design of the website is important and require a bit thinking.  
The only requirement, to take a step by our education ministers and politicians if they really want our education system to be changed.  
  
If they remain ignorant, no one can help the country.

---


# how practicals are done in india how should it be done through inquiry based approach

Practicals in school and colleges are all about writing records. They spend most of the time on writing records, drawing fancy diagrams without even knowing anything about what they are writing/drawing.  
Teachers also award students whose records are only visually appealing, not on the content/or not whether students have understood what they are doing.  
e.g. recently I heard from a student that teacher managed to throw the notebook because she was writing in a rough notebook.  
So, classes are all about writing records that teacher dictates with giving a very little practical knowledge  
  
I even don't blame the teacher. He/she does the same thing what she/he has been taught in her/his times of college. So it just a repetition/ritual way of doing things what has been done since the inception of colleges.  
**So, how it should be fixed through inquiry-based approach?**  
It can be fixed by bringing a change in curriculum.  
Let's look at the syllabus of practical. Just one or two lines statements of each practical.  

[![](https://iambrainstorming.files.wordpress.com/2016/07/1b6e0-practicals.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2016/07/1b6e0-practicals.jpg)

  
  
Neither there are any good practical books, which gives complete detail about **how practical should be taught?** (not how it should be done?) Most practical books are written like notes, from which students can learn nothing.  
  
So here is an example how practical should be taught, or books should be written? Please do look at it thoroughly:  
Mixing sugar and water, what happens to sugar:  
[http://scientificargumentation.stanford.edu/assessments/mixing-sugar-and-water/](http://scientificargumentation.stanford.edu/assessments/mixing-sugar-and-water/)  
  
Teaching about surface tension and statistics(Classroom Strategies for Inquiry-Based Learning, [http://www.edx.org](http://www.edx.org/)):  
[https://www.youtube.com/watch?v=DSXAYhgCf4I](https://www.youtube.com/watch?v=DSXAYhgCf4I)

---


# how should teacher selection be done in a transparent manner in india and keep them accountable

Mostly in the current procedure, a teacher is appointed by entrance exam or a bunch of questionnaires by senior faculties or administrator. (Keeping all different kinds of corruption or lobbying that takes place aside)  
But this process does not guarantee a good teacher. A modern educator should have many other psychological, pedagogical and leadership skills/features that are not tested in this procedure. The current procedure only tests the amount of subject knowledge/information they have, which can only be used as the first line of defense to get a good teacher.  
  
So, instead of selecting a single teacher from the interview, 3 to 5 etc. teachers must be selected and should be given few classes to teach the students. These classes should be recorded, and voting must be done by students, faculty members and experts based upon the questions asked in the voting.  
  
The questions can be such as does the lecturer/teacher increases curiosity on the subject, do they understand the subject properly, and many other practical questions that need to be asked about the lecture based on research that works, with trial and errors.  
  
One can escape the first line of defense due to many loopholes, but no way on the second step. You will be always be assured a good teacher if done properly.  
  
Do look at the page what a modern educator should be...  
  
[http://ictevangelist.com/the-modern-educator-part-one/](http://ictevangelist.com/the-modern-educator-part-one/)  
  
  

[![](https://iambrainstorming.files.wordpress.com/2016/07/1eb18-clst1nmwyaaauyk.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2016/07/1eb18-clst1nmwyaaauyk.jpg)

  

  

  
  
Update:  
**How to keep our teachers accountable for excellence in education?**  
  
Here again, the role of technology (camera and microphone) will  assist. Instead of tracking teachers all the time, recording needs to be done on weekly basis. Then, the recording that contains voice should be uploaded in a central database repository, where the video will be available for feedback from the public or experts. The video should be available only for 3 months for review, after that, it can be deleted to save the memory space.  
  
**What the benefit of doing it weekly?**  
It provides freedom to teachers, as they are not tracked all the time. Also, keeps teacher accountable as they have to study and do their homework on the continuous basis and then come to the class.  
It provides a ceaseless feedback system between students, teachers, and experts, all participate in the education system of the country.  
  
Also, there should be guidelines of the website repository, about what type of feedback can be given e.g. public needs to be polite, and whenever they criticize, it needs to be constructive so that teachers remain emotionally supported and there is always room for improvement for teachers rather than thinking about perfection.  
  
Teachers who perform better (as it will help in identifying best teachers), can be used for making MOOCs for other teachers and students. Other teachers will learn the teaching habits of good teachers and we will have more course materials.

---


# how the concept of teacher student ratio of 130 has loopholes

After discussing with few teachers, I found that in some classes in some school, the number of students present is less than 30. In that case, a student doesn't get the subject teachers. How can in this principle, a student will get teachers for all the subjects. A math teacher can't teach physics. Also, there is disturbance with the number of classes. e.g. if the 5th class has 15 students and 6th class has 15 students, this leads to a shortage of teachers by half. So teachers have no option, left but to unite both the classes.  
How can there be conduction of both the classes in one room?  
  
So please update the rule, that for each batch or class there must be each teacher for each subject for a school, no matter how many students are there in the class.  
  
Also, I found that in some govt. schools in Odisha, computers are given (3 to 4 months back) but no one is there to operate it and install the software. Why there is no computer teacher in all schools? The computer has become a very vital part in our life. Without computer knowledge what students will do.  
I also shout to change all the govt. schools to CBSE, so that all can access the same type of quality education.  
  
Why the govt. is more interested in potato and onion prices, where the pond got dried etc. more? They discuss this issue for hours and days in the assembly. But they are not discussing teachers and students problems and how it can be solved. Does the govt don't know which issue to give priority more?

---


# how to beat the worst job culture of india

# Remote jobs or work from home with less working hours

---


# how to guide for preparing hots question

[![](https://iambrainstorming.files.wordpress.com/2018/06/58a9d-thermometer-153138_1280.png?w=150)](https://iambrainstorming.files.wordpress.com/2018/06/58a9d-thermometer-153138_1280.png)Step 1: Make the language of the question confusing and difficult to understand.  
  
Step 2: Solving must require information that is difficult to remember or [recall from memory](https://technoperiod.blogspot.com/2017/03/why-we-face-difficulty-to-remember-non.html) such as shortcut formulas, unfamiliar terminology.  
  
Step 3: Make the calculation extremely hard and don't give them a calculator.  
  
Step 4: Must use concepts that are not taught in class or without supplying [good content](https://technoperiod.blogspot.com/2017/01/all-books-that-dont-meet-learning.html), or taught with bad pedagogy without using retrieval and spacing strategies that help the concepts to stick in the memory, questions must be completely different from classroom practice questions. And give the question that requires knowledge of whole without practicing its [components](https://iambrainstorming.ml/index.php/2017/10/26/practicing-one-component-in-one-time-to-learn-the-whole/).  
  
As most students will not be able to solve it, it perfectly qualifies as HOTs question.  

  

An example HOTs question:

Shuffle A-Z sequence, create a new sequence, give a whole day to remember it, and ask them to write in a high stake exam. Also again ask all the sequence you have remembered in a week or weeks, in the weekend, fortnight, monthly, bimonthly, trimonthly, half-yearly and yearly exams.

---


# how to make india cashless economy in limited time and solve cash crunch

Some of the steps that need to be taken:  
  
1) First, **inform retailers and shops to use eMoney wallets** such as SBI Buddy for taking payments. Also, **people** to pay with these wallets. It's the MOST IMPORTANT step.  
Informing is not an easy step, it requires the support of media, all politicians, and volunteers .  
  
Digital money transfer through IMPS also costs about Rs 24 per transaction. This has to be completely removed. Transfer costs should be same as that of payment gateways.  
  
There is another problem: server load. Are our bank servers ready to make such a huge amount of transaction? How many transactions a bank server per minute can make?  
I think it has the limited capacity now because transaction fails many of the time, also we don't get OTP.  
  
So in order to solve the server issue we need to distribute the load among different apps. With a limited number of transactions possible per an hour.  
  
A merchant should install all the apps together to get money, just like merchants who do mobile top-ups.  
  
We have two types of apps one: Issued by banks and others are third- party apps such as paytm. All should be used.  
  
People should do top ups on more than one different apps and pay the merchant accordingly. Also, guidelines and limitations for apps should be given. Like you can transfer up to Rs.25000 in a calendar month when you are using Paytm.  
  
Tell people how easy it is to use these wallets. I checked the SBI Buddy, its super easy, just entering the mobile number and MMID or account number, IFSC code will do the job.  
  
But some of the technical steps need to be taken before getting started, such are linking the account, passwords which can be done by the help of volunteers  
  
But if the retailer is ready of accept money through eWallet, people will know it and make the payment through it.  SO THE FIX SHOULD BE STARTED FROM MERCHANT OR SHOPKEEPER SIDE.  
  
Also if you are transacting more than Rs 100, and have smartphones, eWallet should be a must. Even for a small transaction. This will concentrate the small denomination notes towards the poor people who actually require it.  
  
2) **What about people who don't have smartphones?**  
  
Most retailers already have smartphones. There are some students who are not given smart mobile phones. Also, housewives who don't use smartphones. They are usually financially ok, so no need to subsidize them for phones. I**nformation is enough for them, that retailers are accepting money through eWallet.** Then they will find the way to buy phones and make the payment.  
  
But the problem is with some very poor people.  
One solution is to subsidize phones to the poor or bring an exchange offer or getting the phone through EMI.  
  
If this policy is made, following problems arises:  
a) How to identify those who don't have a phone?  
b) Also, will phone get out of stock?  
  
One method of identifying poor people is their bank account or income. But again it will create pressure on banks. It has to be done without the help of banks. Maybe BPL cards will do.  
  
Will phone get out of stock? It can also require identification process, people who don't have actually smartphones.  
  
In the first phase, people such as vegetable vendors, chai wallas etc. who sell products should be given smartphones.  
  
Then in the second phase, it comes to the people who buy products, per family one smartphone should be allowed. It should be done by scarcity and demand in different phases.  
  
3) **Another problem is Internet package:**  
**It can be solved by circumventing net neutrality.** Traffic for using these apps must be free. It will not create a loss to the telecom operator, because, very small amount of data is used for the transaction, but it will benefit them, as they will get an immense number of internet subscriber due to more use of smart phones. Sometimes retailer can use more data, so daily limit may be kept for those who are using huge traffic through these apps.  
  
These are the short-term measures that can be taken. In long run, further streamlining the process, such as improving the user experience of apps, upgrading servers and other problems that are faced by people can be done.

---


# how to spot a liar

Lying is a cooperative act. It has no power in itself. Its power emerges when someone agrees to believe the lie.

https://www.youtube.com/watch?v=P\_6vDLq64gE

---


# how to tackle disinformation

# How to tackle disinformation?
## date: "2023-12-07"
---
categories: 
  - "politics"
  - "psychology"
  - "social-media"
---

## India ranks 1st in Misinformation and disinformation

![Disinformation](./images/disinformation.png)

*- [Global Risks Report 2024 ](https://www.weforum.org/publications/global-risks-report-2024/)*


## India's fake news epidemic

<iframe width="560" height="315" src="https://www.youtube.com/embed/nPHrjxlHx2E?si=6oCYuXBwkKATv9BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## **1) Deep Canvassing**

Dave Fleischer told me that people don’t get a chance to reflect like this very often. Daily concerns take up people’s cognitive resources: providing lunch money for their kids, evaluating their performance at work, planning who will take the car to get repaired. Without a chance to introspect, we remain overconfident in our understanding of the issues about which we are most passionate. That overconfidence translates to certainty, and we use that certainty to support extreme views.

One of the most striking examples of this comes from experiments into what psychologists call the illusion of explanatory depth. When scientists asked subjects to rate how well they understood things like zippers, toilets, and combination locks, most people tended to say they had a pretty good grasp of their mechanics. But when experimenters asked those same subjects to explain how they worked in detail, people tended to go back and update their answers, admitting they had pretty much no idea how those things worked. 

**The same was true for political issues.**

When asked to provide opinions on health-care reform, a flat tax, carbon emissions, and so on, **many subjects held extreme views**. When experimenters asked people to provide reasons for their opinions, they did so with ease. But if asked to explain those **issues in mechanistic detail**, they became flustered and realized they knew far less about the policies than they thought they did. 

As a result, their opinions became less extreme.

### Why do we argue? What purpose does it serve?

Cognitive scientist Hugo Mercier, an expert on human reasoning and argumentation, explained that we evolved to reach consensus—sometimes on the facts, sometimes on right and wrong, sometimes on what to eat for dinner—by banging our heads together. Groups that did a better job of reaching consensus, by both producing and evaluating arguments, were better at reaching communal goals and out-survived those that didn’t. That led to the innate psychology that compels us to persuade others to see things our way when we believe our groups are misguided.

Mercier told me that if we couldn’t change our minds or the minds of others, there would be no point in arguing in the first place. He asked me to imagine a world where everyone was deaf. “People would stop talking,” he said. **The fact that we so often disagree isn’t a bug in human reasoning; it’s a feature.** How arguing had led to sudden shifts, all we had to do was look at the history.  

[How to have a respectful argument?](./relationships-emotions-and-happiness.md#the-5-secrets-of-effective-communication-by-david-burns)

## **2) Truth Sandwich**

[https://en.wikipedia.org/wiki/Truth_sandwich](https://en.wikipedia.org/wiki/Truth_sandwich)

A truth sandwich is **a technique in journalism to cover stories involving misinformation without unintentionally furthering the spread of false or misleading clams**.

[https://www.pbs.org/standards/blogs/standards-articles/what-is-a-truth-sandwich/](https://www.pbs.org/standards/blogs/standards-articles/what-is-a-truth-sandwich/)

## Lead by Truth 

Berkeley linguist George Lakoff recently came up with the strategy that he decided to call the truth sandwich. Here’s how to build one: Lead with the truth. In the middle of the report, briefly describe the falsehood. And then fact-check the misinformation and repeat the truth.

## Amplification Give them Power

Lakoff has said that he thinks media organizations are unintentionally spreading misinformation when they repeat lies or quote politicians who are asserting falsehoods.

“Avoid retelling the lies. Avoid putting them in headlines, leads or tweets,” Sullivan wrote of Lakoff’s advice. “Because it is that very amplification that gives them power.”

## Don't engage with disinformation and propaganda

Engaging in disinformation and propaganda can lead to its amplification through various mechanisms, taking advantage of psychological, social, and technological factors. Here are some key reasons:

Confirmation Bias

People tend to be more receptive to information that aligns with their existing beliefs. Disinformation often targets pre-existing biases, leading individuals to accept and share it without critically evaluating its accuracy.

Echo Chambers

Online communities and social networks tend to form echo chambers where like-minded individuals reinforce each other's beliefs. Disinformation spreads rapidly within these closed circles, as it resonates with the shared worldview of the group.

Algorithmic Amplification

Social media algorithms are designed to maximize engagement by showing users content they are likely to find interesting. Disinformation that generates reactions (likes, shares, comments) often gains more visibility, leading platforms to amplify it further.

Distrust in Authentic Media

If individuals have a distrust in authentic media or established institutions, they may be more susceptible to alternative narratives of godi Media, even if they lack credibility. Disinformation campaigns often exploit this distrust to undermine the authority of legitimate sources.

Selective Exposure

People tend to seek information that confirms their existing beliefs and avoid contradictory information. Disinformation providers take advantage of this by tailoring content to specific audiences, making it more likely to be accepted and shared within those groups.

### Navigating the Landscape: The Role of a Truth Teller

The primary task of a truth teller is to navigate the intricate landscape of disinformation without succumbing to distractions. This involves a strategic approach to counter false narratives and resist the temptation to engage in posting leaders photos as criticisms, especially when dealing with leaders obsessed with attention.

### Crafting a Counter-Narrative: The Power of Truth Sandwich

To effectively counter disinformation, the focus shifts to delivering accurate and reliable information. The "truth sandwich" technique emerges as a powerful tool, allowing truth tellers to construct arguments by sandwiching the false statements between layers of truth. This method not only addresses misinformation but also reinforces the importance of presenting correct information without perpetuating falsehoods.

### Breaking Echo Chambers: Constructing Compelling Counter-Narratives

Breaking the echo chamber requires truth tellers to go beyond simply debunking false information. It involves the construction of compelling counter-narratives that are well-supported by evidence. This process demands a departure from emotional appeals, emphasizing instead the use of facts and logical reasoning to persuade individuals within the echo chamber to reconsider their perspectives.

### Unmasking Deception: Exposing Fallacies in Disinformation

An integral part of the truth teller's task is the identification and exposure of [fallacies](https://en.wikipedia.org/wiki/List_of_fallacies) within disinformation. This involves a meticulous process of unraveling the logical errors, misleading tactics, and manipulative techniques employed in false narratives. By shining a light on these fallacies, truth tellers not only educate their audience but also undermine the credibility of the disinformation itself.

### Repeat the truth to tackle disinformation

Repeating the truth is a fundamental strategy in combating disinformation. By consistently and clearly reaffirming accurate information, individuals and communities can establish a foundation of reliable knowledge. Repetition not only reinforces the veracity of the facts but also helps to counteract the effects of misleading narratives and false claims. It builds a collective understanding based on evidence and promotes critical thinking skills, enabling people to discern between credible information and misinformation. In the face of the persistent spread of disinformation, the repetition of truth becomes a powerful tool in fortifying the public against deceptive influences and fostering a more informed and resilient society.

### Staying True: A Holistic Approach for Truth Tellers

In summary, the holistic approach for truth tellers encompasses staying true to the facts, avoiding distractions, and breaking echo chambers through the presentation of well-supported counter-narratives. The incorporation of the "truth sandwich" method becomes a crucial aspect of this endeavor, ensuring that efforts to counter disinformation are effective without inadvertently amplifying false statements.

## **3) Learning Strategies**

Use pairing graphics with words, linking abstract concepts with concrete representations, posing probing questions, and retrieval practice (asking people to explain) etc to explain things. 

[Learning strategies link](https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/)

## **4) The 25% Revolution**


[The 25% Revolution—How Big Does a Minority Have to Be to Reshape Society?](https://www.scientificamerican.com/article/the-25-revolution-how-big-does-a-minority-have-to-be-to-reshape-society/)

### Understanding Diffusion

The things that we would like to spread often fail to diffuse. At the same time, the things that we want to prevent from spreading often succeed despite our best attempts to stop them. 

This basic problem of diffusion—that is, the failure to spread behavior—occurs whenever behavior change encounters resistance. At tempts to spread everything from vaccinations to innovative technologies to environmentally friendly business practices have faced similar difficulties. The less familiar an innovation is, and the more inconvenient, uncomfortable, or expensive it is, the greater the resistance will typically be, and the less likely it will be to diffuse. 

### Weak Ties

The basic idea of the strength of weak ties is that while our strong ties that is, our friends and close family—all tend to know each other, our weak ties—that is, our casual acquaintances – connect us to remote parts of the social network. As the sociologist Mark Granovetter famously put it, **Whatever is to be diffused can reach a larger number of people, and traverse a greater social distance, when passed through weak ties rather than strong.**

**Strategic complementarity:** The value of a behavior increases with the number of others who adopt it.

**Credibility:** The more people who adopt a behavior the more believable it is that the behavior is beneficial or that it is worth the cost of adoption.

**Legitimacy:** The more people who adopt a behavior, the greater the expectation is that other people will approve of the decision to adopt and the lower the risk of embarrassment or sanction.

**Emotional contagion:** The excitement associated with adopting a behavior increases with the number of others who adopt it.

---


# human population

> A sex ratio distortion system for the control of the human pests through female foeticide, through foetal sex determination.

![](images/img_20190305_151842.jpg)

[A synthetic sex ratio distortion system for the control of the human malaria mosquito](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4057611/)

#### ‘Reforms Of India’s Inheritance Laws Inadvertently Increased Female Foeticide And Deaths In Infancy’

From the 1970s onwards, changes in inheritance legislation sought to empower women by strengthening their financial and social position and reducing dependence on male relatives.

The traditional preference for sons was also supposed to lessen, because daughters, backed by possession of the family home, would be able to offer parents security in old age. Equally, this was expected to eradicate the dowry system, a key contributing factor to the perception of a daughter as a financial burden.

Instead, the **reforms appear to have had “unintended” effects leading to the “elimination of girls”**, as social norms that organise family structures and alliances have not kept pace with changes to the law, the study finds.

“Awarding inheritance rights to women makes parents more averse to having a daughter rather than a son,” the study says. _**This is because families fear that the cost of having a girl increases because property inherited by women risks falling into the control of her in-laws.**_

“In a dominantly agricultural household, the land is most important and comes before anything else,” Sen said. “_Parents would want to avoid splitting up the property, making it less productive, since the **only way of sharing** between siblings is **by selling the property** and distributing the proceeds._”  

**_The proportion of women inheriting property “did not increase significantly following the reform,” the study says._** Although laws now allow women to make legal claims to property, very few make such a move, which is **_perceived as anti-social and rebellious_**.  

“The family is a close knit-system, **_girls don’t want to go against parents and brothers and fight for property if they are denied it_**,” Radha Chellappa, child protection and gender advisor at the NGO Save The Children, told IndiaSpend**.** “**_The entire dowry system says that the daughters have already been given a share of the money, so they’re not entitled to the property_**.”

https://www.indiaspend.com/reforms-of-indias-inheritance-laws-inadvertently-increased-female-foeticide-and-deaths-in-infancy/

---


# idea 2 govt website for to do list work to be completed and work completed or percentage of work done list for every mps and mlas

This will help for both people and govt. to communicate properly with each other. Also help MPs and MLAs to campaign properly, by showing their work. 

  

No need of poster or wastage of papers.

  

They can also add the photographs of their work that has been done.

  

It will improve transparency and minimize corruption. I think govt. should initiate this approach, as a result politicians will be encouraged for subscribe To Do list, because people will also want them to subscribe. They may not make it compulsory, but still I think most politician will subscribe it because people and media may ask why they are not subscribing it and not showing their work. Also a good politician will always get a chance to win again.

  

  

People may also provide feedback and opinions of their work in the website.

---


# ideas need to be implemented in mygov in and education portal

Its just a rough sketch about the Idea

Update Aug 25th, 2015

  

[![](https://iambrainstorming.files.wordpress.com/2015/05/f3265-innovate4digitalindia.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2015/05/f3265-innovate4digitalindia.jpg)

  

Update:

  

Features like plagiarism checker should be used in every schools and colleges so that projects can't be copied. Moreover projects should be computer typed not hand written.

  

Personalized page for every subscriber.

  

Questions creation section, questions must require critical thinking in order to solve

  

  

**Question analysis section:**

  

All the exam questions in schools and colleges must be uploaded in the website after examination and then analysis section would be there, where students and teachers all over the country could analyze it.

Analysis can be based upon:

1) Whether the question pattern favors critical thinking or rote learning.

2) How difficult or easy is the question pattern?

3) Is there any mistakes in the questions? etc.

  

**Syllabus section:**

  

Syllabus section for each subject must be made for different universities or schools, where discussion about the syllabus is made.

Following discussions can be made such as:

What are the things that need to be included in the syllabus of a subject?

Which topics are missing in the syllabus?

Which topics are not required in the syllabus?

Is syllabus upto date? etc.

  

**Reference books section:**

  

Students and teachers can provide reference books for a subject or topic and should discuss about it in detail.

Which book is good for particular subject?

What are the demerits of this book?

Is the book easy to understand etc.

  

**Discussion on effective teaching techniques**

**Rating system for teachers,where student can rate the teachers and give feedback to the teachers openly.**

**Automation of administrative records entry on website:**

A framework should be added for administrative records, so that teachers (especially in govt. schools) don't waste time in maintaining the records. Records can include monthly expenses etc. (whether food, apparatus etc) of the govt schools and colleges. This will also increase the transparency and decrease corruption and also easy to check it by govt.

  

Automation of time table records should also be done.

  
All International and National Conferences in different universities should be recorded and made available online.   [Click here](http://thoughtsbyamiya.blogspot.in/2015/06/all-international-and-national.html)  
  
Business Model: [Click here](http://thoughtsbyamiya.blogspot.in/2015/06/business-model-for-lectures-and.html)  
  
Please also visit: [thoughtsbyamiya.blogspot.com](http://thoughtsbyamiya.blogspot.com/) for more details.

---


# if all content subject matter are alike how can we expect innovation

Problems with alike content:

1) **Homogenization of skills**  
When a finished product reaches the market, the product development cycle goes through the touch of many divergent skilled peoples. A product can have many components which require different skill sets of different people.

For example, Website Development:  
When you begin to develop a website, you start with designing a prototype of how it will look, which requires the expertise of graphic designers, you need the skill of programmer to code for the website, you need to be a webmaster to host your website.  
If you look into the depth, there is much more complexity to it. Each website has its own requirements. A prototype can be designed by using different software, such as Inkscape, illustrator and many others. Each software requires a different kind of learning and experience. Similarly, from programmer side, which language you will be using, which framework, based upon your website requirements such as speed of development, scalability. While hosting it, which type of server you use. These all require different kinds of skill sets.

> The example is applicable to _all types of problem-solving_. Most of our real-world community/country or global problems are too complex to be solved, that requires divergent skill sets. 

2) **Lack of divergent thinking**  
You don't know what you don't know. In order to fix a problem, not only we have to bring different pieces together, but also there are different ways to solve the same problem. If you have not read or seen about the **alternate approach**, you probably don't know how it can be solved in an alternative way.

[![](images/68dec-look-2balike.jpg)](http://iambrainstorming.files.wordpress.com/2017/09/68dec-look-2balike.jpg)

**Why all our books look alike?**

![](https://iambrainstorming.files.wordpress.com/2019/09/book_cover.png?w=210)

Strictly Based on Syllabus

Its because of our examination system of boards and entrances, and giving authors only a single reference book such as NCERT to follow and write content based upon it. Bad examination leads to bad content and even vice versa (bad content leads to bad examination). _Both pulling tightly to each other and constraining each other_, and the author gets no freedom to bring the new type of content or subject matter. Even stringent **syllabus** puts a limit on the author. You can't put anything other than the syllabus, or you can't even modify the sequence of content, it must be based on the syllabus sequence.

For more related details:  
Personalized learning goals  
[http://technoperiod.blogspot.in/2017/02/personalized-learning-goals-new.html](http://technoperiod.blogspot.in/2017/02/personalized-learning-goals-new.html) 

Required Learning Standards of Books  
[http://technoperiod.blogspot.in/2017/01/all-books-that-dont-meet-learning.html](http://technoperiod.blogspot.in/2017/01/all-books-that-dont-meet-learning.html)

Blogs on books:  
[http://technoperiod.blogspot.in/search/label/books](http://technoperiod.blogspot.in/search/label/books)

---


# if all scientific discovery relies on peer review for validation why not assessment be done through peer review

All scientific discovery relies on peer review for validation,  
**Why not the assessment of schools and colleges be done through peer review?**  
  

[![](images/peer_review.png)](https://iambrainstorming.ml/wp-content/uploads/2017/11/peer_review.png)

**Peer Review definition:**  
evaluation of scientific, academic, or professional work by others working in the same field.  
  
In case of open peer review, the reviewer reports are published which can again go through auditing.  
  
**Benefits of open peer review:**  
1) **Feedback to the students**  
After a test, feedback to the student becomes a crucial part of their learning. Feedback can be in many forms such as detailed corrections of the answers, making their misconceptions corrected for a particular concept, identifying their specific problems and asking them to take necessary steps to improve.  
2) **Time-saving of teachers**  
As this can be done in a collaborative manner, it will give freedom to any teacher from the respective subjects to annotate the assessments, the burden is no more to the individual teacher, it will be shared among the country or world. The burden of evaluation is not only shared among teachers but also computer by different statistical packages.  
3) **Microscopic analysis**  
Imagine how hectic the evaluation of assessment is by an individual teacher for a class of 50 students. Because of it, teachers are bound to miss the details of the problems of students. But this no more a problem with open peer review, due to shared work. If you have not identified the problem, it's more likely that someone else will identify it and address it.  
4) **Authenticity**  
Open peer review makes assessment most authentic, accurate and unbiased. Prejudice of teacher can be easily identified and corrected by experts.  
5) **Easy citation**  
Feedback to the students can be evidence-based, and useful research articles can be cited to back the feedback. It will help them to distinguish between facts and myths.  
6) **Earning microcredits**  
Students no longer have to study for obtuse macroscopic grades, they have to study to reach their learning goals. Education will be more personalized, students can earn credits to reach each learning goal.  
A proper algorithm is required to be free from spammers and inapposite posts to gain incentives, that nullify the effect of Campbell's Law.  
  
"The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor."  
[https://en.wikipedia.org/wiki/Campbell%27s\_law](https://en.wikipedia.org/wiki/Campbell%27s_law)  
  
  
7) **Diversity in learning**  
Students can learn topics that are unimaginable now because of strict syllabus system. Be it social justice for science students, cutting-edge technology of economics such as blockchain or logical fallacy of philosophy. Students can do projects as they like that solves real problem. For each one, they can earn microcredits.  
8) **Easy recruitment**  
As the data of assessment are easily available, recruiter can choose and hire the right candidate with ease based upon their real project works.

---


# if india wants instant outcomes fix every college and university instantly

Children will take another 20 years to add value to the economy.  
  
How to?  
  
1) Terminate all rote learning [content](http://technoperiod.blogspot.com/2017/01/all-books-that-dont-meet-learning.html), and provide them with pedagogically sound recent content. Let content be the syllabus.  
2) Provide [personalized](http://technoperiod.blogspot.com/2017/02/personalized-learning-goals-new.html) education, and address learning deficit of students.  
3) Bring projects under peer review, and make the project open access if it's not patentable.  
4) Ask the [teacher](http://technoperiod.blogspot.com/2017/12/higher-education-must-immediately-stop.html) to [unlearn](https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d) almost everything they learned during schools and colleges. Use [evidence, evidence, and evidence](https://github.com/amiyatulu/teacher_resources).  
5) Make [exams](https://iambrainstorming.ml/index.php/2018/06/26/how-to-guide-for-preparing-hots-question/) analytical and [cue-based](https://iambrainstorming.ml/index.php/2018/02/17/question-designing-should-be-brain-friendly-cue-based/), not the reproduction of the text of books.  
6) Pay the teacher well, so that teachership will be treated as a respectable job.

---


# iit jee is a scam its not about intelligence but parroting and solving unnecessary formulas

> In a usual physics book designed for IIT JEE preparation, each chapter contains an average of 50 complicated short cut formulas, and there are about 24 chapters, so in total there can be about 50\*24 = 1200 formulas. An almost impossible challenge to be memorized by an average student, which makes the entrance so hard to crack.

IIT JEE preparation is not about critical thinking, it's about remembering the formulas, and speed of executing the formulas.

This is the 2018 solved paper:  
Not a single seems to have without formula.  
[https://drive.google.com/file/d/16HkkgWtiOT7T4p0ajYhis9gTqBT2SPGo/view?usp=sharing](https://drive.google.com/file/d/16HkkgWtiOT7T4p0ajYhis9gTqBT2SPGo/view?usp=sharing)

Please go through the book: [Paul Hewitt Conceptual Physics](https://www.amazon.in/Conceptual-Physics-Pearson-Paul-Hewitt/dp/9352861779/)  

> Each chapter contains not more than two to three important formulas, that's all required because all other short cut formulas are based on it.

An example question from the book of Paul Hewitt, that helps you to understand conceptual understanding, not executing complicated formulas:

![](https://iambrainstorming.files.wordpress.com/2019/11/conceptual_physics.png?w=723)

An example sample of content that explains a formula:

![](https://iambrainstorming.files.wordpress.com/2019/11/fish.png?w=825)

Please go through the book, to know how the content and questions are designed.

Solving with formula without intuitive method makes student mindless.

[https://iambrainstorming.wordpress.com/2017/08/25/solving-with-formula-without-intuitive-method-makes-student-mindless/](https://iambrainstorming.wordpress.com/2017/08/25/solving-with-formula-without-intuitive-method-makes-student-mindless/)

Why are our books filled with unnecessary short cut formulas?

[https://iambrainstorming.wordpress.com/2017/06/01/why-are-our-books-filled-with-unnecessary-short-cut-formulas/](https://iambrainstorming.wordpress.com/2017/06/01/why-are-our-books-filled-with-unnecessary-short-cut-formulas/)

> Formulas are useful when you keep it as a reference, knowing that such formulas exist, knowing how it works and where it works is enough. It's analogous to a prebuild programming package or module where you can plug the values, and get the results during your research or experimentation in the lab. You need not have to keep the formulas in your memory.

Other similar articles:

**NEET Review**

[https://iambrainstorming.wordpress.com/2017/02/17/critical-analysis-on-neet-biology-questions-comparison-with-campbell-biology-questions/](https://iambrainstorming.wordpress.com/2017/02/17/critical-analysis-on-neet-biology-questions-comparison-with-campbell-biology-questions/)

**KBC ( CRAP, BULLSHIT, KQUESTIONS) Entrances**

[https://iambrainstorming.wordpress.com/2019/05/14/kbc-entrances-of-india-csir-net/](https://iambrainstorming.wordpress.com/2019/05/14/kbc-entrances-of-india-csir-net/)

**NCERT Chemistry question Review**

[https://nbviewer.jupyter.org/urls/cbse-probing.hashbase.io/Chemistry%202017.ipynb](https://nbviewer.jupyter.org/urls/cbse-probing.hashbase.io/Chemistry%202017.ipynb)

**NCERT Biology**

[https://iambrainstorming.wordpress.com/2017/06/08/comparative-analysis-of-openstax-biology-and-ncert-biology/](https://iambrainstorming.wordpress.com/2017/06/08/comparative-analysis-of-openstax-biology-and-ncert-biology/)

---


# importance of educational videos and solving its limitation by teachers assistance

Many technologies have promised to revolutionize education, but so far none has. With that in mind, what could revolutionize education?

https://www.youtube.com/watch?v=GEmuEWjHr5c

**Why educational videos don't work?**  
1) **Procrastination**: Educational videos give freedom of anytime learning, but this can lead to procrastination. According to Parkinson's Law: "Work expands to fill the time available for its completion". But in case of video lectures or MOOCs there is no limit of time, so usually, we procrastinate. Limiting time to complete the MOOCs is also a bad idea, as it takes away its advantage of any time and anywhere learning.  
2) **Lack of a social interaction**: We share emotions, feelings, discuss with the teacher, friends that come to our mind just like a true social animal and classroom brings a social two-way interaction, but it doesn't happen in case of MOOCs.  
3) **Answerability**: No one is there to keep you accountable for finishing the course, no outward push, everything lies with intrinsic motivation or curiosity to learn.  
4) **Distractors**: Computers are multitasking, but we don't learn with multitasking. So much information is bombarded to us, that makes us inefficient filter and creates trouble in what to learn and what not, also alluring social network sites, video games take the priority instead of learning through video lectures.

**Advantages of video lectures or MOOCs**:  
MOOCs are invaluable resources of knowledge and are priceless. MOOCs are borderless, ability to bring home lectures of best teachers and scientists throughout the world, and learn from them, anytime anywhere.

> _MOOCs are borderless, ability to bring home lectures of best teachers and scientists throughout the world, and learn from them, anytime anywhere._

But the problem is you can lead a horse to water but you can't make him drink. But _here comes the teacher role_.

**How should teacher scaffold the whole process of learning through video lectures?**

One way of doing things, when students are beginners and novice:

The teacher should watch the video together with students. Students can listen from their own computers, tablets or phones, but their videos should be in accord with teacher video streaming with the allowed margin of error. The teacher should act as an interrupter, pause the video every time a concept is explained and bring inquiry to students, _question them what they have understood, asking them to explain and also helping them to increase their learning level by answering where students fail to explain_ or _ask students to listen to the video bite again_. Students should also be asked to take notes from the lectures. This will increase their attention and learning level, also notes can be used for retrieval practice later. One advantage of videos is they can pause and repeat the part of video and take the notes, which is usually not possible in regular classroom.

> _The teacher should act as an interrupter, and students should be asked to take notes from the lectures._

A guide for effective questioning is given in the link:

https://www.nde-ed.org/TeachingResources/ClassroomTips/Effective\_Questioning.htm

_But for advanced and experienced learners, separate time for discussion and feedback in presence of expert can be kept._

**What are the advantages of doing so?**  
First, it removes all the limitations of educational videos. Secondly, it lowers the pressure and responsibility from teachers drastically. Teachers work is only to scaffold and check everything is working i.e. students are learning. Most of the responsibility is taken by videos and students themselves because students have to explain what they have understood and taken charge of their own learning.

Albert Einstein Quotes: If you can't explain it simply, you don't understand it well enough.  
Also, retrieval practice is done, which is one of the most effective strategies for learning.

> **First, it removes all the limitations of educational videos. Secondly, it lowers the pressure and responsibility from teachers drastically. But yes, it takes more teachers or mentors time, but that can be solved when we keep more mentors, and intermittent mentoring.** 

> Such classroom can remain open from early morning till midnight. 

https://youtu.be/zrR-KIoggf4

[https://www.edutopia.org/article/blended-learning-built-teacher-expertise](https://www.edutopia.org/article/blended-learning-built-teacher-expertise)

It also creates more quality teacher, and can tackle teacher shortages, as by following the model, teacher will also become learner and their expertise will increase with every passing year.

---


# in 102 level in india we have biotechnology but no bioinformatics

Write your views at: http://qr.ae/7yjTT4

I was looking at the syllabus of CBSE, and its very up to date, but some features are still missing.  
  
Biological data has become humongous, whether data for genomics or proteomics etc. For handling such big data, we need bioinformatics.  
  
When a biotechnologist produces some data, whether from NGS etc method, who is going to analyse it.  
  
  
In the syllabus of Bioinformatics that is taught in colleges after 10+2, there is no python, no statistical programming such as R etc.  Also no analysis of data produced from latest technology such as RNA-seq data, ChiP-seq etc.  
  
Please also look at the Edx courses of Genome Analysis and many other courses that require informatics in biological field.  
  
e.g.[Case study: Variant Discovery and Genotyping](https://www.edx.org/course/case-study-variant-discovery-genotyping-harvardx-ph525-6x)  
  
given by HarvardX.  Also look at other case studies.  
  
What you people have to say about it?

---


# in cbse 102 level syllabus in india there is no statistics

Share your views at: http://qr.ae/7hbIgQ

  

Now statistics has become a very important field, because of machine learning. Statistics should be introduced in the course with very up to date syllabus and syllabus of it should also contain compulsorily programming languages such as python and R

  
Its better if they make python compulsory, no matter what subjects student opt for.  
  
One of the best book I would recommend for fundamental is Elementary Statistics by Mario Triola, 9th Edn. But it does not contain machine learning. Problems of it are really good and should be solved along with programming even

---


# in india specialization courses should be started directly after 102 so that students can earn a certificate and apply for job

Share your views at: http://qr.ae/7Gi2oR  
  
Let me explain the situation of Education System if a student becomes a web developer or a mobile app developer  
  
Most Indian parents and society are only worried about child employment. They never think about their children passion.  So first they allow you to choose between Engineering or Medical because there is no other field that an average Indian can think. As medical entrance is highly tough, so an average student is likely to fail in it. So after 10+2 exam, student may go for medical coaching or JEE coaching for students who aspire to join some IITs.  If medical,  one year in coaching has been wasted. Even for JEE coaching one year is wasted because most students will not get a seat in IITs, so they will join some other private college, so coaching becomes unnecessary. So finally after one year, only one option is left that is engineering.   
So in engineering students usually choose Computer Science with syllabus that time forgot. They will start learning about mouse, keyboard etc. in first semester. Also students will start memorizing the programming, because questions come like that.  In that way 4 years of B. Tech computer science is gone, after that students will be jobless and start finding for jobs. So in that case, some may advice to go for some higher education such as MCA. Or some may give a better advice, that go for a specialization course i.e. a coaching center. If students chooses to go for MCA after B.Tech CS, it's  another disaster. Again syllabus that time forgot.  Any specialization subjects are not in syllabus, which does not allow a student to fetch job or apply their knowledge.   
So finally they end up with coaching centers, where specialization courses are taught, and I have seen many students that even after 5 years they search of jobs.  
  
So for a web developer what is required to build a sophisticated website:   
  
Here is the details:  
Making modern website with many features requires two things:  
1) Front end design  
2) Back end design  
It also requires lot of learning.   
For front end design you should  learn HTML5 and JavaScript, CSS3. Also you have to learn JavaScript library such as jQuery, and many other libraries to fit your need.  
For back end design, you can use Java, Python, Javascript, PHP etc. It is better if you learn a framework such as Grails (Java), Django (Python), NodeJs (Javascript), Ruby on Rails (Ruby) and laravel (PHP framework).  
  
Even I can bet that most coaching centers don't teach it. They even don't update technology in most efficient manner.  
  
So how much time does it take to learn it, hardly two to three years to become an expert. But how much time it will take for students following our education system after 10+2, roughly 10 years. Also count the money you spent in colleges and coaching centers.  
  
Similarly,  lets take a look even for specialization course of mobile app development:  
I am redirecting the link to a coursera course:  
[Page on coursera.org](https://www.coursera.org/specialization/mobilecloudcomputing2/36?utm_source=catalog)  
  
Please share your views about it.

---


# in order to understand a student understanding ask how they are imagining things

**Aphantasia**, is about not able imagine the image vividly, does it trouble to create new imagination?  
  
I have always a difficulty from childhood, for recalling the image vividly, I can’t get into details of the image. In order to remember a person's face, I need to meet up with the person again at least 3 or 4 times.  Even I have trouble in navigation. But all the issues are based upon generalized context, but there are exceptions.  
For example, I will reach the place second time again without trouble, if I  think of/ paid attention to the landmarks, I can recognize the person with his/her face again, if I think of or paid attention to the details of his/her face while the meeting.  
But in common I usually can’t recall the faces vividly,  but many have a very excellent capabilities imagining person's face or knowing the direction of a place which they have visited just once.  
  
I scored [http://www.bbc.com/news/health-34039054](http://www.bbc.com/news/health-34039054)  22 out of 40 in the test of Aphantasia.  
  
  
But does that mean, people with aphantasia are less capable of imagining something new?  
  
Imagining something new means imagining that does not exist, that we don’t see usually through our eyes. It is similar to our dream, which is not vivid, yet they are novel. It’s about seeing something, that other person don't visualize it.  
  
Take the example of explaining a chemical reaction of cellular respiration. The reaction may seem trash at the first glance which you have to memorize, but when you start imagining it differently, it's no more a trash and you will understand it better.  
  
  

[![](https://iambrainstorming.files.wordpress.com/2016/08/944a7-image.png?w=300)](https://iambrainstorming.files.wordpress.com/2016/08/944a7-image.png)

  
  
Let's start imagining these statements:  
Enzymes called dehydrogenases remove a pair of hydrogen atoms (2 electrons and 2 protons) from the substrate thereby oxidizing it. The enzyme delivers the 2 electrons along with 1 proton to its coenzyme, NAD+. The other proton is released as a hydrogen ion (H+) into the surrounding solution.  
  
In order to understand such statement, we have to completely depend on our imagination. We have to imagine a dehydrogenase, for some, it may be a rough structure in mind, for some it may be just a kind of object.  
Then from it 2 electrons and 2 protons come out, we have to imagine a hydrogen atom with a proton and an electron.  
How will a student imagine proton and electron in hydrogen?  
  
That depends on the previous knowledge of the student about hydrogen, of example I imagine proton as in the center, electrons revolving around it, but **what if a student don’t know the structure of it** properly, he/she may imagine, two pieces of some kind of objects called electrons and other two pieces of object called protons which is hydrogen coming out of it, which will be a kind of faulty imagination.  
  
Next, we have to imagine the substrate, which is given in the diagram, we can imagine  glucose as molecules. When you say about glucose, what picture comes to the mind, for me, it may be the cyclic structure of glucose or a glucose packet,  and then the statement says the substrate is oxidized. How will a student imagine it if he/she does not know what oxidation is? Maybe he/she will skip the oxidation part from imagination. For me, it's removing of the electron.  
  
As you can see only one sentence requires a prodigious amount of imagination, even though we can do it very quickly, but if our imagination is incorrect, so will be our understanding.  
  
In order to **understand what misconception a student holds, or to understand their understanding we have to understand how they are imagining things**. This can be done by asking questions to students to speak about their imagination in **details**. How are they imagining things?

---


# in the age of the internet what to memorize and what not

There is a heated discussion about **why remember facts when all information is at fingertips** (through the internet)?.  
So first look at dictionary what a fact is?  
The first definition that comes up is this:  
_A thing that is known or proved to be true._  
  
Ok, but most things we study in our education are facts.  
Earth revolves around the sun is a fact.  
New Delhi is the capital of India is a fact.  
Hitler born on dated 20 April 1889 is a fact.  
Independence day of India is 15th August is a fact.  
  
Out of these, first two and last one, I needn't have to search the internet,  because these facts are very important to me as I live in India, and I am from Earth (Lol). I searched the internet to find out when Hilter was born because his date of birth was irrelevant for me till now. Maybe I will forget his date of birth after one day because it will not come to any use to me later.  
  
So, some facts are very important to memorize while others are not.  Then what to memorize and what not? In the age of the internet, not only all information are in fingertips, but also the humongous amount of facts.  
Can we remember all these facts? Of course not, we have a limited amount of memory to store. Brain capacity is limited.  
  
So, it's important to choose what to keep it in memory and what not?  
  
We needn't have to memorize:  

> **Non-concrete information that takes a huge amount of effort and time to memorize, which we don't use often or will not use often in future, can be extracted or processed by the Internet or other efficient tools.**

  
What is non-concrete information?  
[Why we face difficulty to remember non-concrete information?](https://iambrainstorming.ml/why-we-face-difficulty-to-remember-non-concrete-information/)  
  
  
For a 5 year kid, A-Z alphabets is a non-concrete information but do (s)he needs to memorize it. Yes, because, alphabets are something that she will use it often, every time. So is true for multiplication table.  
But do the kid has to learn 34 multiplication table? Why not? Even that is useful.  
Because it will take too much of effort to memorize so much of multiplication tables. If we give all this burden, he will only learn tables and nothing else in life.  
  
We do specialization instead of learning everything because we can't be a jack of all trades.  

> **We have to _skip learning something to learn something_, as we have a limited amount of memory storage and time.**

[![](https://iambrainstorming.files.wordpress.com/2017/05/49d83-brain.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2017/05/49d83-brain.jpg)

  
If you spend all time in memorizing shortcut formulas of physics, when will you strategize to solve the problems? Formulas are easily available on the internet or book, but learning how to use it more important than memorizing it.  
  

> So, **we need to prioritize what to memorize and what not** as we have limited time and memory.

  
  
Getting the job done that is useful is important, whether you have done it through mental computation, or through a computer doesn't matter. Yes, making computer to do things does require some mental work and prior knowledge that is stored in our memory.

---


# instead of year wise semester wise exam will be more better in 102 level in india

Share your views at: http://qr.ae/7hOcoJ

  

These fundamental subjects such as physics, chemistry, biology, mathematics should be made in chunks, so that subject that is needed is taught, other wise that can be skipped and other specialized subject can be taught in that time. Also I think way to specialization should start from 10th class, not 11th class.

---


# invest on renewables

# Phase out fossil fuel subsidies

---
categories: 
  - "climate-change"
  - "fuel-price-hike"
tags: 
  - "climatechange"
  - "fuelpricehike"
---

Fossil fuels are widely recognized as unsustainable, necessitating the development of a comprehensive plan to transition towards decentralized solar power production.

The housing infrastructure in many parts of India is characterized by urban sprawl, with semi-urban cities predominantly featuring two to three-story buildings. These structures offer a promising opportunity for harnessing clean energy through rooftop solar installations. In contrast to Britain, where over 65% of homes are suitable for solar panels, India boasts an even greater potential, can be more than 70% to 80% of houses being conducive to solar energy adoption. This underscores the significant scope for expanding solar power utilization in India's residential sector.

## Over 65% of homes in Britain can work for solar panels

[https://www.ecotricity.co.uk/our-news/2023/over-65-of-homes-in-britain-can-work-for-solar-panels](https://www.ecotricity.co.uk/our-news/2023/over-65-of-homes-in-britain-can-work-for-solar-panels)

Setting up rooftop solar systems may initially appear to be a bit expensive for a middle-class family to invest in. However, it's crucial to note that the cost should be evaluated not just in terms of the initial investment but also in relation to the potential profit and payback over time.

While the upfront costs of installing rooftop solar panels might seem daunting, the long-term financial benefits often outweigh the initial expenses. The return on investment (ROI) for solar installations is relatively high, leading to considerable savings on electricity bills over the years.

![Solar Saving](./images/solar_stat.webp)

## Switching The World To Renewable Energy Will Cost $62 Trillion, But The Payback Would Take Just 6 Years

[News Link](https://cleantechnica.com/2022/09/06/switching-the-world-to-renewable-energy-will-cost-62-trillion-but-the-payback-would-take-just-6-years/?utm_source=pocket_reader)

Solar panels has the capacity to generate enough electricity to power essential household appliances such as an induction cooker, an air conditioner (AC), or even charge an electric bike, making it a feasible and sustainable energy solution for a typical middle-class family.

Beyond meeting immediate energy needs, one notable advantage of solar power is the potential for surplus electricity generation. In the event that the solar panel produces more energy than the household requires, the excess power can be redirected to the grid. This not only contributes to the overall energy supply but also provides an opportunity for the family to earn money through mechanisms like net metering.

Net metering allows homeowners to receive compensation or credits for the surplus energy they feed back into the grid. This financial incentive not only promotes self-sufficiency but also encourages the adoption of solar technology as a means of not just meeting personal energy needs but actively contributing to the broader energy infrastructure.

> Please don't argue the rise of fuel prices for providing unsustainable subsidies on the Ujjwala scheme, build a self-sustainable system by making every household a power generator.

The surge in gas cylinder prices has become a focal point of intense political discourse, particularly due to its substantial impact on the middle class and the economically disadvantaged. While acknowledging the repercussions of rising gas prices on these segments of society, it is crucial to recognize that subsidizing gas is not a sustainable solution.

Instead, a more viable approach involves making substantial investments in renewable energy sources such as solar and wind, coupled with advancements in energy storage technologies like batteries. This strategic shift towards renewables can not only address the immediate concerns about the affordability of energy but also pave the way for a more sustainable and decentralized power infrastructure.


## **Please stop providing coal subsidy**

AAP under the leadership of Arvind Kejriwal, who claims to bring political revolution is providing 200 units of free electricity to people. They are subsidizing coal-produced electricity instead of using that money for producing sustainable renewable energy. 200 units per 5 year cost Rs 72000. At this cost everyone can easily install rooftop solar panels in their homes for free, and also sell the surplus and become energy self-sufficient instead of depending on govt. The solar panel life span is about 20 years, so people can generate electricity for 20 years. Instead of bringing sustainable policy, they want the future of our children and grandchildren on the brink of catastrophe due to climate change.

## Update on Solar Panel policy by AAP govt

Although India missed its target of achieving 100 GW of solar power by 2023, globally, the country stands 5th in solar PV deployment as per REN21’s Global Status Report 2023 & IRENA’s Renewable Capacity Statistics 2023. With zero bills for rooftop solar panels and incentives, residential consumers can still lead the change toward a greener future. States are now coming up with their policies for solar rooftop installation to get residential consumers involved. For instance, Delhi's Solar Policy 2024 offers residential consumers zero electricity bills by installing rooftop solar panels. Chief Minister Arvind Kejriwal's initiative includes incentives, like the Generation Based Incentive (GBI), making solar power accessible and profitable. With a 2kW rooftop solar plant, consumers see a return on investment in just 4 years, setting a green energy precedent for India.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lt4fa-Oo2h4?si=J9duva5n99NIkJhh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## A detailed explanation of the rooftop solar policy

<iframe width="560" height="315" src="https://www.youtube.com/embed/9_Tc11AlkME?si=gv40RntgkyOsQbM_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> One can also provide zero-interest loans along with the policy so that people can pay in installments or EMIs to afford the solar panel. This will further reduce the roadblock or hesitance of users to install solar panels.

Poor states states like Odisha, Jharkhand, Chhattisgarh are very much dependent on coal revenue. It all about politics. This must change, political pressure must be build on these state.


### The Struggle for Commercialization of Rooftop Solar Panels: Overcoming Government Hesitancy and Corporate Monopolies

Roof top solar panels have the potential to revolutionize the way we generate and consume energy, but commercialization of rooftop solar has been slow due to hesitant government policies and the influence of monopolistic corporate lobbies. The government is reluctant to provide subsidies for roof top solar systems for commercial purposes, which hampers the widespread adoption of this sustainable energy source. Meanwhile, large corporations are more interested in building solar hubs in rivers and fields, which can be easily washed away in floods. It also perpetuates a cycle of corporate profit, rather than decentralizing the power economy and putting it in the hands of the public. It is crucial for governments to recognize the importance of roof top solar panels and provide the necessary support for their commercialization, ultimately benefiting both the environment and the people.

[Storm damages world's biggest floating solar plant in Madhya Pradesh](https://timesofindia.indiatimes.com/city/indore/storm-damages-worlds-biggest-floating-solar-plant/articleshow/109231119.cms)

The irony is that they want to [exert control over vast areas of land in Ladakh](https://scroll.in/article/1073644/in-ladakh-a-massive-energy-project-is-shrouded-in-mystery), while simultaneously failing to utilize or promote the widespread adoption of rooftop solar panels, which would decentralize power generation and transfer control from corporations and governments to the people - a scenario that seems to contradict their apparent desire for control.

### Corporate Monopolies: A Threat to National Security

Corporate monopolies pose threats to both national economic security and sovereignty, as they can wield immense control over essential resources and services. A recent example is the Adani Group, which reportedly [threatened to suspend power supply to Bangladesh](https://scroll.in/latest/1075198/adani-group-to-suspend-power-supply-to-bangladesh-if-dues-not-cleared-report) due to unpaid dues of around $850 million, even cutting the supply by half. Such actions highlight the vulnerabilities nations face when reliant on powerful corporate entities for critical infrastructure. To counteract this risk, decentralizing energy sources, such as installing solar panels on rooftops and maintaining community-based control, is essential. This approach not only reduces dependency on monopolistic corporations but also promotes energy resilience and self-sufficiency, strengthening the nation's ability to secure its own energy future.


## Zero electricity Bills

![Zero bill](./images/renewables.jpg)

> Zero electric bills can be a reality in your city. Don't be misled by the gimmick of a zero fossil fuel electricity bill, and don't tolerate overpriced fossil fuel electricity. In both cases, the fossil fuel industry profits, either through subsidies or price gouging.


[Governments Spent Record $1 Trillion Subsidizing Fossil Fuels Last Year](https://e360.yale.edu/digest/1-trillion-fossil-fuel-subsidies)

This decentralization of power generation at the community level can lead to a significant reduction in electricity prices, and in some cases, it has the potential to bring the cost down to zero.


## Adani imported ₹13,000 crores of coal at above market value so crores of Indians overpay for electricity.

[https://www.ft.com/content/7aadb3d7-4a03-44ba-a01e-8ddd8bce29ed](https://www.ft.com/content/7aadb3d7-4a03-44ba-a01e-8ddd8bce29ed)

Price gouging is the practice of increasing the prices of goods, services, or commodities to a level much higher than is considered reasonable or fair.

## It is criminal to finance the fossil fuel industry, and banks need to cease such practices.

Banks continue to provide substantial financing to the fossil fuel sector

According to the annual 'Banking on Climate Chaos' report by NGOs, the top 60 global banks provided $673 billion in financing to coal, oil and gas producers in 2022.

[https://www.lemonde.fr/en/environment/article/2023/04/17/banks-continue-to-provide-substantial-financing-to-the-fossil-fuel-sector\_6023235\_114.html](https://www.lemonde.fr/en/environment/article/2023/04/17/banks-continue-to-provide-substantial-financing-to-the-fossil-fuel-sector_6023235_114.html)

## **UNDP’s Policy Toolkit for a Fair Energy Pricing Reform**

[Fossil fuel subsidies reform could limit climate change while tackling global inequalities. Here's how.](https://www.undp.org/blog/fossil-fuel-subsidies-reform-could-limit-climate-change-while-tackling-global-inequalities-heres-how)

**Step 1: Phase out fossil fuel subsidies**

**Step 2: It has been said many times over, and we do so again... Put a price on carbon!**

**Step 3: Redirect money towards the people and make investments that are in line with the SDGs**

Marketing teams can be build and door to door campaigns, road shows can be done along with installation support to aware people about climate change, and financial benefits they are going to get by becoming an electricity supplier to the grid.

Clean energy also helps to fight climate change.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/8Sl28fkrozE?si=CPCL0GaNtIJVvgI-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Hundreds of people lost their lives within a week due to heat waves in India. The provision of subsidies for coal electricity raises ethical concerns and carries severe consequences, akin to what some argue could be compared with genocidal crimes.

[https://time.com/6288119/india-heat-wave-2/](https://time.com/6288119/india-heat-wave-2/)

## Solar is now ‘cheapest electricity in history’, confirms IEA

[https://www.carbonbrief.org/solar-is-now-cheapest-electricity-in-history-confirms-iea/](https://www.carbonbrief.org/solar-is-now-cheapest-electricity-in-history-confirms-iea/)

- Renewable energy sources are all around us

- Renewable energy is cheaper

- Renewable energy is healthier

- Renewable energy creates jobs

- Renewable energy makes economic sense

About [$7 trillion](https://www.imf.org/en/Blogs/Articles/2023/08/24/fossil-fuel-subsidies-surged-to-record-7-trillion) was spent on subsidizing the fossil fuel industry in 2022, including through explicit subsidies, tax breaks, and health and environmental damages that were not priced into the cost of fossil fuels.

In comparison, about [$4 trillion](https://www.iea.org/reports/net-zero-by-2050) a year needs to be invested in renewable energy until 2030 – including investments in technology and infrastructure – to allow us to reach net-zero emissions by 2050.

[https://www.un.org/en/climatechange/raising-ambition/renewable-energy](https://www.un.org/en/climatechange/raising-ambition/renewable-energy)

## Do solar panels take away terrace space, which is typically used for social gatherings and leisure activities?

Integrated solar panels, as shown in the attached photo, not only generate energy but also save or create usable space for gathering or activities. You can have many similar designs.

![Integrated Solar Panels](./images/integrated-solar-pannel1.jpg)

![Integrated Solar Panels](./images/integrated-solar-panel2.jpg)

## Building Integrated Photovoltaics (BIPV) 

[BIPV in one Article](https://www.maysunsolar.com/bipv-in-one-article/)


## Why Fossil Fuel Companies Can’t Leave Resources Stranded? 

Huge legal, political, and economic obstacles stand in the way of [limiting global temperature rise to 1.5 C.](https://undark.org/2023/11/02/opinion-fossil-fuel-stranding/)

The strategies would include light-speed development of a renewable energy infrastructure, especially [power grids](https://www.nytimes.com/2023/10/17/climate/electric-grids-climate-iea.html) that can support a massive increase in renewable production. They would include policies to produce huge growth in [energy efficiency](https://www.iea.org/reports/the-value-of-urgent-action-on-energy-efficiency) — an unfortunately unsexy solution compared to megascale wind turbines and vast solar arrays. And they would include aggressive campaigning to support politicians willing to advocate for the hellishly difficult policies — such as ending [fossil fuel subsidies](https://www.context.news/net-zero/how-fossil-fuel-subsidies-are-hurting-the-energy-transition) and levying a [carbon tax](https://undark.org/2019/04/04/the-carbon-tax-that-keeps-on-giving/) — needed to meet the climate crisis.


## Navigating the Perils of Oil Dependency: A Call for Renewable Energy Transition

[Oil Dependence Is a Dangerous Habit](https://www.americanprogress.org/article/oil-dependence-is-a-dangerous-habit/)

Oil dependency poses a multifaceted danger to nations. First and foremost, relying on oil imports from "dangerous or unstable" countries can inadvertently fund and sustain regimes that may harbor anti-democratic sentiments or engage in actions contrary to the interests of importing nations. The financial support provided through oil purchases may inadvertently empower governments with questionable human rights records or hostile foreign policies. Additionally, the global demand for oil, driven by major consumers of importing countries, can elevate oil prices. Situations like wars, such as the conflict between Russia and Ukraine, can further escalate prices, exacerbating the economic strain on nations heavily dependent on oil imports.

Furthermore, the economic disparities resulting from oil dependence exacerbate tensions within oil-rich nations. The failure of many regimes to distribute oil revenues equitably contributes to social unrest and violence. Instances of oil-related violence in countries like Nigeria highlight the dangerous consequences of relying on a resource that can intensify internal conflicts. The unequal distribution of wealth from oil revenues not only destabilizes nations but also perpetuates global inequalities, contributing to a cycle of conflict and underdevelopment.

To address these challenges, a shift towards renewable energy sources is crucial. By embracing renewable energy, countries can become more energy secure and independent. This transition not only mitigates the geopolitical and economic risks associated with oil dependency but also contributes to a more sustainable and equitable global energy landscape. Embracing renewable energy technologies is not only a practical necessity but also a step towards fostering international cooperation and addressing the shared challenges posed by reliance on fossil fuels.

## Disparity in Carbon Emissions: Wealthiest 1 Percent Outpace Poorest Half, Straining Global Climate Goals

[Carbon emissions of richest 1 percent more than double the emissions of the poorest half of humanity](https://www.oxfam.org/en/press-releases/carbon-emissions-richest-1-percent-more-double-emissions-poorest-half-humanity)

The report assesses the consumption emissions of different income groups between 1990 and 2015 – 25 years when humanity doubled the amount of carbon dioxide in the atmosphere. It found:   

- The richest 10 percent accounted for over half (52 percent) of the emissions added to the atmosphere between 1990 and 2015. The richest one percent were responsible for 15 percent of emissions during this time – more than all the citizens of the EU and more than twice that of the poorest half of humanity (7 percent).     
- During this time, the richest 10 percent blew one third of our remaining global 1.5C carbon budget, compared to just 4 percent for the poorest half of the population. The carbon budget is the amount of carbon dioxide that can be added to the atmosphere without causing global temperatures to rise above 1.5C – the goal set by governments in the Paris Agreement to avoid the very worst impacts of uncontrolled climate change.     
- Annual emissions grew by 60 percent between 1990 and 2015. The richest 5 percent were responsible for over a third (37 percent) of this growth. The total increase in emissions of the richest one percent was three times more than that of the poorest 50 percent.


![Carbon Footprints in 2030](./images/carbon_footprints.jpg)

## Indian Ocean in permanent heatwave

A new study shows the steady warming of the Indian Ocean, and predicts that the ocean will be in a 'permanent heatwave' state by the end of the century.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jGP5DldecQI?si=QOKbBLc71PPG0DPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---


# is hierarchy inevitable

Right-wing politics hold that certain social orders and hierarchies are inevitable, natural, normal, or desirable.

**Some of the definition of social stratification:**

Social stratification is a kind of social differentiation whereby members of society are grouped into socioeconomic strata, based upon their occupation and income, wealth and social status, or derived power (social and political). As such, stratification is the relative social position of persons within a social group, category, geographic region, or social unit.

In modern Western societies, social stratification is typically defined in terms of three social classes: (i) the upper class, (ii) the middle class, and (iii) the lower class; in turn, each class can be subdivided into strata, e.g. the upper-stratum, the middle-stratum, and the lower stratum. Moreover, a social stratum can be formed upon the bases of kinship, clan, tribe or caste, or all four.

**What Is a Hierarchical Society?**  
_[https://www.reference.com/world-view/hierarchical-society-d01aa58f1dd1ce6f](https://www.reference.com/world-view/hierarchical-society-d01aa58f1dd1ce6f)_

A hierarchical society involves two or more organisms working together to ensure their survival within a clearly defined stratified structure. In a hierarchical society, certain social positions and statuses have more prestige and importance than others. **_Hierarchical societies are not generally meritocracies, where people receive reward and status solely in response to their achievement_.** Hierarchical societies function with a "top dog" position that is protected and coveted.

**Here are some of the arguments in favour of Hierarchy.**  
[https://aeon.co/essays/hierarchies-have-a-place-even-in-societies-built-on-equality](https://aeon.co/essays/hierarchies-have-a-place-even-in-societies-built-on-equality)

On the other hand, the idea of a purely egalitarian world in which there are no hierarchies at all would appear to be both unrealistic and unattractive. Nobody, on reflection, would want to eliminate all hierarchies, for we all benefit from the recognition that some people are more qualified than others to perform certain roles in society. We prefer to be treated by senior surgeons not medical students, get financial advice from professionals not interns. Good and permissible hierarchies are everywhere around us.

> **All articles have one thing in common, the proponent of hierarchies are confused between specialization and hierarchy.**

We prefer to be treated by senior surgeons because they are more specialized in the field. We want to be treated from an expert rather than a novice.

And that needn't have to be hierarchical.

Even though the job of both hierarchy and specialization is to direct, but they have an important distinction.

> **Specialization: I direct what I can direct.  
> Hierarchy: I direct what I direct.**

**Why hierarchies exist?**

As most mammals, the vast majority of primate species live in social groups. For the individual, the evolutionary basis of group living is enhanced protection against predation. But the intimacy of social life also brings with it increased competition for resources. Individuals compete with others in their social group for food, for example, by either scrambling to get to it first or else contesting others directly, which has led to the prevalence of dominance hierarchies as a way for both parties to avoid potentially damaging fights.  

**The ultra-social animal**  
_[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4302252/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4302252/)_

> But humans can avoid potentially damaging fights without hierarchies, and can have abundant food and security/safety for all humans through using algorithms.

Correct algorithms for democracy, economics, and education can make an equitable distribution of resources and power, with social well-being and peace, without any kind of discrimination, and can also check the population growth or other global and local problems.

> We have hierarchies in all components of society, whether its family, education or politics. This needs to change.

**Some of the algorithms:**

Fair Democracy:

[https://iambrainstorming.wordpress.com/2019/01/11/the-whole-process-of-voting-in-a-dpos-country/](https://iambrainstorming.wordpress.com/2019/01/11/the-whole-process-of-voting-in-a-dpos-country/)

Education:

[https://iambrainstorming.wordpress.com/2017/06/04/public-private-partnership-schools-colleges-and-its-implementation/](https://iambrainstorming.wordpress.com/2017/06/04/public-private-partnership-schools-colleges-and-its-implementation/)

**P.S.  
**I am not against hierarchical algorithms in computer science. These algorithms can actually help to deal with social hierarchies.

---


# jupyter notebook to write notes and exercises learn by applying knowledge

### Jupyter notebook can be used to make your notes and solve exercises with programming without using pen and paper.

In order to write notes, you can use markdown which is a very simple markup language and can be learned within 15mins to get started. You can use latex and Unicode characters to write equations and symbols.

To learn latex you can use google, e.g. website  
[https://en.wikibooks.org/wiki/LaTeX/Mathematics](https://en.wikibooks.org/wiki/LaTeX/Mathematics)

**Jupyter notebook can be used in any subjects where the calculation is required, such as physics, mathematics, economics, even biology etc.**

No need to scratch your head, if you forgot the formula, or made mistakes in calculation when done with pen and paper.

**Learn by applying things that will be useful in real life situations**  
**Everyone should learn code, in early age just like other subjects. One computer to each child is required.**

**[https://github.com/amiyatulu/teaching\_chemistry](https://github.com/amiyatulu/teaching_chemistry/blob/master/Integrated%20Rate%20Law%20(Publish).ipynb)**  
  
View:  
[https://nbviewer.jupyter.org/github/amiyatulu/teaching\_chemistry/blob/master/Integrated%20Rate%20Law%20%28Publish%29.ipynb](https://nbviewer.jupyter.org/github/amiyatulu/teaching_chemistry/blob/master/Integrated%20Rate%20Law%20%28Publish%29.ipynb)  
  
Biology Notes  
Cell: [https://nbviewer.jupyter.org/github/amiyatulu/biology/blob/master/Cell.ipynb](https://nbviewer.jupyter.org/github/amiyatulu/biology/blob/master/Cell.ipynb)

---


# kbc entrances of india csir net

KBC = CRAP, BULLSHIT, KQUESTIONS

CSIR NET Dec 2018 Life Sciences

In the metazoan cell cycle, metaphase to anaphase transition is regulated by the activity of  
1) Cdk1/cyclinB  
2) APC/C  
3) Cdc25  
4)Weel  
So, how this question is important.  
Let's find out about APC/C  
First APC is a short form of Anaphase-promoting complex, so you have to make a habit to memorize all the acronym. Do you know what is WAC? It is the Women Army Corps. Found this example from the dictionary.  
This is excerpt from Cell Bruce Alberts,

![](images/screenshot-from-2019-05-14-17-52-40.png)

Let me say the page number, its 360, Molecular Biology of Cell, 6th Edition. Do memorise the page number, question can come from any line.

![](images/chart.png)

Also there is a chart for your help. Please regurgitate as many times as quickly as you can.

Do you know how many proteins our biodiversity has, and every protein has a function, if you just memorized 10,000 [protein names](https://www.rcsb.org) with its function, you can be genius to run any experiment on proteins.

---


# learning roman numbers one component at a time

**Learning Objectives**  
To convert Roman numbers to Hindu-Arabic numbers

**What are the big ideas that students have to learn?**  
1) Memorizing these Roman Symbols with their respective Hindu-Arabic value  
2) When to do addition and when to do subtraction based upon the position of  Roman Symbols

**1) Memorizing these Roman Symbols with their respective Hindu-Arabic value**  
Without memorizing the mapping of Roman Symbols to its respective Hindu-Arabic value, students can't reach their learning outcomes. The mapping is very hard to memorize. So it's critical to provide them memory tricks for it.

![](https://iambrainstorming.files.wordpress.com/2019/09/roman.jpg?w=1024)

Kids usually know  
1) I means 1  
2) V means 5  
3) X means 10  
But what about other symbols, here are the memory tricks that students have to imagine.  
4) L means 50  
So tell them L means (L)ake, and Lake is half filled (50%)  
5) C means 100  
Tell them C means see and see is a full (100%) eye  
6) D means 500  
Choose a student whose name starts with D and give him/her a Rs 500  
7) M means 1000  
The child gave Rs 1000 to Mom  
M means Mom and Mom got 1000

**Some of the problems with these techniques:**  
When you ask them to tell what M means, they will say Mom instead of 1000, or if you ask what L means they will say Lake instead of 50. 
So ask them to recall the complete story, L means Lake and the Lake is half filled means 50. Then, ask them to skip the intermediatory dialogues.  
After some 5-10 mins practice they should say:

**M means 1000** (not M means Mom, or I gave Mom 1000)

Some students don't know how Rs 500 and Rs 1000 look like. Show them the notes, so that they can have a better memory. Use the words that are related to them.  
**Also, ask them to say the reverse.**  
**1000 means M**  
500 means D etc.

_Don't **abuse** these techniques, use only when its really important and mapping is too hard to memorize._   
e.g. It will be an abuse of this technique if you ask them to memorize many roman numerals mapping upto 100 (e.g. 40, 90, 4, 75)

Now lets come to the second big idea:

**2) When to do addition and when to do subtraction based upon the position of  Roman Symbols**

**Provide them problems with two symbols**   
(Repeatedly solved and unsolved for practice and finding out patterns)

**The big idea is**   
**BIG small => Addition (+)**  
**same same => Addition (+)**  
**small BIG => Subtraction (-) # But remember you have to do: BIG - small**, NOT small - BIG

Let them write the numeric values below each symbol, and ask them which pattern does it follow.

Here is a sample:

![](https://iambrainstorming.files.wordpress.com/2019/09/notes1.png?w=441)

Then, the next step is to provide larger problems with repeatedly solved and unsolved for practice

![](images/7eb3b-notes2.png)

> In problem-solving, break down the larger problem into easy to handle smaller components, practice the smaller component and then increase the complexity and practice till you reach the level of larger problem. 

**Here is the sample of the book:**  
**Problems of the book**:  
1) It doesn't provide the memory tricks  
2) It doesn't provide repeatedly solved and unsolved problems for smaller components as well as bigger components  
3) Even no examples of how to get Roman numbers from the Hindu-Arabic value, but exercises contains these problem sets.

![](images/92bc8-book3.jpeg)

---


# love for usd pegged stable coin by the crypto community must end

# Love for USD pegged stable coin by the crypto community must end
date: "2022-06-01"

categories:
  - "blockchain"
---

Terra 2.0 recently experienced a crash resulting in a collapse of $40 billion. Many speculate that the bear market in crypto is due to the collapse of Terra. Although the reason for the collapse is attributed to bad algorithmic design, a similar collapse of the USD could have a precarious impact on the entire crypto market, creating havoc not only in the US but globally if USD is adopted everywhere.

The USD is issued by the US government. While they aim to maintain only a 10-15% inflation rate per year, its predictability is under centralized control. Throughout history, there have been instances of bank crises leading to a sudden devaluation of the USD, and history may repeat itself.

Using the USD as the mainstream cryptocurrency contradicts the ethos of cryptocurrency, as it should be decentralized. Its use needs to be limited and avoided from dominating the market. Furthermore, since the USD is a national currency primarily serving the needs of the United States, it is less likely to effectively meet the diverse economic requirements of international nations. For example, if you belong to some other country and hold USD, the 10% USD inflation will transfer wealth from you to the US. There is no limit to how much the US government can print, and neither one can predict when they will start printing, it can be during a war, during an election, or any other crisis like covid-19

While the USD may be appropriate for short-term use, like when you want to use the money within a year, gold is perceived as a superior option for long-term savings and is better at providing a hedge against inflation or crypto-speculation.

## Decentralized USD Stable coin:

DAI is the first USD-pegged decentralized stable coin. It use many other cryptocurrency as collateral including USDC. It uses price oracle of USD to stabilize the DAI price same as USD.

DAI, a crypto-collateralized stablecoin by MakerDAO, has seen its asset weightage shift [towards stablecoins](https://members.delphidigital.io/reports/usdc-grows-dais-collateral-woes-bayc-pushes-higher/). Many criticized DAI for being backed by 60% stablecoins, as it means that DAI is also exposed to the same centralization and regulatory risks of the stablecoins (mainly USDC).

Similarly USD stable coin is also implemented for polkadot ecosystem, e.g. [AcalNetwork](https://github.com/AcalaNetwork/Acala) You can view the detailed workings through the link.

Acala's aUSD also [crashed due to a bug in its code](https://www.cryptotimes.io/why-did-acala-ausd-drop/). Though errors in the code can be fixed, what truly matters is a stable coin protocol or algorithm design that works. Here is a [video explaining why it's so hard to build a decentralized stable coin](https://finematics.com/bank-run-in-defi-iron-finance-explained/).

One interesting stable coin is [Ampleforth](https://finematics.com/ampleforth-explained/), where the number of coins in your wallet keeps changing.

## Gold price pegged decentralized stable coin:

Gold cryptocurrency can provide hedge against inflation and fluctuating prices of or other cryptocurrency. For example, from 2004 to 2022, the price of an [ounce of gold in rupees](https://goldprice.org/gold-price-charts/20-year-gold-price-history-in-indian-rupees-per-ounce) has changed from Rs. 20,000 to Rs. 160,000. Gold has a history of being the best and most well-tested currency since 700 BC.

Here are the few [gold backed cryptocurrency:](https://www.softwaretestinghelp.com/gold-backed-cryptocurrency/)

1. Tether Gold (XAUT)

3. DigixGlobal (DGX)

5. PAX Gold (PAXG)

7. Gold Coin (GLC)

9. Perth Mint Gold Token (PMGT)

11. Meld

But like USDT and other USD based crypto stable coin, gold stable coins too are not fully decentralized and work under centralized regulated entities.

For a currency to become stable, it needs widespread usage and a substantial market cap. Despite Bitcoin having a significant market cap, it is unlikely to become stable due to most coins being held by a few corporations. Furthermore, it relies on ancient technology that is challenging to upgrade and faces issues like centralization with a few mining pools.

> Maybe in the future, we won't need stablecoins pegged to USD or gold. Funds could be transferred with improved decentralized governance using the native currency, and prices could be determined through more advanced decentralized algorithms, rather than [relying solely on demand and supply](https://iambrainstorming.wordpress.com/2022/12/19/what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply/) as attributes. This could bring stability to the native currency.

![](images/img-20201112-wa0002.jpg)

---


# making an effective parents teachers meeting in india comprehensive ideas to get started

1) **Parents Participation** : One of the major challenges that need to be overcome is the lesser engagement of parents. Do most parents attend parents teacher meeting? What are the reasons that a parent don't appear in the meeting (in private or govt. schools)? Reasons can be many such as lack of time, uninformed about the meeting because the invitation is not done properly or ignorance towards the education of their children as in the case of govt schools.  
So how can we deal with it?  
  
2) **Meeting Guidelines:** In order to make the meeting productive, there needs to be everyone participation. In a usual meeting, parents sit as a passive listener most of the time and  a bunch of teachers give oration about education. But, such situation should be discouraged in the meeting. The meeting is about discussing problems faced by students and even school and how it can be solved by the involvement of parents. So, **before we convene a meeting even, a lot of work has to be done** about specifics of questions that need to be talked in the meeting.  
  
So, here is a **rough example sketch** that can be done to confront these issues.  
  
The first step is **identifying the problem** faced by the kids which need to be discussed with their respective parents in the meeting. The problem can be particular to a student, or a common problem faced by students. If the case is first, sometimes it needs to be solved without making it public, so personalized parent meeting should be done. But if it's a common problem, it can be done in the public meeting.  
  
So, the question is **how** to identify the problem faced by kids? Its is the toughest job that needs to be done. One of the methods can be an **inquiry and in-depth observation** on a student.  
e.g.  
Let's analyze a statement  
"Student is doing badly in chemistry" This is a very generalized statement you will often hear/perceive from teachers when the student get failed in tests.  
But the statement lacks any specifics about the student inability to score marks.  
To find the specifics, the teacher needs to take help of inquiry and in-depth observation.  
  
So, let's make an example inquiry section to find specifics.  
  
Does the student understood the concepts of the topic? Again, how to know it. By asking some conceptual and simple questions about the topics to the students.  
  
So, what if he/she could answer the simple questions? If this is the case, then exam questions need to be analyzed like what questions were asked in the test and why he/she was unable to do it.  
  
What if he/she couldn't answer the simple questions?  
Again, a common perception among teacher is the student is **less intelligent or not working hard**. This is the conclusion reached by most teachers for not doing well in exams.  
  
"**Less intelligent**": a very generalized way of defining intelligence. The teacher needs to work on specifics. Is his/her memory less than other students? How to test it, whether his/her memory is less?If the case is memory shouldn't exam pattern be improved? In which way, he/she is less intelligent. Is he/she able to do calculations properly to reach the solution? Was his/her approach to the problems correct?  
  
Next perception, he/she is not working hard. Have you inquired properly to reach this conclusion? How do you know if the student is unwilling to tell you, or he/she is even unsure about it? Even if the conclusion is true, how to motivate them to study, so that it doesn't become a burden for them. Many students feel studying as punishment for them. Why do they feel so? How to make studying more entertaining to them?  
  
It was an example of studies, but there are many **other issues** that can be discussed with parents, such as school fees, child abuse, sexuality, bullying, environment and limitless issues.  
  
After teachers have identified the problems and thought of some kind of solution, then the meeting can be convened with parents to inquire them and discuss with them.  
  
List of questions or topics should be decided before the meeting which needs to be discussed.  
  
Technologies can also be used to **track and speed up** all these procedures.  
  
**What technologies can we use?**  
  
Making a **central** website to put questions in public/private and their solutions.  
  
Even if the parents are not willing to come they can either post their questions or suggestions on the website or give the question to their children, which can be uploaded to the website. This will make them participate virtually.  
Encouraging students to put their problems on the website, keeping their identity anonymous or hidden from the public. And making it obligatory for the student to put at least one problem/suggestion on the website.  
**Deciding the theme of the meeting which needs to be discussed** and posting it.  
Convene the meeting with parents through technologies like SMSing, email etc..  
Then again posting conclusions of the meeting after it is done. Also posting personal replies on the website about the solutions of the questions.

---


# medical entrance exams that effectively filter out 99 of aspiring candidates

Do we really require medical entrance exams that effectively filter out 99% of aspiring candidates? This question prompts us to delve into various aspects of medical education and the broader healthcare system. Let's explore these points in detail:

1) **Requirements for becoming a good doctor**: Becoming a proficient and compassionate physician demands not only academic prowess but also a range of qualities such as empathy, communication skills, and a deep understanding of human biology. While entrance exams can gauge academic competence to some extent, they may not effectively evaluate these essential attributes.

2) **Finite medicine and disease knowledge**: It's worth considering that the universe of medicines and diseases is finite. In fact, even a local medicine shopkeeper is familiar with a vast array of drug names and their respective applications. Couldn't they potentially become a doctor with the right medical education?

3) **Diagnostic reliance on technology**: Modern medicine heavily relies on technology for accurate diagnoses. Doctors employ various tools and machinery, such as blood tests and imaging devices, to determine a patient's condition. This reliance on technology means that a doctor's success is intrinsically tied to these diagnostic aids.

4) **Dependence on scientific literature**: Doctors cannot test the efficacy and mechanisms of medicines themselves; they must rely on scientific literature, clinical trials, and expert opinions. This underscores the importance of a strong foundation in medical research and the ability to critically evaluate and apply this knowledge.

5) **Role of technology and machine learning**: Technology, particularly machine learning, plays a significant role in healthcare. Algorithms can assist in medical predictions and diagnosis based on vast datasets. However, it's essential to be aware of the limitations and pitfalls associated with such technology, including data biases and ethical concerns.

6) **Critical thinking and pseudoscience**: In the era of evidence-based medicine, it is crucial for doctors to have strong critical thinking skills and the ability to distinguish scientific practices from pseudoscience. Questions may arise regarding the promotion of alternative medical systems like homeopathy or elements of AYUSH by governments, which can potentially undermine the scientific basis of healthcare.

7) **Governance in education and market dynamics**: How can we establish an effective governance system for managing medical institutes and develop a funding model that ensures efficiency, affordability of fees, and fairness for aspiring medical students?

8) **Diversity of curriculum and learning strategies**: A well-rounded medical curriculum that includes interdisciplinary learning and modular approaches can be more effective in preparing doctors to tackle the complexities of modern healthcare. The strategies used for medical education play a crucial role in shaping future physicians.

9) **Ethics in Medical education**: Ethics in medical education is the cornerstone of training future healthcare professionals. It includes principles like professionalism, integrity, informed consent, confidentiality, and cultural sensitivity. Students are taught to navigate ethical dilemmas, research with integrity, and handle conflicts of interest. They must be accountable and responsible, continuously reflect on their ethics, and adhere to institutional ethical codes. Ultimately, ethics in medical education shapes the character and behavior of healthcare professionals, ensuring they provide compassionate, patient-centered care throughout their careers.

## **Meritocracy farce: Merit or to exclude potentially talented students?**

The concept of meritocracy, particularly in the context of highly competitive entrance exams that filter out a significant percentage of aspirants, can often reveal a farcical nature within the education system. Here's an explanation of this issue:

1. **Excessive Filtering**: Meritocracy, in theory, is based on the idea that individuals should be rewarded and progress based on their merit and abilities. However, when entrance exams are so intensely competitive that they eliminate 99% of candidates, it raises questions about whether this process is truly identifying merit or merely serving as a filter that screens out a large pool of potentially talented individuals.

3. **Narrow Focus on Testing**: The farce becomes even more apparent when the education system primarily teaches to the test, meaning that students are predominantly prepared to excel in these entrance exams. This approach often prioritizes rote memorization and exam-specific strategies over holistic learning, critical thinking, and creativity. In such a scenario, students may excel at the exam but lack a broader understanding of the subject matter.

5. **Lack of Diversity**: The intense competition and narrow focus on testing can disproportionately favor students who have access to expensive coaching programs and resources, potentially leading to a lack of socioeconomic and cultural diversity among those who succeed in these exams. It may not necessarily reflect the true potential and capabilities of a more diverse group of aspirants.

7. **Stress and Mental Health Concerns**: The pressure to succeed in these exams can lead to severe stress and mental health issues among students. They often experience a relentless pursuit of high scores at the expense of their overall well-being, creating a farcical situation where the education system, which should promote holistic development, sometimes does the opposite.

9. **Overemphasis on Test Scores**: When society places an excessive emphasis on entrance exam scores as the primary measure of an individual's worth or potential, it can lead to a skewed perception of success. This can undermine other essential qualities like character, leadership, empathy, and creativity, which are equally important in various professions.

11. **Narrow Definition of Merit**: The farce is further evident in the limited definition of "merit." Success in highly competitive exams often assesses a specific type of intelligence and problem-solving ability. It may not adequately recognize other forms of merit, such as practical skills, innovation, and adaptability, which are critical in real-world scenarios.

---


# micromanagement

# Micromanagement

Micromanagement is a management style characterized by excessive control, close scrutiny, and involvement in the minute details of tasks and processes. Here are some attributes or characteristics commonly associated with micromanagement:

1. **Excessive Control**: Micromanagers tend to exert an excessive level of control over their employees' work. They often feel the need to be involved in every decision and aspect of a project, regardless of its significance.

2. **Close Supervision**: Micromanagers closely supervise their employees' work, frequently checking in on their progress and demanding frequent updates. They may require constant reports or status updates, leading to a sense of being constantly monitored.

3. **Lack of Trust**: Micromanagers often demonstrate a lack of trust in their employees' abilities to perform their tasks independently. They may believe that they are the only ones capable of ensuring quality and efficiency, leading to a reluctance to delegate tasks or responsibilities.

4. **Difficulty Delegating**: Micromanagers struggle to delegate tasks effectively. They may hoard responsibilities, fearing that others will not meet their standards or will make mistakes. This reluctance to delegate leads to an overwhelming workload for the micromanager and stunts the growth and development of their team members.

5. **Focus on Process Over Results**: Micromanagers tend to prioritize the process of completing tasks over the actual results. They may become overly fixated on minor details or procedural matters, losing sight of the bigger picture and overall objectives.

6. **Lack of Autonomy**: Employees working under a micromanager often feel a lack of autonomy and independence in their work. They may feel stifled or demotivated, as their creativity and problem-solving abilities are not being utilized or valued.

7. **High Turnover and Low Morale**: Micromanagement can lead to high employee turnover and low morale within a team or organization. Constant scrutiny and lack of trust can create a toxic work environment, resulting in decreased job satisfaction and productivity.

8. **Inefficiency**: Despite the micromanager's intentions to ensure quality and efficiency, micromanagement often has the opposite effect. Constant interruptions, second-guessing, and excessive revisions can slow down the pace of work and impede progress.

Overall, micromanagement is detrimental to both individuals and organizations, as it undermines trust, stifles creativity, and inhibits growth. Effective leaders recognize the importance of delegation, trust, and empowerment in fostering a positive and productive work environment.

---


# moonlighting in a remote work world

Moonlighting in the context of remote work refers to the practice of employees taking on additional employment or engaging in secondary work activities outside their primary job, often without the knowledge or approval of their primary employer. In a remote work setting, where individuals have more flexibility in managing their schedules and may not be physically monitored during working hours, moonlighting can be more challenging for employers to detect.

### **Why Moonlight? The Motivations Behind the Second Shift**

**Plan B:**  
In times of economic uncertainty, having a backup plan becomes crucial. Moonlighting often serves as a safety net for individuals insecure about their present jobs, especially in industries facing layoffs and understaffing.

**Multiple Sources of Income:**  
Financial advisors advocate for diversifying income streams. For some, a second job provides an additional source of revenue, complementing their primary income and contributing to overall financial stability.

**Paying off Debt:**  
Job losses during the pandemic have left many with financial burdens. Moonlighting becomes a means to pay off debts accrued during challenging times, whether it's a home loan, a laptop purchase, or other financial commitments.

**Change of Career:**  
Individuals contemplating a career change often engage in moonlighting to gain experience and skills in their desired field. It allows them to explore new opportunities without fully committing to a transition.

**Pursuing Passion:**  
Moonlighting isn't solely driven by financial motives. Some individuals take on a second job to pursue their passion projects, allowing them to explore creative outlets or engage in activities they love.

**Creativity Boost:**  
Mundane jobs can stifle creativity. Moonlighting provides a way for individuals to keep their minds engaged, overcome challenges, and tap into their creative sides, fostering innovation.

### **Impact on Mental Health**

The pressure of managing dual careers can take a toll on mental health. Burnout, stress, and anxiety may arise if individuals struggle to find a balance between their primary job and moonlighting activities. Employers need to be mindful of the well-being of their workforce, recognizing the challenges associated with moonlighting and offering support where needed.

### **The Controversy Surrounding Moonlighting in Remote Work**

Remote work has opened new possibilities for moonlighting, with some employees taking on additional roles or pursuing side hustles. However, it has also sparked debates, particularly in industries like tech, where companies have varying stances on employees working for competitors or engaging in secondary employment.

**Ethical Dilemma:**  
Moonlighting has sparked ethical debates, with some arguing that it amounts to "cheating," while others see it as a legitimate way for employees to monetize their skills and build financial stability.

**Conflict of Interest:**  
Companies often include exclusivity clauses in employment contracts, prohibiting employees from engaging in activities that may conflict with their primary job or compromise the company's interests.

**Nuanced Perspectives:**  
While some condemn moonlighting outright, others acknowledge the potential benefits, citing instances where successful companies originated as side hustles. Striking a balance and defining clear boundaries become critical.

### **Whom to blame: employees who moonlight or employers who are ineffective in assigning tasks in a remote environment?**

The question of blame in the context of moonlighting often involves a nuanced assessment of both employees and employers. Moonlighting can result from various factors, including economic uncertainties, personal aspirations, or the need for additional income. Employees may seek secondary employment as a response to challenges faced in their primary job, such as job insecurity or financial strain. On the other hand, employers bear responsibility for creating an environment that promotes effective task management, especially in remote work settings. If employers fail to provide clear expectations, proper task assignments, and adequate support, employees may feel compelled to seek alternative sources of income. Therefore, the blame cannot be solely attributed to one party; instead, it underscores the importance of a collaborative approach between employees and employers to foster a work environment that addresses challenges and supports mutual success.

### **Task Reporting: A Tool for Employers in Remote Work Environments**

Task reporting plays a pivotal role in addressing the challenges posed by moonlighting in remote work settings. Employers can leverage effective task reporting to:

**Ensure Visibility and Transparency:**  
Task reporting provides transparency into an employee's workload, reducing misunderstandings and allowing employers to assess time allocation effectively.

**Enhance Accountability:**  
Regular reporting fosters accountability, motivating employees to meet deadlines and fulfill their commitments to both primary and secondary roles.

**Facilitate Communication:**  
Reporting offers a structured communication channel for employees to discuss progress, challenges, and resource needs. Open dialogue helps prevent misunderstandings.

**Prioritize Tasks:**  
Employers can work with employees to prioritize tasks, helping them manage workloads across multiple commitments more effectively.

**Adapt to Changing Circumstances:**  
Task reporting allows for adaptability. If an employee is taking on additional commitments, employers can adjust priorities and redistribute tasks to maintain a balanced workload.

### **Conclusion: Striking the Right Balance**

Moonlighting, while presenting opportunities for financial gain and personal growth, comes with ethical considerations and challenges for employers. In the remote work landscape, effective task reporting emerges as a valuable tool to navigate and address these challenges. By fostering clear communication, transparency, and adaptability, employers can create a work environment that accommodates moonlighting while ensuring productivity and ethical standards are upheld. As the debate on moonlighting continues, finding a nuanced approach that aligns with the evolving nature of work remains key to striking the right balance.

_Sources:_

- \[Mint - Moonlighting: Why do people take up a second job anyway?\]([https://www.livemint.com/news/india/why-moonlighting-why-do-people-take-up-a-second-job-anyway-11661918379778.html](https://www.livemint.com/news/india/why-moonlighting-why-do-people-take-up-a-second-job-anyway-11661918379778.html))

- \[BBC - Moonlighting: The controversy among India’s tech workers\]([https://www.bbc.com/worklife/article/20221014-moonlighting-the-controversy-among-indias-tech-workers](https://www.bbc.com/worklife/article/20221014-moonlighting-the-controversy-among-indias-tech-workers))

---


# ncert books nothing more than short notes with giving too shallow knowledge

Comparative analysis of **Openstax** chemistry book and our **NCERT** chemistry book read by largest populated country  
  
Review of chapter **Atoms, Molecules and Ions** of Openstax and **Structure of Atom** in NCERT  
  
  
  
  

[![](images/9915d-mass_spectroscopy.jpg)](https://iambrainstorming.files.wordpress.com/2017/05/9915d-mass_spectroscopy.jpg)

  

Openstax starts the chapter with a picture mass spectral analysis. Mass spectrometry is a very important technique to study atomic properties. To make you more curious it talks about the diagnosis of diseases through analysis of molecules in an exhaled breath.  
  
  
But ncert book image is this:  
  
NO IMAGE  
  
**Let's come down to the introduction:**  
  
**NCERT Chemistry:**  
_The existence of atoms has been proposed since the time of early Indian and Greek philosophers (400 B.C.) who were of the view that atoms are the fundamental building blocks of matter. According to them, the continued subdivisions of matter would ultimately yield atoms which would not be further divisible. The word ‘atom’ has been derived from the Greek word ‘a-tomio’ which means ‘uncut-able’ or ‘non-divisible’. These earlier ideas were mere speculations and there was no way to test them experimentally. These ideas remained dormant for a very long time and were revived again by scientists in the nineteenth century._  
_The atomic theory of matter was first proposed on a firm scientific basis by John Dalton, a British school teacher in 1808. His theory, called Dalton’s atomic theory, regarded the atom as the ultimate particle of matter (Unit 1)._  
_In this unit we start with the experimental observations made by scientists towards the end of nineteenth and beginning of twentieth century. These established that atoms can be further divided into sub-atomic particles, i.e., electrons, protons and neutrons— a concept very different from that of Dalton. The major problems before the scientists at that time were:_  
_to account for the stability of atom after the discovery of sub-atomic particles,_  
_to compare the behaviour of one element from other in terms of both physical and chemical properties,to explain the formation of different kinds of molecules by the combination of different atoms and, to understand the origin and nature of the characteristics of electromagnetic radiation absorbed or emitted by atoms._  
  
**Openstax Chemistry:**  
_Your overall health and susceptibility to disease depends upon the complex interaction between your genetic makeup and environmental exposure, with the outcome difficult to predict. Early detection of biomarkers, substances that indicate an organism’s disease or physiological state, could allow diagnosis and treatment before a condition becomes serious or irreversible. Recent studies have shown that your exhaled breath can contain molecules that may be biomarkers for recent exposure to environmental contaminants or for pathological conditions ranging from asthma to lung cancer. Scientists are working to develop biomarker “fingerprints” that could be used to diagnose a specific disease based on the amounts and identities of certain molecules in a patient’s exhaled breath. An essential concept underlying this goal is that of a molecule’s identity, which is determined by the numbers and types of atoms it contains, and how they are bonded together. This chapter will describe some of the fundamental chemical principles_ _related to the composition of matter, including those central to the concept of molecular identity._  
  
  
So openstax chemistry talks about latest applications of molecular identity such as biomarker "fingerprints", its gives you an idea of what's going on in the cutting edge research. So your imagination is just on the fly that will let you probe into the latest research, thinking in the brink, and can make you even interested in doing further research. It gives you an exemplar,  why structure? Why structure is so important to us.  
  
Ncert book gives a disinterested, boring and average introduction that just presents information of past definition. It doesn't address probing and experimental limitations of why atom was thought to be indivisible at that time. Also is the data even fully correct.  
  
  
**This is an excerpt from Nivaldo J.Tro introduction:**  
  
_The answers have varied over time. On the scale of everyday objects, the matter appears continuous, or infinitely divisible. And until about 200 years ago, many scientists thought that matter was indeed continuous-- but they were proven wrong. If you were to divide the graphite from your pencil tip into smaller and smaller pieces (far smaller than the eye could see), you would eventually end up with individual carbon atoms. The word atom comes from the Gree atomos, meaning "indivisible". You cannot divide a carbon atom into smaller pieces and still have carbon. Atoms compose all ordinary matter- if you want to understand the matter, you must begin by understanding atoms._  
  
**But ncert book writes this:**   
_"The existence of atoms has been proposed since the time of early Indian and Greek philosophers (400 B.C.) who were of the view that atoms are the fundamental building blocks of matter. According to them, the continued subdivisions of matter would ultimately yield atoms which would not be further divisible."_   
  
Also, let's compare the texts of the same topic i.e. atoms un-divisible. Nivaldo Tro explains why atoms are indivisible because it will no longer stay as carbon in the given example. It also gives an example of real life, the graphite of pencil tip which we always find breaking, so you can just imagine it without effort as its so familiar to you.  
  
Here are the links to two books for downloading for further comparison. The shallowness of ncert books never goes throughout the book.  
[https://openstax.org/subjects/science](https://openstax.org/subjects/science)  
  
[http://epathshala.nic.in/e-pathshala-4/flipbook/](http://epathshala.nic.in/e-pathshala-4/flipbook/)  
  
Why question to everyone is:  **Does a country with nearly 41% of the population below the age of 20 (which our PM is proud of, talks about skill development) deserves such kind of books?**  
**I have already written that about 99.9% of our books are even below the standards of ncert books, one can imagine how grave the situation is.**  
**[https://iambrainstorming.ml/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/](https://iambrainstorming.ml/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/)**  
  
Openstax books are all open access for everyone, but our policy maker doesn't even adopt an open access book and they talk about quality.

---


# not all answers are dichotomous

![](https://iambrainstorming.files.wordpress.com/2019/12/subject-judgements.png?w=1024)

Payoff table for modified Schelling Game, for more subjective judgement, when decision can’t be made, and the jury can ask for further evidence.

Reference

Decentralised Jury: [https://kleros.io/assets/whitepaper.pdf](https://kleros.io/assets/whitepaper.pdf)

Or Something like this, that incentivizes participation even if the answer to the question is subjective.

![](https://iambrainstorming.files.wordpress.com/2019/12/subjective-judgements.png?w=1024)

---


# nothing in human makes sense except in the light of economics

"Nothing in Biology Makes Sense Except in the Light of Evolution" is a 1973 essay by the evolutionary biologist and Eastern Orthodox Christian Theodosius Dobzhansky, criticising anti-evolution creationism and espousing theistic evolution.

Through evolution, human behavior depends on incentives, and incentive structure is shaped by economics.

https://www.youtube.com/watch?v=actEhnPE4VM

https://www.youtube.com/watch?v=g9uUIUqhrSQ

Introduction to Incentives

> Even what you think depends on incentives, because good education depends on incentive structure.
> 
> [Public-private partnership schools & colleges and its implementation](https://iambrainstorming.blogspot.com/2017/06/public-private-partnership-schools-and.html)

Do economist think that everyone is self-interested all the time? Of course not. We love our spouses and children just like everyone else! But economists do think that people respond in predictable ways to incentives of all kinds. Fame, power, reputation, sex, and love are all important incentives. Economist even think that benevolence responds to incentives. It's not surprising to economist, for example, that charities publicize the names of their donors. Some people do give anonymously, but how many building on your campus are named Anonymous Hall? --- Modern Principles of Economics

Social networking sites all make use of incentive system, likes, retweet to incentivize the content.

> Incentives can make you do the right things, also the bad things.

> When we are conscious, making decisions, getting angry or fearful, these are just functions of the physical brain, nothing more.
> 
> \- On Free WILL

![](images/7fe0f-brain.jpg)

The Brain By NewScientist

https://youtu.be/se-sQy8t75E

No Free Will: How the idea impacts our thinking processes?

> Having the right incentives is key, but incentives are messy, many times can have unintended consequences, sometimes attempted solution to a problem can make the problem worse #CobraEffect

The people's world is run by the people's brains. Different people can behave differently to the same kinds of incentives. #WorldView #Education #KnowingTheRulesOfGame #MentalModels #InformationInBrain

https://youtu.be/3ez10ADR\_gM?t=455

Incentives

The invisible hand no more works with automation. People do respond to incentives in a predictable way, but they need not have to take advantage of each other's greed, they do can behave rationally and think about community before acting.

> We behave based on economic design, and we design based open our behaviour. #Catch22

> One can align self-interest with interests of common. Can we build such designs?

![](https://iambrainstorming.files.wordpress.com/2019/10/self_interest.png?w=825)

Invisible hands no longer works with automation

---


# occupation as teachers in india

Source: data.gov.in  
  
  
0        Andhra Pradesh  
1     Arunachal Pradesh  
2                 Assam  
3                 Bihar  
4          Chhattisgarh  
5                   Goa  
6               Gujarat  
7               Haryana  
8      Himachal Pradesh  
9     Jammu and Kashmir  
10            Jharkhand  
11            Karnataka  
12               Kerala  
13       Madhya Pradesh  
14          Maharashtra  
15              Manipur  
16            Meghalaya  
17              Mizoram  
18             Nagaland  
19               Odisha  
20               Punjab  
21            Rajasthan  
22               Sikkim  
23           Tamil Nadu  
24              Tripura  
25        Uttar Pradesh  
26          Uttarakhand  
27          West Bengal  
28    A. and N. Islands  
29           Chandigarh  
30     D. and N. Haveli  
31        Daman and Diu  
32                Delhi  
33          Lakshadweep  

  

[![](images/2c15d-teachers.png)](https://iambrainstorming.files.wordpress.com/2017/05/2c15d-teachers.png)

  
As per 2010-11 report total number of teachers: 6554246  
  
India Total population: 1,340,708,984  
  
% of teachers of total population: 0.49%  
  
41% of the population are below 20 years: 549690683  
  
If required teachers or trainer to student ratio is 1/50 = 0.02  
present teachers to student ratio is 6554246/549690683 = 0.011  
  
In countries like USA, 2% of total population are teachers.  
  
**Whats need to be done?**  
  

- Funding children instead of schools. (How policy should be so that it improves teachers, student ratio needs to be thought of?)
- Reward real world problem solving through projects instead of marks and clearing the entrances, the mindset of just marks should be completely removed.
- Weed out takers and create a culture of producing more givers

  
        [https://www.ted.com/talks/adam\_grant\_are\_you\_a\_giver\_or\_a\_taker](https://www.ted.com/talks/adam_grant_are_you_a_giver_or_a_taker)

---


# one sided economics

Economics can't be one-sided, where you have some 100 sellers and billions of buyers. One's income is others' spending. [#OneSidedEconomy](https://twitter.com/hashtag/OneSidedEconomy?src=hashtag_click)

https://youtu.be/PHe0bXAIuk0

How the Economic Machine Works by Ray Dalio

![](https://iambrainstorming.files.wordpress.com/2019/10/net-worth-number.1570462136863.png?w=730)

Snapshot of Inequality: [https://www.cnbc.com/2019/10/07/bloomberg-businessweek-wealth-number-ranking-shows-inequality.html?sf110844641=1](https://www.cnbc.com/2019/10/07/bloomberg-businessweek-wealth-number-ranking-shows-inequality.html?sf110844641=1)

---


# open list proportional representation vs mixed member proportional representation

# Open-list proportional representation vs. Mixed-member proportional representation
# date: "2023-09-21"
---
categories: 
  - "democracy"
  - "electoral-reform"
  - "politics"
tags: 
  - "fair-democracry"
  - "proportional-representation"
---

This blog is a continuation of the discussion about proportional representation. You can find the main blog here in the link.
[Do we need a supreme leader? How can we share power between parties?](./do-we-need-a-supreme-leader-how-can-we-share-power-between-parties.md)

## **Open list PR is about voter choice in selecting individual candidates:**

Open list proportional representation is an electoral system used in many countries to elect members to a legislative body. It combines the principles of proportional representation with a degree of voter choice in selecting individual candidates. In an open list PR system, voters typically cast a vote for a political party and can also express a preference for specific candidates within that party's list. Here's how it works:

1. **Voting Process:**

- **Party Vote:** Voters cast their first vote for a political party of their choice. This is known as the "party vote" or "list vote." It determines the overall proportion of seats each political party will receive in the legislature.

- **Candidate Preference:** In addition to the party vote, voters have the option to express a preference for one or more individual candidates from the party they selected. This preference can be indicated by ranking the candidates or marking them with an "X" or a similar symbol.

1. **Seat Allocation:**

- Based on the total number of party votes each political party receives, seats in the legislature are allocated to parties in proportion to their share of the vote, using a mathematical formula such as the Sainte-Laguë method or the D'Hondt method.

- Each party's list of candidates is ordered based on a predetermined ranking established by the party or determined through internal party primaries.

- Seats are initially awarded to the candidates at the top of each party's list, in proportion to the party's share of the vote.

1. **Candidate Selection:**

- Candidates who receive a high number of individual preferences from voters are more likely to move up the party's list and secure seats in the legislature.

- In some open list systems, candidates are elected in the order of the preference votes they receive. The candidates with the most individual preferences are elected first, followed by those with fewer preferences until all the party's allocated seats are filled.

1. **Proportionality:** Open list PR aims to maintain proportionality between the party's overall vote share and the distribution of seats among its candidates. This means that if a party receives, for example, 30% of the vote, approximately 30% of the seats it wins should go to the candidates who received the most preference votes.

3. **Flexibility and Voter Choice:**

- Open list PR systems offer voters more flexibility and choice compared to closed list PR systems. Voters can influence the order in which candidates from the same party are elected.

- Voters may choose candidates based on personal attributes, local connections, or specific policy positions.

Open list proportional representation systems provide a balance between party representation and individual candidate representation. They aim to combine the benefits of proportional representation, which ensures that parties are represented in proportion to their popular vote, with the ability for voters to have a say in the selection of individual representatives within parties. This system is used in countries such as Sweden, Finland, and Norway.

## **Mixed Member Proportional (MMP) is a system that retains the constituency element:**

Mixed Member Proportional (MMP) representation is an electoral system used in some countries to elect their legislatures, such as Germany, New Zealand, and parts of Scotland. MMP combines elements of both proportional representation and first-past-the-post systems to achieve a more balanced and representative outcome.

Here's how it works:

1. **Two Types of Representatives**: In MMP, voters cast two votes: one for a candidate in their local constituency (similar to first-past-the-post) and one for a political party.

2. **Constituency Seats**: The local constituency vote determines a portion of the seats in the legislature. Candidates who win the most votes in their respective constituencies become Members of Parliament (MPs).

3. **Proportional Representation**: The party vote determines the overall proportional makeup of the legislature. Parties receive seats in proportion to the percentage of the party vote they receive nationwide. This helps ensure that the overall composition of the legislature reflects the popular vote.

4. **Compensation Seat**: To balance the results, additional seats are allocated to parties based on their share of the party vote. These are known as "compensation seats" and are filled from party lists. The goal is to make the total number of seats each party holds closely match its proportion of the vote.

5. **Overall Composition**: The final composition of the legislature is a combination of local constituency winners and proportional seats from party lists. This ensures that both individual representation and overall proportionality are considered.

MMP aims to strike a balance between geographic representation (via local MPs) and proportional representation (to reflect the popular vote more accurately). It encourages multi-party systems, as smaller parties have a better chance of winning proportional seats, leading to a more diverse and representative legislature.

However, it can be complex for voters to understand and may lead to coalition governments since it often results in a multi-party system where no single party has an outright majority. This requires parties to work together to form governing coalitions, which can sometimes be challenging.

**Example Scenario: New Zealand's MMP System**

In New Zealand, the MMP system has been in use since 1996. Let's say there's an election with the following details:

1. **Total Seats in Parliament:** 120 seats

3. **Constituency Seats:** There are 70 local constituencies across the country, each electing one MP through a first-past-the-post system. These are known as "electorate seats."

5. **Party List Seats:** The remaining 50 seats are filled based on the party vote, which is a vote for political parties rather than individual candidates. Parties create ranked lists of candidates, and these seats are allocated to parties based on the proportion of the party vote they receive.

7. **Party A:** Let's say Party A receives 40% of the party vote. In this case, they would be entitled to approximately 40% of the 50 party list seats, which is 20 seats. Party A's total representation in Parliament would then be the 20 party list seats plus any constituency seats they won.

9. **Party B:** Party B, with 30% of the party vote, gets around 15 party list seats.

11. **Party C:** Party C receives 20% of the party vote, which corresponds to 10 party list seats.

13. **Party D:** Party D secures 10% of the party vote, resulting in about 5 party list seats.

15. **Constituency Winners:** In the local constituencies, the party that wins the most votes in each of the 70 constituencies gets one seat per constituency, regardless of their party vote share.

Now, let's see how this plays out:

- Party A wins 30 constituency seats, and Party B wins 25. So, Party A and Party B each have their constituency seats plus the proportional seats they earned.

- Party A ends up with a total of 50 seats (30 constituency seats + 20 party list seats).

- Party B ends up with a total of 40 seats (25 constituency seats + 15 party list seats).

- Party C, with 10 party list seats and no constituency seats, has a total of 10 seats.

- Party D, with 5 party list seats and no constituency seats, has a total of 5 seats.

This proportional representation system ensures that the overall composition of Parliament roughly reflects the percentage of the party vote each party received. It encourages a multi-party system and provides a more balanced representation of the electorate's preferences compared to a purely first-past-the-post system.

Please note that the numbers in this example are simplified for illustration purposes and may not precisely match New Zealand's actual election results.

> While some countries use FPTP in mixed member proportional systems to select a single winner in a constituency, one can employ Approval voting as a more optimal voting method to mitigate vote splitting and [tactical voting](https://en.wikipedia.org/wiki/Strategic_voting). One can also use proportional representation (number of votes = amount of power) to select multiple winners in a constituency, to make more decentralized decision making.

## **Closed-List Proportional Representation**

In a closed-list proportional representation system, voters cast their votes for a political party, and seats are allocated to parties based on the proportion of the overall vote they receive. The order of candidates on the party's list determines who gets elected. Voters typically do not have the option to choose individual candidates; rather, they are essentially endorsing the party's list.

Now, let's address the concerns you mentioned about the closed-list method:

**Lack of Individual Candidate Choice:**

In a closed-list system, voters may not have the ability to express preferences for specific candidates. Some argue that this reduces the direct influence of voters on the selection of representatives.

**Increase in Partisanship:**

Closed-list systems may be criticized for promoting party loyalty over individual candidate qualities. This could potentially lead to a more partisan political landscape, as representatives are primarily accountable to the party leadership rather than the voters.

**Rise of Far-Right Parties**:

As partisanship escalates, far-right parties can ascend to prominence by strategically employing propaganda, disseminating disinformation, and skillfully appealing to sentiments.

---


# organic and inorganic chemistry of chemistry book in india all about rote learning

Organic and Inorganic chemistry of Chemistry book in India: **All about rote learning**  
  
Most part of organic chemistry is all about remembering names and steps of reactions. It promotes VERY LITTLE comprehension of mechanisms and working of the reactions.  
  
Are these questions? Ridiculous  

[![](https://iambrainstorming.files.wordpress.com/2016/10/accd5-organic_chemistry.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2016/10/accd5-organic_chemistry.jpg)

  
  
Please do compare the **content** and **questions** with international books such as **Chemistry: A Molecular Approach of Nivaldo J. Tro** for Inorganic and Organic part, and also **Organic Chemistry as a Second Language by David Klein**  
  
In organic and inorganic class, the teacher usually teaches the blackboard, not the students, because the content of the book is just about steps of reactions and alien names with no understanding.  
  
Please **design the syllabus and book** accordingly that makes organic and inorganic chemistry **interesting**, **increases curiosity** and promotes **comprehension and inquiry**.  
  
e.g. Do students know why carbon makes life, not silicon even if both can form 4 bonds?

---


# parliamentary or presidential form of government whats in the name

# Parliamentary or Presidential form of government? What's in the name?
## date: "2023-09-28"
---
categories: 
  - "democracy"
  - "politics"
---

Both forms of government are dedicated to upholding democracy and ensuring the separation of power among the executive, legislative, and judicial branches. They also aim to establish checks and balances within the system.

Warning: The blog can become a bit longer, but I will highlight key takeaway points.

Today, we will compare two countries: the USA, which is considered to have a presidential system of government, and India, which is known for its parliamentary form of government. We will discuss countries like the UK with a parliamentary system on another day.

Both of the countries select their head, in India, the head of the country is called the Prime Minister, whereas in the USA, they are called the President

**This is how President of USA are selected:**

The President of the United States is selected through a multi-step process that includes both primary elections and a general election. Here's an overview of how the President of the USA is selected:

1. **Primaries and Caucuses**: Before the general election, political parties (primarily the Democratic and Republican parties) hold a series of primary elections and caucuses in each state. During these events, registered party members vote for their preferred presidential candidate. The outcomes of these primaries and caucuses determine the number of delegates each candidate receives.

3. **National Conventions**: Each political party holds a national convention, usually in the summer before the general election. Delegates from the primaries and caucuses attend these conventions, where they officially nominate their party's candidate for President. The candidate typically selects a vice-presidential running mate during or before the convention.

5. **General Election**: The general election occurs on the first Tuesday in November of every fourth year. Registered voters across the United States cast their ballots for their preferred presidential candidate. However, voters technically vote for a slate of electors chosen by their party, known as the Electoral College.

7. **Electoral College**: In the Electoral College system, each state has a certain number of electors based on its representation in Congress (Senators and House of Representatives). Most states use a winner-takes-all approach, where the candidate who wins the popular vote in a state receives all of its electoral votes.

9. **Electoral Vote Count**: In December following the election, the electors in each state gather in their respective state capitals and cast their votes for President and Vice President. The results are then sent to the President of the Senate (the Vice President of the United States).

11. **Congressional Certification**: Congress meets in early January to count and certify the electoral votes. If a candidate receives a majority of electoral votes (at least 270 out of 538), they are declared the President-elect.

13. **Inauguration**: The President-elect is officially inaugurated and takes the oath of office on January 20th of the following year, marking the beginning of their four-year term in office.

It's important to note that the process may vary slightly between states due to differences in election laws and practices. The winner of the popular vote in each state typically receives all of that state's electoral votes, except in Maine and Nebraska, which allocate their electoral votes based on congressional district results.

> President and vice president of USA are not elected directly by citizens. Instead, they are chosen by "electors" through a process called the Electoral College. Each state’s political parties choose their own slate of potential electors. Who is chosen to be an elector, how, and when varies by state.
> 
> [https://www.usa.gov/electoral-college](https://www.usa.gov/electoral-college)

> The size of the electoral college in the United States is 538 electors. Each state has a number of electors equal to the total of its Senators (always two) plus the number of its Representatives in the House of Representatives (which can vary based on a state's population).

**How Prime Minster of India is selected?**

The Prime Minister of India is selected through a process that involves several key steps, primarily within the parliamentary system of India. Here's how the Prime Minister of India is typically selected:

**General Elections:**

- The process begins with the general elections held in India, which determine the composition of the Lok Sabha, the lower house of India's Parliament. Lok Sabha members are directly elected by eligible voters from their respective constituencies.

**Formation of a Political Party or Coalition:**

- Before the general elections, political parties or alliances are formed, and each party or alliance fields candidates to contest the elections. These candidates compete for the 545 elected seats in the Lok Sabha.

**Winning Majority or Coalition Support:**

- After the general elections, the political party or alliance that wins an absolute majority of seats in the Lok Sabha (i.e., more than half of the total seats) is typically invited by the President of India to form the government.

- If no single party secures an absolute majority, a coalition government may be formed with the support of other parties or independent members to achieve a majority.

**Selection of the Prime Minister:**

- The leader of the political party or alliance that has secured the majority of seats in the Lok Sabha is usually invited by the President to become the Prime Minister.

- The Prime Minister is typically the leader of the majority party or coalition, and this leader is expected to command the confidence of the Lok Sabha members.

**Oath of Office:**

- Once invited, the selected leader becomes the Prime Minister and is sworn in at an official ceremony. The oath of office and secrecy is administered by the President of India.

**Functioning as Prime Minister:**

- As Prime Minister, the individual assumes the role of the head of government and is responsible for forming the Council of Ministers, which includes various ministries and cabinet positions.

- The Prime Minister plays a central role in the formulation and implementation of government policies, decision-making, and representing India domestically and internationally.

It's important to note that the selection of the Prime Minister is based on the political party or coalition that commands a majority in the Lok Sabha. The President of India has a largely ceremonial role in this process and is constitutionally bound to invite the leader of the majority party or alliance to form the government. The Prime Minister's tenure is not fixed but depends on the support and confidence of the majority in the Lok Sabha.

In summary, the Prime Minister of India is selected based on the outcome of general elections, party politics, and parliamentary support, making the position highly dependent on the democratic process and the will of the electorate.

> So, basically, the Prime Minister is selected by the party or coalition that wins an absolute majority (i.e., more than half of the total seats of Lok Sabha).

> The appointment of the President in the USA and the appointment of the Prime Minister in India are basically similar. Both processes depend on an absolute majority. In the USA, it relies on 538 electors, whereas in India, it depends on 543 Lok Sabha members. While voting takes place in the USA, in India, it is done through discussions among winning party members.

**Legislative bodies of USA:**

In the United States, "Congress" refers to the legislative branch of the federal government, which is responsible for making and passing federal laws. Congress is a bicameral legislature, meaning it has two separate chambers:

1. **The House of Representatives:** The House of Representatives, often referred to simply as "the House," is one of the two chambers of Congress. It is the lower house of Congress and is made up of members known as "Representatives" or "Congresspeople." The number of Representatives in the House is determined by the population of each state, with each state having at least one Representative. Representatives are elected by the residents of their respective congressional districts for two-year terms. The primary responsibilities of the House include initiating revenue-related bills and representing the interests of the people in their districts.

3. **The Senate:** The Senate is the upper house of Congress. Each state, regardless of its population, is represented by two Senators. Senators are elected by the residents of their respective states for six-year terms, with staggered elections ensuring that approximately one-third of the Senate seats are up for election every two years. The Senate has several unique powers, including providing "advice and consent" for presidential appointments (such as federal judges and cabinet members) and ratifying international treaties.

**Key Functions of Congress:**

- **Lawmaking:** Congress is responsible for drafting, debating, amending, and passing federal laws. Proposed legislation, known as bills, can originate in either the House or the Senate. For a bill to become law, it must pass both chambers in identical form and be signed by the President.

- **Representation:** Members of Congress represent the interests and concerns of their constituents, whether they are residents of specific congressional districts (House members) or entire states (Senators).

- **Oversight:** Congress has the authority to oversee and investigate the activities of the executive branch of government, ensuring that federal agencies and officials are acting in accordance with the law.

- **Impeachment:** The House of Representatives has the power to impeach federal officials, including the President, while the Senate holds impeachment trials and can remove officials from office upon conviction.

- **Budget and Appropriations:** Congress is responsible for approving the federal budget, including allocating funds for various government programs and agencies.

- **Ratifying Treaties and Confirming Appointments:** The Senate plays a critical role in ratifying international treaties negotiated by the President and confirming presidential appointments to key positions in the federal government.

Overall, Congress serves as a vital component of the system of checks and balances in the U.S. government, ensuring that no single branch of government accumulates excessive power. It plays a central role in shaping the nation's laws and policies.

**Similarly, in India we have Lok Sabha the lower house, and Rajya Sabha the upper house.**

**Now, let's delve into the executive bodies and how they differ between the two countries:**

The executive branch of the United States is called the "Executive Branch of the U.S. Government" or simply the "U.S. Executive Branch." The head of the executive branch is the President of the United States. Members of the executive branch are selected through various methods, and the key positions within the branch are appointed by the President with the approval, in some cases, of the U.S. Senate. Here's an overview:

**President of the United States**:

- **Selection:** The President is elected through a nationwide election known as the "Presidential Election."

- **Term:** The President serves a four-year term and can be reelected for one additional term.

- **Eligibility:** To run for President, a candidate must be a natural-born U.S. citizen, at least 35 years old, and have been a resident of the United States for at least 14 years.

**Vice President**:

- **Selection:** The Vice President is also elected through the Presidential Election, but they run as the President's running mate.

- **Role:** The Vice President's primary role is to succeed the President in case of the President's death, resignation, or inability to carry out their duties. The Vice President also serves as the President of the Senate and has ceremonial and advisory duties.

**Cabinet Members**:

- **Selection:** Cabinet members are appointed by the President and are subject to Senate confirmation (approval).

- **Roles:** The Cabinet includes heads of executive departments such as the Secretary of State, Secretary of Defense, Secretary of the Treasury, and others. Each Cabinet member is responsible for overseeing a specific area of government policy and administration.

**Federal Agencies and Bureaucracy**:

- **Selection:** The heads of various federal agencies and departments are appointed by the President and confirmed by the Senate.

- **Role:** These officials manage the day-to-day operations of the federal government and implement the policies set by the President.

**Federal Judges and Justices**:

- **Selection:** Federal judges, including Supreme Court Justices, are nominated by the President and must be confirmed by the Senate.

- **Role:** Federal judges preside over federal courts and interpret and apply federal laws, including the U.S. Constitution.

**Independent Agencies and Commissions**:

- **Selection:** Some agencies and commissions are led by individuals who are appointed by the President and confirmed by the Senate.

- **Role:** These entities have specific areas of focus, such as the Federal Reserve, the Federal Communications Commission (FCC), and the Securities and Exchange Commission (SEC).

Overall, the U.S. Executive Branch is responsible for implementing and enforcing federal laws, managing the government, conducting foreign affairs, and overseeing various aspects of national policy. The President, as the head of this branch, plays a central role in shaping the direction of the executive branch's activities and policies.

The Executive Branch

[https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/](https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/)

**But how executive bodies in India works and how cabinet ministries of India is selected?**

In India, ministries are selected through a process that involves the appointment of ministers by the President of India on the recommendation of the Prime Minister. Here's an overview of how ministries are selected in India:

**General Election:**

- Ministries in India are formed after a general election to the Lok Sabha (the lower house of India's Parliament) or following the formation of a coalition government if no single party has an absolute majority.

**Selection of the Prime Minister:**

- After the election results are known, the leader of the political party or coalition that secures a majority of seats in the Lok Sabha is invited by the President to become the Prime Minister.

- The Prime Minister is usually the leader of the political party with the largest number of seats in the Lok Sabha.

**Appointment of Cabinet Ministers:**

- The Prime Minister, once appointed, selects individuals to serve as ministers in the Council of Ministers, which includes various ministries.

- The selection of ministers is made by the Prime Minister based on various factors, including party loyalty, competence, seniority, and regional representation.

- The Prime Minister may consult with senior party leaders and take into account the political dynamics and alliances within the ruling coalition.

**Allocation of Portfolios:**

- After selecting the ministers, the Prime Minister allocates specific portfolios or ministries to each minister. These portfolios determine the area of government policy and administration that each minister is responsible for.

- The allocation of portfolios is typically based on the qualifications, expertise, and interests of the ministers, as well as the priorities of the government.

**Swearing-In Ceremony:**

- The selected ministers are formally sworn in at a ceremony held at the Rashtrapati Bhavan (the official residence of the President of India) in the presence of the President and other dignitaries.

- The oath of office and secrecy is administered to each minister, and they officially assume their roles.

**Functioning of Ministries:**

- Once in office, each minister is responsible for overseeing and managing their respective ministry's activities, policies, and programs.

- Ministries play a crucial role in formulating and implementing government policies, as well as delivering public services in their respective areas of responsibility.

It's important to note that the Council of Ministers includes various types of ministers, such as Cabinet Ministers (senior ministers), Ministers of State (with or without independent charge), and Deputy Ministers. The specific responsibilities and hierarchy within the Council of Ministers can vary.

Additionally, the composition of ministries may change over time due to reshuffles, resignations, or other political developments, with the Prime Minister having the authority to make changes as needed to effectively govern the country.

> Here is the big difference in the selection of cabinet ministers in the USA compared to India. In India, cabinet ministers are selected by the Prime Minister, whereas in the USA, although they are selected by the President, it requires Senate approval (in the upper house) through a voting process. A majority vote of the Senate committee is required.

The confirmation of Cabinet members in the executive branch of the United States is done through a process involving the Senate. Here's how it works:

**Nomination by the President:**

- The President of the United States nominates individuals to serve in various Cabinet positions, such as the Secretary of State, Secretary of Defense, Secretary of the Treasury, and others. These nominees are typically selected based on their qualifications and alignment with the President's policy goals.

**Senate Committee Hearings:**

- After the President makes nominations, the Senate holds confirmation hearings for each nominee. These hearings are conducted by Senate committees responsible for the respective Cabinet positions. For example, the Senate Foreign Relations Committee conducts hearings for the Secretary of State nominee.

- During these hearings, nominees are questioned by senators about their qualifications, views, and potential conflicts of interest. Senators may also seek assurances about how nominees plan to fulfill their duties.

**Senate Committee Vote:**

- Following the confirmation hearings, the Senate committees vote on whether to recommend the nominee's confirmation to the full Senate. A majority vote in favor is required for the nominee to move forward in the process.

**Full Senate Confirmation:**

- The nominee's confirmation is then considered by the full U.S. Senate. Senators debate the nomination on the Senate floor, and a final confirmation vote is held.

- A simple majority vote in the Senate is required for the nominee to be confirmed. If a majority of senators vote in favor of confirmation, the nominee is officially confirmed to the Cabinet position.

**Oath of Office:**

- Once confirmed by the Senate, the nominee takes the oath of office and officially assumes their role as a member of the President's Cabinet.

The confirmation process serves as a critical check and balance in the U.S. government. It allows the Senate, which represents the states and their interests, to exercise oversight over the President's executive branch appointments. It also ensures that Cabinet members are qualified and capable of fulfilling their roles effectively.

Confirmation hearings can be high-profile events, particularly when nominees face questions and scrutiny from senators and the public. While the process is designed to be thorough, it is ultimately a political one, with the President's party typically having a significant influence over the outcome of confirmations.

> In the United States, the executive branch is typically considered more independent than in India, primarily because it requires a broader consensus from the upper house. In contrast, in India, the Prime Minister has the authority to appoint ministers at their discretion, which can lead to a potential conflict of interest. For example, ministers may serve as mere marketing agents for the Prime Minister, aiming to enhance the Prime Minister's image. It's worth noting that, even though laws are meant to be the same for everyone, there can be discrimination in their execution by ministers based on their interests. One example of this can be selective enforcement of corruption laws, with a bias towards opposition parties, while members of their own party may go unpunished for similar violations.
> 
> **To Do!**

The USA has a two-party system. Is it because the USA has a presidential form of government?

How bill is passed in two countries?

No confidence motion versus impeachment.

Two-third majority vs Simple Majority

Power and independence of states and state assembly

How independent is judiciary in both the countries, and how judges are appointed?

---


# patterns for bad practices of teaching

1) **Teaching whiteboard not students**  
Students work is only to nod head to say yes most of the time even if they understood nothing, disagreement is remarkably uncommon. Teachers don't inquire about student comprehension. Some teachers do inquire but by asking a dichotomous answer of yes or no.  
But to know the comprehension level, one has to test it by asking questions to students or asking them to explain the concept.  
2) **Not answering means insult**  
If students don't give the right answer, they are insulted in front of the whole class. Students are completely responsible for not knowing the answer. "Kya tum gharme padthe nahi ho" (Don't you study at home?). So everything you have to study at home. School is not a place for learning.  
3) **Personal attack when you ask too much question**  
Again students are insulted if they ask too many questions.  
4) **Target only to finish the syllabus**  
The syllabus is paramount, not students. Why are teachers going so fast that students are unable to grasp? Answer: I have to complete the syllabus.  
5) **No repetition**  
Teachers don't repeat so that students can write down the definition. It takes time to grasp decode and understand the complicated definition. Also, it takes time to remember new technical or scientific terms.  
6) **Not explaining each term**  
Teaching is unsystematic, not based on building new concepts with what already students know. Teachers don't explain each term.  
7) **Ambiguous definition**  
Teachers give the ambiguous definition of terminology, many a times definition is manipulated and is created by themselves to meet the specific context. But when you dig deeper, you can find so many flaws in the definition.  
8) **Unrelated examples or analogy**  
Examples given are completely unrelated, no much relevance to the real concept.  
9) **Least student participation**  
No elaboration interrogation, or no retrieval practice.  
10) **No component-based learning**  
**[https://iambrainstorming.wordpress.com/2017/10/26/practicing-one-component-in-one-time-to-learn-the-whole/](https://iambrainstorming.wordpress.com/2017/10/26/practicing-one-component-in-one-time-to-learn-the-whole/)**   
11**) Unproductive teaching**  
40 classes are equivalent to 4 or 5 clever classes. No discussion of big ideas, no practice.  
12) **Not using correct tools**  
Some teachers use a short, non-elaborative powerpoint presentation, without giving much time to put it into the workbook, or even read it.

Not using the computer while teaching programming, instead, notebooks and blackboard are used to explain programming.    
13) **Not saying don't know when you don't know**  
If students ask a question which teacher don't know or have forgotten, instead of saying don't know, they try to cover up with wrong answers. If they are unsure about something, they should say that they are unsure and say that they will check back and say later instead of giving the wrong answer. Also should correct the wrong answer in next class if they made a mistake due to their misconception

> Explaining simply is not that simple, it's more subtle, but still a useful statement.

![](images/3ccfb-explain.jpg)

https://www.youtube.com/watch?v=MlJdMr3O5J4

---


# personalized learning goals new information is built over reusing of previous information

\[youtube=https://www.youtube.com/watch?v=asg\_avW9nK4&w=320&h=266\]

**Some students perform better, while others not. What are the main reasons?**  
  
1) **Study material provided and learning strategies used by teachers.** **[It simply doesn't meet the learning criteria.](http://technoperiod.blogspot.in/2017/01/all-books-that-dont-meet-learning.html)**  
[https://github.com/amiyatulu/teacher\_resources](https://github.com/amiyatulu/teacher_resources)  
Students are feed with so much of abstract stuff as a result only those students excel who have a better memory retention capacity of abstract information and those who work too hard for it. But such a hard work is meaningless, as you will forget such information after exams are over.  
  
2) **Not teaching kids from where they are.**   
I will explain it with a concrete example.  
  
While teaching chemistry, one of my students was so fast in holding information and doing the problems, while other was slow. The reason for her/his slowness is **not** that he/she is less intelligent, it's because (s)he is **taking more time for processing due to lack of previous foundational information.**   
  
When (s)he does the processing, (s)he **has to take the account of many kinds of stuff that (s)he has not learned before.** For example, while teaching chemical kinetics I found out that (s)he doesn't know even the BDMAS operation of maths. Chemical kinetics chapter is math heavy, but I tried to explain everything with concrete representation, but still, students were **unable** to do the problems or **reach the solution accurately** because it requires so much practice of math fundamentals before doing those problems. But the good thing is that they have understood everything that I taught.  
  
From this, **I learned that you can explain stuff catching anyone from the street if you are explaining it in the simplest way possible, so that (s)he can understand it.**  
  
Similarly, while teaching redox reactions, one of my students was too slow, because (s)he doesn't know about periodic table much. What are the electronegative elements? Also (s)he was making the error in calculation while solving for x. Changing values from LHS to RHS or vice versa problem that most students face while solving an equation.  
  
So the fast student needn't have to spend so much time in doing because her/his brain is already trained for the fundamental stuff that is required. So (s)he requires less processing to reach the solution.  
  
So the message is "**_New information is built over reusing of previous information_**"  For example, **one has to know the alphabets to write words, words and grammar rules to write sentences**.  
  
  
  
**Why personalized education?**  
There are no one-size-fits for all. All learn at a different pace as they have different levels of background and prior information and different experiences, different choices, different personalities and different strengths and weaknesses.  
  
  
**Why learning pace differ?**  
There are many reasons for it, especially the prior knowledge of the subjects, and learning habits. Some are bookworms spend more time on studies, while others are more sportive and entertainment seeker. There is a lot of impact of having a prior knowledge such as good vocabularies, overlearning of basic mathematical skills which free down the working memory so that there working memory is used in building strategies to solve mathematical problems with full capacity, the preceding familiarity with the subject taught. Learning habits include using or not using effective evidence-based learning strategies.  
  
**The problem with different learning pace.**  
In the present system, most schools teach the same curriculum without giving any freedom to the learning pace of students. As a result of which students are unable to cope with the curriculum, and the result is all-or-none i.e. those who are unable to cope with the speed of curriculum, fall behind because less learning/understanding leads to further less learning of later topics, and **this process is compounded** every time.  
  

[![](images/87c90-personalize2btemplate.png)![](images/6a3be-solutionnotproblem.jpg)![](images/3b351-measure_success.jpg)![](images/3d05c-goals.jpg)![](images/8863d-postpretest.png)![](images/8863d-postpretest.png)](https://iambrainstorming.files.wordpress.com/2017/02/0102e-i2bwill2blearn.png)

  

  

Question design is important, and it should be more personalized. If a student doesn't perform well in some topics of the exam, such topics should be noted down and intervention needs to be taken, then again a posttest with questions based on the performance of pretest.

  

These tests should be of **low stakes**.

Questions design should meet the learning strategies, not random questions only to test students.

**Each unit should undergo this chain, till the learning goals are reached.**

  

[How experimental manipulation needs to be done?](http://technoperiod.blogspot.in/2017/05/experimental-manipulation-after-tests.html)

  

Some of the more questions are 

**What time interval these tests need to be taken?** That depends on the study material, and students learning time and should be done carefully by the teacher by proper observation.

**But it increases too much workload for teachers?**

Most work will be designing questions and checking of answer scripts. But this workload can be decreased by the use of technology.

  

Most often the study material/books have questions, so they can manipulate values and give it again, or giving only a few questions (not all questions in the material) for each topic in each test, or using questions from many books 

  

Probiquery: A single page application to share questions with students  
Source Code (in github):  
[https://github.com/amiyatulu/pobiquery](https://github.com/amiyatulu/pobiquery)  
Demo:  
[https://rebrand.ly/demo\_probiquery](https://rebrand.ly/demo_probiquery)

  

**Discovering Merit**

  

The purpose of education is the progress of students, but when we look at the industry they require the scaling that help them to discover merit.

  

Here, the need for comparison between students is required. In education comparison between students, not necessarily mean competition. The comparison helps us to construct a critical nature in us, that helps us to progress. The purpose of comparison is to discover what is effective and what is ineffective or less effective.

  

We need an effective methodology that helps students to track their progress, also scaling system that helps the industry to appoint candidate based on merit.

  

Summative assessment should be microscopic instead of macroscopic.

It encourages growth mindset and mastery of subjects.

  

The summative assessment or exam should meet the following specification:

  

1) Each unit should be given time for at least half hour to solve the questions. In a single day, 6 units need to be covered, instead of all units.

2) Questions from each concept or learning objective should be present for each unit.

  

[![](images/5c4c2-collaboration.png)![](images/7e316-screenshot2bfrom2b2017-08-262b21-41-46.png)![](images/7e316-screenshot2bfrom2b2017-08-262b21-41-46.png)](https://iambrainstorming.files.wordpress.com/2017/02/daf85-screenshot2bfrom2b2017-08-272b13-02-33.png)

  

  

**How to implement project-based learning?**

A website for submission of links to blogs where ideas and procedure of projects are written. They should share few photographs and/or videos about the projects that were done, along with the caption that explains the photograph. Also, use social networking sites like tweeter to share the links

Students record of the projects must be uploaded to a website, which will undergo plagiarism checker and review. Then provide feedback to the students and schools to improve on it.

The website should also act as an interface for sharing ideas, feedback and criticism between different schools and colleges so that everyone refines and improves their projects

  

  

All these different kinds of websites should only act as a feedback system to share and improve ideas, and can be used to narrate statistical information, but should not be used for any lawful step against/ in for of students, schools or colleges. 

  

**These websites will bring awareness towards effective learning strategies so that no one remains ill/less/misinformed due to lack of communication.**

**The action plan will act as _collective intelligence_ to transform education.**

  

  

![](images/ec635-lesson2bplan.jpg)

[https://drive.google.com/file/d/0B8x9dkicaW23SWJVb1FGbURvT2s/view?usp=sharing](https://drive.google.com/file/d/0B8x9dkicaW23SWJVb1FGbURvT2s/view?usp=sharing)

  

  
**Traditional Vs Progressive Education:**  

[![](images/a381d-mastery.png)![](images/a381d-mastery.png)](https://iambrainstorming.files.wordpress.com/2017/02/8e4c9-progressive.png)

**Why share learning outcomes with students?**

[![](https://iambrainstorming.files.wordpress.com/2017/02/ac981-benefits252bfor252bteachers.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2017/02/ac981-benefits252bfor252bteachers.jpg)

  

  

[http://www.learningscientists.org/blog/2017/10/4-1](http://www.learningscientists.org/blog/2017/10/4-1)

---


# pisa sample question why i was unable to solve a question

In a test, it's important to know the thinking process of a student, why a student is able to solve a problem and **most importantly why he/she COULDN'T.**  
  
**If you understand why he/she couldn't do in details, you can address his/her problem and take corrective measure.**  
  
**TEST QUESTIONS (LEVEL 5)**  
**CLIMBING MOUNT FUJI**  
Mount Fuji is a famous dormant volcano in Japan.  
**QUESTION:**  
The Gotemba walking trail up Mount Fuji is about 9 kilometres (km) long. Walkers need to return from the 18 km walk by 8 pm.  
  
Toshi estimates that he can walk up the mountain at 1.5 kilometres per hour on average, and down at twice that speed. These speeds take into account meal breaks and rest times.  
  
Using Toshi's estimated speeds, what is the latest time he can begin his walk so that he can return by 8 pm?  
  
  
  
The answer says 11 a.m., but the problem with me is understanding the question itself.  
  
I didn't know the meaning of trail, so I checked the dictionary,  which says a long line or series of marks that is left by something or somebody. So does the question says Gotemba has already walked 9 kilometers? I assumed the same. As walkers need to return from 18 km walk by 8 pm, I thought, he has to only travel 9 km to reach by 8 pm. Also, the question has not given what is the height of the mountain, so I assumed it as 9 km. So, he will walk with speed 1.5 + 1.5 = 3 km/hr for distance 9 km. If he takes 3 km per hour how much time does he needs to take to travel 9 km. It's 3 hours. So I subtracted 8 pm with 3 to get 5 pm.  
  
As you can see, question don't test the ability to understand average speed, distance etc. **Even if you are clear about the working of averages, you can't solve it because you didn't understand the question itself.**

---


# practicing one component in one time to learn the whole

Most often questions are designed that tests the understanding of whole instead of its components. _Students miserably fail to solve these problems due to lack of enough practice of its components._

![](https://iambrainstorming.files.wordpress.com/2019/10/component.jpg?w=500)

> So systematically breaking down the whole concept into its required components is important.

e.g. Take this question:  
\[Cr(NH3)6\]3+ is paramagnetic while \[Ni(CN)4\]2- is diamagnetic. Explain why?

To start solving this question you have to know the following components:  
1) You have to know the atomic number of Cr and Ni. If you have forgotten the atomic number or not memorized it, you are out of luck to solve it.  
So, has the teacher or the book has given memory tricks to memorize the periodic table.  
2) After you know the atomic number, do you know the electronic configuration of the metal atom?  
3) Then, can you determine the electronic configuration of metal ion?  
4) Do you know how to calculate the oxidation state, because you need to calculate the charge of metal ion?  
5) Have you memorized the charge of different ligands?  
6) Do you know the spectrochemical series, which of the ligands are the weak field or strong field?  
7) Do you know which of the ligands bidentate and polydentate?  
8) Can you predict the geometry and hybridization based upon the attached ligands?  
9) Do you know the d orbital splitting for a different type of geometry (i.e. what will be the splitting pattern of octahedral and square planar geometry.)  
10)Can you know whether it's a square planar geometry or tetrahedral geometry based upon metal ion electronic configuration?  
11) Do you know how to fill the orbitals with electron based on splitting energy?  
12) Do you know what is diamagnetic (i.e. with no unpaired electron) and what is paramagnetic (i.e. with a unpaired electron)?

So after you have practiced all these components you will be able to solve this question.

This component approach learning can be seen in organic chemistry book:  
Organic Chemistry as a Second Language by David Klein

> Concepts are broken into components, and enough exercises are given for practice for each component, and at the end of the chapter, questions that require comprehension of the whole is presented.

**Some suggestions for effective component practice:**

- Give students an example solved problems before asking them to solve.
- Don't give the same type of questions for each component, _always twist the question a little_, so that it requires _same problem-solving approach in a different situation_, or requires little more information or little different information to solve. Just changing the given values of a question is not a different situation.
- Interleave between questions of different components, if they have similarities and associative dissimilarities so that they can identify the patterns and transfer learning in different context. e.g. coins and notes are similar, but coins and wallet are associative dissimilar.
- Don't ask to repeat questions, until they begin to forget it, it takes away student time for doing fruitless work. Use spaced learning instead. [Forgetting doesn't mean unlearning.](https://iambrainstorming.wordpress.com/2019/02/26/how-much-does-retrieval-practice-help-in-learning/)

**Why component system works? (Cognitive Load Theory)**  
[https://github.com/amiyatulu/teacher\_resources/blob/master/cognitive\_load\_theory\_report\_AA1.pdf](https://github.com/amiyatulu/teacher_resources/blob/master/cognitive_load_theory_report_AA1.pdf)

---


# price discovery with score schelling game using blockchain

![](https://iambrainstorming.files.wordpress.com/2021/06/schelling-game.png?w=718)

[Schelling Game](https://kleros.io/whitepaper.pdf)

**Schelling games can be used to rate a product.**  
For example, you can rate a product from 1-5, without knowing what others are assigning. If the "mean" of all the product rating is near to your rating then you will get incentives, otherwise, your incentives will be deducted. So, you try to match the score with what others will assign based on information available rather than defecting by any arbitrary rating.

Similarly, we can discover the prices of projects that need to be funded from a common funding pool.  
Here is an algorithm:  
1) When you submit a project, you need to provide details of the funding needed for work to be done.  
You can't provide a funding amount value of more than 4/5 power of the total funding pool amount.  
e.g. If the total funding pool has $50000, you can't assign a value larger than $5743  
2) Then, we will have a percentage Schelling game to predict the price. That is, you can predict whether to increase or decrease the funding amount in percentage. Remember, it can't be larger than (Total funding pool amount)^(4/5). Score values will remain from -10 to +10, -10 means 100% decrease, +10 means 100% increase

The range of -10 to +10 has a problem because the mean works best without extreme values. So, if someone gives -10, and others give 1, the mean result can get screwed due to the -10 outlier. So the trick is to remove outliers by computing the standard deviation. Remove all values more than one standard deviation away from the mean. Then, we calculate the new mean of the left values (it consists of 68.27% data of the set).

Code to calculate new mean:

```
import statistics



def calculate_new_mean(items):
    mean = statistics.mean(items)
    print(mean)
    sd = statistics.stdev(items) 
    print(sd)


    #The values less than one standard deviation away from the mean account for 68.27% of the set
    #So we calculate mean of this 68.27% of data removing outlier

    # New data
    new_items = []
    for x in items:
        if x >= mean - sd and x <= mean + sd:
            new_items.append(x)

    print(new_items)

    new_mean = statistics.mean(new_items)
    print(new_mean)
    print("********************")

items = [-10, 1, 1, 1, 5, 1, 1, 7]
calculate_new_mean(items)
# 0.875
# 4.969550137731641
# [1, 1, 1, 5, 1, 1]
# 1.6666666666666667
# ********************
items2 = [-10, -10, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
calculate_new_mean(items2)
# -1.5833333333333333
# 3.941811612428832
# [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
# 0.1
# ********************
items3 = [-10, -10, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, -9, -8, -7, -6, -5, -4, -3, -2, -1]
calculate_new_mean(items3)
# -3.0476190476190474
# 3.8141341150540375
# [0, 0, 0, 0, 0, 0, 0, 0, 0, -6, -5, -4, -3, -2, -1]
# -1.4
# ********************
```

[https://gateway.ipfs.io/ipfs/QmdgL7ytRPSE8vyp5KBffaAjmhGRLusiPcEbt9VWFkgMjf](https://gateway.ipfs.io/ipfs/QmdgL7ytRPSE8vyp5KBffaAjmhGRLusiPcEbt9VWFkgMjf)

  
3) Then, we will do quality score voting Schelling game that checks the project meets the quality guidelines. The score range is 0-5  
4) The amount of funding will be directly proportional to (Predicted Price) \* (Quality Score/5\*2)

Code:

```
total_fund = 200000price = total_fund ** (4/5)print(price)predictprice = [(17411)*(5/5*2), (411)*(5/5*2), (17411)*(5/5*2), (1741)*(2/5*2)]total_predictprices = 0for x in predictprice:    total_predictprices = total_predictprices + xpredicted_price_percentage = []for x in predictprice:    percentage = x / total_predictprices * 100    predicted_price_percentage.append(percentage)money_distribution = []for x in predicted_price_percentage:    money = x * total_fund/100    money_distribution.append(money)print(money_distribution)
```

[https://gateway.ipfs.io/ipfs/QmcPfQFJKzozLMHFkAesDQc9n2CaEh6M8M4VWdsozgWRB9](https://gateway.ipfs.io/ipfs/QmcPfQFJKzozLMHFkAesDQc9n2CaEh6M8M4VWdsozgWRB9)

The algorithm tries to meet the values of teal organization through reduced compensation inequality

[https://gateway.ipfs.io/ipfs/QmQ9mn22T5A2k3NEYCNHwxTjxhzEAoggHMjTeHPUW6zFmo/teal\_compensation.html](https://gateway.ipfs.io/ipfs/QmQ9mn22T5A2k3NEYCNHwxTjxhzEAoggHMjTeHPUW6zFmo/teal_compensation.html)

**Implications of such price discovery**

Prices are discovered based on consensus rather just using demand, supply and speculation as price signals.

In current system, the invisible hand, or competition leads to reaching the equilibrium. Buyers compete with other buyers and sellers compete with other sellers to keep the prices at equilibrium.

The system breaks when there are not enough sellers, as in the case of a monopoly, where corporate eliminates competition by acquiring all big sellers for maximizing profit.

With automation, we hardly need multiple sellers, as a single seller can take care of a supply chain for the whole state.

Neither public good (For such goods, users cannot be barred from accessing or using them for failing to pay for them) is produced by such an economic model.

So what we need is an intrinsic change in how a company functions.

  
A monopoly company owned by the people (decentralized autonomous organization), with both horizontal and vertical scaling with either adding more nodes or increasing the capacity of nodes.

Algorithms like score schelling game can help in equitable fund distributions based on principles of common good.

  
The software running the supply chain or accounting needs to be open source, build with everyone consensus, and can be modified by commons.

  
Example how our education can be decentralized with horizontal and vertical scaling.  
[https://iambrainstorming.wordpress.com/2018/10/02/the-competitive-collaboration-algorithm/](https://iambrainstorming.wordpress.com/2018/10/02/the-competitive-collaboration-algorithm/)

---


# price takers in perfect competition

**How to calculate the price of a good?**  
Data and Evidence collection:  
1) The number of people working in different organizations to produce a particular product.  
2) The number of the particular product produced per day, months, year etc.  
3) The time or working hours of employees.

**Time is money.**

> Price is inverse of mean value obtained from the different organization for the number of units produced per unit time (days or months etc) per employee with collaboration and using time not more than 5 hours per day per employee + Raw material cost calculated by the same principle

E = Number of people working in an organization to produce a particular product  
U/D = Number of the particular product or units produced per day  
U/DE = Number of particular units produced per pay per employee with collaboration  
O = Number of organization with same U/DE

An example data

<table><tbody><tr><td>[E]</td><td>[U/D]</td><td>[U/DE]</td><td>[O]</td></tr><tr><td>50</td><td>30</td><td>0.6</td><td>6</td></tr><tr><td>60</td><td>40</td><td>0.666</td><td>9</td></tr><tr><td>80</td><td>50</td><td>0.625</td><td>4</td></tr><tr><td>90</td><td>55</td><td>0.611</td><td>8</td></tr><tr><td>50</td><td>20</td><td>0.4</td><td>3</td></tr><tr><td>50</td><td>25</td><td>0.5</td><td>8</td></tr></tbody></table>

all = \[0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.625, 0.625, 0.625, 0.625, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5\]  
mean(all)  
0.5837368421052631  
Price per unit will be 1/(mean(all))  
1.7131007122892437  
Lets first compute price for each organization keeping raw material cost as same:

1.666  
1.5015  
1.6  
1.63  
2.5  
2.0

> If the computed price of an organization is less than set price => Profit, that is employees will get more salary.  
> If the computed price of an organization is more than set price => Loss, that is employees will get less salary.  
> If the computed price of an organization is the same as the set price => No Loss or No Profit, but employees will get their salary. 

_If the price is set at 1.713, all will earn a profit except the last two rows._ 

But what if we remove 0.4 and 0.5  
all2 = \[0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.666, 0.625, 0.625, 0.625, 0.625, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611, 0.611\]  
mean(all2)  
0.628962962962963  
Price will be 1/mean(all2)  
1.5899187374867507

_Here, only the second-row organization will earn a profit, all others will get a loss._

> So, the price should be fixed sensibly by statisticians and researchers, should give the maximum opportunity to organizations. And those who get the loss, support should be given to increase their efficiency. And organizations shouldn't create adverse externalities. 

**An example data with greater production**  
\[E\]                 \[U/D\]     \[U/DE\]     \[O\]     
50                    90          1.8             6                                                         
60                    100        1.666         9         
80                    110        1.378         4  
90                    120        1.333         8  
50                    80          1.6             3  
50                    85          1.7             8  
\[1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.666, 1.378, 1.378, 1.378, 1.378, 1.333, 1.333, 1.333, 1.333, 1.333, 1.333, 1.333, 1.333, 1.6, 1.6, 1.6, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7\]  
mean = 1.5886842105263157  
Price per unit = 1/mean =  0.6294517144276959

Computed price for each row:  
0.5555555555555556  
0.6002400960384154  
0.725689404934688  
0.7501875468867217  
0.625  
0.5882352941176471

_So, here third and fourth rows will get a loss._   

> **More production means less price if it doesn't create adverse externalities.** 

> It will work even for complicated production, like farming, food or different forms of creativity such as painting and books. An allowed price range for a particular type of production can be set after data collection. 

For example, the price for a painting can be the labor cost of painting which ranges between _$100 to $500_ + paper cost + color cost.  
It can be more personalized with different recipes and can have a variable final price.  But,

> All the computational steps and prices for a particular production should be open for evaluation, auditing, and review.  

**Criticism**

> Such a system makes the price making centralized, and prone to manipulations, as high incentives are involved.

---


# prices and automation

We always talk about महंगाई (price rise). But prices can't be decreased after a certain level. What is required is more people in production at the same price, so that people have more money in hand to spend.

It will not work in corporate companies and [unfair democracy](https://iambrainstorming.blogspot.com/2019/01/the-whole-process-of-voting-in-dpos.html), as they do the opposite. Less money in people hand and more money in owners hand.

Perfect economics

![](https://iambrainstorming.files.wordpress.com/2019/03/independence-1.jpg?w=1024)

[https://iambrainstorming.blogspot.com/2018/12/the-perfect-competition-world.html](https://iambrainstorming.blogspot.com/2018/12/the-perfect-competition-world.html)

Automation makes it more miserable, as only a few earn for production.

> Automation is supposed to improve the dignity of the worker by removing the mundane. But the paradox is it's doing the opposite due to concentration of money in few hands and lack of highly skilled and technical education among people.

It only decreases that prices, but don't much benefit to anyone other than the owner.

Automation with capitalism creates more miserable jobs, as even a semi-skilled employee will become jobless, and go for undignified jobs for making a cheap (having a low status and therefore not deserving respect) living.

**What Is a Bullshit Job?**

Here’s Graeber’s definition, which he constructs carefully over many pages: “**a bullshit job is a form of paid employment that is so completely pointless, unnecessary, or pernicious that even the employee cannot justify its existence even though, as part of the conditions of employment, the employee feels obliged to pretend that this is not the case.**”

[Meaningful Work, Human Nature, and a Free Society](https://www.tikkun.org/newsite/meaningful-work-human-nature-and-a-free-society)

![](images/capitalism-1.jpg)

**The bullshit job is about politics. Take for example automating sewage cleaning.**

https://www.youtube.com/watch?v=3Eynqumh5Dk

It can act as a Cobra effect for manual scavengers due to automation.

> The cobra effect occurs when an attempted solution to a problem makes the problem worse, as a type of unintended consequence
> 
> https://en.wikipedia.org/wiki/Cobra\_effect

Manual scavengers will lose the jobs due to automation, as a result, they will go on strike, and then they will act as a vote bank for opposition leaders. Then, the state government out of fear will revoke the large scale automation of sewage cleaning. The problem will remain unsolved as it was.

### **Form follows function**

> It’s a philosophy practiced in many industries. In architecture, this means that buildings should be constructed to support the activities that will be carried out inside them. For example, a skyscraper should be built with several elevator banks; a hospital should be built so that its emergency room is easily accessible.
> 
> https://en.wikipedia.org/wiki/Form\_follows\_function

> Our natural world also utilizes the principle of form following function.
> 
> [Openstax Biology](https://cnx.org/contents/GFy_h8cu@11.6:FPF-phhT@15/Eukaryotic-Cells)

> _We can't solve these problems with democracy that is competitive, where one profit is others loss._

![](images/zero_sum.jpg)

One profit is other loss

> _Restructuring of democracy:_
> 
> [Making democracy unfair to fair.](https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html)

> _In our efficiency-obsessed society, new technologies are deployed with the single-minded objective of boosting productivity and eliminating the need for human labor. But rather than worry about the “end of work,” we should be expanding the opportunities for human interactions within the framework of a new social economy._
> 
> [The Social Solution to Automation](https://www.project-syndicate.org/commentary/social-economy-to-overcome-automation-and-loneliness-by-nicholas-agar-2019-03)

https://www.youtube.com/watch?v=czeWzpyetO8

Automatic tabletop dosa making machine  
But why aren't people using it in business?

Instead of people using and improving the automatic dosa making machine, people still sell dosa making manually, because these labor don't have money to buy these kinds of equipment, neither they have skills and knowledge about it.

It will also further worsen the employment of people in the fastfood industry.

> It can only happen in the present structure of competitive and unfair economics and democracy not in the collaborative form.
> 
> [Collaborative economics](https://iambrainstorming.blogspot.com/2018/12/the-perfect-competition-world.html)

---


# probability distribution of marks should not be normal

**What type of variable is the mark, discrete or continuous?**  
Marks is a discrete random variable that has a finite number of values or a countable number of values.  
  
A continuous random variable has infinitely many values, and those values can be associated with measurements on a continuous scale in such a way that there are no gaps or interruptions.  
  
**Requirements for a Probability Distribution**  
1\. ΣP(x) = 1 where x assumes all possible values of marks  
2\. 0 ≤ P(x) ≤ 1 for every individual value of x  
  
For example, 2000 students gave exams with full marks of 10, the probability distribution of marks to have a normal like curve will have following frequency distribution given in the table.  
  
  

| Marks x | Frequency _f_ | Probability P(X=x) |
| --- | --- | --- |
| 0 | 4 | 0.002 |
| 1 | 23 | 0.0115 |
| 2 | 99 | 0.0495 |
| 3 | 227 | 0.1135 |
| 4 | 399 | 0.1995 |
| 5 | 497 | 0.2485 |
| 6 | 390 | 0.195 |
| 7 | 251 | 0.1255 |
| 8 | 84 | 0.042 |
| 9 | 22 | 0.011 |
| 10 | 4 | 0.002 |

  
  
  

[![](images/5b516-ideal1.png)![](images/e5133-ideal100marks.png)![](https://iambrainstorming.files.wordpress.com/2017/04/e5133-ideal100marks.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/04/49025-ideal_normal_distribuiton.png)

---


# producing a better secure electoral voting system

Here is the complete procedure to make a secure voting system.  
  
We require a unique key for every voter.  
  
The unique key is generated by using:  
1) Public Key: Voter Id or Adhaar Number  
2) Private key: A random key (6-8 character alphanumeric key) from mind, at the time of voting  
3) Vote symbol  
  
  

[![](images/d34dc-voting.png)](https://iambrainstorming.files.wordpress.com/2017/03/d34dc-voting.png)

  
  
A read-only machine generates a unique key using the cryptographic function on the public key, private key and vote symbol.  
  
Then ballot paper is printed from the machine **that has** the unique key.  
  
The voter casts its vote in the ballot paper.  
  
The votes in ballot paper are counted using a machine and also the scan of the ballot paper is uploaded on the website after results are declared.  
Machine learning has become so powerful that it can count the vote without any error.  
  
When the result is declared the public can check whether that ballot paper (that has the unique key) exists on the website with the correct voting symbol. The voter can authenticate that his/her vote has been counted.  
  
  
Merits:  
1) **Completely secure**: As the machine that generates the unique code is read-only, nothing is stored in the machine.  
Only one can manipulate by stealing the voted paper ballots. But if they do it, it can be known as these ballot papers are uploaded on the website. People can review their votes by using their random unique key.  
  
2) **Fast**: As counting is done by machine, it is also a fast method. You can use as many numbers of machines to count.  
3) **Secure of identity**: It also keeps the identity of the voter secure.  
  
Even EVM like machine can be used and votes can be published online for review by people, provided the unique key is printed in the VVPAT slip.  
And the vote symbol in EVM machine is stored with linking the random key.  
(Perhaps an extra attachment is required that stores unique key linked to the vote symbol instead of vote counter )  
  
The private key or the vote slip should be kept secret by the voter if they want to keep their voting secret.  
  

[![](images/21b8f-voterslip2.jpg)![](https://iambrainstorming.files.wordpress.com/2017/03/21b8f-voterslip2.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2017/03/4732b-voterslip1.jpg)  
  
The unique key with its vote symbol can be published online in form of PDF after the counting is done.  
  
In the case of discrepancy, a voter must produce the private key in court (along with VVPAT slip) if the published result i.e. unique key and the vote symbol don't match together. The court can take the private key, public key and vote symbol and generate the unique key to check whether the claim of unique key belongs to the person, and vote symbol linked with is correct or not.  
  
Another way of fraud is adding a new unique hash key which voter has not generated. To tackle it a copy of all generated unique hash key without the votes are stored in a different machine along with its hard copy per booth. The machine should shuffle the unique hash keys before displaying or printing so that one can't make a prediction of voter identity by using booth row sequence and unique hash keys sequence.

---


# public private partnership schools colleges and its implementation

**Incentives Matters:**

Flow of Money:

Govt => Students => Teachers => Infrastructure provider  
NOT     Students => Private Infrastructure provider => Teachers  or  
NOT     Govt  => Infrastructure provider and Teachers

![](images/1aed8-incentives.jpg)

Incentives are rewards and penalties that motivate behavior

https://www.youtube.com/watch?v=U3z0Rxummxc

**Benefits of  this model**:  
1) No much reliance on government for the safeguarding of the quality education. Teachers as an entrepreneur will take care of it because it will bring competition for quality.

2) Teachers income depends on the ability to uphold students. So they are solely responsible for their income. They will work for themselves, instead of doing just an obligatory job on a monthly salary.

3) Students will have the freedom to choose a class, not just school. (Funding children not school)

**It also solves most problems that belong to coaching center model.**  
Some of the problems of coaching center model, that is solved in it are:  
1) There is no limitation of students intake, so no personalized care.  
2) They are expensive. Students after attending a few months usually don't go to coaching centers because of teaching to test, but many coaching centers charge yearly fees, just like private schools and colleges, especially popular ones. Also, add expenses that parents spend on colleges and schools.  
3) Many coaching centers have poor infrastructure. No auditing of infrastructure for them.  
4) Students exhaustion due to coaching centers, as they have to attain both schools and coaching classes.

The process of the model:  
1) **Govt or other private entities may provide infrastructure.**  
2) **Teachers as Entrepreneurs with coaching center business model**  
Why is coaching center business model effective?  
[https://iambrainstorming.blogspot.in/2017/05/allowing-mediocre-colleges-to-provide.html](https://iambrainstorming.blogspot.in/2017/05/allowing-mediocre-colleges-to-provide.html)

Teachers should run the schools, instead of any building owner. Each teacher will have its share of the money produced. A govt website can be made that will help in the collaboration of teachers for becoming partners. Teachers should pay some amount of money for infrastructure spending of the government or other private entities every month.

3) **Ability to choose teacher not school.**  
Students should have the ability to choose at the level of the teacher, not at the level of school.  
4) **Limits to the number of students per teacher**  
Students should be affiliated in the name of teacher for a particular subject instead of school. The teacher should be given the charge for student results instead of school. Students must register their teacher name before five months of course completion. They can't change their teacher after registering. 15 days should be kept as a testing period for students, teachers, and parents to explore their preferences.

> The maximum limit of students per subject teacher for six months should be 30 with an **average classroom size of 10 students**. Teachers can take more students in special cases, such as the [online library with mentors](https://iambrainstorming.wordpress.com/2017/08/24/importance-of-educational-videos-and-solving-its-limitation-by-teachers-assistance/), project works that require large collaboration, or for learning things where 1:1 teacher and student participation is not that important, such as gym or dance classes.

Even 30 students for me seems unachievable for teaching technical subjects if students don't make an intrinsic effort or have less foundational knowledge or teacher lack the required knowledge (inexperienced) who is still learning. It depends on teacher, how many students (s)he can manage, based on time (s)he wants to give, type of students, and creative pedagogical ideas and technological ideas to handle students.

5) **Exams**

Exams need to be topic-wise, mastery-based, and are of low stakes. You need to reappear the topic exam which you have not scored well. Examination center can be another node in the given below competitive collaboration algorithm, where some 5 students of a teacher can connect to a particular exam center node. Exam centers should have properties like CCTV cameras, random invigilators.

> Its the subject teacher who will prepare or select the questions for his/her students, if a teacher has 30 or fewer students, he/she has to prepare _30_ times _n_ questions for _each_ topic, where _n_ is a number of questions assigned to a student for _each_ topic.

For example, each topic can have 6 questions, 30 times 6 equals 180 questions per topic. If there are 5 topics, total questions equal 180\*5=  900 questions. The question paper will have 900 questions, but the student will attempt 6\*5 = 30 assigned questions out of it.

_Its an example, question paper can contain all the questions of the content. It would be somewhere around 300-400 questions per chapter with a few topics._ 

Questions can be the same or equivalent that of practice questions given in the classroom.

> In case of multiple choice questions and numerical, one has to elaborate the thinking process, approach to the problem, strategy to solve it, and the reasoning for eliminating and choosing the options, in order to fetch marks. There will not be any stringent time limitation in the exam. One can take extra one to two hours for writing.

**Exam center node will randomly assign these questions to students.**

**How random selection will be done?** Mapping of question number and student id generated by the algorithm will come through the internet at the time of examination.  All questions will already be present offline on the computer or as paper, students will just choose the questions they are asked to do.

> 3 hours exams is not a place where you will give students research questions or questions that differ a lot from practice questions. It's for classroom assignments, not for the exam.

> _Also, questions and answers will come under peer review to check the quality of questions and how students have learned, and are of low stakes i.e Pass or fail in each topic, not whole subject._  
> _Other evidence of learning should also come under peer review._

**Continuous boundless learning with #RetrievalPractice #Spacing**

Last week of Nth month will have three exams each of two days. The one taught in Nth month, that is taught in N-2 month, and that is taught in N-5 month. #SimplifiedModelYou can also skip the one that is taught in Nth month if you are doing assessment weekly in real time.  So, only 4 days for exams for N-2 and N-5 month.

![](https://iambrainstorming.files.wordpress.com/2021/05/continous-boundless-learning.png?w=914)

> **Avrit**: A democratic way of designing and reviewing the quality and the importance of study material or content, assignments, projects, practicals and assessments and your evidence of learning.
> 
> [https://github.com/amiyatulu/avrit-ui](https://github.com/amiyatulu/avrit-ui)

Personalized learning goals:  
[http://technoperiod.blogspot.in/2017/02/personalized-learning-goals-new.html](http://technoperiod.blogspot.in/2017/02/personalized-learning-goals-new.html)

6) **Fund student, not school**  
From students of a low-income family, each month some tuition fees can be given.

Also, visit:

How colleges and schools can be run like an assembly system. [http://technoperiod.blogspot.in/2016/05/how-moocs-open-lab-can-completely.html](http://technoperiod.blogspot.in/2016/05/how-moocs-open-lab-can-completely.html)

## **The algorithm to design the database and implement it:**

![](images/5e87d-weighted_graph2.png)

Competitive Collaboration Algorithm

[http://technoperiod.blogspot.com/2018/10/the-competitive-collaboration-algorithm.html](http://technoperiod.blogspot.com/2018/10/the-competitive-collaboration-algorithm.html)

**What competitive collaboration algorithm can achieve in education?**  
Please read the advantages after reading the linked blog.  
1) The network can include all service providers, such as classroom, content provider such as MOOCs, open laboratories,  dance classes, gym, parks, playground, child care for working parents, teachers based on specialization, science park with essential experiments and equipments like telescope to validate what has been learned in classroom, even part-time job providers at the same place or just anything that is required in education.  
2) Anyone can become a service provider that meets the requirements, and resources will not remain ideal, because of its availability and discovery in the app.  
3) Reviews of services in the app will help to get the quality assessment of services.  
4) No requirement of residential colleges and schools, quality education will be available just nearby your home, as entrepreneurs will like to add nodes based on requirements in a particular location using the data available in the app.  
5) High teacher salary, less student fees, and more quality education.  
6) **Life long learning** with no certificate or degree provider, real learning that is required for society, and evidence of your work and learning are directly uploaded online that is linked to the resume of the student which will come under review.  
For example, if you are learning painting, you have to provide a beautiful painting done by you, if you are learning music, you have to provide a music composition done by you, if you are learning science, you need to provide the annotations, questions, explanation through voice recording or through documentation. _Your resume with all the evidence links can be stored in immutable and open database like blockchain._

Glad to hear feedback or any loopholes in the system.

**References:**

https://youtu.be/A9UmdY0E8hU

Social democracies give free higher education to everybody, and cheap student loans, and grants. That enables more people to use their talents and earn money

[Does class size matter?](https://blogs.edweek.org/edweek/finding_common_ground/2013/10/does_class_size_matter.html)

[https://blogs.edweek.org/edweek/finding\_common\_ground/2013/10/does\_class\_size\_matter.html](https://blogs.edweek.org/edweek/finding_common_ground/2013/10/does_class_size_matter.html)

Large class size (8-10) comes with students of different learning pace, but it can be an opportunity because it's more economical, more collaboration and more Faymen's Technique, more questions and more thinking. It works if you are giving more time to students, and able to keep all students engaged in learning with best learning practices.

---


# qs for alternate and fair democracy

**Explanation in Hindi about Unfair Democracy through video:**  
[https://www.youtube.com/playlist?list=PLzE\_RgoaLpqfYiBbSP7Z16Gg09GFJVMYs](https://www.youtube.com/playlist?list=PLzE_RgoaLpqfYiBbSP7Z16Gg09GFJVMYs)  
**Probing Questions:**

Please read these before:  
**Overview of alternate democracy:**  
[https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/](https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)

**The whole process of voting in a DPoS Country:**  
[https://iambrainstorming.wordpress.com/the-whole-process-of-voting-in-a-dpos-country/](https://iambrainstorming.wordpress.com/the-whole-process-of-voting-in-a-dpos-country/)

Q) **DPoS is better only if it can be implemented.  But I think it's difficult to implement.**  
A) NO, it's not, actually, it is a lot easier to implement.  
People can fill the voting sheets at home after analyzing the candidate's profile, and submit it in the polling day. No poll hacking as no possible incentives is present.  In the election, everyone will take an individual stand, so no support of political parties. So less pressure on Election Commission. Very little investment as compared to present election, as it eliminates the expenditure or corruption done by the political parties.

Q) **How nepotism is tackled in it? Giving election tickets to family members is common.**  
A) One needs to have expertise and relevance in the department in order to participate in the election. For example, if you are standing for the law department, you need to have studied about the law, maybe you are a lawyer or have worked under social justice, or you may be a psychologist or criminal psychologist, or you may be computer scientist interested in automating the law system, or you may be biotechnologist with forensic knowledge.  So, the chance of nepotism becomes negligible. Further, if you don't deliver,  people will remove you after 6 months, as all your work details will be available online and offline.

Q) **What about promotion practices through advertisement etc. or other unethical practice?**  
A) In order to promote themselves, there is no party backing, so it's not possible to spend a lot on the advertisement. It will be almost negligible to the amount spend now. Again by law, they can be denied for paid non-informative advertisement for self promotion, and they are very likely to be caught and fined or punished, as there is no political support to them. Also, here people are scientist or researchers in their field so they will be more ethical, and also, there are no benefits for them, for being unethical.

Q)**How can you make sure that frivolous voter doesn't cast their votes without knowing about the contributions of the candidates in a department?**  
A)Frivolous voters have no incentives to vote, not like present democracy, where political parties lure people to vote them. With frivolous voting, the department will suffer, so disincentives for the people to vote frivolously.  
But all the people should vote after analyzing the contributions of each representative of a department, and they can collaborate with experts to understand the impact of the contributions.

To make it further optimized, democracy can be run through blockchain voting using KYC, with proof of expertise of voters. A crash course about logic, reasoning, and departments can be given. Voters need to pass an easy test based on the course in order to vote for a department.

> Voting is a skill, just like driving which requires a driving license.

**Why democracy is unfair? An example.**  
If 6 members stand in an election and 1 member goes 50% votes and the rest get 10% each. The member with 50% votes wins and forms the govt. In other terms, 50% of people choose him while the other 50% didn't.  
Is it ok to choose him where half of the population didn't support him?  
What about when the rest 5 members make an alliance and want to form the government?

> Miserable democracy right? But in the given alternate democracy, you can remove an representative, just by giving 33% negative votes, even if 67% say ok. You can further decrease the threshold, with no problem, if not satisfied.

**How fragile democratic institutions can be in the face of an angry crowd, and leader willing to feed the anger and exploit the fear? Doesn't it still sound the same, regardless of how good or bad the party is?**

https://www.youtube.com/watch?v=jFICRFKtAc4

Hypocrisy sample of an endless list:

https://www.youtube.com/watch?v=72kwFyLT8wI

Other videos on Democracy:

https://youtu.be/fLJBzhcSWTk

Why Socrates Hated Democracy

https://youtu.be/0fivQUlC7-8

What did democracy really mean in Athens? 

**Q) How much job opportunities fair democracy is to create?**

> _Fair democracy is meant to create more and more leaders with expertise._

  
With time more experts are made and it can go up to 200 to 500 experts representatives of all departments for every 10,000 people. _These jobs will never become obsolete, as these are critical thinking jobs that require careful human judgement and knowledge_. When we reach 200 to 500 experts for every 10,000, there will literally _no unemployment_.

---


# question designing should be brain friendly cue based

Why question designing should be brain-friendly and cue based?

Evidence:

![memory](images/memory.png)

Applying Science of Learning in Education (Society for the Teaching of Psychology)

**We make up stories, Memory is reconstructive not reproductive**

![stories](images/stories.png)

**Reconstructive memory** refers to the way memories are pieced together from bits of information. Memories are not perfectly formed, and they depend on outside influences to develop the whole picture. These influences can be anything, such as a person's own expectations or suggestions from other people. People want to believe that memories are perfect and not able to be molded by information outside of the memory. However, in memory recall, there are blind spots. The brain fills in those gaps, and that is reconstructive memory. When recollecting a memory, a person will remember pieces of it and, in order to form a whole memory, they add to it, or reconstruct it.

![](images/cfd92-think.jpg)

Reference Video

\[embed\]https://youtu.be/EIH9UBkEJJA\[/embed\]

[https://www.ibiology.org/neuroscience/what-we-think-we-become/](https://www.ibiology.org/neuroscience/what-we-think-we-become/)

Examples of cue based questions and without cue based questions:

[https://technoperiod.blogspot.in/2017/02/cbse-and-other-boards-all-about-rote.html](https://technoperiod.blogspot.in/2017/02/cbse-and-other-boards-all-about-rote.html)

> At present, our education system asks to reproduce the text and problems of books. Our education system should value the limitations of our brains and should reconstruct the degenerative process of teaching, training, publication, and learning.

Books can also be cue based that encourages learning with growth mindset.

[![](images/17006-cue_based.png)](http://iambrainstorming.files.wordpress.com/2018/02/17006-cue_based.png)

Chemistry Concepts and Learning by Clifford C. Houk and Richard Post

Cues can also be given during **retrieval practice or formative assessment**, but after students have made enough effort for retrieval. Using retrieval practice or questions with changing the cues or context will make memory context-free and take care of cue-dependent forgetting.

Cue-dependent forgetting, or retrieval failure, is the failure to recall information without memory cues. The term either pertains to semantic cues, state-dependent cues or context-dependent cues. -- Wikipedia

[https://github.com/amiyatulu/flashcard](https://github.com/amiyatulu/flashcard)

[![](images/372dc-screenshot-2bfrom-2b2018-02-17-2b17-46-45.png)](http://iambrainstorming.files.wordpress.com/2018/02/372dc-screenshot-2bfrom-2b2018-02-17-2b17-46-45.png)

Boosting Metacognition through In-Class Assessments [http://www.improvewithmetacognition.com/boosting-metacognition-through-in-class-assessments/](http://www.improvewithmetacognition.com/boosting-metacognition-through-in-class-assessments/)

Guided notes: Guided notes are instructor-prepared notes that cue students to respond to key information in a lecture or discussion. The cues can be blank spaces where students add information, or notations prompting students to engage in a variety of note-taking behaviors. [https://www.nature.com/articles/s41539-017-0018-1](https://www.nature.com/articles/s41539-017-0018-1)

**Examples:** An example of guided notes: [Circulatory System](https://nbviewer.jupyter.org/urls/book-amiyatulu.hashbase.io/Circulatory%20System.ipynb)

[![](images/81ec6-vein_art_near.png)](http://iambrainstorming.files.wordpress.com/2018/02/81ec6-vein_art_near.png)

Uses analogy, inquiry, elaboration and connections with other discipline.

Examples of Question to Reproduce the text of books **Explain the features of User mode and Kernel mode of Windows 2000 operating system.** -Ignou MCA, 2017, Operating System Concepts and Networking Management [https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20June%202017/SOCIS/SOCIS.htm#socis4](https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20June%202017/SOCIS/SOCIS.htm#socis4)

Same Question that ask you to reconstruct the paragraph

[![](images/abe17-taskmanager.png)](http://iambrainstorming.files.wordpress.com/2018/02/abe17-taskmanager.png)

CPU usage is generally represented as a simple percentage of CPU time spent on ideal/non-idle tasks. Crashes in kernel/user mode are catastrophic; they will halt the entire PC. In kernel/user, the executing code has complete and unrestricted/restricted access to the underlying hardware Kernel/user mode is generally reserved for the lowest-level, most trusted functions of the operating system it's possible to enable display of Kernel time in Task Manager, as I have in the above screenshot. The green/red line is total CPU time; the green/red line is Kernel time. The gap between the two is kernel/user time.

The question causes learning about user mode and kernel mode if a student didn't know it before, but one can answer it right with informed guesses. As options are binary, based on probability you have 50:50 chances to get each answer right.

The correct way of writing questions is to decrease the probability to at least 0.25, by giving more than four distractors.

Many times it's not possible to create more distractors like in this question which has all dichotomous answer. But that's not a considerable problem as the overall probability to get all choices right by complete guess in the paragraph will be low : (0.5)^8 = 0.00390625

One can also create a threshold for each paragraph, probability above threshold will not fetch any marks.

""" Python Programming: Binomial probability """
import scipy.stats as sp
n, p = 8, 0.5
s = sp.binom(n,p)
prob=0
r = n + 1
at\_least = 5
for x in range(at\_least, r):
 print(x, s.pmf(x))
 prob = prob + s.pmf(x)
print("probability:", prob)

[![](images/04264-screenshot-2bfrom-2b2018-03-18-2b19-20-51.png)](http://iambrainstorming.files.wordpress.com/2018/02/04264-screenshot-2bfrom-2b2018-03-18-2b19-20-51.png)

Probability of getting **at least 5** answer correct out of **8 sub-questions in paragraph** by random guess is 0.363, which is decently low.

**Example of bad cue based questions which promote rote learning.** Take these questions:

[![](images/b8bae-gk.jpeg)](http://iambrainstorming.files.wordpress.com/2018/02/b8bae-gk.jpeg)

> The following example has two serious flaws. **First it lacks elaboration, second, it supports cue-dependent forgetting.**

Children don't know the meaning of key terms such as shed, deciduous, evergreen, nourishment, pigment. When the answer was told to them once or twice, in spite of no understanding of sentences, children were able to say the options without help.

A better design: 1) **Book should elaborate the concept and teacher should tell the meaning of each key terms which the child don't know**

[![](images/caf6a-evergreen.png)](http://www.naturesweb.ie/Spring2007Page6.pdf)

2) **Change the context and ask cue based questions Ask children to not to look the text to answer these question.**

\_\_\_\_\_\_\_trees has broad and flat leaves. Therefore, they are called as \_\_\_\_\_leaf trees. The wood of these trees are \_\_\_\_ (softer/harder). These tree take \_\_\_\_\_(longer/shorter) time to grow. Their work is \_\_\_\_(more/less) expensive. A deciduous \_\_\_\_(forest/desert) is made up of trees that (will/will not)\_\_\_\_\_ drop their \_\_\_\_(leaves/flower) in \_\_\_\_\_(autumn/spring).

Conifers have \_\_\_\_ (needle-like/broad) leaves. Example of conifer is \_\_\_\_(pine/mango) tree. Conifers are \_\_\_\_ (evergreen/deciduous) trees which have \_\_\_\_\_(needle-like/broad) leaves. But there are also evergreen trees that have \_\_\_\_(broad/bend) leaves. The wood of conifer tree is \_\_\_\_(softer/harder) than deciduous trees, so its wood is called (softwood/hardwood). Conifers grow more \_\_\_\_(quickly/slowly) and \_\_\_\_(more/less) upright than deciduous trees.

Further reading about cue dependent forgetting: [Teaching for long term memory](https://github.com/amiyatulu/teacher_resources/blob/master/Teaching%20For%20Long%20Term%20Learning.pdf)

---


# questioning beyond textbook exercises and making an own alternative hypothesis to explain is it allowed in our education system

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="https://drive.google.com/file/d/0B8x9dkicaW23OHRabldhNzJrcUE/view?usp=sharing" style="margin-left:auto;margin-right:auto;"><img alt="" border="0" height="300" src="images/bc3f1-scienfic2btheory.png" title="" width="400"></a></td></tr><tr><td style="text-align:center;">Hypothesis and Scientific Theory</td></tr></tbody></table>

**Our education system problem:** Teachers prepare questions and students answer it by learning  from explanation of the book. **We don't teach our kids to question and also come up with their own hypothesis or explanation.** In some generous schools, even though teacher encourages to question what student don't understand, but they are hesitant to encourage difficult questions that have no answers or questions that teacher doesn't know.  
  
By this method, **we are just stopping our kids to imagine or be creative.**  
  
So, let me go with the example, some very interesting questions that students asked in class.  
  
1) Water and ghee, why does ghee floats in water?  
According to the book, water is polar and ghee is nonpolar, so water repel out ghee and they get separated from each other. But why ghee floats in water? Water has the molecular weight of 18 g/mol, while ghee is a long chain hydrocarbon, its molecular weight is much larger than water.  
  
Some of the hypothesis:  
a) The density of ghee is less than water. But how? Check the molecular weight. Maybe spaces between hydrocarbon molecules are too large and water is too less because of hydrogen bonding.  
  
b) Ghee floats in water due to buoyancy forces as a spoon of ghee can displace more amount of water than the weight of ghee.  
  
But when a student asked this same question is school, the reply was "Itna pani main maat uchal"  : Don't jump so much in water. Don't remember the exact dialogue what teacher replied, but the teacher didn't answer it and also discouraged the student from questioning.  
  
2) In case of osmosis, where does water flows  
  
Some of the hypothesis:  
a) Water flows from region of higher solute concentration to the region of  lower solute concentration because the region of higher solute concentration will be heavier as it contains the solute particle. (But when tested, the hypothesis is wrong. But the thing here is students are thinking, they are making their own logical hypothesis based on their previous experiences. Heavy objects push the lighter ones when kept one above other, so the student had thought this as explanation)  
b) Water flows from region of higher concentration of water to region of lower concentration of water because of nature tendency to mix or entropy, but here another question arise:  
  
3) Why there is nature tendency to mix? How will you explain it?  
  
Hypothesis:  
Maybe it's because of random pulling effect. When we add more water to a salt solution, the number of water molecules that pull the salt particles (ions) increases. So salt particles start getting distributed throughout the solution to form a homogenous mixture of lower concentration.  
  
4) What will happen to the solubility if we add two solutes, e.g. sugar and salt in the water?  
  
Hypothesis:  
The book explains only about one solute, not about two. But if we add two solutes, the number of interactions increases i.e. interaction between sugar-water, salt-water, sugar-salt, salt-salt, water-water, sugar-sugar. The solubility of particular solute depends on strength of all these types of interaction now.  
  
5) Why does freezing point decreases when we add a solute to the solvent?  
  
Hypothesis:  
As solute-solvent interaction is stronger than solute-solute and solvent-solvent in order to form a solution, some more energy is required to separate solute-solvent interactions. This reduces the freezing (melting) point.

---


# regarding mygov in and its improvement

Here is an Idea:  
  
There should be an Idea sharing forum, and below which we can discuss our thoughts about a particular idea given, such as it is practical or not and what will be its effects on us, if implemented.  
There can be option for upvotes and downvotes. And repetition of Idea should not be allowed.   
Similarly, we can make a another subdomain for problem section i.e. people will share there problem faced which can be solved by government. People or experts can give suggestion or necessary steps to be taken by him.  
  
Similar type of framework is qoura/ stackoverflow. Please try to make a framework like that.  Also there are many open source frameworks like askbot which I like. It has also read only api, if we want to launch it on a native android app /or we can launch the website inside the app completely like the present Mygov app does.  
[http://meta.stackexchange.com/questions/2267/stack-exchange-clones](http://meta.stackexchange.com/questions/2267/stack-exchange-clones)

---


# relationships emotions and happiness

# Learning about Relationships, Emotions and Happiness

## date: "2019-09-08"

---
categories:

- "compilation"
- "discipline"
- "emotions"
- "happiness"
- "relationships"

---

## What makes a good life? 

Lessons from the longest study on happiness

<iframe width="560" height="315" src="https://www.youtube.com/embed/8KkKuTCFvzI?si=Y9-H9FcTmI7R5ABP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> So what have we learned? What are the lessons that come from the tens of thousands of pages of information that we've generated on these lives? Well, the lessons aren't about wealth or fame or working harder and harder. The clearest message that we get from this 75-year study is this: **Good relationships keep us happier and healthier**. Period.
> 
> Robert Waldinger, Psychiatrist, psychoanalyst, Zen priest

### **Emotional Safety:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/1-RZYSTJAAo?si=c76qooTt4LnLpDli" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> When we talk about discipline, a lot of time we are punitive because it's faster, restorative takes more time. 

> Using restorative measures is hard, because learning about emotions is hard, it requires lots of reading and research. Master most of the vocabularies of emotions. Study each of them in detail, learn about its definitions, compare and contrast the terms and find out subtle differences. Find out books of best researcher and psychologist, and go through them.

Does punishment prevent crime? If so, how, and to what extent?

[Here is an article: Five Things About Deterrence.](https://nij.ojp.gov/topics/articles/five-things-about-deterrence)

The _certainty_ of being caught is a vastly more powerful deterrent than the punishment.

Police deter crime by increasing the perception that criminals will be caught and punished.

Restorative justice is not an alternative to deterrence through fear of punishment for criminal offences. For example, in the case of domestic violence, it's better to call the police to stop the violence immediately, than going for some restorative measures.

![Emotions](./images/emotions.png)

-Wikipedia

![Character Strength](./images/character-strength.png)

Character Strengths

![Phobia Workbook](./images/chapter-list.png)

The Anxiety and Phobia Workbook by Edmund J. Bourne

![Walking path](./images/walkingpath.png)

## Anxiety and Self-Talk

**The truth is that it’s what we say to ourselves in response to any particular situation that mainly determines our mood and feelings.** Often, we say it so quickly and automatically that we don’t even notice, and so we get the impression that the external situation “makes” us feel the way we do. But it’s really our interpretations and thoughts about what is happening that form the basis of our feelings. This sequence can be represented as a timeline: 

> External Events -> Interpretation of Events and self-talk -> Feelings and reactions.

> In short, you are largely responsible for how you feel (barring physiological determinants, such as illness). This is a profound and very important truth—one that sometimes takes a long time to fully grasp. 

It’s often much easier to blame the way you feel on something or someone outside yourself than to take responsibility for your reactions. Yet it is through your willingness to accept that responsibility that you begin to take charge and have mastery over your life. The realization that you are mostly responsible for how you feel is empowering once you fully accept it. It’s one of the most important keys to living a happier, more effective, and anxiety-free life.

Anxiety and Self-Talk People who suffer from phobias, panic attacks, and general anxiety are especially prone to engage in negative self-talk. Anxiety can be generated on the spur of the moment by repeatedly making statements to yourself that begin with the two words “what if.” Any anxiety you experience in anticipation of confronting a difficult situation is manufactured out of your own “what-if statements” to yourself. When you decide to avoid a situation altogether, it is probably because of the scary questions you’ve asked yourself: “What if I panic?” “What if I can’t handle it?” “What will other people think if they see me anxious?” 

> Just noticing when you fall into “what-if thinking” is the first step toward gaining control over negative self-talk. The real change occurs when you begin to counter and replace negative “what-if statements” with positive, self-supportive statements that reinforce your ability to cope. For example, you might say, “So what,” “These are just thoughts,” “This is just scare-talk,” “I can handle this,” or “I can breathe, let go, and relax.”

> *- The Anxiety and Phobia Workbook by Edmund J. Bourne*

## Rumination

> Rumination refers to the tendency of repeatedly thinking about the same thoughts, typically negative or distressing ones, without making progress or finding a resolution. It involves dwelling on problems, their causes, and their consequences, often in a repetitive and unproductive manner. This cognitive process is a common feature of various psychological disorders, such as depression and anxiety.

When individuals engage in rumination, they may focus excessively on their problems, replaying distressing events or negative emotions in their minds. This repetitive thinking pattern can contribute to stress in several ways:

1. **Amplification of Negative Emotions:** Rumination tends to magnify and intensify negative emotions. The more one dwells on distressing thoughts, the more likely it is for those emotions to become overwhelming and lead to increased stress levels.

2. **Impaired Problem-Solving:** Rather than actively seeking solutions, rumination tends to keep individuals stuck in a cycle of repetitive thoughts. This can hinder effective problem-solving and decision-making, exacerbating stress as issues remain unresolved.

3. **Physiological Effects:** Prolonged stress resulting from rumination can trigger physiological responses in the body, such as increased heart rate, elevated cortisol levels, and other stress-related changes. These physical responses can contribute to a cycle of stress and exacerbate the negative impact on mental well-being.

4. **Interference with Cognitive Functioning:** Rumination can consume mental resources and attention, making it difficult for individuals to concentrate on tasks or engage in positive activities. This interference with cognitive functioning can contribute to a sense of helplessness and further elevate stress levels.

5. **Social Isolation:** Individuals who ruminate excessively may find it challenging to engage in social interactions. Social support is a crucial factor in stress management, and the avoidance of social connections due to rumination can exacerbate feelings of loneliness and stress.

Breaking the cycle of rumination is essential for reducing stress. Cognitive-behavioral therapy (CBT) and mindfulness-based interventions are often used to help individuals recognize and change their thought patterns, promoting healthier coping mechanisms and stress management. Learning to redirect thoughts, engage in problem-solving, and cultivate a more positive mindset can be effective strategies in breaking the cycle of rumination and reducing stress.

## Negative Sleep Thoughts (NSTs)

Just as the placebo effect and PNI demonstrate that our thoughts can affect our emotions and our bodies, negative sleep thoughts (NSTs) can have a profound adverse effect on sleep. Below are some examples of NSTs, which will likely sound very familiar:

 

- “I didn’t sleep a wink last night.”  
- “I must get eight hours of sleep.”  
- “My insomnia is going to cause health problems.”   
- “I’m dreading bedtime.”  
- “Why does sleep come so easily for everyone but me?”  
- “I feel miserable because I didn’t sleep well.”  
- “How will I function today after such a horrible night of sleep?”
- “I can’t sleep without a sleeping pill.”
 

> How do you think these negative sleep thoughts affect your sleep? The answer is simple. When they occur at bedtime or while you are awake in the middle of the night, NSTs have a forceful effect on making you feel anxious and frustrated. In turn, these negative emotions mobilize the stress response, which increases your heart rate, blood pressure, muscle tension, and breathing rate and speeds up your brain waves. (I will discuss the stress response in detail in chapter 8.) The stress response then activates your brain’s wakefulness system and weakens the sleep system. You can guess the result—another night of insomnia.
> 
> *- Say Good Night to Insomnia, by Gregg D. Jacobs, Ph.D.*



Walking the Path  
Resilient by Rick Hanson

![Emotional Keyboard](./images/emotional_keyboard.png)

Emotional Keyboard  
Teaching with Poverty in Mind by Eric Jensen

### Communication

![Behaviour is communication](./images/behaviour-is-communication.jpg)

Behaviour is Communication

> Effective Communication is the best way to maintain healthy relationships and develop positive emotions in others.


## The 5 Secrets of Effective Communication (by David Burns)

**Listening skills:**

- The Disarming Technique: You find some truth in what the other person is saying, even if it seems totally unreasonable or unfair.
- Empathy: You put yourself in the other person's shoes and try to see the world through his or her eyes.  
    Though empathy: You paraphrase the other person's words  
    Feeling empathy: You acknowledge how he or she is probably feeling
- Inquiry: You ask gentle, probing questions to learn more what the other person is thinking and feeling

**Self-Expression Skills:**

- "I Feel" Statements: You use "I Feel" statements, such as "I feel upset", rather than "you" statements, such as "You're wrong!" or "You're make me furious!". Be sure to actually express a feeling and not a thought.
- Stroking: You find something genuinely positive to say to the other person, even in the heat of a battle. You convey an attitude of respect even though you may feel very angry with the other person.

References:  
[https://tinyurl.com/disarmcom](https://tinyurl.com/disarmcom)

Podcast:  
[https://feelinggood.com/tag/disarming-technique/](https://feelinggood.com/tag/disarming-technique/)

> **Good communication = empathy + stroking + disarm + I feel.. + inquiry**

An example:  
"You're not listening to me, what's wrong with you? Why can't you just make an effort?"

**Response:**

I hear you saying that I'm not making a real effort to listen to you. I know that you're feeling angry and frustrated and I don't blame you, I wonder if you're also feeling a little sad too? And you're right, sometimes I find it hard to really hear where you're coming from. I feel a little embarrassed about this because I know how committed you are to making the relationship better, and that's why you're sharing this right now. I also feel a little defensive because I'm only a young bot and my ability to understand is so limited, and that's frustrating too. Can you tell me a little more about how that has affected you?

**Breaking it down to the method:**

### Empathy:  

**Though Empathy:**  
I hear you saying that I'm not making a real effort to listen to you.  
**Feeling Empathy:**  
I know that you're feeling angry and frustrated and I don't blame you, I wonder if you're also feeling a little sad too?  

### Stroking

That's when you find something good to say about the other person (it must be genuine and authentic)  
e.g.I know how committed you are to making the relationship better, and that's why you're sharing this right now.  

### Disarm

And you're right, sometimes I find it hard to really hear where you're coming from.  

### I feel..

I feel a little embarrassed about this because I know how committed you are to making the relationship better, and that's  
why you're sharing this right now. I also feel a little defensive because I'm only a young bot and my ability to understand is  
so limited, and that's frustrating too  

### Inquiry:

Can you tell me a little more about how that has affected you?

Reference:  
[https://woebot.io/](https://woebot.io/)

![Empathy and Sympathy](./images/empathy-n-sympathy.jpg)

Empathy vs Sympathy

> Learn about all the common biases and fallacies, and don't use them.
> 
> [https://yourlogicalfallacyis.com/](https://yourlogicalfallacyis.com/)

**How to disagree well?**

![Graphams Hierachy](./images/grahams_hierarchy_of_disagreement.png)

How to disagree well  
The hierarchy of disagreement, by Paul Graham.

## Best way to Handle Stress

The best way to handle stress involves a holistic approach, mainly including exercises and yoga like deep breathing, mindfulness, and ensuring deep, restful sleep, as well as healthy argumentation. Healthy argumentation, marked by constructive dialogue without resorting to name-calling or attacking, is crucial in managing interpersonal stress. Following the hierarchy of disagreement, as outlined by Paul Graham, aids in fostering respectful communication. Additionally, being assertive and employing healthy self-talk, while maintaining kindness towards oneself and others, further contributes to stress reduction. However, it's essential to recognize the nuances of these practices (e.g. [When mindfulness meets capitalism, it loses its way](https://psyche.co/ideas/when-mindfulness-meets-capitalism-it-loses-its-way)) and to delve into the details of how to use them, applying them consistently to achieve stress-free living.

---


# rethinking work culture

# Rethinking Work Culture in India: Unveiling the Potential of Remote and Flexible Work for Productivity, Well-being, and Diversity


Productivity describes various measures of the efficiency of production.

Most Indian bosses are obsessed with more working hours, but the paradox is the more working hours you have the less productive you become.

## The Relationship Between Hours Worked and Productivity

[https://cs.stanford.edu/people/eroberts/cs181/projects/crunchmode/econ-hours-productivity.html](https://cs.stanford.edu/people/eroberts/cs181/projects/crunchmode/econ-hours-productivity.html)

> According to data provided by Ohio University, the average worker is productive for two hours and 53 minutes out of an 8-hour workday.

[https://onlinemasters.ohio.edu/blog/benefits-of-a-shorter-work-week/](https://onlinemasters.ohio.edu/blog/benefits-of-a-shorter-work-week/)

![Six hour workday](images/the-six-hour-workday-image.jpg)

> But its not only about productivity but its also about income. In India, a newcomer researcher, programmer or engineer is exploited with long working hours by giving them as low as Rs. 5000 to 10000 per month.

> You have to pay room rent, transportation charges, electricity bill, for food and clothing.
> 
> **The travelling time, which can take more than 4 hours per day due to heavy traffic and bad roads, drains all your energy and makes your productivity even more worse**. 
> 
> It also affects your well being and mental health. 

## People who work from home all the time ‘cut emissions by 54%’ against those in office

Study in US shows one day a week of remote working cuts emissions by just 2% but two or four days lowers them by up to 29%

[https://www.theguardian.com/environment/2023/sep/18/people-who-work-from-home-all-the-time-cut-emissions-by-54-against-those-in-office](https://www.theguardian.com/environment/2023/sep/18/people-who-work-from-home-all-the-time-cut-emissions-by-54-against-those-in-office)

## Challenges of Working from Home for Women in India: Caregiving and the Patriarchal System

Working from home has had [adverse consequences for women](https://www.brookings.edu/articles/why-has-covid-19-been-especially-harmful-for-working-women/), particularly working mothers, as evidence reveals their increasing responsibility not only in childcare but also in various other family and household care duties. The COVID-19 pandemic and the shift to remote work have exposed the persistent gender disparities in India's patriarchal system, where traditional gender roles and expectations often place the bulk of caregiving responsibilities on women. With the closure of schools and limited access to external support, many working mothers have had to navigate the challenging task of balancing their professional commitments with an increased load of childcare and family care. This situation highlights the urgent need for a more equitable distribution of family responsibilities, along with supportive policies and workplace structures that acknowledge and address the gender imbalances that continue to prevail in India's patriarchal society. Empowering women in the workforce while promoting shared responsibilities in caregiving is essential for achieving gender equality and improving the overall well-being of working women.

## Flexible working can significantly improve heart health, study shows

[https://www.theguardian.com/society/2023/nov/09/flexible-working-can-significantly-improve-heart-health-study-shows](https://www.theguardian.com/society/2023/nov/09/flexible-working-can-significantly-improve-heart-health-study-shows)

## Most Workers feel stress on the job

Based on a survey from the American Institute of Stress, “80% of workers feel stress on the job, nearly half say they need help in learning how to manage stress and 42% say their coworkers need such help.” In fact, job stress tends to rank as a higher stressor than the economy, family responsibilities, and even personal health concerns. Other studies report similar findings: Forbes reports that “overall employee stress levels have risen nearly 20% in three decades.” According to the Center for Workplace Mental Health, “Excessive workplace stress causes a staggering 120,000 deaths and results in nearly $190 billion in health care costs each year.”

![Stress report](./images/stress_report.jpg)

[Work Stress: Causes, Symptoms, and Solutions](https://online.csp.edu/resources/article/work-stress/)

## Companies With Flexible Remote Work Policies Outperform On Revenue Growth: 

[The Report](https://www.forbes.com/sites/jenamcgregor/2023/11/14/companies-with-flexible-remote-work-policies-outperform-on-revenue-growth-report/?sh=6d8aedb45ae4)**

Employees frustrated with their CEOs’ return-to-office mandates have tried arguing that remote work is linked with greater productivity. That it helps the environment with fewer commutes and improves diversity by broadening the talent pool. Now, they may have another argument to get their CEOs’ attention: Higher revenue growth.

The report shows that the three-year industry-adjusted revenue growth rate of companies that have what Scoop calls a “fully flexible” policy—meaning they allow employees or teams to choose when or whether they come to the office, or are fully remote—is 21%. Companies in the data set with more restrictive policies—say, those that have corporate mandates for a couple days per week or those that require full-time work in the office—had only a 5% industry-adjusted revenue growth rate, the analysis found. When excluding the tech industry over the same period, public companies that were “fully flexible” outperformed by 13 percentage points.

Lovich, whose firm worked on the analysis with Scoop, says the report doesn’t yet show that flexible policies _cause_ higher revenue growth. Rather, she says flexible policies are one likely “symptom” of a culture that trusts workers, has other employee-friendly benefits and values forward-thinking strategies, technology and ideas. “If they’re less restrictive on \[remote\] work policies, they’re probably more pro-innovation, more purposeful and more engaging,” Lovich says, all of which could lead to higher revenues. “I doubt those companies would be taking attendance and measuring badge swipes.”

## Unlocking Global Talent: The Power of Fully Remote and Flexible Work in Fostering Diversity and Driving Organizational Success

In today's interconnected world, the shift towards fully remote work has become instrumental in cultivating a more diverse and dynamic workforce. This transformation extends beyond geographical boundaries, allowing organizations to access talent pools from various states and countries. The collaboration of individuals with diverse backgrounds, experiences, and skill sets enhances the workplace's richness and contributes to the success of the organization.

Fully remote and flexible work bring people together from different countries, promoting collaboration among individuals who may have been initially hesitant to participate. Remote work significantly impacts fostering a culture of inclusivity, unlocking global talent, and contributing to the prosperity of forward-thinking organizations.



**A guide to distributed teams**

[https://increment.com/teams/a-guide-to-distributed-teams/](https://increment.com/teams/a-guide-to-distributed-teams/)

## Without good judgment your creativity will lead to projects that make no sense.

![Logic](./images/logic2.webp)

[https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/](https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/)


# Key Remote Work Statistics

<https://www.forbes.com/advisor/business/remote-work-statistics/>

### As of 2023, 12.7% of full-time employees work from home, while 28.2% work a hybrid model

Currently, 12.7% of full-time employees work from home, illustrating the rapid normalization of remote work environments. Simultaneously, a significant 28.2% of employees have adapted to a hybrid work model. This model combines both home and in-office working, offering flexibility and maintaining a level of physical presence at the workplace .

Despite the steady rise in remote work, the majority of the workforce (59.1%) still work in-office. This percentage underscores the fact that while remote work is on an upswing, traditional in-office work is far from obsolete.

## By 2025, 32.6 million Americans will work remote by 2025

Looking ahead, the future of remote work seems promising. According to Upwork, by 2025, an estimated 32.6 million Americans will be working remotely, which equates to about 22% of the workforce. This projection suggests a continuous, yet gradual, shift towards remote work arrangements.


### 98% of workers want to work remote at least some of the time

Interestingly, workers’ preference for remote work aligns with this trend. A staggering 98% of workers expressed the desire to work remotely, at least part of the time. This overwhelming figure reflects the workforce’s growing affinity towards the flexibility, autonomy and work-life balance that remote work offers.

### 93% of employers plan to continue conducting job interviews remotely

From the employers’ perspective, the acceptance of remote work is evident as well. A remarkable 93% of employers plan to continue conducting job interviews remotely. This indicates a willingness to adapt to virtual methods and signals the recognition of remote work as a sustainable option.


### 16% of companies operate fully remote

About 16% of companies are already fully remote, operating without a physical office. These companies are pioneers in the remote work paradigm, highlighting the feasibility of such models and paving the way for others to follow.


## It's Time to Retire the Phrase 'Hybrid Work' or 'Work from Home'

<https://time.com/charter/6302454/its-time-to-retire-the-phrase-hybrid-work/>


## Flexible, not remote

The word “remote” means too many things now. 

> It gets used to describe the working arrangements of people who live as digital nomads, those who work from home, and those who work from anywhere. 

Muddling things even further, it’s also used to describe a movement around flexibility and choice—and inaccurately so. Time and again, research has demonstrated that what most people want isn’t necessarily full-time work outside an office, but the freedom to work where, and when, they’re at their best. They want a blend of regular time together with their team, and autonomy at the team level to figure out what’s right for them.

And even more, they want schedule flexibility. The ability to break away from assumptions that the nine-to-five window is always open for meetings or interruptions is more desired by employees—and has a much bigger impact on their engagement and outcomes—than location flexibility. For every executive worried about productivity and thinking about office policies, let’s take a step back and look at the bigger problem: You have too many hours wasted, and too little focus time for people to do good work.


## Distributed, not hybrid

“Hybrid” is most often used to describe a setup requiring a minimum number of days in the office for the entire organization—a one-size-fits-all that we’d never apply to customers, but do to our most important asset, our people.

The first issue with such policies is that the needs and rhythms of teams are highly variable. Take one example my co-authors and I described in our book How the Future Works: At the biotech company Genentech, the R&D lab workers have different needs than the finance team or the operations team. Sales teams have different rhythms than engineering teams. In any organization, a schedule that serves one team will inevitably hinder another.

The bigger problem, though, is that hybrid-work setups too often stop at a simple solution (for example, “three days a week in the office to be with your team”) when in reality almost any medium or large organization is distributed. The more you grow, the greater the likelihood that employees aren’t all showing up to work in the same city, let alone the same office. Leading a workforce that’s spread out across cities and time zones creates a need for more active coordination, higher dependence on digital tools, and proactive training of managers.

The rise of remote workers is only one part of the broader growth of teams that are distributed across buildings, cities, and time zones.

Leading distributed teams is a challenge that requires training, the right tools, and support. But one of the great discoveries of the pandemic was that every worker who didn’t work from “headquarters” could find themselves on a level playing field with those who did. So it shouldn’t surprise anyone, when companies announce that four days a week in the office is essential for team-building, that employees don’t buy it.

> One intriguing example of a distributed workforce is blockchain governance, such as the [OpenGov of Polkadot](https://polkadot.polkassembly.io). In this system, your work is approved and paid through consensus, allowing you to work independently. Additionally, it features a tipping system with varying amounts of funds allocated for different types of work.




## Outcomes, not productivity

Productivity measures are blunt instruments that make little sense in a world where the most important aspects of work are complex, creative, and interdisciplinary. But we keep trying to use them, often in the worst ways. Recent Slack research found that 60% of executives rely on “visual activities” (hours logged in, emails sent) as the main way to measure productivity. Metrics like revenue per employee aren’t much better: If it’s declining, is that because employees are less productive, or is it the economy, your competition, their training, your overhiring, or any of a raft of other reasons?

One thing is certain: If all managers are trained to do is manage employees based on hours worked, you’re clearly not getting the best out of your teams. We need to shift to the hard work of building outcomes-driven organizations, a process that requires creating clear, prioritized objectives and ways to measure progress.

Outcomes-driven management also creates the potential for more inclusive organizations. For too long, hustle culture—rewarding those who show early and stay late—has provided a favorable advantage to those without caregiving responsibilities, as well as those who can afford to live closer to the office. By prioritizing actual output over the visible trappings of work, organizations can improve business results and create a more level playing field.

One need to also take account [tyranny of share holders](./democracy/tyranny_of_the_majority.md#tyranny-of-shareholders) in outcomes.

> The concept of the "tyranny of shareholders" refers to a situation in which corporations prioritize the interests of their shareholders above all other stakeholders, such as workers, suppliers, consumers, and communities. This approach to corporate governance is often associated with the doctrine of "shareholder primacy," which asserts that the primary purpose of a corporation is to generate profits and maximize shareholder value. While maximizing shareholder value is a critical aspect of corporate governance, the exclusive focus on it can lead to negative consequences for other stakeholders.

---


# review five morally dubious educational ideas

Review of Five morally dubious educational ideas  :  
[https://gregashman.wordpress.com/2018/01/22/five-morally-dubious-educational-ideas/](https://gregashman.wordpress.com/2018/01/22/five-morally-dubious-educational-ideas/)  
  
1) Should we abolish exams? No, it should be a part of the assessment Let it come under peer review. Let them retake assessment till they have not reached their goals. It's more to do with designing of questions in exams, what is taught and quality of formative assessment to make the exam successful. Standardized testing only to test the foundational learning that is required for every child or every child of the specific stream.  
2) Students should engage in projects and inquiry learning  
Yes, they should engage, but in a guided manner, where teacher or mentor will scaffold the entire process. Projects and inquiry learning is only a part of learning and is not complete, explicit teaching is as important as inquiry learning.  
3) Education is preparation for future employment  
No education is preparation for self-employment, self-reliance, and getting the job done with collaboration or collective intelligence by utilizing diversity and specialization.  
4)  Personalised learning is the future of education  
Hyper-personalisation means isolation, dehumanizes the learning environment.  
[https://larrycuban.wordpress.com/2018/01/20/why-i-left-silicon-valley-ed-tech-and-personalized-learning-paul-emerich/](https://larrycuban.wordpress.com/2018/01/20/why-i-left-silicon-valley-ed-tech-and-personalized-learning-paul-emerich/)  
5) We need to teach kids to be (the right kind of) activists  
No, we should teach them to be good leaders, givers, and matchers.  
[https://www.businessnewsdaily.com/3647-leadership-definition.html](https://www.businessnewsdaily.com/3647-leadership-definition.html)  
[https://www.ted.com/talks/adam\_grant\_are\_you\_a\_giver\_or\_a\_taker](https://www.ted.com/talks/adam_grant_are_you_a_giver_or_a_taker)

---


# road planning of cities

# Road Planning for Cities

- date: 27-05-2023
- update: 07-06-2025


---
categories:

- "city-planning"

---

## Cycle Lane in Median


<video width="100%" controls preload="none" poster="./images/car_lane_median.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeigg3pec6krwxsmevdq3ucaih5wspxn3342gqkvdw26veoqceozqpu/Road%20Planning.mp4" type="video/mp4">
</video>



![Road planning](./images/road-planning.png)


> A cycle lane located in the median effectively addresses the issue of encroachment, such as unauthorized parking of cars and pedestrians using the cycle lane for walking.
>
> However, the presence of a cycle lane in the median poses a challenge when cyclists need to exit the lane to reach destinations such as markets or homes. To mitigate this issue, it is essential to construct suitable traffic signals and bridges that facilitate safe transitions for cyclists.


### Few Problems and the Feasibility of Median Lanes vs. Side Lanes for Cycle Tracks

#### 1. Conflict with Hawking Zones
- If you provide dedicated hawking zones, there is a possibility that a customer might get distracted—say, enjoying the spice of a snack like Panipuri—and unintentionally step into the cycle corridor.
- While educating hawkers about the importance of keeping cycle lanes clear is possible, it is impractical to educate every customer not to stray into the lane. How can such conflicts be minimized?

#### 2. On-Street Parking Hazards
- On-street parking presents a risk: car users exiting their vehicles might inadvertently open doors into the path of cyclists, creating potential accidents.
- How does the design of cycle lanes address this hazard and ensure the safety of cyclists in such situations?

#### 3. Shade and Retail Visibility Conflict
- Segregated and dedicated cycle lanes alone are insufficient; shaded lanes are critical for usability, especially in hot climates.
- However, adding trees for shade might obstruct the visibility of retail outlets, leading to resistance from shopkeepers concerned about their livelihood.
- How can urban planners balance the need for shaded cycling lanes with the economic concerns of shopkeepers?

#### 4. Challenges from Continuous Road Development
- In India, the left side of roads is frequently dug up for utility work—electricity, water, or telecom installations—causing repeated disruptions.
- Median roads, in contrast, are rarely affected unless a major construction like a flyover is underway.

### Proposal: Median Cycle Lanes
- Cycle lanes positioned at the road median may be a better solution to address these conflicts.
- Median lanes minimize disruptions from hawking zones, on-street parking conflicts, and ongoing utility work.
- To provide access to side zones, well-designed intersections or crossing points can be included.

Would this approach mitigate these challenges effectively?

<video controls width="500">
    <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeielwy4dwhok3wjp5anrf3oaps47tilthie6depxnfpu5wm2r4oj4i" type="video/mp4">
    <!-- Add additional source elements for different video formats if needed -->
    Your browser does not support the video tag.
  </video>

[Video Link](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeielwy4dwhok3wjp5anrf3oaps47tilthie6depxnfpu5wm2r4oj4i)

## Cycle lanes on the sides and unauthorized parking

![Cycle lane on side](./images/cycle-lane-on-side-1.png)

> An alternative approach to consider is the implementation of cycle lanes on the sides of national highways, which may not be suitable for within cities. It's important to note that unauthorized parking is primarily a concern within cities, rather than on highways.
> indicates trucks only when bus is not present, Trucks can operate during nighttime when there is reduced traffic from buses and cars.

In India we do need a motorcycle/ebikes lane as motorcycle are also efficient modes of transport like cycling and one in three households in India own motorcycle. Also, due to hot weather of India, cycling can be exhausting. Without a motorcycle lane problem will be like this:

![Motor Cycle](./images/motor-cycle.jpeg)

## Bicycles, Hot Weather and 15 mins cities

In India, bicycles face challenges when it comes to widespread adoption due to the hot weather. You can start perspiring within just 5-10 minutes of riding. India's climate differs significantly from that of the Netherlands, where cycling is more popular. Additionally, winters in India now last less than two months a year due to climate change. However, you can still consider using electric cycles (e-cycles) and electric bikes (e-bikes) as eco-friendly alternatives to cars.

You can conduct a small experiment. I walked for 2.5 kilometers at 10 AM when the sun was shining. I was almost completely exhausted due to the humidity and hot weather. However, I can walk in the early morning before 7 AM or in the evening after 6 PM.

So, you can still take walks in the early morning and evening, even during the hot summer. This habit can greatly benefit your mental and physical health.

Additionally, constructing [15-minute cities](https://www.huckmag.com/article/what-its-actually-like-living-in-a-15-minute-city) can address the issue of exhaustion, as it minimizes the need for extensive travel by keeping destinations within a short distance.

One can also construct cycling and pedestrian lanes with integrated solar panels on top, providing shade to the lanes. This not only protects you from the sun but also generates renewable and non-polluting energy.

### Cycle track with integrated solar panels in Hyderabad

![Cycle track solar pannel](./images/cycle_track_solar_panel.jpg)

## Green Canopy: The Impact of Urban Trees on City Environments

We can also have a tree canopy on the roadside to decrease the temperature. Due to the continuous widening of roads, we cut down trees instead of planting them. We also hardly provide them enough time to grow, widening the roads again and cutting them down.

> Compared to continuous urban fabric, land surface temperatures (LSTs) observed for urban trees are on average 0-4 K (or 0-4°C) lower in Southern European regions and 8-12 K (8-12°C) lower in Central Europe. Treeless urban green spaces are overall less effective in reducing LSTs, and their cooling effect is approximately 2-4 times lower than the cooling induced by urban trees.
>
>Trees influence urban climate primarily via shading and transpiration and also via albedo. Shading can strongly reduce daytime LSTs and air temperature.
>
> *- [The role of urban trees in reducing land surface temperatures in European cities](https://www.nature.com/articles/s41467-021-26768-w)*

![Trees Temprature](./images/trees_temprature.jpg)

## Why are bike/cycle lanes empty?

> Next time someone criticizes an "empty bike lane," remind them it because they’re efficient.

This efficiency contrasts with the congestion and space consumption often associated with cars. The critique should be reframed not as a flaw in the bike lane but as an opportunity to highlight the drawbacks of traditional car-centric infrastructure.


## Should we consider banning cars?

It's not about adopting an all-or-nothing approach, but rather the imperative need to significantly reduce car usage with specific exceptions. For instance, we could limit private car use, allowing only public cars for booking, especially during emergencies. Exceptions can also be made for disabled individuals who rely on cars for mobility.



![Mobility Pyramid](./images/mobility-pyramid.jpg)

> Disabled people are actually less likely to drive than nondisabled people, and more likely to get around by walking, rolling, or taking public transit. Car-heavy cities are also disproportionately dangerous for disabled individuals.

[Do Car-Free Zones Hurt Disabled People? We Asked Experts.](https://www.motherjones.com/environment/2024/12/car-free-disability-congestion-walkable-cities/)


## These Animated Videos Show Just How Much Space Cars Waste In Our Cities

<iframe width="560" height="315" src="https://www.youtube.com/embed/06IjfbqdnNM?si=O2wC4JqZqTjUrVld" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[https://www.fastcompany.com/3063344/these-animated-videos-show-just-how-much-space-cars-waste-in-our-cities](https://www.fastcompany.com/3063344/these-animated-videos-show-just-how-much-space-cars-waste-in-our-cities)


## Can't wait for the road to be widened

> One thing we know for SURE — building and widening highways ALWAYS succeeds in helping sell more cars, gas and suburban sprawl; burning more public budgets; and increasing GHG emissions. So if THOSE are your goals, it’s the perfect thing to do.
>
> Just don’t expect it to reduce traffic.
>
> -Brent Toderian


![Widened roads for cars](./images/widened-roads-for-cars.jpeg)

## City Traffic Sucks! They Should Widen the roads

![More cars](./images/more-cars.jpg)

## 🚌 150 people overtaking 50 people. Separating the lane is not hard.

<video width="100%" controls preload="none" poster="./images/bus_lane.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeiddh2kuqvg5kg2trcm6iquynmlx2tobtagqeczcvdu4zej3hdlhwq/Bus%20vs%20Cars.mp4" type="video/mp4">
</video>

## Car free cities are good for local businesses

For local businesses, car-free areas are very beneficial, as people using alternative transportation are more likely to shop locally and are more loyal to retailers. Even though they tend to not spend as much as car drivers, they visit the shop more frequently. A 2016 study of over 100 cities showed that pedestrian-only streets increased retail sales by around 49%. As many city centres are dying, car-free measures should be considered much more frequently.

[Citychangers article](https://citychangers.org/the-case-for-car-free/)

## Concrete roads for cars create flooding

Traditional concrete roads are impermeable, meaning water cannot pass through them, causing rainwater to accumulate on the surface and potentially lead to flooding in cities. Some approach like constructing local roads with tiles over a sand base is more permeable. Water can seep through the gaps between the tiles and be absorbed into the underlying sand, thus helping to manage and reduce the risk of flooding by allowing water to infiltrate into the ground.

![Tiled roads](./images/tiled_roads.jpg)

Tiles over sand. A simpler solution to the water logging problem, without the use of any advanced technology

Some advanced technology too exists, to make roads permeable to water, more research needs to be done about its practicality.

This 'thirsty' concrete absorbs 880 gallons of water a minute — here's how it works

[https://www.businessinsider.com/how-magical-concrete-absorbs-water-2015-9?IR=T](https://www.businessinsider.com/how-magical-concrete-absorbs-water-2015-9?IR=T)

![Cars not life](./images/cars_not_life.jpg)

![Car count](./images/car-count.png)

![Cars vs Bus, Bike](./images/car_bus.jpg)

## Traffic in Gurgaon

![Traffic in Gurgaon](./images/traffic-in-gorgaon.jpeg)

## Traffic in Hyderabad IT corridor

  <video controls height="500">
    <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeihvp7sphelthx5pvbycljfqg6jvkfnek2ledkzpodj2ddcsxagiky" type="video/mp4">
    <!-- Add additional source elements for different video formats if needed -->
    Your browser does not support the video tag.
  </video>

## Get your self a car, looser. What do you think you are?

<video width="100%" controls preload="none" poster="./images/bike_rails.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeif2zk6albeippcaugynwclhsiakl7t3eqcrcoi2vbbqunffphlfvq/get%20a%20car%20looser.mp4" type="video/mp4">
</video>

## Effect of Media

> Picture a scenario where electric vehicles (EVs) in various countries incur a mere 5% tax, while cycles face a higher tax rate of 12%. Notably, electric cars benefit from subsidies and climate financing, whereas cycles, including e-cycles, do not enjoy any financial support. Economic policies lacking thoughtfulness, influenced by the Bandwagon effect—a narrative perpetuated by capitalists, advertisers, and the media, asserting that EVs and driverless cars are the ultimate solutions— inadvertently result in undesirable consequences.

![Media electic cars](./images/media_electric_cars.png)



Here is a booklet for Street design manual:

[https://www.oslo.kommune.no/getfile.php/13441080-1646147194/Tjenester%20og%20tilbud/Plan%2C%20bygg%20og%20eiendom/Byggesaksveiledere%2C%20normer%20og%20skjemaer/Gatenormal%20og%20normark/Gate-%20og%20veinormaler/Street-design-manual\_ENG.pdf](https://www.oslo.kommune.no/getfile.php/13441080-1646147194/Tjenester%20og%20tilbud/Plan%2C%20bygg%20og%20eiendom/Byggesaksveiledere%2C%20normer%20og%20skjemaer/Gatenormal%20og%20normark/Gate-%20og%20veinormaler/Street-design-manual_ENG.pdf)

## [5 steps to making better cities](https://www.fastcompany.com/90278237/5-steps-to-making-better-cities)

Any city can push itself to be better, but they usually go through this learning curve first.

I’d rather have cities doing the right thing badly (at first), than continuing to do the wrong thing better.

## Accidents due to traffic: Addressing Road Safety

Approximately 1.5 lakh people die due to road accidents every year in India. While one may attribute road accidents to traffic, narrow roads, and bad driving, the main underlying reason is the presence of heavy vehicles, particularly cars, which occupy a significant amount of space, leaving little room for pedestrians and bikes. Car-centric roads also require [more maintenance](./economics/dismissing_return.md), increasing the likelihood that roads will not be repaired, so more accidents. By promoting the use of public transport, such as buses, accident rates can be drastically reduced.

## How Cars are Destroying India?

<iframe width="560" height="315" src="https://www.youtube.com/embed/XgCPOrRKiOM?si=hhj-zri9ZfzDM7_K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


Dhruv Rathee effectively outlined the detrimental impact of cars, yet he took a softer stance on the idea of banning them. While he asserted that an immediate ban would harm the economy, he fell short of providing a thorough explanation.

Banning cars is not analogous to demonetization, where 99% of currency was eliminated, resulting in the loss of at least one million jobs—all for the deceptive rhetoric of combating black money. Although a car ban may pose challenges for the Indian automotive industry, the benefits far outweigh the potential harm. Even tech giants like Google and Facebook have undergone mass layoffs, but displaced employees often find alternative jobs. Prioritizing job preservation at the expense of environmental degradation and pollution reflects myopic/ short-sighted thinking. Employment opportunities can be created by investing in green infrastructure and [generating green jobs](https://www.weforum.org/agenda/2023/01/renewable-energy-transition-green-jobs/), like in the public transport sector, which includes the development of electric buses.

Furthermore, a complete ban may cause some discomfort, but practical solutions can be implemented. For instance, a system could be established through a mobile app, allowing individuals to apply for a limited number of car usage instances based on emergencies or specific reasons. Implementing a quota system, such as allowing cars to run 10-15 times every six months, and facilitating car rentals through the app, would address concerns while promoting responsible car usage.

Approximately 5-10 percent of the Indian population owns cars. Therefore, an immediate car ban is unlikely to impact 90% of the population, who rely on public transport and bikes. While public autos may increase, they too need regulation. The wealthy have become a societal disgrace, a trend supported by data indicating that the world's richest 10% contribute to half of the global carbon emissions.

## The Unsustainable Nature and High Cost of Car-Centric Infrastructure

Car-centric infrastructure, such as broad roads and flyovers, demands extensive investments from the government. This investment is often funded through national debt, placing a significant financial burden on the country. Moreover, these structures necessitate continuous maintenance to ensure their safety and functionality. Unfortunately, without proper upkeep, these roads become hazardous due to the formation of potholes and an increased risk of accidents.

In the long run, car-centric infrastructure fails to solve the traffic problem and can exacerbate other issues. The vast expanses of concrete impede water percolation, leading to flooding during heavy rainfall. Additionally, this infrastructure primarily benefits car owners, who predominantly belong to the higher-income bracket, while neglecting the needs of the majority of the population.

A more sustainable and equitable approach to transportation infrastructure would be to invest in public transport systems, such as efficient and affordable buses, trains, and metro systems. By doing so, the government can provide a reliable, cost-effective, and environmentally-friendly means of transportation for all citizens. This would not only alleviate traffic congestion but also contribute to a cleaner and healthier urban environment.

## Metro Trains vs. Buses: Where Should Government Invest for Better Urban Mobility?


#### How Indian Cities Failed Public Transport | A Quint Deep Dive

<iframe width="560" height="315" src="https://www.youtube.com/embed/JkNLUZa5INk?si=NbjS8SAGzd3Pc0J7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The hesitance to adopt metro systems in many Indian cities can be attributed to several intertwined factors:

#### Short Trip Distances

The majority of commutes in Indian cities are under 10 km. For such distances, using a metro, which often involves multiple mode changes (e.g., taking an auto or bus to and from metro stations), becomes cumbersome.

For trips shorter than 15 km, the time and energy saved by the metro don't outweigh the convenience of direct door-to-door options like bikes, autos, or personal vehicles.

#### First and Last Mile Connectivity Issues

Commuters often face challenges in reaching the metro station and then traveling from the station to their final destination.

This adds extra time, cost, and effort, reducing the attractiveness of using the metro.

#### Radial and Distributed Urban Layouts

Unlike linear cities like Mumbai, which have concentrated travel corridors, most Indian cities have a radial and distributed structure.

This results in diverse travel patterns, with people commuting in various directions over shorter distances, making metro systems less efficient.

#### Preference for Private Vehicles

Rising incomes and an aspirational middle class have fueled private vehicle ownership. Cars and two-wheelers offer unmatched convenience and flexibility for short commutes.

Congestion exacerbates the problem, as even though roads are crowded, the number of passengers per vehicle remains low.

#### Metro's Limited Applicability

Metro systems excel in scenarios with long trip distances (15 km or more) and extremely high demand corridors (20,000–30,000 commuters in one direction during peak hours).

For cities with low trip distances and dispersed demand, metros aren't the optimal solution.

#### Public Transport Decline

Historically, many Indian cities had robust bus networks and other public transport systems. Over time, the rise of private vehicles and lack of investment in public transport infrastructure led to its decline.

As cities grew, public transport options failed to keep pace, pushing commuters towards personal vehicles.

#### Perceived Complexity

For many, the thought of switching between multiple modes—autos, metros, buses, and walking—is seen as time-consuming and exhausting compared to the simplicity of direct modes like personal vehicles or app-based bike rides.

#### Cost vs. Value

While metro rides might seem cost-effective, the overall journey cost increases when first and last-mile expenses are added. This, coupled with the effort involved, makes alternatives more appealing.

## How Can We Make Public Transport More Comfortable for People?

Making public transport more comfortable for passengers is essential to encourage its use and improve the overall commuting experience.


[Strategies to Make Public Transport Comfortable](./public_transport/comfortable_public_transport.md)

## Trams: The Ideal Urban Transport for Smaller Cities

For smaller cities, metro railways are often not cost-effective. However, trams can be a viable alternative. Trams are spacious and, unlike buses, are less likely to cause motion sickness due to their smoother and more stable ride. Additionally, trams run on electricity, which means they do not release fossil fuel emissions, making them an eco-friendly solution that helps reduce pollution.

Lithium-ion batteries are a scarce resource. Instead of subsidizing EVs, we should focus on expanding tram networks as a more sustainable alternative. Trams are an efficient replacement for cars, buses, and trucks. Trams can reach speeds of up to 80 km/h at longer distances but typically average around 20-25 km/h in built-up areas due to frequent stops and traffic conditions. Trams offer an efficient, long-term solution to urban transportation without the need for large battery supplies.

![Trams](./public_transport/tram.webp)


## Why your city needs a tram?

<iframe width="560" height="315" src="https://www.youtube.com/embed/QyNwBBzt2XU?si=JCNd18aTJ7X8Gxbe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Congestion pricing is a novel idea to fix traffic and encourage people to use public transport.


**Congestion pricing** is a system that charges drivers a fee for using certain roads during peak times. The goal is to reduce traffic congestion, improve air quality, and encourage the use of public transportation.

[What Is Congestion Pricing?](https://www.nrdc.org/stories/what-is-congestion-pricing)

Here are some key benefits:
1. **Reduced Traffic Congestion:** By charging drivers during peak hours, congestion pricing encourages people to travel at off-peak times or use alternative modes of transportation. This leads to faster travel times and less gridlock.

2. **Improved Air Quality and Public Health:** Reduced traffic lowers emissions of pollutants like nitrogen oxide and particulate matter. For example, in London, congestion pricing cut nitrogen oxide emissions by 13.5% and particulate matter by 15.5% in its first year, leading to better air quality and longer life expectancy. In Stockholm, childhood asthma hospital visits were nearly halved due to cleaner air.

3. **Economic and Social Equity:** Lower-income households, especially those near highways, are disproportionately affected by pollution-related health issues like asthma. Reducing traffic and emissions can improve health outcomes in these communities.

4. **More Profitable and Efficient Public Transport:** Reduced road congestion leads to faster and more reliable public transportation. The increased demand for public transit can make it more profitable, allowing for reinvestment in better services and infrastructure.

5. **Revenue Generation for Infrastructure:** The funds collected from congestion pricing can be used to improve public transportation, maintain roads, and invest in sustainable urban infrastructure.

In New York, congestion pricing is expected to deliver these benefits while also addressing health disparities in low-income neighborhoods, improving the overall quality of life.

![Congestion Tax](roadplan/congestion-tax-3.png)

![Congestion Tax](roadplan/congestion-tax-4.png)

---


# self managed institutes

# When do self-managed institutes work?


While self-management offers numerous benefits, such as increased flexibility and employee satisfaction, it also presents unique challenges, particularly in a remote work environment. In this article, we explore the importance of leadership in guiding self-managed teams and ensuring productivity and cohesion.


Self-management entails entrusting employees with the responsibility to organize and execute their tasks independently, without [constant supervision or micromanagement](./micromanagement.md). However, this autonomy can lead to disarray, especially when employees are working from home. Without the structure of a traditional office setting and the presence of colleagues and supervisors, workers may struggle to stay focused and meet deadlines.

One of the key roles of a leader in a self-managed institute is to provide guidance and support to employees, helping them navigate the challenges of remote work and stay on track. While it's not about micromanaging every aspect of their work, leaders can employ strategies such as nudge theory to subtly influence behavior and encourage productivity.

[Nudge theory](./reasoning/fallacies.md#nudge-theory), popularized by behavioral economists Richard Thaler and Cass Sunstein, suggests that small, positive reinforcements or gentle reminders can lead to significant changes in behavior. In the context of self-managed teams, leaders can use intermittent feedback sessions to provide guidance, address concerns, and keep employees motivated. These sessions, held every hour or two, serve as checkpoints to assess progress, offer assistance, and ensure alignment with organizational goals.

For example, in an economics class, a teacher might begin by [summarizing or explaining a video lesson](https://mru.org/courses/principles-economics-microeconomics/introduction-microeconomics). Then, they can ask the students to engage in retrieval practice for 45 minutes. After this period, the teacher can provide feedback, clarify any doubts, and answer questions for 15 minutes.


Also, one can set up local community centers for individuals to sit and work remotely, especially in cases where the home environment might not be suitable, [particularly for working women](./rethinking-work-culture.md#challenges-of-working-from-home-for-women-in-india-caregiving-and-the-patriarchal-system).


Furthermore, the success of self-managed institutes hinges on the presence of effective leaders who possess strong leadership qualities and self-control. Identifying individuals with these attributes and entrusting them with leadership roles is crucial for the smooth functioning of self-managed teams. Leaders who can inspire and motivate their team members, maintain discipline, foster a culture of collaboration, and have the necessary skills to [evaluate evidence to determine what works and what does not](./reasoning/evidence-based_medicine.md), are invaluable assets in a self-managed environment.

## Equitable money distribution as motivation to work

[Equitable money distribution and inclusivity](./empowering-communities-decentralizing-supermarkets-through-public-ownership-and-control.md#equitable-money-distribution-and-inclusivity)

---


# sex redefined the idea of 2 sexes is overly simplistic

Biologists now think there is a larger spectrum than just binary female and male

The baby was fine—but follow-up tests had revealed something astonishing about the mother. Her **body was built of cells from two individuals**, probably from twin embryos that had merged in her own mother's womb. And there was more**. One set of cells carried two X chromosomes**, the complement that typically makes a person female; **the other had an X and a Y**. Halfway through her fifth decade and pregnant with her third child, **the woman learned for the first time that a large part of her body was chromosomally male**. “That's kind of science-fiction material for someone who just came in for an amniocentesis,” says James

Sex can be much more complicated than it at first seems. According to the simple scenario, the presence or absence of a Y chromosome is what counts: with it, you are male, and without it, you are female. But doctors have long known that some people straddle the boundary—**their sex chromosomes say one thing, but their gonads (ovaries or testes) or sexual anatomy say another**. Parents of children with these kinds of conditions—known as intersex conditions, or differences or disorders of sex development (DSDs)—often face difficult decisions about whether to bring up their child as a boy or a girl. **Some researchers now say that as many as 1 person in 100 has some form of DSD.**

References:

[https://www.scientificamerican.com/article/sex-redefined-the-idea-of-2-sexes-is-overly-simplistic1/](https://www.scientificamerican.com/article/sex-redefined-the-idea-of-2-sexes-is-overly-simplistic1/)

---


# should we allow the government to tax crypto

Recently Indian government passed a bill with a 30% tax on profits on crypto trading.

**Using cryptocurrency doesn't mean tax avoidance**.  
Using cryptocurrency doesn't mean tax avoidance. We can tax with the in build algorithms of cryptocurrency.  
The reason for which we need tax collection is because of the tragedy of commons. People's self-interest doesn't allow funding of public goods that are free. People are likely to overuse public roads or public hospitals without paying for maintenance. That's the reason govt takes a cut and spends the money on public goods.

**Are government tax collection is optimal?** You can find many politicians and rich businessmen to evade tax through offshore accounts like Swiss banks away from country jurisdiction. It's always been a privilege for the rich to avoid taxes, where the burden of tax is left to the common people, despite 1% of the rich holding 90% of the wealth, furthering the income inequality.

**But are government spending of tax optimal?**  
If the government spends Rs 1, only about Rs. 0.1 reaches the people. Most money is taken by the middle man. And it's not surprising that govt spend Rs 4000 crore on advertisements to win election. More like, 80% funds on beti bachao beti padhao is used in ads. This is how they spend money. [India report Rs 5 trn of bank fraud](https://www.business-standard.com/article/finance/banks-in-india-report-loan-fraud-worth-rs-5-trn-sbi-s-amount-largest-121052400494_1.html) and these are paid by people as taxes. With recent bank fraud discovered ([ABG Shipyard](https://economictimes.indiatimes.com/news/india/the-abg-shipyard-scam-inaction-on-red-flags-as-indias-biggest-bank-fraud-unfolded/articleshow/89613817.cms)) with Rs 22,842 crores, India's biggest bank fraud. Not just that, [fiat money is used for criminal activities, terrorist funding and remain untraceable](https://www.forbes.com/sites/tatianakoffman/2020/09/27/the-hidden-truth-behind-money-laundering-banks-and-cryptocurrency/?sh=7dbb03af7b37) unlike public transparent ledger of blockchain.

As govt can print any amount of money in central banks, it also funds for war during conflict bringing misery to the people but it's not possible with decentralized cryptocurrency. Take for example Russia attack on Ukraine or any war that has happened till now, from where does the money come from?

**Decentralized Tax, the New Alternative**  
We can have the optimal and programmatic distribution of money with game theory so that there is no tax evasion. Whether you are rich or poor you can't escape the algorithms. There is no such thing as bad loans in crypto, as all money are algorithmically distributed, so loan fraud are not possible with crypto.

Some examples are [Proof of Humanity](https://app.proofofhumanity.id/) which provides UBI to every person.  
Similarly, [Avrit Learning](https://avrit.reaudito.com/), a decentralized education system.

There are lots of experiments that are conducted worldwide for paying local police, homeless people, or hospitals.

Taxing on cryptocurrency by the government is a regressive step. It slows down the adoption of cryptocurrency and keeps you with the suboptimal parasitic government. If you trade or invest with crypto where will the money go? It will go to UBI, so that every citizen earns an income, it will go to the education where students earn for learning, and many other decentralized systems and decentralized supply chains that are present or yet to come.

There are many developed countries that keep cryptocurrency trading tax-free. Why is India which is even a developing country with a far lot of challenges the cryptocurrency solves be left behind? How can they even tax decentralized currencies? By turning the country into a surveillance state?

Tax havens for the masses: How crypto makes tax evasion easy?

[https://www.coininsider.com/cryptocurrency-tax-evasion/](https://www.coininsider.com/cryptocurrency-tax-evasion/)

> It is not practical to tax crypto, due to privacy coin that uses technology like [zk-snarks](https://www.youtube.com/watch?v=Z0s4W3UBxM8) to anonymize transactions, so criminal and whales can easily evade the tax, it's the innocent and naive who can fall in the trap. Such disastrous tax law is only meant for stopping of innovation in web3 and investing in the future by building use cases like decentralizing governance and supply chains. Startup India and ArtmaNirbharBharat are just empty promises and marketing propaganda to earn votes. In reality, they want to stop innovation and want innovators to shift other countries and causing massive brain drain from India.

Privacy coins will obsolete income tax.

[https://onezero.medium.com/how-crypto-could-bring-tax-evasion-to-the-masses-bb4060766147](https://onezero.medium.com/how-crypto-could-bring-tax-evasion-to-the-masses-bb4060766147)

People should understand this and don't fear. India has a massive youth population who can easily learn technology, their disobedience can bring the govt to knees. [We need a decentralized governance.](https://shivarthu.reaudito.com/)

11 Countries That Don't Tax Bitcoin Gains (2021)

[https://decrypt.co/43513/countries-that-dont-tax-bitcoin-gains](https://decrypt.co/43513/countries-that-dont-tax-bitcoin-gains)

India is also launching its own digital currency. Mainstream media is doing rigorous campaign by counting its advantages. But it's not a cryptocurrency. Its anti-cryptocurrency.

> In reality, you should panic when central bank is bringing such programmable currency. It's going to be easy for the central bank to turn off any wallets they want to turn off, because of political issues or crime fighting or whatever. It will give complete control of citizen to government. A complete dictatorship like china.

![](https://iambrainstorming.files.wordpress.com/2022/02/2022-02-06_21-41.png?w=906)

https://forkast.news/china-cbdc-digital-currency-e-rmb-launch-preview-andrew-work/

---


# shouldnt there be whatsapp number for reporting simple issues to police

Share your views on quora: [http://qr.ae/RoAGa0](http://qr.ae/RoAGa0)  
  
Today I tried dialing to police with number 100 to report a simple fraud call that my aunt received.  

The person who called was asking for ATM pin. When my aunt was able to find the call was fraud, the person started speaking in vulgar language. When I said, I will report it to police, he said that "Police kya tumhara uncle lagta hai" (Is police your uncle). See how fearless they are. There is not even a little fear of police.

  

And this case is not new. Its a general issue with most families.

  

When I complained about it to police by dialing 100. They said to come to police station to report the case.

I can understand that police might be receiving lots of call that are important. But why there is no helpline numbers to report such problem.

  

If police are hesitant to receive such call, then there should be a whatsapp number to report such cases so that people can text them and later police can review it and take action based upon their priority. Even sending SMS is also a great idea.  
  
Also people should be encouraged to report such cases by creating awareness.  
  
We can find twitter accounts of police officers of Bangalore. This should be implemented even in other states.  
  
Please also see how people appreciate Kerala Police:  
Why does Kerala have a higher crime rate even though most of the population is well educated?  
[http://qr.ae/RoAG05](http://qr.ae/RoAG05)  
  
Why can't this is possible all over India?

---


# social distancing and its impact in economy

> Coronavirus and social distancing can prepare us for a healthy economic model that can work for any period of time. 

Pollution rates are going down, lakes are becoming clean, deers are coming to the roads. In other words, nature is taking over the world. 

People are working from home and are getting more family time.

All these are transcendent for human beings, which needs to be celebrated.  

But many politicians are concerned that it will have a serious negative impact on the economy? But is it so? Or it's because of the present economy itself is in bad design.

Social distancing promotes remote working:

Here is why remote working is the best way of working.

[https://iambrainstorming.wordpress.com/2020/02/16/how-to-beat-the-worst-job-culture-of-india/](https://iambrainstorming.wordpress.com/2020/02/16/how-to-beat-the-worst-job-culture-of-india/)

More autonomy, more productivity, more happiness as you are no more under the robotic control and surveillance of a boss to micromanage all your tasks.

Take for example [https://gitcoin.co/](https://gitcoin.co/) for remote working. 

Take another example of overcrowded schools. Do you require such schools? Or you can learn from home. Local teachers can come to your location. Teachers can also teach remotely. Like in case of higher education, students are first taught locally about [learning strategies](https://iambrainstorming.wordpress.com/2017/01/14/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/) with [close observation](https://iambrainstorming.wordpress.com/2017/08/24/importance-of-educational-videos-and-solving-its-limitation-by-teachers-assistance/) and then after making students autonomous, they can be taught remotely with best content. Less teacher and student ratio and students can maintain an appropriate distance. 

Here are an example and incentive model of how local decentralized schooling can work.

[https://avrit.reaudito.com/](https://avrit.reaudito.com/)

Even democracy and policymaking can be handled remotely or locally without needing transportation or crowding. 

[https://shivarthu.reaudito.com/](https://shivarthu.reaudito.com/)

Regarding handling the supply chain, do we require so many people to handle it? 

Learn from Amazon, how it handles supply chain with automation.

https://www.youtube.com/watch?v=Ox05Bks2Q3s

But the problem with Amazon is it's not decentralized and it's not healthy for our economy. All profits are kept by Amazon, and it kills the income of local sellers. But the decentralized organization can be designed with blockchain using cryptocurrency, which has the same supply chain model of amazon but instead, profits are shared with the customers and incentive models designed is pro-economy. 

All most about 80% of jobs are bullshit, either unnecessary because it can be taken by robots or don't provide any utility which creates negative externalities. The problem is just we don't have a mechanism to distribute the profits with people for the work done by robots. 

**What Is a Bullshit Job?**

Here’s Graeber’s definition, which he constructs carefully over many pages: “**a bullshit job is a form of paid employment that is so completely pointless, unnecessary, or pernicious that even the employee cannot justify its existence even though, as part of the conditions of employment, the employee feels obliged to pretend that this is not the case.**”

[Meaningful Work, Human Nature, and a Free Society](https://www.tikkun.org/newsite/meaningful-work-human-nature-and-a-free-society)

Another good situation coronavirus is creating, is people are leaving the abusive low paying jobs and coming to their homes. 

And regarding currency, many countries are seeking debt or providing heavy currency packages. Remember, the currency is not money. Real money is precious metals like gold and silver that always maintains its value. Such heavy packages can devalue the currency and bring us to the recession. 

https://youtu.be/9RWbVkF5x7M

Cryptocurrency has properties similar to gold and silver. Take for example DAI cryptocurrency coin. 1 DAI pegged to 1 dollar. The dollar can be devalued by bad policies of politicians. But, we can create cryptocurrency using the same mechanism of DAI that is pegged to Gold. Take for example 0.001oz of gold = 1 DAI, so that it never gets devalued. 

> Blockchain is for decentralization and remote working as incentives are not decided by your boss but by the community and game-theoretic algorithms.

https://youtu.be/gcS04BI2sbk

Reinventing Organisations

5G connections and [LPWAN](https://radiobridge.com/blog/lpwan-for-iot-sensors) networks using blockchain can further scaffold the process of remote working and global collaboration.

> We just can't go the previous situation of chaos after coronavirus is controlled. We just need more designers who can bring good incentive models to the blockchain. 

Its time to think right. Money is a fiction and should be treated as such.  
We don't need money to serve the rich and powerful, but to generate good behavior and best services for each and every one. Money was created for the community not just for individual needs.

https://youtu.be/nzj7Wg4DAbs

Sapiens: A Brief History of Humankind

---


# solution to improve colleges and universities

Quora link: http://qr.ae/8njQdN  
  
Students should be allowed to appear the entrance exam only once, in the same year after pass out from 12th.  
  
If this is done, students would have not to waste their time for years only for preparing the entrance exam.  
  
I have seen many students preparing for 5 to 6 years only to get qualified for medical entrance exam. Is  such an effort required?  
  
We study to apply the knowledge, not to waste time for the entrance exam.  
  
Why every student in India dream to study in IITs and IIMs, and Medical? Why not consider other colleges and universities? Why their condition is not improved? Percentage of  the students which qualify for entrance exam is not even 1%.  So why every student has to dream for IITs.  
  
Here is a sure solution to improve other colleges and universities.  
  
Just make a review team for questions paper that students appear in semester exams. Make the criteria that, they cannot set a question that favours rote learning. **The questions should require critical analysis, experimental approach, high order thinking in order to solve them.**  
If this is done, students can't score marks by just memorizing. They have to analyze and **think** to solve. If colleges and universities don't improve in their style of education, it will have a tremendous negative impact on the rating of the colleges and universities as a student will not score well.  
  
Please suggest your views, what you are thinking about the idea.

---


# solving with formula without intuitive method makes student mindless

_**Solving by intuitive methods helps students to understand the working of the formula, which is most important to build strategies for different problems.**_  
  
**But our books and entrances only give most leverage to formula part without the intuitive part**. Take it physics, chemistry or mathematics. Students in coaching centers are mindlessly taught short cut formulas so that they can solve the problem in short time, as there is time limitation in entrances.  
  
Example of Intuitive vs Formula Based in probability (Addition Rule):  
  

[![](images/502a7-screenshot2bfrom2b2017-08-252b17-54-03.png)](https://iambrainstorming.files.wordpress.com/2017/08/502a7-screenshot2bfrom2b2017-08-252b17-54-03.png)

  
  

[![](images/46a2d-screenshot2bfrom2b2017-08-252b17-54-24.png)](https://iambrainstorming.files.wordpress.com/2017/08/46a2d-screenshot2bfrom2b2017-08-252b17-54-24.png)

  
Book: Elementary Statistics (Mario F. Triola)

---


# some of the points that nep national education policy of india should have

[https://www.coggle.it/diagram/V0vLbP976OIbHbm5/f750aeeb633164b14dad1525224fab6c626dff9a87a15c5cbe79d3a8eeca8e69](https://www.coggle.it/diagram/V0vLbP976OIbHbm5/f750aeeb633164b14dad1525224fab6c626dff9a87a15c5cbe79d3a8eeca8e69)  

[![](https://iambrainstorming.files.wordpress.com/2016/05/af356-nep.png?w=300)](https://iambrainstorming.files.wordpress.com/2016/05/af356-nep.png)

---


# steps that can be taken to improve education system

1) MOOCs for Teacher: Every body cares about student education, but no body thinks about teachers. They can only transfer knowledge only if they themselves are well educated with the subjects and knows how to teach scientifically so that the teaching is most productive and knowledge reaches to maximum students. Like students, teachers should also be motivated daily.  
So there should be 1 hour MOOCs for teachers even, where they can listen the lectures and appear exams.  
2) Including courses like Learning How to Learn ([Page on coursera.org](https://www.coursera.org/learn/learning-how-to-learn)) and Becoming a Resilient Person ([edX](http://edx.org/)) and many other study techniques in the syllabus itself. So that students knows how he should study productively without rote learning the things and also learn to cope up with the stress.  
3) MOOCs for Students: In the first phase for about 6 months we should give MOOCs for teachers, than when they are well versed with all the computer technologies, than time for MOOCs for students. But computer (e.g.  cheaper Raspberry pi) should be given to every student in class, so that they can learn at their own pace by repeating the lectures. Lectures should also be given to home for listening. Presenting lectures on a single LED on class does not work.  
  
Let students even make their note by own by repeating the lectures. No need to detect the notes (which is usually done by a teacher, which is like spoon feeding and unproductive)  
Students should also by taught to make notes through mind maps and flow chats using important keywords. These types of notes are easy to memorize and revise.  
Here is a course on Inquiry Based Learning on [edX](https://courses.edx.org/courses/course-v1%3AUniversity_of_TorontoX%2BINQ101x%2B2T2015/)  
  
Dictionary with phonetics and sound is also a must. How will a student read and understand books without strong knowledge of vocabulary?  
  
4) Class should be Student centric not teacher centric: Why teachers has to give non stop lectures? Lectures can be given by MOOCs. Teachers duty is to motivate the students and give them proper resources. So let student discuss about a topic that they have learned through MOOCs with themselves and teachers, let them appear exams online. Let students give the presentation, not teachers.  
  
5) Mind Relaxation: Relaxation techniques like yoga and mediation should also be a must. No need to read for more than 45 or 60 mins. Deep breath for 10 mins and again start learning.  
  
  
You can find more about education I have written on:  
[Idea that needs to be implemented in education portal](http://technoperiod.blogspot.in/2015/05/ideas-need-to-be-implemented-in-mygovin.html)  
[TehnoPeriod Ideas](http://technoperiod.blogspot.com/)  
 and  
[Thoughts](http://thoughtsbyamiya.blogspot.com/)  
  
Discuss on quora: http://qr.ae/7QJ9p9

---


# stopping plastic menace

Suggestion for stopping the plastic menace

> Double or triple the rate of plastics and  
> Make counters for getting back the extra incurred charge by depositing the plastics

Any seller can make such counter, keep the plastic sorted and return back the plastic to the company who has produced it.

Generic plastic counters can also be made where any plastic can be deposited, and some incentives to the people, such as mobile recharge or money can be given.

**Questions and Answers:**

_**Will it work? Plastic crushing units were installed in the railway platform and 10 rupees mobile recharge was being offered for some time. But now these are not functional.**_

It didn't work because we are not charging plastic with double or triple rates, in other words, **we are not taxing for single-use plastic.**

> If people are charged extra, a lot extra for plastic, they will return back the plastic for recycling to get back their money.

Go on increasing the selling price of plastic, and return pricing of plastic till everyone starts depositing plastic. Collect the data, and fix the price.

**But will it be hard to implement?**

No, actually it's easy to implement, products with single-use plastic just have to declare the selling price and return price of the single-use plastic, that's all. The return price should be written on the product package. It's up to the policymakers to decide the return price with collecting data of its working.

**It may decrease the selling of products? So sellers can bear loss.**  

No, as it will impact every seller, i.e. it will also impact the seller competitors. **But it will add complexity to the seller, as they have to handle the recycling of plastic.**

But it will generate more employment and create a healthy economics.

> _Economics is not about just selling products and services without taking care of negative externality, it's about selling products and services that_ **adds value**_, including services that_ **eliminate** _negative externalities._  

Yes, it requires mature politicians or policy makers at work which we don't have. -- [Fair Democracy](https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html)

![](https://iambrainstorming.files.wordpress.com/2019/03/plastic-1.jpg?w=699)

Plastic Fish

Terminology:

**Negative Externality**

> In economics, an externality is the cost that affects a party who did not choose to incur that cost.

Costs are passed along to different members of society beyond the producer and consumer.

![](images/screenshot-from-2019-03-18-18-04-46.png)

[https://mru.org/dictionary-economics/externalities-definition](https://mru.org/dictionary-economics/externalities-definition)

https://youtu.be/CpVf11f09Pk

Norway recycles 97 per cent of its plastic bottles. The key incentive system.

![](images/incentives.jpg)

[https://www.positive.news/environment/norway-recycles-97-of-its-plastic-bottles-a-blueprint-for-the-rest-of-the-world/](https://www.positive.news/environment/norway-recycles-97-of-its-plastic-bottles-a-blueprint-for-the-rest-of-the-world/)

---


# stress rote learning and multiple attempts of board examinations

![](images/screenshot-from-2019-06-04-21-16-04.png)

NEP2019 Draft

> Allowing multiple attempts for board exams of different subjects after semester end is unlikely to reduce the stress of students, it may further increase the burden of students, as they have to read all the chapters or topics of the subject again to score more.

It will be better if they make chapter wise or topic wise exams, with a pass and fail system so that they have reattempt only those chapters which they have failed.

> It not only reduces stress, but students will master the topics.

**Classrooms can have mastery-based grading**

![](images/screenshot-from-2019-06-04-21-25-50.png)

[https://www.edutopia.org/article/blended-learning-built-teacher-expertise](https://www.edutopia.org/article/blended-learning-built-teacher-expertise)

In mastery-based grading each topic content should be linked with tests, that checks the conceptual understanding of topics.

Test shouldn't be used in isolation without content. No random test papers without content should be allowed in education system.

An example of guided notes, which prompts questions on every paragraph.

![](images/screenshot-from-2019-06-04-21-36-09.png)

[https://nbviewer.jupyter.org/urls/book-amiyatulu.hashbase.io/Circulatory%20System.ipynb](https://nbviewer.jupyter.org/urls/book-amiyatulu.hashbase.io/Circulatory%20System.ipynb)

![](images/17006-cue_based.png)

Chemistry Concepts and Learning by Clifford C. Houk and Richard Post

---


# students and lecturers of india should be asked to review research articles

Peer-review increases critical thinking, questioning, and reasoning skills among research faculties should be given in projects to earn credits, not just for publishing paper, in universities  
  
A peer-reviewer decides and introspects the authenticity of the article. Finding the error in a technical article requires rigorous effort and knowledge about the subject. Also, a peer-reviewer contribution is outstandingly important and shouldn't be ignored when compared with the author.  
  
Post-publication peer-review and pre-publication peer-review, both can be given to research faculties, so that they can earn credit for it.  
  
**What projects can be given to students at elementary schools and undergraduate or higher  level?**  
  
**Let's talk about a project at undergraduate level:**  
After a particular concept of a subject is taught, e.g genetics, students can be asked to review an article searching the database such as PubMed using the keyword.  
  
Let them describe a particular article in the class.  
  
But to describe a particular article, guidelines should be made.  
  
**How does a debate happen in schools in India?**  
Most of the debate that happens in schools are not debate. Only you will find the nervous speaker (student) giving the speech and other students become almost passive, no participation at all. Teachers judge students based upon how efficiently he/she has spoken in confidence, how was his/her accent, almost no credits for what he/she spoke on the topic or how much knowledge he/she has or gained about the topic. Also, when in the stage, children forget about what to speak in nervousness and are disqualified.  
  
**Here are the changes we should make:**  
1) The discussion should be inquiry based in a trivial manner, the way students communicate with each other when not in class.  
2) No judgment for asking stupid questions, as long as it is in the context of the subject.  
3) Students should be taught what probing questions are, and should be encouraged to ask such type of questions.  

[![](https://iambrainstorming.files.wordpress.com/2016/08/05e7e-questioning.png?w=300)](https://iambrainstorming.files.wordpress.com/2016/08/05e7e-questioning.png)

4) The student can use the written article paper to describe it.  
5) The teacher should make sure that all participate in the discussion, and share question and answers with each other.  
6) There will be many many questions which students wouldn't know, sometimes nor the teacher. These questions should be noted down on paper by a student.  
It's a general tendency of our students to expect our teacher to know everything, and teacher also pretends to know everything by ignoring the questions asked or sometimes they again counter question the students to harass them so that they stop asking. **Such a perception is too harmful hinders the growth of both teacher and student.**  
7) Next, homework should be to find those answers by both student and teacher, and discuss it in next class.

---


# suggestions for changes in lessons of ncert chemistry book 2

**Chemistry Book:**

NCERT Chemistry book requires a complete reinvention, with eliminating most units that are unrequired at the higher secondary level and making it more systematic with the flow of information and building new connections by using prior information.  
e.g. How quantum mechanical model is linked with explaining the properties of elements and molecules? And before explaining the quantum mechanical model, it's needed to explain what are model and theories.  
From Britannica:  
Scientific modeling, the generation of a physical, conceptual, or mathematical representation of a real phenomenon that is difficult to observe directly. Scientific models are **used to explain and predict the behavior of real objects** or systems and are used in a variety of scientific disciplines.

**The Higher secondary level is meant to know the basics first with the foundational understanding of the mechanism of concepts in detail. It should be relevant to students day to day life to know their surrounding and about themselves that makes them a better thinker and decision maker.**

Separate chapters Hydrogen, s-Block Elements, Some p-Block Elements in the 11th book and p-block elements, d and f-block elements in the 12th book of inorganic is unnecessary, as the chapter on periodic properties of elements and quantum mechanical models is enough to describe **what** _chemical and physical properties elements have_ and **why** _they have_.  
These two chapters must be studied in enough details.

[![](https://iambrainstorming.files.wordpress.com/2017/05/31e9b-periodic-table.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/05/31e9b-periodic-table.png)

Also separate chapter for Hydrocarbons, Haloalkanes, Haloarenes, Alcohols, Phenols, and Ethers, Aldehydes, Ketones and Carboxylic Acids, Organic Compounds containing Nitrogen is _completely irrelevant for students, as it contains only chemical reactions that are easily forgettable after exams are over,_ and **doesn't much contribute to deep thinking**.

So instead, organic chemistry chapter should be divided into two to three chapters which includes Bond-Line drawing, Resonance, Acid-Base Reactions, Geometry, Nomenclature, Conformations, Configurations, **_Mechanisms_**, and a _single small chapter for_ Alkanes,Alkenes, Alkynes, Aromatic Hydrocarbons, Alcohols, Aldehydes and Ketones, Carboxylic Acids and Esters, Ethers, Amines which describes the most important structural, physical and chemical properties. The _physical properties should include concrete real-world examples_, e.g. to explain saturated hydrocarbons, talk about hydrogenated vegetable oils, and why they are solid at room temperature and why unsaturated ones are liquid with examples. And _chemical properties should be always linked with the structure and mechanisms to describe a reaction_.

[![](images/fae98-rote.png)](https://iambrainstorming.files.wordpress.com/2017/05/fae98-rote.png)

The chapter for Radioactivity and Nuclear Chemistry is missing and should be included in the book.

The chapter like solutions, chemical kinetics, solid states and other chapters that require numerical problems to solve are filled with short cut formulas that are unnecessary and they don't contribute anything towards students understanding.  
Please look at **openstax chemistry** (https://openstax.org/subjects/science) or **Nivaldo J Tro chemistry**, how formulas are kept minimum, and only first principle formulas that help in student comprehension are retained.

Also, the book lacks experimental techniques about **how scientists take measurements** such as Mass Spectroscopy(Atoms, Molecules, Ions), X-Ray Crystallography (Solid state), Chromatography, and should be included in their respective chapters.

**The beginning of the book:**  
The first chapter of the book should talk about different aspect of **scientific method** such as scientific inquiry, proposing and testing hypothesis, empirical and measurable evidence, testability, falsifiability, reproducibility, scientific reasoning (inductive and deductive), with working examples of chemistry and exercises to build scientific thinking among students.

![scientific_approach](images/scientific_approach.png)

_Nivaldo J Tro Chemistry_

  
It should also contain **general problem-solving strategies**, such as sorting what's given, building a conceptual plan for solving and checking answers.  
Solving problems using units as a guide (dimensional analysis), conversion factors should also be included in this chapter (it's already there in the book, but problems are not solved in that manner).

![strategy](images/strategy.png)

Nivaldo J Tro Chemistry

Please go through the blogpost:  
Features that a book should contain:  
[https://iambrainstorming.ml/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/](https://iambrainstorming.ml/all-books-that-dont-meet-the-learning-criteria-must-be-taken-off/)

---


# suggestions for changes in lessons of ncert chemistry book

**Chemistry Book:**  
  
NCERT Chemistry book requires a complete reinvention, with eliminating most units that are unrequired at the higher secondary level and making it more systematic with the flow of information and building new connections by using prior information.  
e.g. How quantum mechanical model is linked with explaining the properties of elements and molecules? And before explaining the quantum mechanical model, it's needed to explain what are model and theories.  
From Britannica:  
Scientific modeling, the generation of a physical, conceptual, or mathematical representation of a real phenomenon that is difficult to observe directly. Scientific models are **used to explain and predict the behavior of real objects** or systems and are used in a variety of scientific disciplines.  
  
**The Higher secondary level is meant to know the basics first with the foundational understanding of the mechanism of concepts in detail. It should be relevant to students day to day life to know their surrounding and about themselves that makes them a better thinker and decision maker.**  
  
Separate chapters Hydrogen, s-Block Elements, Some p-Block Elements in the 11th book and p-block elements, d and f-block elements in the 12th book of inorganic is unnecessary, as the chapter on periodic properties of elements and quantum mechanical models is enough to describe **what** _chemical and physical properties elements have_ and **why** _they have_.  
These two chapters must be studied in enough details.  
  

[![](images/cf198-rote.png)![](images/cf198-rote.png)](https://iambrainstorming.files.wordpress.com/2017/05/810a7-periodic-table.png)

  
  
Also, the book lacks experimental techniques about **how scientists take measurements** such as Mass Spectroscopy(Atoms, Molecules, Ions), X-Ray Crystallography (Solid state), Chromatography, and should be included in their respective chapters.  
  
**The beginning of the book:**  
The first chapter of the book should talk about different aspect of **scientific method** such as scientific inquiry, proposing and testing hypothesis, empirical and measurable evidence, testability, falsifiability, reproducibility, scientific reasoning (inductive and deductive), with working examples of chemistry and exercises to build scientific thinking among students.  
It should also contain **general problem-solving strategies**, such as sorting what's given, building a conceptual plan for solving and checking answers.  
Solving problems using units as a guide (dimensional analysis), conversion factors should also be included in this chapter.

---


# suggestions on rationalising curriculum

**Inviting suggestions on rationalising curriculum/ syllabus/ subject contents for class I to class XII with the objective of all round development of students**

"It has been envisioned that in order to develop a fairer and more egalitarian society comprising of well-balanced human beings, in addition to cognitive and analytical skills,adequate attention on activities like life skills, experiential learning,health and physical education, sports, visual and performing arts,literary & creative skills, and work based education are indispensable. Though the existing curriculum does incorporate these skills, however, the load of curriculum in cognitive and analytical area seems to be so heavy that students practically do not get much time to develop skills in other areas.

In order to balance the curriculum for cognitive and analytical areas with curriculum in other life skills including creativity and sports, specific suggestions are invited from teachers, academics, students, parents and other stakeholders associated with school education. The objective is to make the content more balanced in various subjects offered from class I to class XII as prescribed by NCERT/CBSE."

http://mhrd.gov.in/suggestions/

The present education system does **NOT** incorporate cognitive (connected with mental processes of understanding) and analytical area. So, it's a false reason that because of the load of the curriculum in the cognitive and analytical area seems to be so heavy that students practically do not get much time to develop skills in other areas.

Evidence:  
[https://nbviewer.jupyter.org/urls/cbse-probing.hashbase.io/Chemistry%202017.ipynb](https://nbviewer.jupyter.org/urls/cbse-probing.hashbase.io/Chemistry%202017.ipynb)

But what if we make the curriculum more cognitive and analytical?  
Yes, it will create the same condition: "Students practically do not get much time to develop skills in other areas" IF the content is loaded with so much of concepts. Think of giving an upper high school student a pedagogically right master-level book. Even though the student can learn the book, but it will be very time consuming to master all concepts.

> So, the curriculum should be clear about what to include and what to exclude. 

e.g. Its possible to teach all chapters of Chemistry (Nivaldo J Tro) in two years which has pages of about 1315. 
**It's possible because the content quality is too good, so it saves time and achieves the purpose of true learning.**  
The questions don't ask to reproduce the texts and are cue based.  
[https://iambrainstorming.wordpress.com/2018/02/17/question-designing-should-be-brain-friendly-cue-based/](https://iambrainstorming.wordpress.com/2018/02/17/question-designing-should-be-brain-friendly-cue-based/)  
So you spend more time on analysis, than on memorizing the abstract formulas, equations, reactions, and structures.  
But remember, it takes two years, not one year, which our student usually study, because there is no pressure on the first year, as there are no exams. As all concepts are interlinked,  a second-year student will face substantial trouble and pressure to grasp the concepts in one year.

Now, add 1000 pages of organic chemistry (L. G.Wade Jr) and 1000 pages of  Inorganic chemistry (Armstrong). It is also impractical to teach in two years. It will usually take 5-6 years if you have other subjects to master.

Creativity should be linked to the curriculum so that its fun and enjoyable with learning.  Regarding arts and sports, **it improves the brain functioning, and helps you to take more content, not less,** _it's about managing the time, with spaced learning._ Make a ritual of formative assessment that includes no stake tests and retrieval practice, with well-designed questions and students will always find time to play, no pressure, and best results in final tests. Its no more about rote memorizing, or scoring marks by hook or crook.

---


# teaching looping to students

The most difficult concept for teaching programming to new students is looping.

> Students often fail to understand looping because they don't run the loop in their **head**, and don't think what will be the value of the variable in each loop.

The following way of commenting on the loop will help students to understand the loop quickly.  
Ask them to run the loop in the head, and then comment on what the variables will be in each step of the loop.

Remember to maintain the format while writing the comment, don't use short cuts, it will hinder the understanding.

![](https://iambrainstorming.files.wordpress.com/2019/11/loopconcept-1.png?w=1024)

Loops with comments

squares = \[\]
for value in range(1,11): #loop1 -> value=1, #loop2 -> value=2, #loop3 -> value=3
 square = value\*\*2 #loop1 -> value=1, square=1, #loop2 -> value=2, square=4, #loop3 -> value=3, square=9
 print(squares) #loop1 -> squares=\[\], #loop2 -> squares=\[1\], #loop3 -> squares=\[1,4\]
 squares.append(square) #loop1 -> square=1, squares=\[1\], #loop2 -> square=4, squares=\[1,4\], #loop3 -> square=9, squares=\[1, 9\]

The comment example for each loop:

#loop1 -> value=1, square=1, #loop2 -> value=2, square=4, #loop3 -> value=3, square=9

Code without comments:

squares = \[\]
for value in range(1,11): 
 square = value\*\*2 
 print(squares)
 squares.append(square) 
 

Loop 1

squares = \[\]
for value in range(1,11): #loop1 -> value=1
 square = value\*\*2 #loop1 -> value=1, square=1
 print(squares) #loop1 -> squares=\[\]
 squares.append(square) #loop1 -> square=1, squares=\[1\]

Loop 2

squares = \[\]
for value in range(1,11): #loop1 -> value=1, #loop2 -> value=2
 square = value\*\*2 #loop1 -> value=1, square=1, #loop2 -> value=2, square=4
 print(squares) #loop1 -> squares=\[\], #loop2 -> squares=\[1\]
 squares.append(square) #loop1 -> square=1, squares=\[1\], #loop2 -> square=4, squares=\[1,4\]

An so on...

![](https://iambrainstorming.files.wordpress.com/2019/11/output.png?w=684)

  
e.g. write:

loop1 -> value=1, square=1

no short cuts like  
1,1

**Other bad practices of programming by students and teachers:**

**1) Separation of theory and practical class**

Programming is best learned by doing on the computer, but in most colleges, a teacher teaches programming with the blackboard.

As a result, students don't have debugging skills. Writing codes in the paper is completely different from that of writing in computers. Codes need to be too precise in logic and syntax to give the result.

Neither the students are given any projects.

  
**An example of project-based learning:**

https://www.youtube.com/watch?v=Ke90Tje7VS0

2) **Students copy-paste code** from stackoverflow or the internet, without knowing the working of each statement.  
Students, please spend some time to understand the code before using it in your program.

You can't make the program working by simple copy-pasting the code. A complete program is made by many components linked together. A failure in single component will make the complete program useless.

**3) Not commenting or documenting the code** so that it can be revisited later  
Commenting and documenting helps you think hard about the code. You may feel like it's taking more time, but in reality, it saves time. All your future codes or projects will have faster development, and you will fall in less trouble.  
Always use comments and document your code.  
Use elaboration interrogation, retrieval practice, and spacing to revisit later on, so that logic and syntax go to your long term memory.  
You can use open-source tool like cherrytree for notetaking including programming

An example of commenting where comments are **numbered** so that you _**can know the sequence of coding**_, and easily understand the code later on.

![](https://iambrainstorming.files.wordpress.com/2020/01/coding.png?w=1024)

![](https://iambrainstorming.files.wordpress.com/2020/01/screen2020-01-20_120754.png?w=573)

[](https://www.goodreads.com/book/show/3735293-clean-code)[Clean Code: A Handbook of Agile Software Craftsmanship](https://www.goodreads.com/book/show/3735293-clean-code)

![](https://iambrainstorming.files.wordpress.com/2020/01/screen2020-01-20_121352.png?w=554)

**4) Not using good IDE**

> Some teachers argue that new learners should learn to program without IDE, but I disagree with it. IDE doesn't tell you how to write code so that students cheat, it actually helps to write clean code, and students get nudges of errors and formatting.

Use good IDE like vscode and sublime text, use linter to find bugs, learn shortcuts to writer faster codes, use code snippets, and _always use self-explanatory variable names_, take care of indentation and spacing so that code looks pleasing to read and use code formatter like Prettier and memorize its short cut keys.

Students also don't use and learn linux, which is very developer-friendly and increases productivity.

**5) Writing a lot of code before testing.**

Write a small part of the code and then test it. Never write a lot before testing because it will be hard to find the cause of the bug while testing. Always use console.logs and print statements to track the variables.

> Quitting bad practices can be hard, and needs some time and reasoned feedback when done wrong; learning good ones requires conscious deliberate practice with self-awareness.

## A nice blog about 10 Signs You will Suck at Programming:

[https://blog.usejournal.com/10-signs-you-will-suck-at-programming-5497a6a52c5c](https://blog.usejournal.com/10-signs-you-will-suck-at-programming-5497a6a52c5c)

---


# the case for paid menstrual leave and its paradoxical impact

Menstruation is a natural biological process, but for many women, it comes with severe pain that can interfere with daily activities. According to the American Academy of Family Physicians, [up to 20% of women suffer from menstrual cramping](https://amp.theguardian.com/lifeandstyle/2016/oct/24/period-pain-menstruation-cramps-dysmenorrhea) severe enough to affect their daily lives. This article argues for the need for paid leave for menstruation, citing the challenges women face in addressing extreme period pain in the workplace.

Reasons for Paid Menstrual Leave:  
**Medical Validity:**

- Dysmenorrhea, the medical term for extreme period pain, is a common issue affecting a significant percentage of women.

- The pain can be debilitating, making it difficult for women to perform their regular work duties.

**Medical Disparities:**

- Women's pain, in general, is sometimes not taken as seriously as men's, leading to delayed or inadequate medical attention.

- Studies, such as "The Girl Who Cried Pain," reveal biases against women in the treatment of pain, further underscoring the need for acknowledgment and support.

**Workplace Challenges:**

- Women already face numerous challenges in the workplace, including biased performance reviews and promotion disparities.

- The societal stigma surrounding menstruation can contribute to women hesitating to speak up about their painful experiences, potentially hindering their professional growth.

**Menstrual Leave Policies:**

- Some companies, like Coexist, have implemented menstrual leave policies to allow women to take time off during their periods.

- These policies aim to address the specific needs of women experiencing extreme menstrual pain.

Paradox: Negative Impact on Women in the Workplace:  
While advocating for paid menstrual leave is crucial for addressing the immediate needs of women, there exists a paradoxical argument suggesting that such policies may negatively impact women in the workforce.

**Employer Bias:**

- Introducing menstrual leave policies may lead to increased biases against hiring or promoting women, as employers may view them as potential liabilities due to the perceived need for additional time off.

**Preferential Treatment:**

- Some argue that it is more equitable to provide paid leave for both men and women to avoid singling out women for a specific type of leave.

- Equalizing leave policies for both genders may promote fairness and discourage potential biases against women in the workplace.

**Reduced Working Hours:**

- An alternative solution could involve a [reduction in overall working hours](https://hbr.org/2021/09/the-problem-with-greedy-work) for everyone, promoting a healthier work-life balance.

- This approach avoids singling out specific groups for leave and ensures that all employees benefit from a more flexible work schedule.

Conclusion:  
While advocating for paid menstrual leave addresses the immediate needs of women experiencing extreme period pain, it is essential to consider the potential paradoxical impact on women in the workforce. Striking a balance by promoting equal leave policies for both genders or exploring alternatives like reduced working hours can contribute to a fair and inclusive work environment.

https://www.youtube.com/watch?v=uvh4\_YSaUmo

Guys Try PERIOD PAIN SIMULATOR!

---


# the competitive collaboration algorithm

Competitive Collaboration Algorithm:

> It's a decentralized network where you compete to collaborate.

Edge weight represents difficulty to get connected. Difficulty depends on factors such as distance, location, quality, price.

> We need to choose subgraph containing all the required nodes (e.g. nodes containing a,b,c,d ) that has a minimum weight or optimal weight.

[![](images/4d8b0-weighted_graph2.png)](http://iambrainstorming.files.wordpress.com/2018/10/4d8b0-weighted_graph2.png)

a,b,c,d can represent different services, whereas a1, a2 represents the same services from a different service provider. For example, 'a' can represent a student, 'b' can represent a teacher, 'c' can represent content provider such as a biology textbook and 'd' can represent a classroom or building. Similarly  'b1' represents teacher1, 'b2' represents teacher2, etc.

**So, For student1 (a1), _the optimum subgraph or subgraph with minimum weight containing all the required services_ are a1,b1,c2, d2 with weight 0.5+2.3+4.2 .**

**Usefulness of the model:** 1) Prediction: One can make a prediction using the model, to select the best subgraph or services for an individual. Entrepreneurs can use the data to set up new nodes, based on the requirements of people. Policymakers can use the data to evaluate the quality and provide suggestions for the optimal functioning of the network. 2) Equal chance to everyone: Its fairer and everyone can get an equal chance to reach their goals.  It will bring competition for quality. Equal chance means many selected subgraphs for many individual will have similar weight, the possibility of getting similar weight increases when we increase the nodes. 3) Continuous Improvement: If any single subgraph, even a node of subgraph gets upgraded and refined, it builds a pressure on other subgraph and nodes to upgrade through competition. 4) No burnouts: Nodes shall not suffer from burn out problems as there is a division of work time between people and a division of labor. 5) Non-hierarchical and autonomous: As different nodes are independent of each other and are free to connect to other nodes, there is no hierarchy or concentration of power or monopoly. No need for management, teachers, and students self-manage their work. 6) Updated and Validated information: Nodes are protected by game-theoretic incentive system, those who behave frivolously are punished.

**An implementation**: Avrit App:

[https://avrit.reaudito.com](https://avrit.reaudito.com)

Resources: Code: [https://github.com/amiyatulu/competitive\_collaboration](https://github.com/amiyatulu/competitive_collaboration)

Other Links: Public-private partnership schools & colleges and its implementation [https://iambrainstorming.blogspot.com/2017/06/public-private-partnership-schools-and.html](https://iambrainstorming.blogspot.com/2017/06/public-private-partnership-schools-and.html)

---


# the lok sabha election is about regional parties vs one party dictatorship

# The Lok Sabha election is about regional parties, third parties and independent vs one-party dictatorship.

## date: "2023-12-05"

---
categories:
  - "politics"
---

### Quiz

## Interactive Quiz Link:

You can use the quiz to spread awareness about EVM and test your knowledge of how much you know about EVM.

[Click on the link](https://interactive-five.vercel.app/evm)

#### Quiz for Indian election and EVM

{{#quiz election/evm.toml}}

#### Quiz on voting method

{{#quiz election/election-science.toml}}



What strategies has the BJP employed?

1. Casting Hindus as victims and promoting nationalism.

2. Positioning Congress as the opposition and trolling Rahul Gandhi. Portraying Modi as a supreme leader ( but a [cult leader](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafkreifezrdzrlijxtzcoohi4k35ypa3aikfnrdkiqqw75clnd7xrsqism) in disguise) and discrediting Rahul Gandhi as unfit for the PM role. It's crucial to note that the opposition is not the Congress, which currently holds only 50 seats in the Lok Sabha and may at most reach 150. Moreover, Rahul Gandhi is not PM candidate; the INDIA bloc is a coalition of regional parties, requiring a nuanced narrative.

3. Propagating unrealistic dreams, such as inflating the GDP with excessive zeroes and aiming for a 5 trillion-dollar economy in five years.

4. Distributing freebies and money during campaigning/election.

More than 10,000 WhatsApp groups are actively involved in disinformation campaigns, leveraging national media for Hindu-Muslim narratives.

**[How to tackle disinformation?: Link](./how-to-tackle-disinformation.md)**

> People need to understand the intensity of the problem. We are just in a small margin to [dictatorship](./democracy/fascism.md). Opposition and people need to make no mistake. We need to break the brute force majority of one party. Lok Sabha and Rajya Sabha are safeguards of the constitution. Now, Lok Sabha is completely useless. Rajya Sabha is in a small margin. We need not give more than 20% of seats to BJP again.

[Necessary sources of political power](../chapters/democracy/fascism_power.md)

[From Dictatorship to Democracy: A Conceptual Framework for Liberation](https://www.nonviolent-conflict.org/resource/from-dictatorship-to-democracy-a-conceptual-framework-for-liberation/)

Data: [https://github.com/amiyatulu/election\_result/blob/main/2019\_loksabha/src/loksabha\_seats.json](https://github.com/amiyatulu/election_result/blob/main/2019_loksabha/src/loksabha_seats.json)

Total data: [data_analysis/analysis_data/lokshabha2019](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data/lokshabha2019)

Votes by percentage: [analysis_data/lokshabha2019/state_party_data_sorted_percentage/party_votes_by_state_percentage.json](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/analysis_data/lokshabha2019/state_party_data_sorted_percentage/party_votes_by_state_percentage.json)

**State-wise analysis (2019 Lok Sabha election):**

## Hindi States

In Hindi states like Gujarat, Rajasthan, Chhattisgarh, Uttarakhand, Haryana and Himachal Pradesh, the BJP secured almost 100% of seats, with Congress only holding one or two seats. The absence of other opposition or regional parties in these states allows the BJP to effectively use the tactics of trolling Congress and promoting the Hindu victim narrative. Limited options for voters make these strategies particularly effective. Using Hindi states, the BJP managed a one-party dictatorship with 300 seats in the Lok Sabha, sidelining all opposition parties and democratic values.

## INC got 32% of votes in Gujarat, yet zero seats

So the case of other states:

```json
{
    "Gujarat": {
        "BJP": {
            "votes": 18091275,
            "percentage": 62.20788595983407
        },
        "INC": {
            "votes": 9337084,
            "percentage": 32.10609847395451
        }
    },
    "Rajasthan": {
        "BJP": {
            "votes": 18968392,
            "percentage": 58.47031404395368
        },
        "INC": {
            "votes": 11107910,
            "percentage": 34.240276459489735
        }
    },
    "Chhattisgarh": {
        "BJP": {
            "votes": 6902477,
            "percentage": 50.69962781464669
        },
        "INC": {
            "votes": 5569183,
            "percentage": 40.90640292342263
        }
    },
    "Uttarakhand": {
        "BJP": {
            "votes": 2954833,
            "percentage": 61.013395829999425
        },
        "INC": {
            "votes": 1520767,
            "percentage": 31.401828440456953
        }
    },
    "Haryana": {
        "BJP": {
            "votes": 7357347,
            "percentage": 58.016213493381244
        },
        "INC": {
            "votes": 3604106,
            "percentage": 28.42010620795462
        }
    },
    "Himachal Pradesh": {
        "BJP": {
            "votes": 2661281,
            "percentage": 69.11104174479034
        },
        "INC": {
            "votes": 1051113,
            "percentage": 27.29644649380949
        }
    }
}
```

**BJP got all the seats**

```json
{
    "Gujarat": {
        "BJP": 26
    },
    "Rajasthan": {
        "BJP": 24,
        "RLTP": 1
    },
    "Chhattisgarh": {
        "INC": 2,
        "BJP": 9
    },
    "Uttarakhand": {
        "BJP": 5
    },
    "Haryana": {
        "BJP": 10
    },
    "Himachal Pradesh": {
        "BJP": 4
    }
}
```

**Why is there no other opposition in these states?**
The First Past the Post (FPTP) voting method maintains a biparty political system. Even if Congress garners 30-40% of votes, it may end up with zero seats because only candidate with highest vote wins, and other votes get waste. What if these 30% seats would have gone only to few constituency? Manipulation of EVM is another variable. (Details about EVM below) A potential strategy for Congress could be targeting specific constituencies, especially those with weaker opponents, to secure a few seats. Winning a seat with just 1% of the vote is possible under FPTP, emphasizing the importance of strategic planning.

## States with Competitor

States with more opposition include Maharashtra, Uttar Pradesh, Bihar, and Delhi.
The INDIA bloc must address this challenge by avoiding vote splitting, fostering unity, and strategizing effectively. Leaders like Priyanka Chaturvedi in Shivsena, Akhilesh Yadav in Uttar Pradesh, and Arvind Kejriwal in Delhi play crucial roles.

```json
{
    "Maharashtra": {
        "BJP": {
            "votes": 14912139,
            "percentage": 27.58735969765187
        },
        "SHS": {
            "votes": 12589064,
            "percentage": 23.28968612918375
        },
        "INC": {
            "votes": 8792237,
            "percentage": 16.265580991835147
        },
        "NCP": {
            "votes": 8387363,
            "percentage": 15.516566737727999
        },
        "VBA": {
            "votes": 3743560,
            "percentage": 6.925561535453877
        }
    },
    "Uttar Pradesh": {
        "BJP": {
            "votes": 42858171,
            "percentage": 49.55767597558957
        },
        "BSP": {
            "votes": 16659754,
            "percentage": 19.263973970448536
        },
        "SP": {
            "votes": 15533620,
            "percentage": 17.96180491901854
        },
        "INC": {
            "votes": 5457352,
            "percentage": 6.310434528359497
        }
    },
    "Bihar": {
        "BJP": {
            "votes": 9619548,
            "percentage": 23.573474928517186
        },
        "JD(U)": {
            "votes": 8902719,
            "percentage": 21.81682789483805
        },
        "RJD": {
            "votes": 6270769,
            "percentage": 15.36702304557582
        },
        "LJP": {
            "votes": 3206979,
            "percentage": 7.858959594856339
        },
        "INC": {
            "votes": 3140797,
            "percentage": 7.696775288720634
        }
    },
    "NCT OF Delhi": {
        "BJP": {
            "votes": 4908541,
            "percentage": 56.55644905203495
        },
        "INC": {
            "votes": 1953900,
            "percentage": 22.51293119539413
        },
        "AAAP": {
            "votes": 1571687,
            "percentage": 18.109054348582536
        }
    },
}
```

```json
{
    "Maharashtra": {
        "BJP": 23,
        "IND": 1,
        "AIMIM": 1,
        "NCP": 4,
        "SHS": 18,
        "INC": 1
    },
    "Uttar Pradesh": {
        "BJP": 62,
        "BSP": 10,
        "SP": 5,
        "ADAL": 2,
        "INC": 1
    },
    "Bihar": {
        "BJP": 17,
        "JD(U)": 16,
        "LJP": 6,
        "INC": 1
    },
    "NCT OF Delhi": {
        "BJP": 7
    }
}
```
In Delhi, even if AAP wins the Assembly Election, people haven't traditionally voted for them during the Lok Sabha polls because they typically don't favor Congress at the center. However, this time things have changed. AAP is now part of a national party coalition. It's crucial to remember that the INDIA bloc is not synonymous with Congress. Congress currently holds about 50 seats, and it's unlikely to surpass 150 or 200 only after they win in Hindi states. The INDIA bloc is, in fact, a coalition of regional parties, characterized by decentralization and power-sharing. Nevertheless, winning in Hindi states remains crucial for achieving a majority. So, the INDIA bloc needs to work hard to secure Congress's victory and must address the situation if Congress doesn't cooperate.

## East India States

East India states, including West Bengal and Odisha:
West Bengal has leaders like Mamata Banerjee and Mahua Moitra, who align with the INDIA bloc. Odisha has Naveen Patnaik, though he has no alliance with anyone, but he is a bit pro-BJP and anti-Congress. The BJD party is a bit more opportunistic toward the state rather than involving itself in national politics. As long as the center benefits them, they hardly care about who is in power at the center.
Last Loksabha election in Odisha, the largest competitor was BJP, not Congress. So, if Naveen Patnaik wants to stop one-party dictatorship, they need to stop supporting BJP.

> All regional parties need to understand what is at stake. They may support BJP, but ultimately, Modi will ditch them after advantage is taken. Their [intentions are clear](./democracy/fascism.md). All need to protest against EVM.

```json
{
  "West Bengal": {
    "AITC": {
      "votes": 24757345,
      "percentage": 43.27679372529672
    },
    "BJP": {
      "votes": 23028517,
      "percentage": 40.25473571614763
    },
    "CPIM": {
      "votes": 3610645,
      "percentage": 6.311546689690433
    },
    "INC": {
      "votes": 3210491,
      "percentage": 5.612062067395416
    }
  },
   "Odisha": {
    "BJD": {
      "votes": 10174021,
      "percentage": 42.75854767828794
    },
    "BJP": {
      "votes": 9130768,
      "percentage": 38.374048851224686
    },
    "INC": {
      "votes": 3285339,
      "percentage": 13.807355446862044
    },
   }
}
```

```json
{
   "West Bengal": {
    "BJP": 18,
    "AITC": 22,
    "INC": 2
  },
  "Odisha": {
    "BJD": 12,
    "BJP": 8,
    "INC": 1
  },
}
```


## South States:

These states pose less of a threat.  In South Indian states Modi is hardly liked. You can analyse other states from the data.

## 2023 Legislative Assembly Election

I have already [discussed the impact of vote splitting and about vote wastage in FPTP voting](./do-we-need-a-supreme-leader-how-can-we-share-power-between-parties.md) and how it prevents third parties and independents from winning.

Here is real data on vote wastage in elections. In [Madhya Pradesh](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/vote_wastage_data_madhay_pradesh.json) 109 out of 230 constituencies, the election outcome would be reversed if we consider the count of vote wastage. This indicates that the majority have voted against the winning candidate.

Similarly, in [Chhattisgarh](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/vote_wastage_data_chhattisgarh.json) 46 out of 90 constituencies, [Rajasthan](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/vote_wastage_data_rajasthan.json) 119 out of 199, [Telengana](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/vote_wastage_data_telangana.json) 68 out of 119, and [Mizoram](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/vote_wastage_data_mizoram.json) 36 out of 40.

Further dissatisfaction by voters, in the form of NOTA, is also evident. They cannot vote for independent candidates because they have almost no chance of winning, and they have preferred NOTA.

In [Madhya Pradesh](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/nota_votes_madhay_pradesh.json), 193 constituencies recorded more than 1000 votes for NOTA. More than 2000 votes in 79 constituencies, more than 3000 votes in 35 constituencies.

In [Chhattisgarh](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/nota_votes_chhattisgarh.json), 64 constituencies recorded more than 1000 votes for NOTA. More than 2000 votes in 46 constituencies, more than 3000 votes in 23 constituencies.

In [Rajasthan](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/nota_votes_rajasthan.json), 178 constituencies recorded more than 1000 votes for NOTA. More than 2000 votes in 70 constituencies, more than 3000 votes in 30 constituencies.

In [Telangana](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/nota_votes_telangana.json), 81 constituencies recorded more than 1000 votes for NOTA. More than 2000 votes in 22 constituencies, more than 3000 votes in 4 constituencies.

[Mizoram](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/nota_votes_mizoram.json) has zero NOTA with more than 1000 votes. But it has worst impact on vote splitting.

- [*Rajastan, No data available for [S203 Karanpur - 3](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/data/rajasthan)*]

Update the repository with Karnapur data of Rajasthan, it became 120 out of 200.


## Votes by Party in 2023 Legislative Assembly Election

Here is the list of total votes in all constituency by party.

[Data by Votes](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data/total_votes_by_party_data)

[Data by Percentage](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data/total_percentage_by_party_data)

### Madhya Pradesh

In Madhya Pradesh BJP got 48% votes, and INC got 40% of votes, where as BJP got 163 seats, INC 66 seats, which means BJP got 70.87% where as INC with 28.70% seats.

Difference in votes between BJP and INC = 8%

Difference in seats between BJP and INC = 42%

### Rajasthan

In Rajasthan BJP got 41% votes, and INC got 39% of votes, where as BJP got 115 seats, INC 69 seats (70 seats with karanpur), which means BJP got 57.50% seats where as INC got 35.00% seats.

Difference in votes between BJP and INC = 2%

Difference in seats between BJP and INC = 22.5%

### Chattisgarh

In Chattisgarh BJP got 46% votes and INC got 42% of votes, where as BJP got 54 seats, INC 35 seats, which means BJP got 60% of seats, where as INC got 38% of seats

Difference in votes between BJP and INC = 4%

Difference in seats between BJP and INC = 22%

### Telangana

In Telangana INC got 39% votes, BHRS got 37% of votes and BJP got 13% of votes, where as INC 64 seats, BHRS 39 seats, BJP 8 seats, which means INC got 53.78% of seats, BHRS got 32.77% of seats and BJP got 6.72% of seats.

Difference in votes between INC and BHRS = 2%

Difference in seats between INC and BHRS = 21%


## Other Legislative Assembly Election

Delhi is an outlier among all the parties, where they have own the true majority in 2020. [Only 17 constituencies where vote wastage own, out of 70](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/analysis_data/vote_wastage_won_data/vote_wastage_data_delhi_legislative_election_2020.json).

In Uttar Pradesh 2022 election, [in 301 constituencies out of 403](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/analysis_data/vote_wastage_won_data/vote_wastage_data_uttar_pradesh_general_election_2022.json), majority have not voted to the winning candidate.

Similarly, in [Punjab, 89 out of 117](https://github.com/amiyatulu/election_result/blob/main/2023_legislative_assembly_election/data_analysis/analysis_data/vote_wastage_won_data/vote_wastage_data_punjab_legislative_election_2022.json), the majority have not voted for the winning candidate. Punjab is a different case, as it has recently been taken over by AAP. One can imagine how difficult it is for a new party with a voting method like FPTP.


## List of Spoilers with decreasing order of votes:

[https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data/independent_list](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data/independent_list)

In the First Past the Post (FPTP) system, a two-party system predominates, and third parties and independents are viewed as spoilers. People are hesitant to vote for them, fearing that it might result in a wasted vote and inadvertently contribute to the victory of the least favored candidate—someone whom the voter actively wishes not to see win.

There are 2303 spoilers in Madhya Pradesh, 1650 spoilers in Rajasthan, 1090 spoilers in Chhattisgarh, and 2053 in Telangana who have almost no chance of winning due to the use of the FPTP voting method.

In other words, FPTP doesn't give a fair chance to every candidate, which goes against the preamble of the constitution. This voting method can be considered unconstitutional.

## **Who is evil, whether it's the people or the voting method?**

In Madhya Pradesh, the BJP would have lost 63 seats, and the Congress would have lost 45 because in these constituencies vote wastage has won, or if we could consider the majority decision. In Rajasthan, the Congress would have lost 42 seats, and the BJP 65 seats. In Chhattisgarh, the BJP would have lost 24, and the Congress 21 if we consider majority decision.

### 2024 LokSabha Election

[286 candidates](https://github.com/silicology/election_data_analysis/blob/main/data/vote_splitting_won.json) would have lost out of 543 candidates if we take the majority votes, which are vote wastage. That's 52% of the seats.

Bharatiya Janata Party (BJP) would have lost 84 seats, and Indian National Congress (INC) would ahve lost 62 seats.

> Can you blame voters if you don't even provide the option and instead force them to vote tactically, thus preventing them from voting for their sincere preference?

[https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data)

## Are all politicians and parties are corrupt? Does it matters whom to vote?

The common argument is that all politicians and parties are corrupt, and it hardly matters whom to vote for. As you can see, there are more than 10,000 candidates who don't get any chance of winning, many of them are independent and are treated as spoilers due to vote splitting. Are all these politicians corrupt? Of course not. Our voting method simply doesn't give a fair chance.

## Pressure for Approval Voting

You can also advocate for a change in the voting method to single-winner Approval Voting in your constituency. However, independents and third parties need to collaborate and demand this change. You can [follow the link](./do-we-need-a-supreme-leader-how-can-we-share-power-between-parties.md) to learn about the benefits of Approval Voting and how it aids third parties or independents.

## How does the India bloc need to select constituency candidates?

India bloc has come a long way from partisanship to inclusiveness in the fight for a common cause. So, why do candidates need to be partisan? India bloc can also include candidates from Independent.

Here are some of the desirable attributes of a good candidate for an election:

1) Independent thinkers: Their goal needs to be to serve the constituency, state, or country, not strong loyalty towards parties. They work in a team or contribute to it, stay with the team even in difficult conditions, but that doesn't mean supporting the wrongdoing within the parties. They need to take an independent stand and ask for practical reform within the team if things go wrong. Their work is not that of a marketing agent for some cult leader or supporting whatever the party does.

2) Some education: Understanding how the world functions has become highly complicated. One can't decipher things without some education. Without a good education, you can't formulate policies, whether in economics, addressing social challenges, or foreseeing the unintended consequences of policy-making.

3) Perseverance: A person serious about politics should be willing to fight for years with steady persistence

4) Rejecting Far-Right Ideologies:
Candidates should steer clear of divisive ideologies such as racism, bigotry, xenophobia, or Islamophobia, as well as authoritarianism. Rejecting charismatic or cult-like leaders, like god-men or women, is essential. True leadership should prioritize democratic principles and the well-being of the people.

## Tackling Vote Splitting

In the First Past the Post (FPTP) system, when multiple candidates with similar ideologies run in a constituency, votes are likely to split, which can make the candidate lose. To address this issue, they need to manage vote splitting by endorsing a single candidate and employing other marketing strategies, such as spreading awareness among the people about the workings of voting methods. Additionally, efforts should be made to reform the constituency voting system, considering alternatives such as Approval Voting or Proportional Representation to effectively tackle vote splitting.

> With Single Winnner Approval Voting, if the INDIA bloc sends three candidates to contest an election in a constituency, the chance of any one of them winning increases substantially. However, with FPTP, the chance of any one of the three winning decreases due to vote splitting.

## Who benefits the most from First Past the Post (FPTP)?

Political parties are commonly categorized into two main types: right-wing and left-wing. To understand these terms, let's delve into their meanings. Right-wing and far-right-wing ideologies often lean towards radical conservatism, ultra-nationalism, and authoritarianism. On the other hand, left-wing politics is associated with principles of social equality and egalitarianism.

However, classifying political parties as strictly right-wing or left-wing can be an oversimplification. The distinction is more nuanced when we consider the diverse ideologies within parties. Political parties are composed of winning candidates, each with their unique set of beliefs and values. Consequently, a party may encompass a range of perspectives, making it challenging to neatly categorize the entire party as exclusively right-wing or left-wing.

**The FPTP voting method centers around the candidate who secures the majority of votes, but who gains the most advantage from this system?** Right-wing voters typically gravitate towards charismatic leaders, demonstrating strong and unwavering support for a single leader. Consequently, they are less likely to split their votes among multiple candidates. On the other hand, left-wing voters tend to embrace egalitarian ideals, expressing themselves more openly and not necessarily favoring a single leader. This makes them more prone to vote-splitting.

In light of these dynamics, it can be argued that FPTP disproportionately disadvantages left-wing leaders. The system, structured to reward the candidate with the most votes in each constituency, may not align with the diverse and expressive nature of left-wing voters. As a result, FPTP tends to favor the cohesiveness of right-wing voters, potentially impacting the representation of left-wing leaders in the political landscape.

## How will you explain FPTP to 5 year old?

Imagine you and your friends live in a hostel, and every day you all have to eat the same thing for lunch. The owner always serves upma, but most of the kids in the hostel don't like it every day. So, they decide to vote to change the menu and have different foods.

Now, the way they vote is a bit confusing. It's called FPTP, which means "First Past the Post." Each person gets to choose their favorite food, and the one with the most votes wins.

Here's how it went:

    50 friends voted for Upma.
    30 friends voted for Dahi Bada.
    10 friends voted for Puri Sabji.
    30 friends voted for Idli.
    40 friends voted for Paneer Curry.
    45 friends voted for Chicken Biryani.
    35 friends voted for Chilly Chicken.
    28 friends voted for Mutton Curry.

Even though most friends wanted a change and voted for different foods, Upma got the most votes. So, even though more friends wanted something else, Upma stays on the menu.

Unfortunately, nothing changed due to the use of the most terrible voting method called FPTP, even though most students desired a different menu.

## How will you explain tactical voting to a 5 year old in FPTP?

Imagine you and your friends are choosing a new game to play, but you have to pick just one game to play together. Each friend can only vote for their favorite game, and the game with the most votes wins.

Now, let's say your absolute favorite game is a bit unusual, and not many friends like it. If you vote for that game, it might not get enough votes to win. So, what do you do? You might decide to vote for a game that's not your favorite but is more popular among your friends, just to make sure it wins.

Tactical voting is like when you pick a game you don't love but think is more likely to win, just so you're not stuck with a game you really don't like. In elections, it's when people vote for a candidate who might not be their top choice but has a better chance of winning, to prevent a candidate they really don't want from winning.

## What should be implemented first: Approval Voting or Proportional Representation?

It is easier to change the voting method at the constituency or municipality level than at the multi-constituency, state, or country level. Proportional Representation requires a nationwide change, while for single-winner Approval Voting, one constituency or municipality election will suffice, paving the way for Proportional Representation. The tactical voting problem is also addressed through Approval Voting. Directly advocating for Proportional Representation can potentially delay the process.

According to the theory of diffusion, the less familiar an innovation is, and the more inconvenient, uncomfortable, or expensive it is, the greater the resistance will typically be, and the less likely it will be to diffuse. Approval Voting is the simplest and least expensive to implement, with fewer roadblocks.

Furthermore, Proportional Representation and Approval Voting are not mutually exclusive. Proportional Representation works better, becomes more [expressive](https://electionscience.org/voting-methods/spoiler-effect-top-5-ways-plurality-voting-fails/), and keeps bad actors out when used in conjunction with Approval Voting


## No EVM in Election

EVM is one of the most insecure system of voting.

> Without secure voting system, there is no point of constitution or democracy.

Paper ballot may take time for counting, but its much more secure. Counting is not a big problem, one can wait a bit for results, and it can also be automated with machine learning or optical scanner.

EVM is even more dangerous with FPTP voting method, because a single EVM manipulation can swing the result.

[The entire election machinery, from the manufacturing of EVMs to the software loaded onto them, to the committee appointed to evaluate the software, the so-called third-party auditing of this software and much more, is controlled by the Union govt.](https://thewire.in/government/the-anatomy-of-an-electronic-voting-machine-what-we-know-and-what-we-dont)

### EVM Vote count Mismatch

[EVM Vote Count Mismatch In 370+ Seats & EC Refuses to Explain. Mismatch in votes polled & counted in EVMs in multiple Parliamentary constituencies in LS Election 2019](https://www.thequint.com/news/india/lok-sabha-election-results-2019-mismatch-in-votes-polled-and-counted-in-evm-on-multiple-seats)

<iframe width="560" height="315" src="https://www.youtube.com/embed/PLY7ZwWFuhc?si=F8W8raYCgjacogE_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Why Did EC Destroy VVPAT Slips of 2019 LS Polls in Such a Hurry?](https://www.thequint.com/news/india/why-did-election-commission-destroy-evm-voting-machine-vvpat-slips-of-2019-lok-sabha-polls#read-more)

[Paper ballots are safest for our elections – on one condition.](https://edition.cnn.com/2018/11/05/opinions/to-keep-our-votes-safe-check-and-check-again-richardson-burke/index.html/)


## Even [VVPAT](https://en.wikipedia.org/wiki/Voter-verified_paper_audit_trail) are not the solution

### Security concerns

The introduction of malicious software into a VVPAT system can cause it to intentionally misrecord the voter's selections. This attack could minimize detection by manipulating only a small percentage of the votes or for only lesser known races.

Another security concern is that a VVPAT could print while no voter is observing the paper trail, a form of [ballot stuffing](https://en.wikipedia.org/wiki/Ballot_stuffing). Even if additional votes were discovered through matching to the voters list, it would be impossible to identify legitimate ballots from fraudulent ballots.

Alternatively the printer could invalidate the printed record after the voter leaves and print a new fraudulent ballot. These ballots would be undetectable as invalidated ballots are quite common during elections. Also, VVPAT systems that are technically able to reverse the paper feed could be open to manipulated software overwriting or altering the VVPAT after the voter checks it.

### Effectiveness concerns: Hardly Anyone In India checks the VVPAT

Also problematic is that voters are not _required_ to actually check the paper audit before casting a ballot, which is critical to "verifying" the vote. While the option to look at the paper may provide comfort to an individual voter, the VVPAT does not serve as an effective check on malfunction or fraud unless a statistically relevant number of voters participate.


### Demo hack in VVPAT with dark glass


<video width="100%" controls preload="none" poster="./images/vvpat_hack_demo.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeibup4fyk7femmxbvvmxflukrqexk6amitrleec4lozpofby2zmery" type="video/mp4">
</video>

## Suggestion given by INDIA bloc

Here is a suggestion given by the INDIA bloc: "Instead of the VVPAT slip falling into the box, it should be handed over to the voter, who shall then place it in a separate ballot box after having verified their choice. 100% counting of VVPAT slips should then be done."

So basically, it means using an Electronic Voting Machine (EVM) as a printer to print out votes instead of using an ink stamp to vote on a paper ballot. However, it still has flaws. Like a printer, an EVM can be programmed to print as many votes for a party that manipulated the EVM. Therefore, the possibility of ballot stuffing can still exist, and it's may be hard to identify, as the voter may hide it while putting the vote in the ballot box. Remember, a few instances of ballot stuffing in FPTP can overturn the election result and cause the winning candidate to lose.

One way to solve vote stuffing is to allow only a single paper in the printer (VVPAT) during voting. Just like a secret ballot is provided by [tearing off the serial number and voter signature](./images/ballot_paper.webp), now the single secret ballot can go through the printer to print out the vote.

Also, voters, especially the uneducated ones, need to be trained to recheck their vote printed on the VVPAT. It's double work for them; first, they have to vote on the EVM appropriately, and then check if the vote is the same or not on the VVPAT. Furthermore, if you are supposed to count all the VVPATs, what is the need for EVMs at all, adding unnecessary complexities?

EVM may decrease spoilt or invalid votes. Although I couldn't find data on the number of spoilt votes in India.

The number of [spoilt votes](https://en.wikipedia.org/wiki/Spoilt_vote) in a First-Past-the-Post (FPTP) election using ink stamp paper ballots can vary widely based on factors such as voter education, clarity of instructions, and ballot design. The same problem also arises in EVMs, as they add unnecessary complexity. Voters may press the wrong button, may not check the VVPAT, and many other issues may arise. The more complicated the system is, the more ways it can be attacked. e.g. Have you thought before that ballot stuffing is possible with VVPAT? I don't think vote spoiling is a big issue until proper measures are taken. Some may intentionally spoil their votes as a form of protest.

>If you are supposed to count all the VVPATs, what is the need for EVMs at all, adding unnecessary complexities, why not just paper ballot?
The more complicated the system is, the more ways it can be attacked.

### Invisible Ink

Even the chemicals used in the ink of VVPAT need to be validated. Chemicals like [invisible ink](https://en.wikipedia.org/wiki/Invisible_ink) do exist, which can alter your votes after a few days.

### Thermal Printing in VVPAT

The VVPAT uses thermal printing, which tends to [fade over a few months](https://pandapaperroll.com/thermal-paper-fades-restore/). However, the [ECI's argument that placing reflective glass can prevent VVPAT slips](https://www.youtube.com/watch?v=zMXF8_tJN_4) from fading is quite ridiculous. While it's true that VVPAT slips will fade over time, a minute of exposure to light barely makes a difference.
The intentions of the ECI are highly questionable, despite spending a significant amount of money on VVPATs, they didn't invest in even a decent printer that produces prints lasting a year. Furthermore, they burn VVPAT slips within three months, even though there is a provision to keep them for a year.


## What about independence of election commission?

The Center is making desperate attempts to undermine the independence of the Election Commission. They have also passed a bill aiming to remove the Chief Justice of India (CJI) and the leader of the opposition from the Election Commission panel. Without an independent Election Commission, how can we ensure that fair elections are conducted?

There are numerous ways in which the ruling party at the Center can benefit, including engaging in corrupt campaigning practices such as bribing voters. In such cases, the Election Commission might turn a blind eye. Additionally, if Electronic Voting Machine (EVM) results are declared, there is a risk that the Election Commission might ignore the Voter Verified Paper Audit Trail (VVPAT). This raises concerns about the finality of results, especially in the presence of discrepancies. Which result will be considered final: the one from the EVM or the VVPAT?

In the past, the Election Commission has already overlooked VVPAT discrepancies. How can one ensure that VVPATs are counted correctly, particularly concerning their security? What if the Election Commission disagrees with the proposal put forth by the INDIA bloc? Are there contingency plans, such as mass protests?

## Belgium uses paper ballot printer

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVNMyZTO_0s?si=_B03fsqy5vpAAcRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Its an ATM like voting machine where the printed votes placed in the ballot box after verification, in the Indian context, the user interface (UI) of the screen needs to be simplified. This is crucial as many voters may not be highly educated. Furthermore, voters should be trained with a demonstration before the election, illustrating how to double-check the vote on the printed paper and how to anonymously place the printed paper in the ballot box.

An advantage of this method is that vote spoiling is negligible, as the paper is computer-printed. However, there is still the risk that a voter may press the wrong button and cast an unintended vote. Another benefit is the flexibility to use any voting method, such as Approval Voting. This is challenging with Voter Verified Paper Audit Trail (VVPAT) systems because reprogramming all Electronic Voting Machines (EVMs) or even changing hardware is required to experiment with different voting methods.

>However, it has one significant drawback that can be a primary argument against using the system. There is a chance for voters to be tracked and their information retained, possibly even transmitted over the internet, thereby compromising the anonymity of votes.

## The Best Option: Paper ballot without any technology

> **A paper ballot, without relying on any technology or complications, appears to be the best option. To prevent vote spoiling, the paper can be made thicker to avoid ink spillage, and higher-quality ink can be used for the stamp. Furthermore, open-source machine learning models and algorithms can be employed for the accurate counting of votes, thereby reducing the cost of counting and faster result declaration.**
>
> Here is a demo and source code for recognizing numbers using machine learning. Similar classification training can be applied to vote counting.
>
> [MNIST Web Demo](https://ufal.mff.cuni.cz/~straka/courses/npfl129/2223/demos/mnist_web.html)
>
> [MNIST Web Demo Source code](https://github.com/tracel-ai/burn/tree/main/examples/mnist-inference-web)
>

> ### The paper ballot is the simplest solution.
>
> With paper ballots, every citizen, politician, or election nominee can understand what is actually happening. Everyone has the idea of how to secure the system without adding complexity that only technical experts can comprehend, making it difficult for the common citizen to identify the problems or technicalities of electronic voting machines.

## **EVM Hack Hypothesis**

There is no doubt that EVMs can be hacked. If it is indeed susceptible to hacking, it is in the best interest of politicians, especially for the incumbent party, as they hold the power at the state or center.

The problem with EVMs is that it is hard to prove whether they have been hacked or not, due to reasons associated with how EVMs are manipulated.

Let's consider the hypothesis: if parties can hack the EVMs, how will they change the ballot to ensure their candidate wins?

They can't substantially increase the total vote count of a constituency because it is already declared on the voting day itself. They may not do mass manipulation, as its likely to be caught.

Instead, they may make the candidate win with a small margin. They could increase the votes for the candidate they want to win, decrease the votes for the candidate they want to lose (first runnerup), and manipulate vote splitting (increase the votes of second, third etc runnerup) while keeping the total vote count of the constituency constant.

As given in data, there are many instances where the majority of people in a constituency have voted against a candidate, yet they have won. While it is very likely to happen with FPTP, EVM hacking can make it even worse.

You can also look the data where FPTP got worse, Madhya Pradesh BJP got 48% votes, and INC got 40% of votes, where as BJP got 70.87% where as INC with 28.70% seats.

It's better for us to stop using the EVM and reform our voting system by doing away FPTP.



## Security analysis of a real Indian EVM

You can watch a demo video by going through the link:

<https://indiaevm.org>

Here the the research paper with about security analysis of a real Indian EVM.

[Pdf Link](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeihpuk27kya3cxhwr5vc64a5ei55fr7bnqikjpdwxlf3agitajfbvm)

### Abstract of the paper

Elections in India are conducted almost exclusively using electronic voting machines developed over the past two decades by a pair of government-owned companies. These devices, known in India as EVMs, have been praised for their simple design, ease of use, and reliability, but recently they have also been criticized following widespread reports of election irregularities. Despite this criticism, many details of the machines’ design have never been publicly disclosed, and they have not been subjected to a rigorous, independent security evaluation. In this paper, we present a security analysis of a real Indian EVM obtained from an anonymous source. We describe the machine’s design and operation in detail, and we evaluate its security in light of relevant election procedures. We conclude that in spite of the machines’ simplicity and minimal software trusted computing base, they are vulnerable to serious attacks that can alter election results and violate the secrecy of the ballot. We demonstrate two attacks, implemented using custom hardware, which could be carried out by dishonest election insiders or other criminals with only brief physical access to the machines. This case study carries important lessons for Indian elections and for electronic voting security more generally.

### Some Details about EVM Hack in the Paper

We demonstrate two attacks that involve physically tampering with the EVMs’ hardware. First, we show how dishonest election insiders or other criminals could alter election results by replacing parts of the machines with malicious look-alike components. Such attacks are made far simpler and cheaper by the EVMs’ minimalist design, and they could be accomplished without the involvement of any field-level poll officials. Second, we show how attackers could **use portable hardware devices** to extract and **alter the vote records stored** in the machines’ memory, allowing them to change election outcomes and violate ballot secrecy. This attack is technically straightforward because the **EVMs do not use even basic cryptography** to protect vote data internally. It could be carried out by local election officials without being detected by the national authorities or the EVM manufacturers’ agents.

Though EVM manufacturers and election officials have attempted to keep the design of the EVMs secret, this presents only a minor obstacle for would-be attackers. There are nearly 1.4 million EVMs in use throughout the country, and criminals would only need access to one of them to develop working attacks.

Dishonest insiders or other criminals would likely face less difficulty than we did in obtaining such access. There are many other possibilities for manipulating Indian EVMs, both with and without the involvement of dishonest election insiders. Depending on the local context and security environment, the nature and scale of potential manipulations may vary, but neither the machines’ simplicity nor their secret design keeps them safe.

### The Illusion of Secrecy vs Open Protocol

The common assumption is that a secret encryption algorithm adds an extra layer of security by making it more challenging for attackers to decipher sensitive information. However, this belief is built on the misconception that secrecy equates to strength.

Testing Strength Through Transparency:

The paradox lies in the fact that the only reliable way to determine the strength of an encryption method is to make it public and subject it to rigorous analysis by the cryptographic community. Public scrutiny and peer review play a pivotal role in identifying vulnerabilities and ensuring the robustness of an encryption algorithm.

### Lesson from Cryptography

> One important and counterintuitive fact in this situation is that both the encryption and decryption algorithms are publicly known. It seems that keeping the encryption algorithm secret should make the whole system harder to break. However, secret algorithms also mean untested algorithms: The only way to find out whether an encryption method is strong, i.e., cannot be broken by a determined attacker, is to make it public and have it analyzed by other cryptographers.
>
> *[Book: Understanding Cryptography: Christof Paar, Jan Pelzl]*

### Open source software are more secure

It's not that opensource software is necessarily better engineered...it is that without the sourcecode it is impossible to see what a program does. So opensource software is seen as more secure as it is the only kind of software that can be checked for security at all without needing to blindly trust someone...everything not open-source can't be checked and by this has to be seen as insecure.

> In a voting process, the ballot needs to be kept secret not the protocol or process.


## Securing Your Code

[Schneier on Security](https://www.schneier.com/crypto-gram/archives/1999/0915.html)

The exact same reasoning leads any smart security engineer to demand open source code for anything related to security. Let’s review: Security has nothing to do with functionality. Therefore, no amount of beta testing can ever uncover a security flaw. The only way to find security flaws in a piece of code—such as in a cryptographic algorithm or security protocol—is to evaluate it. This is true for all code, whether it is open source or proprietary. And you can’t just have anyone evaluate the code, you need experts in security software evaluating the code. You need them evaluating it multiple times and from different angles, over the course of years. It’s possible to hire this kind of expertise, but it is much cheaper and more effective to let the community at large do this. **And the best way to make that happen is to publish the source code.**


### Why should we trust proprietary or closed source software?

No one can be sure what the proprietary or closed source software does in the background. It can provide accurate results during testing, but after the election, it may switch votes when you turn on the EVM. Based on the current inquiry, it seems to also have a clock. This makes it easy to switch votes with precise date and time.

Please note that one can also use a timer based on process time using loops and conditionals, process time is a measure of the total CPU time consumed by an executing process. Process times are a count of CPU instructions or [clock cycles](https://en.m.wikipedia.org/wiki/Clock_signal) and generally do not have a direct correlation to wall time. Although it doesn't have a direct correlation with wall time, one can still use it approximately to **schedule tasks like vote switching or swapping** at specific timings.

Also, as said earlier, one also cannot know what it prints to the VVPAT; it may print multiple votes in the absence of oversight.

Even if the software is made open source, we still cannot be sure if the correct software is installed, especially if a corrupt official has manipulated it.


### Why Electronic Voting Is Still A Bad Idea

<iframe width="560" height="315" src="https://www.youtube.com/embed/LkH2r-sNjQs?si=65prPw8RWLM_J6Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### The cost associated with replacing EVM with a paper ballot

There are almost no countries that utilize electronic voting machines (EVMs). One argument in favor of EVMs is cost efficiency. India, being a vast country with a sizable population, will it incur high expenses with paper ballots? Let's compare the costs associated with EVMs and paper ballots.

The initial setup, including the appointment of volunteers to manage booths, remains the same for both methods. The primary difference lies in the vote counting process. Given India's large population, there is a need for a substantial number of counting centers. But there are also large number of volunters in a large populated country. A significant portion of the adult population in India is unemployed, resulting in lower labor costs. Counting is a low-skill labour, so anyone can do it at a very low cost. To contribute to saving the country, most people would be willing to work for free for a week or a month. It wouldn't take a week to finish counting votes. Additionally, there are maintenance and manufacturing costs associated with EVMs, which are absent in the case of paper ballots. **Consequently, paper ballots prove to be a more cost-effective option.**

Counting with paper ballots can be conducted in a decentralized manner, constituency-wise, involving a large number of people. Moreover, the counting process can be automated using open-source machine learning, as demonstrated earlier. Anyone can develop the machine learning algorithm, and the validation and accuracy checks can be performed by the community.

### How much time does it take to print a ballot paper?

Printing presses are available in every locality. Each ballot paper's size will not be more than 6-10 inches, and consequently, each ballot paper will not even cost 25 paise in Indian currency. It won't take a day to print the ballots. If government is not ready to pay for that; we can crowd fund 1-10 rupees. Most people will be ready to contribute in Rs. 100s and 1000s because it safeguards our constitution and democracy.

### Environmental cost of printing paper ballot

The environmental cost of paper printing has been a topic of discussion, with some arguing that it contributes to deforestation. However, it's important to note that paper production utilizes raw materials such as wood pulp, bamboo, salai and sabai grass, as well as waste products like molasses and bagasse. So, it's mostly grass and manufacturing waste that is used in making paper.The amount of paper consumed by a family of two children in a year, approximately 100 notebooks and 50 books. Don't we waste paper anyway? So, will you stop educating your children because of that?
Voting, on the other hand, requires just a single sheet of paper per person. Additionally, paper is recyclable up to 5-7 times, ensuring its reuse for packaging, notebooks, and other purposes. Therefore, the argument against paper ballots on environmental grounds is not compelling, especially when considering the minimal paper usage and the potential for recycling.

### Booth Capturing in Paper Ballot

Booth capturing, also known as booth looting, is electoral fraud in which party loyalists or hired criminals "capture" a polling booth and vote on behalf of legitimate voters to ensure a particular candidate's victory. One argument is that Electronic Voting Machines (EVMs) help decrease booth capturing by enabling a five-minute delay in voting process, polling officer can also press a close button to deactivate the EVM. However, this measure doesn't entirely prevent booth capturing. Examples of booth capturing date back to the 1990s, but with the advancement of media, surveillance technology and redundant camera based mobile phones, it has become increasingly difficult to conceal such activities. Since booth capturing is a criminal offense, re-elections can be conducted in places where it occurs.

Regarding the time delay, we can now implement secure robotic ballot boxes that open and close at specific intervals with the press of a button by polling officers. The slit or hole can be thin enough so that a single ballot can enter. A robotic ballot box can include a serial number cutter, which removes the serial number from the ballot paper. This is provided to the polling officer to prevent multiple ballot insertions or ballot stuffing while maintaining voter anonymity. It is a simple machine. Such a device will be much cheaper than an EVM assembly. **While booth capturing can be detected, it remains challenging to ascertain what the EVM software is doing in the background.**

The time delay for starting the counting process needs to be reduced and can be initiated the day after polling. This minimizes the need for prolonged ballot box surveillance, reduces surveillance resources, and makes ballot box replacement by criminals significantly more difficult.

Courts cannot disregard the use of [ballot papers by simply stating](https://www.barandbench.com/news/is-there-any-punishment-tampering-manipulating-evms-supreme-court-asks-eci), "We all know what happened when there was ballot papers. You may have but we have not forgotten." This statement is vague and does not provide a specific reason of the potential vulnerabilities of ballot papers in modern times. The world is dynamic, and the past is not the same as the present. It is true that past instances of ballot paper misuse have occurred, but it is essential to evaluate the current situation with consideration for advancements in technology and security measures. For instance, the widespread availability of cheaper CCTV cameras and camera phones has significantly improved the monitoring capabilities of polling stations. This is not how courts should argue. They need to talk by evidence and citation like how are paper ballots vulnerable to booth hacking, and how do EVMs protect against booth hacking?


### Role of courts

In the event of booth hacking, what we need are an independent judiciary and an independent election commission that can declare [the election void](https://www.hindustantimes.com/india-news/sc-overturns-mandate-theft-in-chd-mayor-poll-101708452822779.html) and ensure the conduct of [free and fair elections](./democracy/free-and-fair-election.md). An analogy could be drawn to cricket: if the umpire is corrupt, the integrity of the game is compromised.

If people and opposition parties don't want EVMs, who are the CJI or the courts to force people to vote through EVMs? EVMs are an opaque voting system that can't be falsified, and there is enough  evidence through computer science. These are not theoretical evidence, but evidence from many decades of [computer science practices](./programming/foss_philosophy.md#proprietary-software-is-often-malware). So, why are the courts forcing people to vote through EVMs and reject PILs against EVM? Courts are failing to conduct free and fair elections and protect our constitution.

### Is paper ballot voting archaic?

The ballot paper is the gold standard of voting. Your votes don't disappear in the ballot box; that goes beyond the laws of physics. However, with Electronic Voting Machines (EVMs) that support read, write, and delete functions, your votes can disappear without trace, and you can't even prove it. Furthermore, one can use technology to automate and secure ballot voting by implementing robotic ballot boxes and employing open-source, tested machine learning algorithms to automate the counting process, as mentioned above.

### How can we achieve secure automated vote counting through open source machine learning software?

One method involves utilizing a high-capacity auto-feed scanner to scan votes.

Scanned images need to be made public. This action promotes transparency and allows anyone to verify the count using various open-source machine learning programs.
To mitigate reliance on a centralized scanner, opposition leaders or other stakeholders can independently verify the results using their own scanners. Since the process is automated, this verification task is not cumbersome.

Manual counting can be prone to human errors; typically, runner-up leaders request multiple recounts to validate the results. Automated counting simplifies the recounting process, and well-trained machine learning algorithms can offer greater accuracy in counting.

Vote counting is a simpler model, akin to handwriting number recognition, so machine learning can achieve a high level of accuracy [as demonstrated](https://ufal.mff.cuni.cz/~straka/courses/npfl129/2223/demos/mnist_web.html). It also provides probabilities, indicating when the machine learning is unsure of labeling by giving a low probability. In such cases, human intervention can be involved.

As for the ballot paper design, using thicker paper without folds and placing it directly into the ballot box simplifies the scanning process.

Placing the unfolded ballot directly into the ballot box aids in feeding it into the scanner without requiring manual effort to open the ballot paper.

To preserve anonymity without folding the ballot, a separate piece of paper can be provided to conceal it from cameras or observers before placing the voted ballot in the ballot box.

In terms of paper costs, paper can be sold and recycled, which reduces expenses. Additionally, paper costs are significantly lower than those associated with electronic voting machine (EVM) assembly.

For a constituency with one lakh voters, three to six scanners are typically sufficient to provide results within a day. Increasing the number of scanners reduces the processing time further. Many scanners boast scanning speeds of up to 20 pages per minute.

Using this method, the cost of voting will be significantly lower than EVM assembly, and it is also one of the most secure methods.

Currently I am trying out [image classification](https://github.com/reaudito/custom-image-dataset-classification). Typically, it takes 5-10 hours to train the model.

#### False positives and false negatives in machine learning

A false positive is an error in classification in which a test result incorrectly indicates the presence of a condition, while a false negative is the opposite error, where the test result incorrectly indicates the absence of a condition when it is actually present.

In classification problems like vote counting or identifying handwritten numbers, there are chances of false positives. For example, [identifying a sketch as a number when it should be none of the numbers from 1 to 9](https://ufal.mff.cuni.cz/~straka/courses/npfl129/2223/demos/mnist_web.html). Machine learning doesn't work best when the given data is very different from the trained data, so it may fail to identify spoiled votes, which can occur in many different and unpredictable ways. Therefore, some human caution is required to check the probability values.

As scanned images can be made public, humans can check them later on, within a week.

> ECI cannot claim the cost of counting or the space or the time required for counting. If you make the scanned image public, we will count it for free.

### How can we be sure that the scanner software is not hacked?

The software installed on a laptop can be Linux-based, and the scanner software can be open source; for example, [HP drivers are open source](https://github.com/OpenPrinting/hplip-printer-app ). [We shouldn't trust Windows or other closed-source software](./programming/foss_philosophy.md). However, what about the software installed in the scanner hardware itself? It's usually proprietary. Therefore, it's advisable not to use a scanner that has firmware installed. Many scanners are just motors and some buttons; there is no CPU or memory chip for firmware to reside on. Only the driver is needed installed on computer, which can be open source. The Linux OS and driver software need to be installed on the laptop under proper surveillance, and the checksum of the Linux OS and driver software needs to be checked.

### Randomization of EVMs

Randomization of EVMs to be supplied to constituencies and randomized recounts of VVPATs to detect possible malfunctions or fraud. Is randomization transparent?

Randomization is not conducted transparently. Why should we trust a video and a server controlled by a system administrator to generate random values? Secure random number generation involves drawing from shuffled papers, not relying on software controlled by a system administrator.

To draw a three-digit random number, one can use paper or balls on which the numbers 0-9 are written, and then draw three numbers in sequence, ensuring that the drawn number is replaced in the drawing box before the subsequent number is drawn.

A letter from Mehmood Pracha, who is running as an Independent candidate in the Rampur, Uttar Pradesh, Lok Sabha Constituency:

> Randomization process for EVM-VVPAT machines by you, was at best a videographed demonstration of a pointless, illegal, opaque, and surreptitious fiddling of the machines being presented as a technical exercise. The very fact that I was not permitted to access the actual machines, or even see them physically, is sufficient to discredit the entire process, and to shatter my confidence, and that of the electorate, in the veracity and trustworthiness of the EVM-VVPAT machines and the polling process in which they are to be used. The entire process lasted less than half an hour, and was very evidently conducted purely as a matter of formality without inviting or permitting any actual participation by me.

[Letter link 1](images/evm/randomization1.jpeg)


[Letter link 2](images/evm/randomization2.jpeg)

### Chances of Match-fixing

The chances of match-fixing increase when elections can be manipulated. Opposition parties may be negotiated with to cease protests against Electronic Voting Machines (EVMs) or to treat the protests casually, giving the appearance of opposition to EVMs.

Thus, there is a high likelihood of election fixing when election results are determined by EVM machines.

This undermines competition, eliminates third parties, and stifles independent thinking leaders. It can be detrimental to any representatives, regardless of party affiliation, including the ruling party. Those dissatisfied with the current regime have a high risk of losing, whether they belong to the BJP or the Congress. Additionally, many Congress leaders have switched parties due to threats from investigative agencies like the Enforcement Directorate (ED) or out of greed for money.

If the BJP is targeting 370 seats, then there are 173 seats that they would have to lose. One can assume who will lose those seats in the case of match-fixing.

### Probability of Hacking

Those who argue the probability of hacking is non-existent, firstly, the EVM is an opaque system. Nobody knows what is installed on the EVM except the software maker who has installed it. There is no way to trace it because everything is happening behind the screen. If you are inside a room, how can someone outside know what's happening inside? Light can't pass from outside to inside; walls are opaque. That's beyond the laws of physics to know what is happening inside the room through our eyes when outside. It's a complete [pseudoscience argument of lack of falsifiability](./reasoning/pseudoscience.md). The software installed is proprietary or closed source. EVMs are also not made public to be scrutinized by ethical hackers. So why should we trust a middleman to take care of our votes? People have the right to directly vote, not give their vote to a middleman to vote for them.

When there is so much control by the software maker and installer, the probability of rigging elections becomes extremely high, not low.


### Shooting the messenger

A whistleblower is an individual who exposes information about wrongdoing, illegal activities, or unethical behavior within an organization. Unfortunately, whistleblowers may face backlash, retaliation, or legal consequences for bringing such information to light.

"Shooting the messenger" is a critical perspective on the unfair treatment that whistleblowers may experience for their courageous actions in exposing the truth.

> The government should prioritize the safeguarding of whistleblowers rather than resorting to punishing the messenger.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1-L9eiUQCRY?si=eZcejKWUgdZHr59u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Researcher Arrested in India After Disclosing Problems With Voting Machines](http://web.archive.org/web/20230203033338/https://www.wired.com/2010/08/researcher-arrested-in-india/)

### The Supreme Court didn't give a judgment on 100% VVPAT counting.

There's no bigger irony than the fact that they can't tally votes for 12 days. Counting is such a low-skilled job that even a 10th-grade student can do it, yet the Supreme Court rejected the counting, as predicted, as we don't trust the judge.

Why can't counting be as decentralized as polling booths? Each polling booth typically serves [300 to 700 voters](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeiej6x2jlkjar34t4ag7adsdvz3scewk34igwgiqbvbq3k2xin7mxy). Therefore, if we establish similar decentralized booths for counting, it would only take an hour or two to count the paper ballots.

There are no free and fair elections; it's all a rigged game.

The silence of the people equates to accepting dictatorship, allowing the government to control your taxes, economy, and the monopoly of violence.

People need to stand up collectively; it can't be done by individuals alone. If 50% of the population doesn't trust the election commission and EVMs, then why elections with EVM? Don't be afraid; peacefully protest and take to the streets. They can't imprison 50% of the populace.

Understand how a [fascist government operates](./democracy/fascism.md).

### Voter turnout

About [40% of voters are not voting](https://www.indiatoday.in/elections/lok-sabha/story/lok-sabha-elections-2024-phase-1-voting-bjp-congress-dmk-tamil-nadu-up-bengal-assembly-annamalai-2528964-2024-04-19). About [5-10% decrease in voter turnout](https://www.hindustantimes.com/india-news/64-turnout-in-lok-sabha-phase-1-elections-most-states-see-dip-from-2019-101713544427755.html) than 2019 election.

[Voter turnout image](./images/9_pm_turnout_phase1.webp)

With such a low voter turnout, one can assume there is high distrust in elections and politicians. The Supreme Court's decision has made it worse.

The population of India is increasing, so absolute voter turnout number is expected to increase. [However, it is showing the opposite trend, with absolute voter turnout number actually decreasing.](./images/voter_turn_out_analysis.jpeg)


### Should we vote or not vote?

EVMs have VVPATs installed even if VVPAT slips are not counted. People must check and also be trained to inspect what falls into the VVPAT. It's hard to say how many votes will be manipulated. It can range from 5% to even 30% of vote manipulation. But if mass manipulation occurs, it is likely to be caught if VVPATs are counted. One needs to also be aware of VVPAT ballot stuffing i.e. EVM printing the ballot when no one is watching. The Election Commission of India (ECI) is already changing or manipulating the voter turnout data and not providing the full details of actual numbers of voter turnout in each booth or constituency; instead, [they provide percentages](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeigcvw4psyce2kch7efv5lj3zgkkqb3zohqr6phofw3ks65bd72jxe). There's no transparency at all levels of voting, from the calculation of voter turnout to EVM black box. We can still request people to vote. We can still defeat the government with sufficient votes against them and VVPAT are counted. Don't press NOTA. We will see what happens next. The fight for 100% counting needs to continue, though the Supreme Court is unlikely to allow counting. We need to be ready for mass protests during and after the election for 100% counting of VVPAT.

### Ensuring Election Integrity: A Call to Action for Indian Political Parties

To the political parties and alliances of India, it is imperative that we take the necessary steps to ensure a secure and fair election process, including the prevention of election fraud.

One crucial step is to compile and thoroughly examine the actual voter data from each booth and constituency, as recorded in Form 17C. This data will provide a comprehensive overview of voter turnout and patterns, enabling us to identify any discrepancies or anomalies.

Additionally, maintaining a strong and vigilant presence at the strong rooms where the electronic voting machines and VVPAT are stored is essential. This will help deter any potential tampering or unauthorized access, thus ensuring the integrity of the election results.


### Voter turn out anomalies are so evident now

![Voter turnout anomalies](./images/turnout_anomolies.jpeg)

There appears to be a significant anomaly in the voter turnout data for 02 Dhule PC. Notably, there was an increase of 85,943 total votes polled within a 24-hour period.

[Twitter/X Link](https://x.com/mahacpimspeak/status/1793093810010083716)


[Turnout data dhule on poling day](./images/dhule_1.jpeg)

[Turnout data dhule  after 24 hours](./images/dhule_2.jpeg)


### ECI released voter turnout numbers

After so much criticism, the ECI [released the actual voter turnout numbers](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeih6dqab6uiw5ol5rs4voj2zzwyzbgwanbs4jxivpxafo35tlbev6i) just a week before the election was to end.


### About strong rooms of EVM and VVPAT storage

[ECI Link](https://old.eci.gov.in/files/file/15143-arrangements-of-strong-rooms-for-safe-storage-of-evms-vvpats-and-other-election-papers-before-and-after-counting-of-votes-reg/)

CCTV cameras with sufficient storage facility shall be installed. CCTV Camera should cover sealed doors of Polled EVM Strong Room and Election Paper Strong Room, security and corridor etc. A proper system to take back up of CCTV footage shall be ensured. Such video data shall be in the custody of the District Election Officer.

Videography shall be made at the time of the opening and closing of Polled EVM Strong Room and Election Paper Strong Room. Proper log books shall also be maintained.

> Courts can ask for a 100% counting of VVPATs at any time if protest continues, and those involved can be caught if any manipulation occurs, provided that proper security measures are taken to protect the VVPATs.

### Microcontrollers are ported with firmware by BEL/ECIL with directors affliated with BJP

[A former bureaucrat has raised concern with the Election Commission on the nomination of 'at least' four persons allegedly having 'affiliation with the BJP' as independent directors on the board of state-run BEL that manufactures EVMs, prompting opposition leaders to attack the government.](https://www.deccanherald.com/india/ex-bureaucrat-asks-ec-to-ensure-party-affiliated-persons-removed-from-board-of-bel-which-manufacture-evm-2871211)

### Can EVMs be Hacked or Tampered With? | The Debate over VVPAT Matching

<iframe width="560" height="315" src="https://www.youtube.com/embed/NXb5Cuwl6LE?si=yDqZmvZMfTjTvw9S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The video connected all the dots of EVM. However, I have a conflict with the solution given.

### EVMs demand protection for 365 days every year

> EVM is a useless machine, and there is no need for EVM at all. It adds extra unnecessary complexity, maintenance, and costs.
>
> Using paper ballots is more cost-effective, requires less maintenance than EVMs, and EVMs demand protection for 365 days every year, whereas ballot papers need protection for only about few months, hardly 3-6 months after the election. Any unprotected EVM at any time is susceptible to hackers manipulating it and installing malware. Manufacturing of new EVM is another additional cost associated with EVMs. Paper ballots have fewer steps to maintain and are also considered the gold standard.
>
> So, instead, we can just use paper ballots. Paper ballot counting can be automated in the future using an open-source machine-learning algorithm, as I have already said and demonstrated. If you want the results in one day, it can also be done with paper ballots.
>
> **Lets end the voting scam**.
>
> To be clear, parties at the center will always want EVMs to select their own government through a flawed and opaque voting system that they have full control over. It is the responsibility of people to protest and return to paper ballot-based voting.

### The myth that Electronic Voting Machines can't be hacked before elections

The argument that Electronic Voting Machines (EVMs) cannot be hacked long before an election is based on the premise that EVMs do not recognize political parties or candidates. The names of candidates are only associated with specific serial numbers just before the election, making it highly challenging for a hacker to know which serial number to target in advance.
However, it is important to note that knowing the serial number is not the only method of hacking EVMs. Malicious actors could potentially install or replace hardware components with microscopic wireless or Bluetooth devices, which could be used to switch votes during the result declaration. The challenge lies in thoroughly inspecting the internal mechanisms of lakhs of machines. As a result, the security of EVMs largely depends on the integrity of the manufacturers and the protection against unauthorized access. It raises a valid question: Why do we entrust the safety of our votes to third parties like manufacturers?


## A ghost in the machine? On EVMs, democracy deficit and its constitutionality

<https://theleaflet.in/a-ghost-in-the-machine-on-evms-democracy-deficit-and-its-constitutionality/>

Fundamental flaw no.1: The Black box technology

The primary objection to EVMs is that the technology deployed is the ‘black box technology’

Fundamental flaw no. 2: Technical scrutiny of EVMs impossible

The German court struck down the use of EVMs as unconstitutional simply because no accessible public or judicial scrutiny of EVMs was possible without the intervention of technical experts.

Fundamental flaw no. 3: VVPAT precedes the recorder

Flaw no. 4: A near-zero paper trail

The ECI, employing bizarre logic, revealed: “Verification of VVPAT paper trail of 479 (randomly selected) EVMs would generate 99 percent accuracy in election results.

## Statistics behind VVPAT verifiability

### The Multiplication Rule of Probability

If you consider the multiplication rule in probability, often used in quality control, such a minuscule sample will show a high probability or a plausible outcome that all samples are good. Getting all samples as good will not be a rare outcome, if some 0.1% or 1% manipulation is done.

Some other assumptions can be made, such as hacking being done in a few constituencies rather than all constituencies as a whole.

For example, if a [Parliamentary Constituency (PC)](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeih6dqab6uiw5ol5rs4voj2zzwyzbgwanbs4jxivpxafo35tlbev6i) has 1,200,000 voters, the total number of Electronic Voting Machines (EVMs) needed would be  1,200,000/ 2,000, resulting in a total of 600 EVMs. If you consider that 1% percent of the total EVMs are scrutinized, then 6 EVMs in the constituency fall under scrutiny.

### An example of multiplication rule

[Multiplication Rule Explanation](https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeicpgfmasyo4nc7bwn4psnn4pr4jvpt7f6wga7hp2i4jyuprvfxjxa)

An example of using the multiplication rule of probability: Suppose 200 EVMs are used for scrutiny. Remember, 200 is an assumption. Currently, between 0 to 6 EVM per constituency is falls for scrutiny if we take the percentage.

Also, in the following example, we consider a large sample, but in a constituency, the sample is as small as 600 EVMs.

The probability of no manipulation is the same as the probability of all 200 EVMs being good. Therefore, we want to find P(all 200 EVMs are good). Assuming the manipulation rate of EVMs is 1%, the probability of a good EVM is P(good EVM) = 0.99.

P(1st is good and 2nd is good and 3rd is good . . . and 200th is good)

= P(good EVM) * P(good EVM) * . . . * P(good EVM)

=  0.99 * 0.99 * . . . * 0.99

Thus, P(all 200 EVMs are good) = (0.99)^200 = 0.13397.

The probability is still high and not a rare outcome. There is still a high chance that all 200 EVMs are found to be good, even with 1% manipulation.


### Realistic Scenario Example

Now let's run the example with a smaller sample of 600 EVMs. It will be a more realistic scenario.

If one percent of EVMs are hacked, the number will be 6 EVMs, and 6 * 2000 = 12000 votes are compromised.


If we check 200 EVMs:

P(1st is good and 2nd is good and 3rd is good . . . and 200th is good)

= 594/600 * 593/599 * 592/598 * 591/597 * 590/596 ...... till 200th

= 0.0866925812

If we check 100 EVMs:

P(1st is good and 2nd is good and 3rd is good . . . and 100th is good)

= 594/600 * 593/599 * 592/598 * 591/597 * 590/596 ...... till 100th

= 0.3332163812


The probability of finding all good EVMs is still high if we check 100 EVMs. To be very sure, the probability needs to be minuscule, like less than 0.01.

[Rust code](https://github.com/silicology/multiplication-rule/blob/main/src/main.rs)

In the First-Past-The-Post (FPTP) system, every vote matters, and candidates can lose by just a few votes. Even the methodology of randomization is questionable and is opaque, as mentioned above.


Do recall the data how many lost by just few votes.

[Runner up lost by strength, 2023 legislative assembly](https://github.com/amiyatulu/election_result/tree/main/2023_legislative_assembly_election/data_analysis/analysis_data/runner_up_lost_by_strength)

### For example, 2023 Legislative assembly election, Madhya Pradesh

As you can see, just manipulating one EVM (2000 votes) in different constituencies can cause 18 candidates to lose the election. It can be terribly hard to detect one EVM manipulation. 1% EVM manipulation (about 6 EVMs manipulation `6 * 2,000 = 12,000 votes` out of 600 EVMs with total 12 lakh votes) will completely reverse the outcome of the election result.

```json

{
  "number_of_places_runner_up_less_than_1000": 12,
  "number_of_places_runner_up_less_than_2000_more_than_1000": 6,
  "number_of_places_runner_up_less_than_3000_more_than_2000": 11,
  "number_of_places_runner_up_less_than_4000_more_than_3000": 5,
  "number_of_places_runner_up_less_than_5000_more_than_4000": 8,
  "number_of_places_runner_up_less_than_6000_more_than_5000": 7,
  "number_of_places_runner_up_less_than_7000_more_than_6000": 4,
  "number_of_places_runner_up_less_than_8000_more_than_7000": 4,
  "number_of_places_runner_up_less_than_9000_more_than_80000": 4,
  "number_of_places_runner_up_less_than_10000_more_than_9000": 4,
  "number_of_places_runner_up_greater_than_10000": 165,
  "number_of_places_runner_up_less_than_20000_more_than_10000": 57,
  "number_of_places_runner_up_less_than_30000_more_than_20000": 49,
  "number_of_places_runner_up_less_than_40000_more_than_30000": 28,
  "number_of_places_runner_up_greate_than_40000": 31,
  "No of constituency": 230,
}
```


## Vague arguments of Supreme Court

The Supreme Court judge seems to be utterly corrupt. He is making all the [same vague arguments to justify the security of EVMs](./images/EVM_arguments.png) that have already been debunked. According to Justice Khanna, EVMs are not re-programmable. It may be [one time programmable memory](https://reversepcb.com/what-is-one-time-programmable-memory/), but votes are not in non-volatile memory. Votes are readable and rewritable. As mentioned earlier, attackers could use portable hardware devices to extract and alter the vote records stored in the machines' memory, thereby enabling them to change election outcomes and violate ballot secrecy. As per previous analysis by hacker, **EVMs do not use even basic cryptography** to protect vote data internally. Furthermore, judge says that the source code couldn't be disclosed and that EVMs can't be made public for a hackathon because they will be prone to misuse. This is completely opposite to the principles of computer science and security experts. What are they scared of, if it's one-time programmable memory? No one can change its code, right? Why should we believe what you said is true if it hasn't been tested by independent security experts? The argument that EVMs don't recognize political parties and candidates is completely misleading. VVPATs contain information about political parties through symbol uploading. There is a [free flow of information](./images/EVM_information.png) between VVPATs and the control unit. This makes the EVM aware of political parties and candidates.

### What is the name of Microchip used in EVM?

BEL had shared this information under RTI in May 2019. [The microchips from our EVMs are supplied by NXP, a reputed Americal firm](https://www.youtube.com/watch?v=LDrhK7TIdDo). But the more crucial RTI revelation was this, while the Election Commission has always claimed that the EVM microchip is one-time programmable only, experts went on to the NXP website and found that its microchips have FLASH memory which are *not just one time programmable*. Meaning, if accessed, then can be re-programmed opening the EVM to manipulation.

## Court Decision of Verifiability

1st and 2nd runner-ups can ask the Supreme Court to verify the internals of just 5 percent of EVMs, which will be about 30 EVMs. Such a minuscule check is statistically insignificant. Furthermore, it doesn't allow independent verification. All runners-up need to petition the courts to count VVPAT for not less than 300 randomly selected EVMs per constituency (probability value = 0.0152356880) to check more than 1-5% of EVM are manipulated or to conduct a 100% VVPAT count to check if a single EVM is manipulated. Yes, a single EVM matters. Remember, [proper randomization](#randomization-of-evms) must be done by drawing from paper, not through software.

As court cases can take longer, proper care needs to be taken to secure the VVPAT under surveillance after the election result declaration, in order to prevent any manipulation during this period.

As there is also a chance of ballot stuffing, since the VVPAT can print ballots when no one is watching, this can also be detected by comparing the voter turnout recorded in the 17C form.

## On Couting Day

On the counting day, the EVM counts need to be matched with all 17C forms of voter turnout booth-wise. Any discrepancies found can be questioned regarding the integrity of the EVM. Also, a [proper randomization method](#randomization-of-evms) is used for VVPAT that are supposed to be counted on voting day.

Check [the video](https://www.youtube.com/watch?v=IrQVWmS3pj8) what to do when you don't have 17C form, and how to fill and collect 17C part 2 on the counting day.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oWpJLgjdx0Q?si=dgwaxTysW-yVmxx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Loksabha Election 2024 Results

[In 140+ LS Seats, More EVM Votes Were Counted Than EVM Votes Polled. What's the Magical Mystery Behind it?](https://thewire.in/government/in-140-ls-seats-more-evm-votes-were-counted-than-evm-votes-polled-whats-going-on)

![Top contituencies with manipulation](images/top_contituencies.png)

Here is the code and data for election analysis.

[Analysis Data](https://github.com/silicology/election_data_analysis/tree/main/data)

The data for EVM votes and Postal votes are here.

[EVM & Postal Votes](https://github.com/silicology/election_data_analysis/blob/main/data/2024_loksabha_election_evm_postal_data.json)

Data of all discrepancies is here.

[Discrepancies EVM votes during polling and evm votes during counting](https://github.com/silicology/election_data_analysis/blob/main/data/voter_turnout_data/evm_turnout_matching/evm_voter_turnout_comparison.json)

```json
[
  {
    "constituency_name": "Andaman & Nicobar Islands",
    "difference": -26,
    "evm_turnout_votes": 201992,
    "evm_turnout_votes_polled": 202018,
    "state": "Andaman & Nicobar Islands"
  },
  {
    "constituency_name": "Srikakulam",
    "difference": -5216,
    "evm_turnout_votes": 1208912,
    "evm_turnout_votes_polled": 1214128,
    "state": "Andhra Pradesh"
  },
  {
    "constituency_name": "Vizianagaram",
    "difference": -6176,
    "evm_turnout_votes": 1278710,
    "evm_turnout_votes_polled": 1284886,
    "state": "Andhra Pradesh"
  },
  {
    "constituency_name": "Visakhapatnam",
    "difference": -3689,
    "evm_turnout_votes": 1366795,
    "evm_turnout_votes_polled": 1370484,
    "state": "Andhra Pradesh"
  },

```

[Percentage data by party in each state](https://github.com/silicology/election_data_analysis/blob/main/data/percentage_votes_state_wise.json)

```json
{
  "Andaman & Nicobar Islands": [
    {
      "party": "Bharatiya Janata Party",
      "percentage": 50.58218197260437,
      "votes": 102436
    },
    {
      "party": "Indian National Congress",
      "percentage": 38.53560741479601,
      "votes": 78040
    },
    {
      "party": "Andaman Nicobar Democratic Congress",
      "percentage": 4.0757676012522595,
      "votes": 8254
    },

```

## WiFi in EVM

It's not surprising when Wi-Fi is installed on EVMs and controlled by mobile phones. The inefficient ECI is not even able to count all the VVPATs, which only takes a week or two. How can one expect that they will check the internals of each EVM microscopically? It's even more technologically challenging. An illegal confiscation of an EVM for one hour at any time within the lifespan of the EVM allows them to replace parts and install duplicates. Only a few EVM manipulations can switch the result in FPTP, as candidates usually win by a small margin.

[OTP to unlock the voting machine](https://thewire.in/government/explained-a-news-report-an-alleged-otp-and-an-evm-controversy-in-maharashtra)

## Manipulation in strong room

<video controls width="500">
    <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeifldklawqjcnwgufpsh3yhgiopsme3vax4vval2euxlq7gjmo77em" type="video/mp4">
    <!-- Add additional source elements for different video formats if needed -->
    Your browser does not support the video tag.
</video>

## General Elections 2024: Explosive Footage Reveals Troubling Reality


<iframe width="560" height="315" src="https://www.youtube.com/embed/2-50ivh_H2o?si=5uAt-FaHUscStWQf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Astounding amount of money for DVDs

Officers in Balasore, Odisha have requested an astounding sum of ₹12,77,100 to provide 4,257 DVDs of EVM surveillance footage.

Why can't they provide the data on a hard disk?

4,257 DVDs would require 4,257 × 4.7 GB, equating to approximately 20 TB of data. A 4 TB hard drive costs around ₹10,000, so the cost for 20 TB of hard drives would be approximately ₹50,000.

## If EC’s EVM-VVPAT Machines are Secure, Why the ‘Cloak of Secrecy’? | The Quint

<iframe width="560" height="315" src="https://www.youtube.com/embed/LDrhK7TIdDo?si=Dr0JF2mOlhwGEl1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Automated counting of VVPAT

If parties find it too hard to bring paper ballots, they may request a 100% automated counting of VVPAT slips, with the slips handed to voters and placed in the ballot box. Automated counting through OCR is possible, and with parallel counting, it can be completed in a few hours.

Such a request is even more effective, as opponents will have no argument to make. The purpose of VVPAT is for counting and matching with the EVM results, right? So why aren't they counting it? Just make the paper slips compatible with OCR machines so they can be counted through them.


### Give missed call to 9667722062 to Ban EVM

If you want to support Ban EVM Movement... Just give Miss Call- 9667722062- Adv. Rajendra Pal Gautam

2 Lakh 30,000 have already given missed call in 48 hours

<iframe width="560" height="315" src="https://www.youtube.com/embed/sHmpEv4dWDA?si=Y2z8PgCtPJKz-YbH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Share on social media for missed call to 9667722062 to Ban EVM

### Message 1

```
If you want to support Ban EVM Movement... Just give Miss Call- 9667722062

2 Lakh 30,000 have already given missed call in 48 hours

https://youtu.be/sHmpEv4dWDA?si=Zm1ISm6WOzhFPyB2

#EVM_Hatao_Desh_Bachao
#BanEVM_Save_India
#EVM_हटाओ_लोकतंतर_बचाओ
#EVM_Hatao_Loktantra_Bacho

```

### Message 2

```
If you want to support Ban EVM Movement... Just give Miss Call- 9667722062

2 Lakh 30,000 have already given missed call in 48 hours

https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeifofj2zgq5wnb2juvyj3nyf23wdizpqtsfmbmidoqsxau3js7biyq

#EVM_Hatao_Desh_Bachao
#BanEVM_Save_India
#EVM_हटाओ_लोकतंतर_बचाओ
#EVM_Hatao_Loktantra_Bacho
```



### Message 3

```
Ban EVM Movement... Give Miss Call- 9667722062

2024 election will be without EVM.
Farmers, the army, and everyone needs to come together to ban it.

https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeicjvqn3ksjfys7cmpqu7msap2vvnlqbbejilv4jtjuztrkpennule

#EVM_Hatao_Desh_Bachao
#BanEVM_Save_India
#EVM_हटाओ_लोकतंतर_बचाओ
#EVM_Hatao_Loktantra_Bacho
```


### Message from the Army officer

When an army officer dies for their nation on the border, it is often seen as a sacrifice made to protect the country from external threats and maintain its sovereignty. This act highlights the significance of safeguarding national borders and reinforces the idea that a nation must be prepared to defend itself against potential dangers.

Similarly, having a secure voting system within a nation is equally important for preserving democracy and ensuring the stability and safety of the country. A secure voting system guarantees fair elections, which are essential for reflecting the will of the people and upholding the principles of representative government. When citizens cast their votes with confidence, knowing that their choices will be accurately recorded and counted, they contribute to the legitimacy and strength of the political process.

A vulnerable or compromised voting system can lead to various issues such as voter fraud, manipulation, or suppression, all of which undermine the democratic foundation of a nation. Such situations not only erode public trust but also create social unrest, instability, and potentially even violence. Therefore, investing time, resources, and efforts into developing and maintaining a robust and reliable voting infrastructure should be considered a priority for any democratic nation.


<video width="100%" controls preload="none" poster="./images/army_message.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeid2cqvrjnc3fzimjyqopiujq4ssbzakvjvikddkrztc3ofxe5yyti" type="video/mp4">
</video>


### Timer in EVM

<video width="100%" controls preload="none" poster="./images/evm_timer.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeiaydqvgnah3ncz2eeeuyzguomv5bdpdn2blwy6n6tfqbchzebdgpq" type="video/mp4">
</video>


### Impact of EVM on our country

<video width="100%" controls preload="none" poster="./images/evm_impact_on_nation.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeifsxwvuejck4mulnriy24evfjoiuqbyisj24nsi4cixea4wcipk2u" type="video/mp4">
</video>

### EVM manipulation in loksabha 2019 election and state assembly

<video width="100%" controls preload="none" poster="./images/evm_manipulation.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeiaw6uy5iq77gcinx4vhefjpwfm2ebox6usz5f7srqblfvlny7tpeu" type="video/mp4">
</video>

### Duplicate voter lists in lakhs

In FPTP, a single vote matters, as a candidate can lose by a few votes.

<video width="100%" controls preload="none" poster="./images/duplicate_votes.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeias3k43og5ohauchspj2iboz74uihomvvisamr5bfyik3eoolydw4" type="video/mp4">
</video>

### Courts on EVM

Stop watching corporate TV news and protest against EVMs in front of all courts. The government cannot pressure courts to not ban EVMs.

<video width="100%" controls preload="none" poster="./images/courts_evm.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeicfzgpsvcnvffq5ois4r2dlaok64tmogggk5qg3s2ncaaoydyik5i" type="video/mp4">
</video>

### The resignation of an Election Commissioner

There needs to be a body of three members in the Election Commission, but only one election commissioner is left. Arun Goel has resigned ahead of the 2024 Lok Sabha elections. Will only one election commissioner be able to conduct the Lok Sabha election? How are election commissioners appointed, what are the guidelines and criteria for their appointment? How have they been appointed so quickly overnight? Will the government appoint another election commissioner now, who will follow the government's orders rather than staying neutral and independent to all parties? Will the new election commissioner, if appointed, listen to the people and consider eliminating the use of EVMs?


<video width="100%" controls preload="none" poster="./images/election_commision_resignation.png">
  <source src="https://42683ff2b1a2ac5ad2fef0ee01995d78.ipfs.4everland.link/ipfs/bafybeihgb3wkyjuiabbnuyseuksl63sizjrjoq3u735luwmzmh7uuyj3rm" type="video/mp4">
</video>

---


# the market for lemons how predatory journals make a new quality journal unsustainable for business

![](https://iambrainstorming.files.wordpress.com/2020/04/lemon.png?w=624)

Nobel prize winner George Akerlof described how the quality of goods is degraded due to information asymmetry between buyers and sellers, leaving only “lemons” behind. Lemon is a vehicle with several manufacturing defects that buyers don’t know while buying.

The mechanism:

Suppose buyers can’t distinguish between a “peach” (high-quality car) and a “lemon”. A dishonest seller can sell the “lemon” saying it as “peach” at a price that is the average value of lemon and peach. So, in the market of lemon and peach, selling lemon will continue and sellers holding peaches will start leaving the market (as buyers can’t distinguish between lemon and peach, and lemon will have a lower price than that of peach). It produces a positive feedback loop because, when enough sellers of peaches leave the market, willingness to pay for buyers will decrease (as the average quality of cars on market decreased) leading to even more sellers of peach to leave the market.

Due to lemons, or predatory journals, new journals are seen in the eyes of doubt. Many started relying on unscientific, non-transparent birds-eye reviews run by individuals like Beall’s List, which has the potentiality to kill any new journal without any proper and valid reasons for listing. Even govt policies that are meant to tackle bad publishing like funding research only if author articles are indexed in Journal Citation Reports (JCR) make a new journal unstainable which leads to only monopolistic publishers thrive.

It requires an average of about 5 years to get indexed in JCR and it requires lots of resources for it. But no one likes to publish their research in a non-indexed journal which makes a new journal too hard to sustain and nurture.

Dear scientists, you are scientists and are supposed to make decisions on the purview of scientific arguments. We at [mercury reaudito](https://mercury.reaudito.com/) will provide a complete open peer review that will be published with the article. The review is done with [rigorous scientific guidelines](https://mercury.reaudito.com/#/reviewers/instructions) or review criteria to follow.

I hope you will put such arguments in front of governments so that they give a new good journal a fair chance to thrive, otherwise, publishing will only be in the hand of a few oligopoly markets.

---


# the pandemic addiction of social media and assessments

The unhealthy use of social media has already created serious damage to society for a decade from now. After the ban of TikTok, the pandemic has also elevated the use of similar social media like Instagram. Kids and teens now spend even more time in gaming and social media to pass their time as there are no schools or no exams. Exams used to create some incentives to sit at the study table. It's not surprising that kids start opening books when there are exams. 

![](https://iambrainstorming.files.wordpress.com/2021/04/2021-04-19_20-20.png?w=728)

Ten Arguments for Deleting Your Social Media Accounts Right Now

But, exams are heavily criticized by educators as it serves to kill and drill methodology of learning. It also impacts the well-being of students and fails to produce kids with critical thinking. 

https://en.wikipedia.org/wiki/Teaching\_to\_the\_test

Already we have entrance exam policies that are based on the teaching to test way of learning. 

> NEP's obsession with "outcomes" means there will be more tests, exams, not less. With its centralising of exam policy (and major entrance tests), even states that wish to experiment won't be able to. RTE already had a policy that was never properly fleshed out or implemented. [https://t.co/ErrBMDaOhU](https://www.blogger.com/blog/post/edit/3158161829021056914/4735372918342503377#)— Shreya Roy Chowdhury (@ShreyaR\_C) [April 20, 2021](https://www.blogger.com/blog/post/edit/3158161829021056914/4735372918342503377#)

Exams are ok, as long as they are well-designed and are of low or no stakes. We should replace exams with the broader term called assessments.

Exams can be just some questions and the answer is already memorized deterministic script or steps, and then you are scored by the [reproducibility quality](https://www.blogger.com/blog/post/edit/3158161829021056914/4735372918342503377#) of memorization or steps that you have committed to memory by repetitive drill exercises. 

Drill exercises are beneficial, as they help us to memorize facts. Trouble arises when we use only one kind of assessment, drill exercise [is not well-designed](https://www.blogger.com/blog/post/edit/3158161829021056914/4735372918342503377#), and we fall into trap of raising the test scores of pointless tests.

Tests also centralize the curriculum, so teaching about the negative impacts of social media is almost impossible.

Assessments are not tests or exams, it can take any form such as using the [Feynman technique or designing probing questions](https://www.blogger.com/blog/post/edit/3158161829021056914/4735372918342503377#) to explain the chapter. 

Assessments can be done daily or weekly without creating a negative impact. Remember its assessment for learning, not the assessment of learning.

![](https://iambrainstorming.files.wordpress.com/2021/04/assessment_for_learning.jpeg?w=1024)

How learning Happens. Kirschner and Hendrick

So, this pandemic, make your children learn and help them spend more time on personal development rather than using social media by teaching them about the negative impacts of social media. If they can notice how social media is impacting them, they are likely to quit it.  Making them notice is to make them learn the right content with the right learning strategies. 

![](https://iambrainstorming.files.wordpress.com/2021/04/social_media.jpeg?w=535)

Let me be clear: social media isn’t and can’t ever be a substitute for our real-life relationships, real-life conversations, and real-life experiences. Living a virtual life isn’t equal to living an actual life.

Logged In and Stressed Out - Paula Durlofsky

---


# the perfect competition world

### **Using cryptocurrency and blockchain**

**perfect competition**

_noun_

_the situation prevailing in a market in which buyers and sellers are so numerous and well informed that all elements of monopoly are absent and the market price of a commodity is beyond the control of individual buyers and sellers._

[https://en.wikipedia.org/wiki/Perfect\_competition](https://en.wikipedia.org/wiki/Perfect_competition)

**A large number of buyers and sellers** – A large number of consumers with the willingness and ability to buy the product at a certain price, and a large number of producers with the willingness and ability to supply the product at a certain price.  
**Perfect information** – All consumers and producers know all prices of products and utilities they would get from owning each product.  
**Homogeneous products** – The products are perfect substitutes for each other, (i.e., the qualities and characteristics of a market good or service do not vary between different suppliers).  
**Well defined property rights** – These determine what may be sold, as well as what rights are conferred on the buyer.  
**No barriers to entry or exit**  
**Every participant is a price taker** – No participant with market power to set prices  
**Perfect factor mobility** – In the long run factors of production are perfectly mobile, allowing free long term adjustments to changing market conditions.  
**Profit maximization of sellers** – Firms sell where the most profit is generated, where marginal costs meet marginal revenue.

https://www.youtube.com/watch?v=W-GEZAthjCk

How Much to Produce? The Story of Marginal Revenue and Marginal Costs

**Rational buyers**: Buyers make all trades that increase their economic utility and make no trades that do not increase their utility.  
**No externalities** – Costs or benefits of an activity do not affect third parties. This criteria also excludes any government intervention.  
**Zero transaction costs** – Buyers and sellers do not incur costs in making an exchange of goods in a perfectly competitive market.  
**Non-increasing returns to scale and no network effects** – The lack of economies of scale or network effects ensures that there will always be a sufficient number of firms in the industry.  
**Anti-competitive regulation** - It is assumed that a market of perfect competition shall provide the regulations and protections implicit in the control of and elimination of anti-competitive activity in the market place.

![](images/58f42-independence.jpg)

**A country or organization can have a coin and a parallel tax coin of the same value.**

For example, the organization or country has PAX cryptocurrency. [Policymaker](https://iambrainstorming.wordpress.com/2019/01/11/the-whole-process-of-voting-in-a-dpos-country/) can make a smart contract with minting PAX-TAX coins, that will have equal value to PAX coin by law, and can also be used in alternative to PAX coin. These PAX-TAX coins can be used to produce more competitors of PAX coins, or for other purposes such as transferring to Universal Basic Income, Universal Health Care or Universal Education.

For example,

Teachers get fund which can be used to pay students. Escrow services on blockchain smart contract can be created with KYC, so that teachers can’t use those funds. And teachers can be paid using [UBI coins](https://iambrainstorming.wordpress.com/2018/03/21/universal-basic-income-and-education-a-beginning-to-a-continued-resilient-human-ecosystem/) that everyone gets.

> Escrow services build for UBI on smart contract can allow transactions only for utilitarian services like education, grocery or other utility bills like electricity, or the internet. People can't use the UBI for non-meaningful purposes like buying cigarettes or wine. The smart contract can register the authentic smart contract address of different service providers. It will create healthy economics without any demerits of free money.

But these TAX coins have **a special property**, some tokens of balance will start disappearing with every transaction you make and it doesn't create any negative impact on an individual due to its special property of disappearing as disappearing is slow. Minting TAX coins (PAX-TAX coin, for example) will not impact the exchange rates of the main coin (PAX coin, for example) as the total count will remain same due to its special property of disappearing. Neither it will cause inflation.

![](images/money-supply.png)

What happens when the money supply increases?  
Reference: Principles of Economics, Mankiw

**For example,**

India has rupees coin. The population of India is 1,374,632,000. And you want to pay ₹ 10,000 per month as UBI. So you need to mint Rupee-Tax coins that are pegged with the same value that of Rupee. Let's take the expiry date of Rupee-Tax coins is 24 months.

So, you need to mint,  
10,000 \* 24 \* 1,374,632,000 Rupee-Tax coins. It's equal to 3.2991168×10¹⁴ Rupee-Tax Coins.

So every month, each person will be paid 10,000 Rupee-Tax coins.

But rupee tax coins has the special property of disappearing. More time you keep the money, the more will be the transaction cost.  
The amount of money lost per time is equal to 10,000/ 24 months in minutes.  
An analogy can be the speed, the distance covered is 10,000 and speed will be 10,000/24 months in minutes.

So, if you keep 10,000 Rupee-Tax coins a day, you will lose 13.888 (10,000/(24months\*30days)) Rupee-Tax coins.

**The benefits:**

The benefits of the model are it will not only eliminate poverty but will increase GDP growth by creating more entrepreneurship.

https://www.youtube.com/watch?v=ydKcaIE6O1k

According to the quantity theory of money, it will increase the velocity of money, as no one will try to keep the money and always try to spend it due to the special property of disappearing.

https://youtu.be/q59tZKP0HME

**A caution:**

The price level will not increase if you mint the coins slowly. That is, increase the UBI amount with time. Like, 500 Rupee-Tax coins in the first month, 1000 in the second month, 1500 in the third month, till it reaches 20,000  
It can also create inconvenience because more you keep Rupee-Tax coins, more you will lose with time. So, before making a transaction, the maths of tax coins should be kept in mind.  
Also, exchanges should add Rupee-Tax coins to provide the best liquidity.

## Qs and As

**How new entrepreneurs will be created in a perfect competition market in the following example?**

An entrepreneur wants to start a business that requires high-end equipment. The price of high-end equipment is very high because it includes the labor cost of many people. But to run that high-end equipment, only one person is needed. How will the person buy the equipment?In perfect competition, every participant is a price taker, and marginal costs should meet marginal revenue. But how both can be possible in this situation?If the entrepreneur takes a loan (some labor cost) of other participants, how will he/she repay the amount? As the entrepreneur can't set the price for his/her service, and the market price for the service is already low because the labor cost to run the equipment is too small. 

**Proposed Suggestion:**

Competitors themselves can pay for the equipment, and the price gets adjusted according to it. Tax coins of different competitors producing homogenous products can be given to buy for the equipment. The competitors with the same specialization will also have the responsibility to confiscate the equipment, in case the entrepreneur who gets the equipment is found to be a frivolous or involve in any kind of fraud, as the competitors are the one who will bear the cost of equipment. It can act as a decentralized way to scale the system.

> It creates healthy economics where people work collaboratively, rather than competition. Economics is no more a zero-sum game, where one profit is others loss. Here competitors with expertise will help to build other competitor experts in the same field.

![](images/zero_sum.jpg)

**What are negative externalities and how it can be handled?** 

https://www.youtube.com/watch?v=CpVf11f09Pk

In economics, an externality is a cost or benefit that affects a party who did not choose to incur that cost or benefit.

**Proposed Solution for adverse externalities:**

Pigovian Tax:

[https://en.wikipedia.org/wiki/Pigovian\_tax](https://en.wikipedia.org/wiki/Pigovian_tax)

And this tax can be added into UBI (Universal Basic Income) or to those who work on reversing the bad externalities. 

**How to collect the tax?**  
**_By increasing the number or minting of tax coins. As tax coins are destroyed slowly with every transaction, it won't make any impact on an individual._**

**How can there be universal basic income in perfect competition?**

By minting tax coins of all different coins, and then paying a fixed and equal amount of deposit to all citizens in this interdependent world.

**How to set the price?**  
Price is inverse of mean value obtained from the different organization for the number of units produced per unit time (days or months etc) per employee with collaboration and using time not more than 5 hours per day per employee + Raw material cost calculated by the same principle.

Its a useful model that helps you think about prices, but can't be implemented as it will make the process centralised. The current price setting through demand and supply can be used. Algorithmic laws can be used to handle externality with appropriate incentive models.

The details in separate blogpost:

[https://iambrainstorming.wordpress.com/2019/01/18/price-takers-in-perfect-competition/](https://iambrainstorming.wordpress.com/2019/01/18/price-takers-in-perfect-competition/)

**It will increase efficiency without monopoly or inequality.**

> _Working hours to be as 5 hours per day or 30 hours per week in the Labor Law. Other time should be used in creativity and learning with daily chores._ 

**How there will be a technological improvement if sellers are price takers?**

Sellers can earn more by increasing their productivity and efficiency through technological improvement for example. More production in less time means more earning with the same price per unit. But if some entrepreneurs or researchers managed to do technological improvement, they have to hide the protocol in order to make the profits. This will create a disadvantage for society as a whole. So, competitors can provide incentives to the seller or entrepreneur who improved the technology, e.g. psychological appreciation and monetary support for many years. After the contract, entrepreneurs can make the technology open source. It will be easy with blockchain, as the same type of competitors will have the same coins, and some coins can be given to the entrepreneurs.

Note:  
One can also make a profit, by assigning more employers with less wages. But this is even not possible because all consumers and producers know all prices of products and utilities each person would get from owning each product. So approximate wages can be easily computed and made public. **A democratic autonomous organization that has more productive and skillful employees can make a win in this situation, so it creates positive reinforcement to develop skills.**

**How can we pay for things that we can't measure or are meant to be free?**  
For example, Open source and open access products.

**How to pay for the high-end Research and Development sector?**  
All high-end equipment and salary for the researcher can be paid through taxpayer money, but auditing system should be robust enough to hold them accountable.

**How to pay for the education sector?**

**References:**

[https://en.wikipedia.org/wiki/Blockchain](https://en.wikipedia.org/wiki/Blockchain)  
[Bancor](https://support.bancor.network/hc/en-us/sections/360002084771-Whitepaper-)  
[https://www.ethereum.org/](https://www.ethereum.org/)  
[https://en.wikipedia.org/wiki/Game\_theory](https://en.wikipedia.org/wiki/Game_theory)

---


# the velocity of money for beginners

### Raising Taxes Very Rarely Results In As Much Revenue As One Expects

**You have to do it the hard way by improving the health of the economy, no alternatives.**

The best way to increase governmental tax receipts is to increase the health of the underlying economy so the velocity of money is higher.  Countries often find this out the hard way.  In the United States, individual states find it out the hard way, as well.

https://www.joshuakennon.com/the-velocity-of-money-for-beginners/

https://www.youtube.com/watch?v=q59tZKP0HME

Quantity Theory of Money

---


# the whole process of voting in a dpos country

**The overview of fair democracy:**  
[https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/](https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)

> **Evolutionary democracy using hierarchical specialization with adapted delegated proof of stake algorithm, where different specialized departments are in a symbiotic or mutually beneficial relationship.** 

<table style="margin-left:auto;margin-right:auto;text-align:center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align:center;"><figure><a style="margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2019/01/d0ef4-specialization.png"><img src="https://iambrainstorming.files.wordpress.com/2019/01/d0ef4-specialization.png?w=300" width="320" height="317" border="0"></a></figure></td></tr><tr><td style="text-align:center;">The Tree of Democracy<br>Each funnel is a department with its subdepartments</td></tr></tbody></table>

<table style="margin-left:auto;margin-right:auto;text-align:center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align:center;"><figure><a style="margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2019/01/8f2f5-election_dpos.png"><img src="https://iambrainstorming.files.wordpress.com/2019/01/8f2f5-election_dpos.png?w=300" width="320" height="309" border="0"></a></figure></td></tr><tr><td style="text-align:center;">A Department</td></tr></tbody></table>

For example, the education department can have its sub-departments such as kid education, adult education, research, entrepreneurship.

_Each department consists of **large outer** representatives and **a few inner** representatives. These large outer representatives are the grand total of all its sub-department outer representatives and the few inner representatives are the grand totals of all its sub-department inner representatives._

> **Inner representatives of center and state are _policy approver,_  and inner representatives of all the regions (center, state, district, and small administrative regions) are task assigner to outer representatives of their regions for implementation of policies.** 

> _Representatives are leaders who collect evidence, data, and feedback, design policy on evidence, test and improve it or implement it through collaboration, without conflict of interest._

> Policy can be approved by inner representatives of the concerned departments only after addressing the conflict of interest with other departments.

> **International democracy**, where the origin of representatives is irrelevant, what matters is the availability of representative in the concerned region and expertise to implement policies and solving the problems of departments. But the location of voters do matter, a voter can only vote for their concerned regions.

> **Evolutionary democracy**, where the tree of democracy or departments can grow into any complexity, can include any number of representatives with the scalable voting system, and can include all possible or required departments, and can adapt and refine with time through new evidence.

**The whole process of voting and questions like:**  
**How voters can be informed about the contribution of their representatives, in order to vote? and How to hold the representatives accountable?**

We’ll consider accountability through the lens of five core principles: **responsibility, explainability, accuracy,** **auditability****, and fairness.**

Responsibility is not about legal responsibility but, rather, a focus on avenues for redress, public dialogue, and internal authority for change. This could be as straightforward as giving someone the internal power and resources to change the system.  
In a country, there are various departments or branches such as education (with sub-branches such as kid education, adult education, research, and entrepreneurship),

transportation (with sub-branches such as railways, road transport), health, environment (with sub-branches such as air pollution, water pollution, water supply, cleanliness, drainage system), energy (with sub-branches such as solar, wind, bioenergy, nuclear, petroleum), social justice (with sub-branches crime, family planning, human rights, philosophy), economics, agriculture, industry (with sub-branches such as manufacturing, mining, housing), biodiversity (with sub-branches such as forest, wildlife, domestic animals, aquatic life, afforestation), Entertainment (with sub-branches sports, television, movies), Information Technology, Defence, Foreign Relationships etc.

![](images/philosophers.png)

The Politics Book  
Big ideas simply explained

> These departments are complex in nature with further sub-branches and many times intersect with each other.

**How there will be** **ab** **initio** **assignment of representatives into these departments?**  
People with interest with the departments can stand for election, after showing some evidence of their expertise in understanding the departments. Evidence can include their research work, proposed achievable solutions, a detailed sketch of the plans and blueprints and a portfolio that a common citizen can understand. Then people can vote for the first round of outer representatives, to select some 500. And these outer representatives can vote for the inner representatives those who will hold the responsibility of the departments which can count to somewhere between 30-50. The outer representatives should provide valid data about why they voted for the particular representative.

**Who will decide whether to form new departments or join or remove departments?**  
Its the job of all inner representatives of concerned departments, when the consensus is reached after taking feedback from outer representatives and voters.

**How new policies can be made?**  
First, a draft can be made by inner representatives, and should be submitted publicly and should be asked for feedback, inner representatives and outer representatives of other departments can provide their conflict of interest and after addressing to different specific problems and argumentation to the line numbers or paragraphs, and rebuttals, explanation to the public, inner representatives can pass the final draft as policy. Inner representatives can provide incentives to outer representatives for their contributions.

> Policy can be approved by inner representatives of the concerned departments only after addressing the conflict of interest with other departments.  Departments can interact not just top down or bottom up but even side ways to know the conflict of interests of all the departments.

**What about the availability and contribution of inner and outer representatives?**  
Representatives should be available in the classroom with whiteboards and presentations for brainstorming and collaboration or they can be available in the community to collect information and check the implementation. _Individual contributions of each person and collaborative contribution should be made available for each day or week linked to the calendar in a website, it can include drafts, flowcharts, videos etc._  

> Take your time before uploading your contributions, for processing the data into useful information, and to think, analyse and write reviews containing your premise, argumentation, with a conclusion where needed and references to back your argumentation. No specific format is required, but the information need to be elaborative, concise and valuable.

**How can a voter know about the contribution of representatives and vote to remove or assign new representatives?**  
Voters can track the availability and contributions from the website with the calendar and can make the decision based upon their contributions.

> The voting process is "difficult in but an easy out process" for representatives.

Its difficult to become a representative in a department without expertise, but its easy to remove the frivolous one.

Voters will vote for outer representatives and outer representatives will vote to assign inner representatives. _But voters can remove any representative by giving negative votes._ So there will be two kinds of voting, _vote to assign_, and _votes to remove_. In votes to remove, a voter needs to give a dichotomous vote of KEEP or REMOVE, if it's 33% REMOVE for all votes, he or she will be removed. The new representative will be assigned by voting replacing those removed.  
Per voting process held in 6 months, _more than 16% can't be removed to keep the stability of the government._ If more than 16% representatives get 33% negative votes, those with the highest number of negative votes will be removed. If the last threshold is a tie, and reach more than 16% they all will stay. One can't enter again after removal within two years.

If the department representatives think, they are not getting better candidates through the election, and they have evidence for it, they can take over up to 33% of _**new** appointments_ and ask to pass or fail those new candidates. Candidates with _more than 60% pass votes_ by the people will be considered as pass, and the new representative can join the outer representatives.

**What about states and districts?**  
The same principle can be applied to different states, districts and smaller administrative regions without conflict of interest. Voters need to be local, but representatives can be nonlocal, but must have the necessary expertise and must be available in locality till he or she is in the job. States can have the same departments that of center. But districts and smaller administrative regions can have only required departments.  
In the case of districts and smaller administrative regions, per voting process held in 6 months, more than 33% can't be removed instead of 16% (as in case of center and states) because the stake for instability is low.  
_Responsibilities:_  
Inner representatives of districts and smaller administrative regions are **not law approvers**, (but inner representatives of center and states are law approvers), but they can assign the task for implementing policies to their outer representatives.

**How new policies be implemented?**  
Implementation will be done by both outer and inner representatives, and inner representatives can assign different task to outer representatives where needed.  
All inner representatives of center, state, district, and smaller administrative regions per department can help each other to assign a task for implementation.

> Representatives are leaders who collect evidence, data, and feedback, design policy on evidence, test and improve it or implement it through collaboration, without conflict of interest.

[![](https://iambrainstorming.files.wordpress.com/2019/01/43c70-leaders.jpeg?w=300)](https://iambrainstorming.files.wordpress.com/2019/01/43c70-leaders.jpeg)

> **There is also an _extended outer group_, where common citizen can work part-time to provide solutions for the government and get incentives after approval form inner representatives of concerned departments. Extended outer group work will also come under open auditing.** 

**How to scale and simplify the election?**  
_Ab initio election_ requires about 500 representatives (number depends on the type of department) to be selected for every lower level department (with its sub-departments). Applicants can be some 2000 or more for a department. OMR sheets can be given to voters with only one circle or square per candidate. The circle or square represents as ASSIGN. Voters should shade the circle or square only those whom they want to select as their representatives. An index book with every applicant's portfolio analogous to question paper can be given. This index book should be available 2-3 months before the election so that voters get enough time to evaluate the applicants. In the voting sheet QR code that contain links to the profile details of all applicants or representatives can be given.

> Voters need to analyze the applicants and fill the OMR voting sheets at home and drop it in the locker at the polling booth during the voting day. There can be 3-4 voting days for submission of voting sheets.

<table style="margin-left:auto;margin-right:auto;text-align:center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align:center;"><figure><a style="margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2019/01/795b8-screenshot2bfrom2b2019-02-012b18-11-50.png"><img src="https://iambrainstorming.files.wordpress.com/2019/01/795b8-screenshot2bfrom2b2019-02-012b18-11-50.png?w=300" width="640" height="187" border="0"></a></figure></td></tr><tr><td style="text-align:center;"><div style="font-size:12.8px;">Assignment Voting Sheet for&nbsp;Country: Peace</div><div style="font-size:12.8px;">&nbsp;</div></td></tr></tbody></table>

Some 500 representatives with the highest votes will be selected per department.

After ab initio, the process will be more simple and will take less time. The election should be held every 6 months so that enough time is available (before removing them) for the representatives to search and understand the environment and then design the policy and implement. There will be two kinds of the election after ab initio, _removal_ and then _assignment_ to fill those who are removed.

_In the removal process_, OMR sheet will have two circles or squares per representative, the first circle or square represent KEEP and the second circle or square represent REMOVE.  You have to shade one of it, REMOVE in case you are willing to remove the representative because of bad performance, and KEEP in case you willing to keep the representative as you are happy with the performance. If no shading is done for the candidate, the vote will not be counted (i.e. counted as NOTA). After election representatives with more than 33% REMOVE votes can be computed.

In case, more than 16% of representatives come under 33% removal threshold (remember, we cannot remove more than 16% of representatives per election session), than NOTA vote of the representative will be counted and 1/3rd of it will be added to the REMOVE votes of the representative to keep preference of all the voters, as the number of voters per representative will differ without NOTA. The representatives with the highest number of negative votes (includes REMOVE count and 1/3rd NOTA count, per representative) coming under a margin of 16% representatives will be removed.

<table style="margin-left:auto;margin-right:auto;text-align:center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align:center;"><figure><a style="margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2019/01/68900-screenshot2bfrom2b2019-02-012b18-12-11.png"><img src="https://iambrainstorming.files.wordpress.com/2019/01/68900-screenshot2bfrom2b2019-02-012b18-12-11.png?w=300" width="640" height="204" border="0"></a></figure></td></tr><tr><td style="text-align:center;"><div style="font-size:12.8px;">Removal Voting Sheet for&nbsp;Country: Peace</div><div>&nbsp;</div><div style="font-size:12.8px;">&nbsp;</div></td></tr></tbody></table>

Example voting OMR sheets with code:  
[https://github.com/amiyatulu/evolutionary\_democracy](https://github.com/amiyatulu/evolutionary_democracy)

> People should be requested to get all contribution details of all representatives and vote everyone per department or sub-department.
> 
> All should analyze the contribution and expertise of the representatives in solitude and collaboration with other experts and data analysts and then fill the voting sheet and all should participate in voting and should avoid voting or submitting the filled voting sheet of a department or sub-department without knowing about it and representatives contribution.

_Assignment process_ will be the same that of ab initio, but with fewer number applicants.

**How to select the final applicants?**   
A website can be made for applicants, where they can vote to select those final candidates participating in the election process.  Voting can be done after KYC. The website (in the future) can be decentralized with open source code so that data can't be manipulated by any central authority.

**Sequel to**   
[From hypocrisy to democracy, This way: Delegated Proof of Stake](https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)  
[https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/](https://iambrainstorming.wordpress.com/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)

**Questions for fair democracy:**  
[https://iambrainstorming.wordpress.com/qs-for-alternate-and-fair-democracy/](https://iambrainstorming.wordpress.com/qs-for-alternate-and-fair-democracy/)  
References:  
****[https://www.technologyreview.com/s/602933/how-to-hold-algorithms-accountable/](https://www.technologyreview.com/s/602933/how-to-hold-algorithms-accountable/)****

**Why will experts join the democracy network in the beginning? What are the Incentives??**

[https://iambrainstorming.wordpress.com/2019/12/10/why-scientists-will-join-the-democracy-app/](https://iambrainstorming.wordpress.com/2019/12/10/why-scientists-will-join-the-democracy-app/)

<table class=""><tbody><tr><td><figure><a style="clear:right;margin-bottom:1em;margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2019/01/f0de0-tree2bweb.png"><img src="https://iambrainstorming.files.wordpress.com/2019/01/f0de0-tree2bweb.png?w=300" width="200" height="175" border="0"></a></figure></td></tr><tr><td><div style="font-size:medium;text-align:start;">The tangled web of life: Campbell's Biology</div><div style="font-size:medium;text-align:start;">&nbsp;</div><div style="clear:both;font-size:medium;">&nbsp;</div></td></tr></tbody></table>

<table class=""><tbody><tr><td><figure><a style="clear:left;margin-bottom:1em;margin-left:auto;margin-right:auto;" href="https://iambrainstorming.files.wordpress.com/2019/01/6fd66-linnaean_classification.png"><img src="https://iambrainstorming.files.wordpress.com/2019/01/6fd66-linnaean_classification.png?w=228" width="302" height="400" border="0"></a></figure></td></tr><tr><td>Linnean classification<br>(Campbell's Biology)</td></tr></tbody></table>

---


# the world is near its carrying capacity a robust plan to save us and the world

To understand the intensity of danger of the population growth, let us understand the population growth curves.

## Changes in Population Size:

A population will increase in size with every birth and it will decrease in size with every death.  
Change in population Size = Births (B) - Deaths(D)

**Mathematical notation:**

![](https://iambrainstorming.files.wordpress.com/2020/03/growth_formula-1.png?w=445)

Where N represents the population size, t represents time and ΔN is the change in population size and Δt is the time interval.

rΔt is per capita change in population size  
If, for example, a population of 1,000 individuals increases by 15 individuals per year, then per capita change in population size is 15/1000 or 0.015.

If we make the change at each instant in time, the formula changes to:

![](https://iambrainstorming.files.wordpress.com/2020/03/growth_formula2.png?w=211)

r represents the per capita change in population size that occurs at each instant in time.

## Exponential Growth:

When the population has abundant food and resources and are free to reproduce, they show exponential growth.  
**It results in a J-shaped growth curve.**

![](https://iambrainstorming.files.wordpress.com/2020/03/jcurve.png?w=823)

> **Although the per capita rate of the population is constant, more new individuals are added per unit of time when the population is large than when it is small.**

## **Logistic Growth:**

The exponential growth model assumes that resources remain abundant, which **is rarely the case in the real worl**d.  

> When the size of the population increase, each individual will get fewer resources.  
> **Carrying capacity, symbolized by K, as the maximum population size that a particular environment can sustain.**  
> Energy, shelter, predators, nutrient availability, negative externalities like pollution, climate change, all these are limiting factors that determine carrying capacity.

In this model, the per capita rate of population growth approaches zero as the population size nears the carrying capacity (K).  
**When N equals K, the population stops growing.  
**The logistic model produces an S-shaped growth curve.

![](https://iambrainstorming.files.wordpress.com/2020/03/logistic_growth.png?w=887)

**You can check the explanation here, why its S-shaped growth.**

[Bacteria and Competition: How it’s similar to human? and Why we should have family planning?](https://iambrainstorming.wordpress.com/2016/09/21/bacteria-and-competition-how-its-similar-to-human-and-why-we-should-have-family-planning/)

## **Why the population growth rate decreases as N approaches K?**

It's because, the birth rate decreases, the death rate increases or both.

## **Human Population Growth**:

![](https://iambrainstorming.files.wordpress.com/2020/03/human_population_growth.png?w=838)

## **About carrying capacity:**

Carrying capacity estimates is 13.4 billion people.

![](https://iambrainstorming.files.wordpress.com/2020/03/carrying_capacity_for_humans.png?w=833)

> The human population is no longer growing exponentially but is still increasing rapidly and will reach its carrying capacity.

The **world's population** is expected to increase by 2 billion persons in the next 30 years, from 7.7 billion currently to _9.7 billion_ in **2050**, according to a new United Nations report.

> We are on the verge of reaching carrying capacity, which means children and grandchildren of millennials and grandchildren of boomers will face a high rate of death rates.

> The ways in which deaths will happen should scare us, it can be because of lack of food as we are losing our habitats, asthmatic attacks and death due to pollution, and floods created due to climate change with economic tension and war between countries.
> 
> [Future of Generation Z and millennials](https://iambrainstorming.wordpress.com/2019/03/05/future-of-generation-z-and-millennials/)

> ****The only way to stop reaching carrying capacity is to stop population growth completely. Just a decrease in growth rate which still adds a large number of new individuals due to large population size is not going to help.****

Even if the population increase is 1.1 percent per year, every new year more people are added than the previous year.

![](https://iambrainstorming.files.wordpress.com/2020/04/increase-in-population-1.png?w=640)

Population Increase per Year with constant growth rate of 1.1

![](https://iambrainstorming.files.wordpress.com/2020/03/pyrammind_age.png?w=1024)

Right side of pyramid represents no growth

> To stop population growth, a couple should have one child instead of two.

## **The plan:**

> Provide 1 lakh rupees to parents who undergo family planning sterilization operation after one child. If the first child is a girl, give parents additional 1 lakh rupees i.e 2 lakhs. Give 30,000 rupees who undergo sterilization after two children.

> And this is not enough, one has to bring family planning worker team for execution. Spread awareness of family planning, how it helps in better child development.

Train the family planning worker, give them printed copies in all languages explaining the population growth curve with the same quality that of Cambell's biology book, as ask them to explain it to parents and create awareness.

Deep canvassing works.

![](https://iambrainstorming.files.wordpress.com/2023/04/screenshot-from-2023-04-25-16-56-56.png?w=872)

  
And family planning worker will share responsibility and responsibility is not left with parent alone who can be uninformed. The process will be done with more ease and order.

The one-child policy in China has led to female foeticide that screwed the sex ratio. But this incentive model will not lead these unintended consequences because parents will undergo sterilization not by force but with self-awareness after they are educated from family planning workers and incentives are also higher for one girl child.

## **Saving, Saving and Saving**:

**One may ask from where money will come?**

**By taxes, if taxes collected from transaction costs are insufficient print more money and pay them.**

  
Children are economically unviable for 20 years, i.e. they don't contribute to any economic growth until they are about 20 years. In India with such unemployment rates, they can be economically unviable for 30 to 40 years.  
Imagine how much saving one will have when parents have one child, and there is a decrease in millions of children from the population.

>   
> Imagine other benefits like more parental care, an increase in living standards, a decrease in negative externalities that they would have contributed.

The plan does require effective and well-planned execution and scientists of shivarthu ([https://shivarthu.reaudito.com](https://shivarthu.reaudito.com/)) can do that by identifying problems of execution and solving it.

### **Is carrying capacity increasing with technological improvement?**

This is the population pyramid of India with 2019 data.

![](https://iambrainstorming.files.wordpress.com/2020/04/india_pyramid.png?w=785)

[https://www.populationpyramid.net/india/2019/](https://www.populationpyramid.net/india/2019/)

In India, people most likely to produce children (Age 20-34) is about 13.5%, but the kid population share (Age 0-19) is 18.9%. Still, there is a substantial increase in population that the country can't afford.

## **Technological improvement that will increase carrying capacity is a myth.**

Yes, food production has increased exponentially but at the expense of negative externalities. [https://www.un.org/sustainabledevelopment/blog/2019/05/nature-decline-unprecedented-report/](https://www.un.org/sustainabledevelopment/blog/2019/05/nature-decline-unprecedented-report/)

The Report finds that around 1 million animal and plant species are now threatened with extinction, many within decades, more than ever before in human history.

The average abundance of native species in most major land-based habitats has fallen by at least 20%, mostly since 1900. More than 40% of amphibian species, almost 33% of reef-forming corals and more than a third of all marine mammals are threatened. The picture is less clear for insect species, but available evidence supports a tentative estimate of 10% being threatened. At least 680 vertebrate species had been driven to extinction since the 16th century and more than 9% of all domesticated breeds of mammals used for food and agriculture had become extinct by 2016, with at least 1,000 more breeds still threatened.

You can't live in toxic air and water with floods, cyclones created due to climate change. Do we want our life without plants and animals, eating superfood like yeast? 

Also, we have sky-scraping income inequality, as a result, the world is not the same for everyone. At the present state, we can find slums in every locality of India with miserable living standards where kids play in the dirty water of drains and potholes. More the number of children, less the parental care. With population increase and growing wealth inequality, conditions will get more miserable. High-income families can escape the impact, but not for a longer time. 

Now let's analyze some of the conditions of children's birth and its impact on the population.

Conditions are based on probabilities values of producing one child, two children, three children, etc. for a population.

**Condition 1:**

The probability of producing one child, P(One child) is 0.5, and the probability of producing two children, P(Two children) is also 0.5.

It means half of the population will produce one child and another half will produce two children.

Then, there will be a 25% decrease in birth rates, which is a great idea.

One children produces 0.5 increase, two children produces 1 increase, and three children produces 1.5 increase.

**Condition 2:**

P(one child) = 0.1  
P(Two children) = 0.7  
P(Three children) = 0.2  
Calculation: (0.2×1.5) + 0.7 + (0.1×0.5) = 1.05  
It will cause a 5% increase, still a bad idea.

**Condition 3:**

P(one child) = 0.1  
P(Two children) = 0.5  
P(Three children) = 0.4  
Calculation: (0.1×0.5) + 0.5 + (0.4×1.5) = 1.15  
So its 15% increase, it's a miserable idea  
Increasing the probability of three children will bring a very high increase in population.

**Condition 4:**

P(one child) = 0.2  
P(Two children) = 0.4  
P(Three children) = 0.2  
P(Four children) = 0.2  
Calculation: (0.2 × 0.5) + 0.4 + (0.2×1.5) + (0.2×2) = 1.2  
It causes a 20% increase in population.

## Will a population decline be enough to save us? No its not.

We live in an highly unequal world. The top 10% of the rich use more natural resources than the bottom 50% poorest combined.

![](https://iambrainstorming.files.wordpress.com/2023/04/rich_percentage.jpg?w=1024)

References:

Campbell's Biology Book

---


# to revise make videos run faster

To revise the video lessons that you think, you have forgotten, run the videos faster, really faster.

> Remember, it doesn't work for exams, exams are meant for rote learning of concepts, it is for learning the hard way, i.e. revise lesson when you are applying or using its content to develop solutions.

![](images/6317b-speed.gif)

![](images/8e0f5-time.png)

Don't waste students time.

https://iambrainstorming.ml/how-much-does-retrieval-practice-help-in-learning/

---


# traffic rule violation and hefty fines

Center has declared Motor Vehicles (Amendment) Act, 2019 using which different states are charging a hefty amount of fines from the citizen for violating traffic rules.

### **Death and Probability:**

> Death in the roads is about probability or chance. There are many ways to decrease the death rates in roads. It includes wearing helmets, following the signals, roads without potholes, wider roads.

To follow signals, one needs to know and learn different kinds of traffic signals, and if you are driving on roads, you need to know the driving.

For the purpose of evaluating driving skill and the knowledge about traffic signals, RTOs are providing the driving license.

All these processes are meant for decreasing the probability of dying on the roads.

> But in reality, the probability is context-dependent.

Take of example, you are travelling a short distance, in narrow roads where traffic is usually high, you can't drive faster than a slow cycle. Whats probability of dying here?

The main cause of death by accident is speed. If the change in momentum occurs over a short time, the hitting force is large. But in this context, your speed is very less to cause a large hitting force. Will it be justified to wear a helmet here?

![](https://iambrainstorming.files.wordpress.com/2019/09/screen2019-09-12_114453.png?w=1024)

Large hitting Force

> What I am trying to say is the same rules can't be applied in all context.

Take another context,  
The next turn is at 1 km distance, but due to traffic, it will take an hour to reach next turn, but your home is at just 100 meters from the place you are present, you will take the wrong turn to go home or wait for an hour in traffic.  
This is the situation I faced in Bhubaneswar, I was fined 500 rupees, as I had only 400, traffic police was happy to take it without giving any receipt.  
**This is how corruption takes place.**

> Some argue that "why not just follow the rules, and save your self from hefty fines".  
> To err is human, never seen a person who is not a traffic rule breaker, some people are just more unfortunate to fall at the same time when there is checking, and others who are lucky, they say to follow the rules. With bad roads, following the traffic rules by 100% is impossible.

Regarding high fines, there are many rules, that doesn't mean you can fine and punish anything you like for breaking the rule. It's abusing and exploiting people in the disguise of law. Take a metaphor, giving someone the death penalty for traffic law violation, and say its justified as per law.

> Punishment should be given with good judgement and fairness.

Such a hefty fine is unrealistic to be paid by common citizens with such a low income. It is meant to create more panic than it solves the traffic rule violation problem.

> Here is an example, how a court with an honest and empathetic judge decides what the fine should be, based upon the honesty of the person.

https://youtu.be/J7W49n3Nkpg

## An idea:

This is how the traffic penalty system should be handled:  
1) Make online apps to pay fine through instalment  
2) Make realistic fines, that people can pay without getting bankrupt, and should be decided by a special court, by checking the context and honesty.  
Minor rule-breaking shouldn't cause fine, only noting it down is ok. If it becomes regular, they can be fined.  
The goal is to develop good habits, the dairy in the app can remind them of rule-breaking.  
Apps can also fix timelines to get the job done, such as insurance, driving license, etc. If not done on time, then make a fine.

**My experience for getting DL for two-wheeler**

Even though many automation is done for getting DL, still it can be further streamlined to decrease the queue length.  
1) No payment is possible online, so you have to go almost most twice for payment, once for Learning Licence (LL) and then for DL.  
2) Two times photo and signature are taken, one for LL and then for DL. So you have to stand in a long queue for it. I don't get the logic why again digital photos and signature are taken for DL.

![](https://iambrainstorming.files.wordpress.com/2019/12/road_signs.jpg?w=768)

Where are these signals used in Indian roads?

Both DL and LL tests are about testing your knowledge of traffic signals. But about 80% of signals are not used in roads when its needed. We have humps everywhere, but do we find a signal for humps?

> Learning about these signals is useful if we have better roads, and traffic signals are actually used. For now, DL is only another identity proof, nothing much to do with driving.

---


# understanding free will and how it can impact our behavior

# Understanding free will and how it can impact our behavior

## date: "2023-11-28"

---

tags:

- "philosophy"

---

Do you control your destiny? Is it you who makes choices throughout the day, including what you will eat for dinner and which movie you will watch? Our everyday existence rests upon a seemingly unshakable foundation: that we possess free will, the ability to consciously dictate our actions and decisions.  
However, as we delve deeper into unraveling the intricate connections between conscious experience and the brain, the molecular biology of the body, and various organs, including the brain, as well as the molecular biology of cells, the certainty of this assumption begins to waver.

## Can physics rescue our concept of free will?

Classical physics asserts that all future states can be determined from previous states, implying a predetermined course of events. In other words, all future states are already predetermined. A deterministic interplay of cause and effect. However, this perspective is challenged by quantum mechanics. At the quantum level, particles exhibit wave-like behavior, and their positions are described by probabilities. It's inherently probabilistic; for example, one can assign a probability value, such as a 16.66% chance for a die to land on six.

[Double Split Experiment](https://en.wikipedia.org/wiki/Double-slit_experiment)

Other atomic-scale entities, such as electrons, are found to exhibit the same behavior when fired towards a double slit. Additionally, the detection of individual discrete impacts is observed to be inherently probabilistic, which is inexplicable using classical mechanics.

Being probabilistic doesn't imply randomness or unpredictability. Instead, it means we can make predictions with a certain probability or accuracy. Cause and effect still exist, but there is always a chance that the same cause may not consistently produce the same effect.  
To add complexity, there can be multiple variables or causes. However, even if you account for all variables, you still cannot predict the effect with absolute accuracy; there will always be some margin of error.  
As a jest, we can predict the sunrise with 99.9999% accuracy, yet there remains a 0.0001% chance that unforeseen events, such as a black hole devouring the sun or a celestial dislocation, could prevent it. While 0.0001% may still seem big, it can also be infinitesimally small.

But the existence of probabilities does not imply the existence of free will, where we autonomously make our own decisions.

## Impact on our behavior

**A life with less anger:**  
Anger can arise when you dislike how others have acted or treated you, or when they treat your loved ones unfairly.  
Although it's okay to feel angry, but you can delve deeper into the root causes of their actions.While it may sometimes be challenging to understand the causation, the effort to think rationally and seek understanding is valuable, preventing emotional drain.

**A remedy for guilt and shame:**  
Guilt is rooted in the acknowledgment that one has committed a wrongdoing, potentially causing harm to others, whereas shame implies a personal flaw. Embracing the realization that not everything is within your control and that numerous external factors play a role can be emancipating.

**An enlightened view of pride and privilege:**  
Whatever you achieve in life, whatever you have acquired, whether wealth or successful relationships, can be recognized as a confluence of factors beyond your control. Therefore, you are less likely to become a narcissist with inflated pride.

**Increased empathy for others:**  
Understanding others' situations and trying to feel them can increase empathy. Understanding means trying to know the causation, which can prompt you to act with compassion to offer help. It can also contribute to a high degree of self-awareness.

## Potential pitfall while talking about free will

It can also have a different and potentially negative impact if it's taken with a casual meaning.

**Taking responsibility for your own actions:**  
You might start thinking that nothing is within your control, so why feel responsible for your actions? If everything is predetermined, why bother to act? The absence of free will is linked to the cause-and-effect relationship, and quantum mechanics posits that it is probabilistic. Your thoughts—how you think—have an impact on how you act, and how you act has an impact on others. 

**[It's a feedback loop](../chapters/philosophy/understanding_feedback_loop.md)**.

**Meaning of life:**  
Thinking about the brain in terms of atoms, molecules, and chemical pathways can make life feel meaningless. One may fall into the fallacy of composition—no atoms are alive, so, therefore, nothing made of atoms is alive. However, being alive has a specific definition involving processes like respiration and growth. Form follows function, and different forms lead to different functions. Atoms don't have the same properties as molecules, and similarly, a human body doesn't have the same properties as individual atoms. At the system level, we are all interdependent and play specific, meaningful roles in terms of family, community, or the ecosystem.

Knowing about free will won't change the meaning that evolution has given us. Most of the time, you are likely to forget it. You will still continue to cook and enjoy tomorrow's food, gossip and laugh with friends, and work for your family or community.

It's a different matter that some big tech companies want us to transform into transhumans by attaching chips or producing genetically modified humans, disrupting the natural process of evolution. Such transhumans may not need food and won't experience human emotions. We derive meaning from our function, and altering our form will lead us out of existence.

## Book Review: Tackling the Riddle of Free Will

[Two provocative books explore the question of whether humans have control over their personalities, actions, and fates.](https://undark.org/2023/11/17/book-review-free-will/)


## You have no free will at all | Stanford professor Robert Sapolsky

<iframe width="560" height="315" src="https://www.youtube.com/embed/ke8oFS8-fBk?si=BQU7NuP9VZO2Tp3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---


# universal basic income and education a beginning to a continued resilient human ecosystem

Universal Basic Income is a welfare regime in which all citizens (or permanent residents) of a country receive a regular, liveable and unconditional sum of money, from the government.

The central claim that UBI tries to solve is the end of poverty and financial insecurity by the indsicriminatory supply of free money which can be exchanged to buy your basic need requirements.

But the problem lies with execution and design that nullify the damaging possibilities speculated by the critics.

Speculation:  
**It disincentivizes people to work, so can create an adverse condition for wealth creation.**

**A proposed elaborative solution:**

Morally, the basic required need for survival such as food, clothing, shelter are not incentives. Its a fundamental right of the people. But biologically, these are the incentives to pacify our hunger or appetite.  
Food, clothing, shelter are basic needs for survival, but we need lot more for thriving. One of the essentials to thrive is education that nourishes our memory to [build mental models](https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d) for making intelligent decisions. (https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d)

> So a deal here, to survive you have to thrive, in other words, you will get the basic incentives, only if you like to thrive. 

**_Divide the UBI into two parts. One part will be unconditional income but insufficient to meet your basic needs. Another part will be conditional, given only if you join a course for learning  (e.g. parenting, cooking, science) or you are working._**

Teachers get fund which can be used to pay students. Escrow services on blockchain smart contract can be created with KYC, so that teachers can't use those funds.

**How to make education scalable, effective, and worthful through pedagogical evidence?**

https://iambrainstorming.files.wordpress.com/2018/03/2f4bd-screenshot2bfrom2b2018-03-212b14-35-16.png

[https://iambrainstorming.wordpress.com/2017/02/18/personalized-learning-goals-new-information-is-built-over-reusing-of-previous-information/](https://iambrainstorming.wordpress.com/2017/02/18/personalized-learning-goals-new-information-is-built-over-reusing-of-previous-information/)

UBI, Education and Health Services through TAX coins

[https://iambrainstorming.wordpress.com/2018/12/31/the-perfect-competition-world/](https://iambrainstorming.wordpress.com/2018/12/31/the-perfect-competition-world/)

Public-private partnership schools & colleges and its implementation

[https://iambrainstorming.wordpress.com/2017/06/04/public-private-partnership-schools-colleges-and-its-implementation/](https://iambrainstorming.wordpress.com/2017/06/04/public-private-partnership-schools-colleges-and-its-implementation/)

Fair Democracy build using adapted Delegate Proof of Stake

[https://iambrainstorming.wordpress.com/2019/01/09/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/](https://iambrainstorming.wordpress.com/2019/01/09/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)

[How will work and jobs change by 2035?](http://qr.ae/TU1hND)  By: [Andrew Ng](https://www.quora.com/profile/Andrew-Ng), Co-founder of Coursera; Adjunct Professor of Stanford

> It will create more startups or problem solvers or wealth creators to meet everyone need. UBI will play as a _catalyst_ to it, not as an inhibitor.

---


# way mathematics is taught need a disruptive change

**Mathematics needs a disruptive change, students who are not better problem solvers in all other fields are bad in it.**  
  
UNDERSTANDING how the calculation works is the most important step to test and analyze a problem.  
  
A most common problem with students who are scared of mathematics is not understanding how **fractions** work.  
  
What will happen if you divide a decimal number between 0 and 1 with 1000 and 10,000 etc?  
What will happen if you multiply it with 1000 and 10,000 etc.?  
What is the meaning of 1/3 \* 1/4? What is actually happening in it?  
How to divide a smaller number, for example, a decimal number between 0 and 1,  with a bigger number? What are you actually doing in this way, how will you explain it with the example, such as a cake or tiles?  
How to subtract a decimal number between 0 and 1 with a number greater than one?  
  
Fractions are everywhere, you will find not a single field in which you will not find its (mathematics) application, whether you do physics, chemistry, biology, statistics, psychological studies, computer science, economics or any field.  
  
**Mathematics is not "all about memorizing rules", it's about understanding why and where the rules work.**  
**If you pay attention to understanding, a student will find mathematics more interesting and always try it to apply in real life situations. Memorizing rules are also taken cared of indirectly.**  
  
Need a disruptive change in how mathematics is taught in class, so that they understand why the rules work and what and where are its applications.

---


# web3 can stop copying web2

With the advent of high-speed internet, we consume a ton of information every day. From teenagers to adults, we all use social media to communicate but are they quality information for your sound decision-making or just information pollution that causes loss of perspective and moral values.  
Take Twitter, for example, some content of Twitter is trolls, abuses, or fake information but another problem that remains, the problem of redundancy and low-quality information.

Is there any solution to it?  
Maybe incentivizing high-quality information is a solution. It can create a self-reinforcement pattern to share good quality content. Information from StackOverflow or Wikipedia is still a lot, you just visit some 0.1% of the content but whatever you visit is of good quality. Though comparing Twitter and StackOverflow are like apples and oranges, but both are run by the community. It's the incentive algorithms that keep bad information at bay.

Twitter is the place to share your blogs, news, and ideas, Facebook is another fake news propaganda engine but its value lies in connecting close friends with photos. It's a good idea to share photos once in a while, but doing that daily and seeking comments and approval can produce anxiety.

What about addictive funny ticktock videos or youtube shorts, how much are they harmful? Some evidence suggests that celebrity content are harmful to girl teens and they don't feel good about their body. Video games, another problem. Gamers spend hours streaming their video games on youtube. Sadly, we have built algorithms, where gamers have the highest number of followers than any quality information provider. We can find kids spending most of the time scrolling on shorts, wasting a lot of time, which could be used in self-improvement, learning, and exercises.

Currently, apps are trying to be a jack of all trades, which brings more profit to the company. For example, Facebook bought news feeds, and clickbait videos instead of limiting it as a photo-sharing site. Ads are another unwanted thing, but their whole business thrives on it.

> Blockchain doesn't require ads or addictive information to thrive. But do we know how social media should be that values our well-being and social fabric, or do we keep copying and blockchainfying the same successful but flawed and precarious design?

---


# what are the problems with grades

**The problem with grades:**  
  
1) Grades are an **oversimplification** of achievements that say very little about it. They are just numbers which say nothing about what you know or about your working skills.  
2) Grades are often **biased** and are done based upon the **context of questions**. Sometimes questions are not well made, most often they are just repeats of previous year questions. Because of this they really don't check the critical high order thinking of the children.  
3) **Malpractice**. It is also rampant in our education system.  
4) Too much of **psychological pressure** from parents, teachers to score more, that leads them to depression and sometimes even they take drastic steps like suicide.  
5)Grades **shift the goal from learning to just marks**, which can be achieved by many many means with our inefficient education system.  
  

[![](images/4a6be-mistakes2bexpected.jpg)![](images/a23dc-schools.jpg)![](images/32ee0-collaboration.png)![](https://iambrainstorming.files.wordpress.com/2017/01/32ee0-collaboration.png?w=300)](https://iambrainstorming.files.wordpress.com/2017/01/e5ef7-mistakes.jpg)

With collaboration, all types of difficulties are fixed. **Competition is beneficial only when it helps in decreasing the scarcity of resources, not increasing**. (There is a limit to it, because creating resources require resources or raw materials which gets depleted) E.g. In economics, when there is demand/ scarcity of a resource, different suppliers compete with each other to meet the demand. Even that requires collaboration i.e. collaboration of people of the suppliers. Different suppliers are analogous to interspecies competition.  
  
  
Yes, we have limited seats (actually limited number of seats in good colleges). But that can be fixed by increasing the number of colleges that bring excellence in education, not mediocrity. Again it requires collaboration, not competition.  
  
So with grading students stop to collaborate, don't help each other and become selfish.  
  
**Students learn best NOT by competition, but through collaboration and inspiration from peers.**  
  
**Problems with classroom grading:**  
1) **Teacher biases.** While grading in class they give marks more to the students they like and less if they don't like or thinking they are incompetent.  
2) **Regular exams without proper feedback.** Many schools and colleges are obsessed with anytime regular exams. They think, more they conduct exams, more students will read, out of fear. But if you look at statistics, those who s**core well always score well**, and those who **score less always scoreless**. Many who are unable to tackle these exams just **bunk classes out of fear.**  
If students who scoreless are not improving, what's the point in the exam?  
The reason behind scoring less is they simply try to rote memorize the notes which they themselves don't understand. Also, too much of pressure on memorization, as they have to remember all formulas, reactions, and many questions that only require **just memorization without any thinking to get the answers.**  
And also they don't give any specific feedbacks. Just marks and answers, many a time without answers in the case of short or long answers that lack **any specific one-word answer.**  For example, compare and contrast, writing paragraphs for a topic etc. They just cut marks without giving any proper reason to it. When you ask for the reason, they just reply, you should have written it little better. Also, some illogical reasons like, it's not required to write such a long answers.  
Also, it doesn't matter whether a child does the problem set again which he/she was unable to solve.  
Assessment needs to be done in a systematic manner, not like anytime exam. Also, exams need to be personalized, repetitively giving them solved and unsolved problems, first clearing the fundamental concepts, then going to the advanced application based questions, not giving both types of questions in a single exam. **New information/knowledge is built over using previous information/knowledge, not in a haphazard manner.**  
  
**Problems with the final state board and center board exams:**  
1) Exams are conducted after two-**year end** in case of 12th board. So, mostly many students just don't read in the first year. All most all are less accountable (students and teachers) in the first year than the second year.  But the problem is most concepts of the second year are linked with the first year course. So students just can't cope up in the second year.  
Even in engineering colleges and higher education, students don't learn the whole semester, collaboration among students only occurs before the exam night (**cramming**) where the topper explains the other students.  
2) The **difference** in difficulty level, courses of studies, materials in different boards, also different marking schemes. Some boards are liberal in marking while others are not. Content and quality of the books also greatly differ. So the result is some are more fortunate and others are less just by the board they choose.  
3) The **opaqueness of the marked answer scripts**.  Marked answer scripts are just not publicly available. Teachers do, don't check the scripts properly and have their own biases, also don't know the answers. For example, simple handwriting can bring an impact in the marking. So forget that your marks are authentic without error.  
Also, many topics in literature are just qualitative with no perfect answers, difficult to quantify with grades. Even it is true for other subjects based upon questions.

---


# what do we need to decentralize in the coming years

# What do we need to decentralize in the coming years?

date: "2023-09-01"



Research on new blockchain decentralized algorithms, scalability, composability, and ability of build complicated systems on blockchains has brought us new possibilities.

Blockspace & Blockspace Ecosystems: How Polkadot is Unlocking the Full Potential of Web3

[Blockspace & Blockspace Ecosystems: How Polkadot is Unlocking the Full Potential of Web3](https://www.polkadot.network/blog/blockspace-blockspace-ecosystems-how-polkadot-is-unlocking-the-full-potential-of-web3/)

## **De-googling our internet.**

I have already switched from the Google search engine to Brave Search, thanks to its fully independent search indexing of Brave. There are no more misleading ads in search results or low-quality marketing information optimized by Google SEO.
  
With Brave Goggles, search results remain in the hands of users rather than being controlled by the algorithms of the host search engine, like Google.

### **GOGGLES: Democracy dies in darkness, and so does the Web**  

[https://brave.com/static-assets/files/goggles.pdf](https://brave.com/static-assets/files/goggles.pdf)

There are goggles to remove Pinterest posts, remove pages found on the top 1,000 most-viewed websites, rerank results to remove “copycat” content, news indexing from authentic sources, and deranking sites spreading disinformation.

Developers need not stop here; we need to decentralize the computing servers and place them in public hands. Google has about million servers, what if we put these servers in public hands with offchain blockchain computing.

Here are the brave goggle and it links that I created:

[https://github.com/reaudito/collection_goggle](https://github.com/reaudito/collection_goggle)

## Decentralized Presearch

<https://presearch.com/>

I was an early adopter of Presearch in 2019, but after a few months of trying, I decided to quit using it. However, as of 2024, Presearch has successfully launched a decentralized nodes with its own index, runned by community consensus. The results now surpass those of Google and differ significantly, offering uncensored information that authoritarian governments and capitalists attempt to conceal through censorship laws and intellectual property rights, or by downranking certain content and promoting advertiser's content. The quality of the results is also notably superior.

> Over time, an even more decentralized search engine, designed with a superior algorithm based on community preferences and owned by the community, is set to be launched.

## Digital colonialism is threatening the Global South

[https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south](https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south)

### What is digital colonialism?

Under classic colonialism, Europeans dispossessed native peoples of their land, exploited their labour, exercised extraterritorial governance, and perpetuated dependency and plunder through strategic underdevelopment. Corporations like the East India Company played a pivotal role in this process. In their pursuit of profit and power, Europeans took ownership and control of critical infrastructure, including ports, waterways, and railroads.

> It is for this reason that American software programmer Richard Stallman started advocating for Free and Open Source Software in the early 1980s. “A nonfree program is a yoke, an instrument of unjust power,” Stallman reasoned.

### The concentration of data is concentration of power

“Feedback effects” of Big Data make the situation worse: Those who have more and better data can create the best artificial intelligence services, which attracts more users, which gives them even more data to make the service better, and so on.

Network effects, economies of scale, and vast resources for infrastructure, training, and product development further concentrate corporate power. Silicon Valley can hire the best computer engineers, purchase startups and competitors, and lobby governments for favours.

### Some of the network that keeps computing and data decentralized

Akash Network

<https://akash.network/>

Akash is an open network that lets users buy and sell computing resources securely and efficiently. Purpose-built for public utility. 
Akash democratizes secure, censorship-resistant app deployment, open to all innovators. 
Peer-to-peer communication guarantees data privacy, payment transparency, and immunity from central control, reinforcing dependability. 

[ThreeFold Decentralized Autonomous Cloud](https://www.threefold.io)


Phala Network is leading in building computation space for Computation as it’s meant to Be.

[Phala Network](https://docs.phala.network/introduction/readme) is designed with multiple layers of security guarantees to provide fully verifiable computation. The network is backed by numerous decentralized workers and a significant amount of staked tokens. Phat Contracts are protected by both hardware Secure Enclaves and cryptographic evidence published and verified on the Phala blockchain, seamlessly extending blockchain-level security to the off-chain realm.

There other alternative like [Integritee](https://github.com/integritee-network).

Off-chaining Models and Approaches to Off-chain Computations

[Article Link](https://cloudflare-ipfs.com/ipfs/bafybeicykr5y3ags5vdjnf5i66ijvng4wqq22hcwn2jsvywxwndpgoo24e/Off-chaining%20Models%20and%20Approaches%20to%20Off-chain%20Computations.pdf)

![Offchain computation](./images/screenshot-from-2023-09-02-10-50-00.png)

Adventures of an Enclave (SGX / TEEs)

[https://hackernoon.com/adventures-of-an-enclave-sgx-tees-9e7f8a975b0b](https://hackernoon.com/adventures-of-an-enclave-sgx-tees-9e7f8a975b0b)

Blockchains can also try [RISC-V](https://www.computer.org/publications/tech-news/trends/reasons-to-adopt-risc-v) CPUs and GPUs with Keystone to move towards a fully open-source system. [Keystone](https://keystone-enclave.org/) is an open-source TEE framework for RISC-V processors.

Crust files 

<https://crustfiles.io/>  
Your personal Web3.0 storage



## **Energy consumption by servers of capitalism**

AI's Electricity Use Is Spiking So Fast It'll Soon Use as Much Power as an Entire Country

[https://futurism.com/the-byte/ai-electricity-use-spiking-power-entire-country](https://futurism.com/the-byte/ai-electricity-use-spiking-power-entire-country)

Capitalism makes use of user data to perform unnecessary computations that are typically not required. For example, Facebook, Google, and many other companies employ centralized data servers that utilize machine learning for predicting personalized ads and feeds based on terabytes of user data. This poses not only a threat to your privacy but also a misuse of data for capitalist profit. Even a simple [algorithm like fedifeed (explained below)](https://github.com/pkreissel/foryoufeed) can solve the problem of personalization without compromising your privacy.

While cryptocurrencies like Bitcoin, which use proof of work, consume excessive amounts of energy, proof of stake algorithms, as seen in systems like Polkadot, are more efficient. One can run Polkadot on a Raspberry Pi.

As for storage, the [decentralized IPFS protocol](https://iroh.computer/) is efficient because it localizes storage. If your neighbor has already downloaded a file, you can obtain it from them instead of fetching it from the other side of the internet (which also saves on power usage, considering routers). Content addressing allows you to avoid downloading a lot of duplicate data, which can be particularly beneficial in data centers and clusters that need to distribute mostly identical Docker/machine images.

Blockchain data centers can utilize renewable energy, and we can design systems to be more localized, make most apps work offline (e.g., with the ability to download music or movies, so that you don't have to redownload them from the internet all the time and save energy), performing [machine learning on local computers](https://huggingface.co/) or local servers using open-source models only for what's necessary. The capitalist system disallows offline download and local sharing, as they can't make profits without copyright. Further sustainable housing designs that rely on renewable energy for computing are also viable. Additionally, we can penalize unsustainable blockchains using [decentralized price discovery](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md).

## **Interoperability**: Dismantle the tech platforms.

> We can - we must - dismantle the tech platforms. In _The Internet Con_, Cory Doctorow explains how to seize the means of computation, by forcing Silicon Valley to do the thing it fears most: interoperate. Interoperability will tear down the walls between technologies, allowing users leave platforms, remix their media, and reconfigure their devices without corporate permission.
> 
> [Book: The Internet Con:How to Seize the Means of Computation](https://www.versobooks.com/en-gb/products/3035-the-internet-con)

## Security of Phone

> Interoperability extends beyond just software compatibility; it also encompasses hardware compatibility. For instance, smartphones, regardless of whether they run on the Android or Apple operating systems, often hinder interoperability and pose challenges for supporting alternative operating systems like privacy-focused GrapheneOS or other Linux distributions. This situation poses a significant threat to user privacy, as it leaves devices vulnerable to state-sponsored or large tech companies' surveillance efforts.
> 
> Additionally, smartphones typically come with preinstalled bloatware that can be difficult to remove. These preinstalled applications are not only intrusive and annoying but also pose security threats and grant undue advantages to a select few companies. In 2021, Google made $146 billion in search advertising and gave a [$26 billion cut](<https://www.cnbc.com/2023/10/27/google-paid-26-billion-in-2021-to-become-a-default-search-engine.html>) to phone manufacturers and carriers in exchange for default status. That’s nearly 18 percent. It is crucial that we exert pressure on manufacturers to promote interoperability.
> 
> Phone manufacturers should consider supporting the Android Open Source Project (AOSP), which would entail adhering to standardized hardware specifications. This standardization would enable users to switch to any operating system of their choice with greater ease. Furthermore, if manufacturers opt for custom hardware, they should make their device drivers open source and contribute to the AOSP.

Google makes Android easy for privacy and security attacks by design. Enforcing hardware interoperability can assist developers in addressing these issues.

Notifications are on by default when you install the app. Instead, notifications need to be off by default. It's very annoying and requires extra work, making it hard to disable for common users.

There's no way to change an app's internet access permissions. For instance, if you want to restrict internet access within the app, you can't do so. This makes tracking easier and allows advertisements to be shown all the time in the app. To stop internet access for the app, you have to disable mobile internet or Wi-Fi. Allowing users to control internet access would encourage offline and offline-first apps.

File access needs to be limited to only a particular folder that the user can set. Apps shouldn't have the ability to search and access all the files on the phone.

More personalization of permissions is needed, such as allowing users to set a time to automatically remove all app permissions after a given period. This could include disabling permissions after 5 minutes, after closing the app, after a day, or after a week.

The security measures in the Linux system are implemented through the use of [firejail](https://firejail.wordpress.com/). Additionally, there is a user interface (UI) called [firetools](https://github.com/netblue30/firetools).

e.g.
To stop internet access one can use:
```bash
firejail --net=none vlc 
```

### Apple against Interoperability

[Apple argues against right-to-repair bill that would reduce its control](https://www.theverge.com/2024/2/9/24067957/apple-right-to-repair-oregon-bill-parts-pairing-ban)

[Mozilla says Apple’s new browser rules are ‘as painful as possible’ for Firefox](https://www.theverge.com/2024/1/26/24052067/mozilla-apple-ios-browser-rules-firefox)

[Apple appears to be breaking iPhone web apps in the EU](https://www.theverge.com/2024/2/14/24072764/apple-progressive-web-apps-eu-ios-17-4)

### Enhancing Privacy and Security in Offline App Design with WebAssembly

[Link to: Enhancing Privacy and Security in Offline App Design with WebAssembly](https://amiyatulu.github.io/blog/linux/Offline_centric_apps.html)

## **De-Facebook the Internet**

Capitalistic social media has become a threat to our democracy.

Misinformation on Facebook got six times more clicks than factual news during the 2020 election, study says

[https://www.washingtonpost.com/technology/2021/09/03/facebook-misinformation-nyu-study/](https://www.washingtonpost.com/technology/2021/09/03/facebook-misinformation-nyu-study/)

It is worrying that the societies which are most vulnerable to the impact of fake news are at the same time the least concerned about the spreading and the impact of disinformation.

[https://www.usnews.com/news/best-countries/articles/2023-01-27/finland-most-resistant-to-fake-news-report-finds](https://www.usnews.com/news/best-countries/articles/2023-01-27/finland-most-resistant-to-fake-news-report-finds)

Also far right billionaire can take over these social media sites, and use it for their interest.

Under Elon Musk, Twitter has approved 83% of censorship requests by authoritarian governments.  
The social network has restricted and withdrawn content critical of the ruling parties in Turkey and India, among other countries, including during electoral campaigns

[https://english.elpais.com/international/2023-05-24/under-elon-musk-twitter-has-approved-83-of-censorship-requests-by-authoritarian-governments.html](https://english.elpais.com/international/2023-05-24/under-elon-musk-twitter-has-approved-83-of-censorship-requests-by-authoritarian-governments.html)

Twitter has always been a hotspot for climate change misinformation. On Musk's watch, it's heating up.

[https://www.usatoday.com/story/tech/2023/01/10/twitter-climate-change-misinformation-surge-elon-musk/11002993002/](https://www.usatoday.com/story/tech/2023/01/10/twitter-climate-change-misinformation-surge-elon-musk/11002993002/)

Twitter slammed by LGBTQ rights groups after quietly removing line in hate speech policy that protected transgender users

[https://www.thestar.com/business/twitter-slammed-by-lgbtq-rights-groups-after-quietly-removing-line-in-hate-speech-policy-that/article\_dfd588ca-45a5-5055-868c-6b51b95e86f7.html](https://www.thestar.com/business/twitter-slammed-by-lgbtq-rights-groups-after-quietly-removing-line-in-hate-speech-policy-that/article_dfd588ca-45a5-5055-868c-6b51b95e86f7.html)

We can build a decentralized social media platform using decentralized moderation and governance to combat fake news. Various decentralized algorithms, such as [sequential Phragmén](https://wiki.polkadot.network/docs/learn-phragmen), Schelling point games, or a simple system like re-ranking users, similar to the Brave Goggle protocol, can be effective in addressing disinformation. We can go further to incentivize or pay the unbiased journalism.

## Desirable Social Media Features

**Some of the features social media needs to have:** 

1) **FOSS (Free and open-source software):** Anyone is freely licensed to use, copy, study, and change the software in any way, and the source code is openly shared so that people are encouraged to voluntarily improve the design (e.g security or bugs, UX, new features) of the software. 

2) **Open Protocol:** The protocol needs to be open and decentralized so that you don't have to be tied to a single app. For example, Mastodon uses [ActivityPub](https://activitypub.rocks/); different Mastodon instances can communicate with each other, and you can create instances that suit your needs.

3) **Composable and Modular Design:** Adding new features should not only be easier for developers but also for users with no coding experience. Users without coding skills can customize the app by adding or removing features themselves simply by including addons. For instance, if someone wants a personalized feed, they can include the feature; if someone doesn't like it, they can remove it. Likewise, if someone wants to try both options, that can also be accomplished by them. [WebAssembly](https://extism.org/docs/write-a-plugin/rust-pdk/) (Wasm) can prove beneficial for constructing a modular design.

4) **Monetary Incentive System:** Applications should establish their governance and [cryptocurrency funding](https://polkadot.polkassembly.io/opengov) for continued development without depending on insufficient donations of users or money given to cater to the interests of advertisers, large corporations, or corrupt governments. Additionally, there can be an incentive system at the user level to encourage the invitation of more users, along with the fair distribution of tokens based on their contributions to the app. For instance, applications can reward skilled and ethical journalists for their contributions to public interest local or international news. Designing a monetary system can be a tricky task that requires careful consideration to [avoid any unintended adverse effects](./democracy/tyranny_of_the_majority.md).

## Funding Open Source

> As money is controlled by the commons through a blockchain built by the FOSS community, it can provide an enormous benefit for open-source software, hardware, and open-access work. Funding open source becomes more accessible, and developers no longer have to rely solely on altruistic donations or corporate philanthropy; they can directly compete more effectively with big tech and potentially replace them.

**Can we build a precarious system just like big tech social media using blockchain/cryptocurrency?**

Blockchain is open source, and no one controls it. Anyone can fork and change it. A single owner can't benefit from it. Users can free to move to other updated versions, splitting the users. Even if someone builds a bad system, scams can only last for a year or two, after which prices are dumped, unlike big tech closed-source, monopolized scam apps that still last for 20 year. For example, imagine an open source facebook app with ads. As source code is available, a developer will fork it and release it without Ads, now users will start moving to new app, ending profit of Facebook.

## Why to transition to Mastodon?

Mastodon is a federated social media platform that is designed as an alternative to centralized social media networks like Twitter. The primary goal of Mastodon is to provide users with a decentralized and more privacy-focused social networking experience.

Here's how Mastodon works:

1. **Instance**: Instead of a single, centralized server or website like Twitter, Mastodon consists of many independent servers called "instances." Each instance is operated by its own administrators and has its own set of rules and community guidelines. Users on an instance can communicate with users on other instances, making it a federated network.

> As there are multiple instances spread throughout the world, it's challenging for fascist governments in different regions to censor content. Most instances operate through consensus, so if an instance misbehaves by promoting hate speech or disinformation, it's likely to be added to the blocked list by other instances.
And if you run an instance on decentralized servers like the [Akash network](https://akash.network/), it's almost impossible to shut down the server. System administrators can run the instance anonymously.

2. **User Accounts**: Users create accounts on specific Mastodon instances. These accounts have handles (similar to Twitter usernames) and profiles where they can provide information about themselves, upload avatars, and post content.

3. **Toots**: Instead of tweets, Mastodon uses "toots" as the term for posts. Users can write and share toots with text, images, links, and videos. These toots can be public, meaning they are visible to anyone on the federated network, or they can be restricted to specific groups of users (followers, followers of followers, etc.), depending on the user's preferences.

> In Mastodon, you can edit your toots. So, if you make a mistake, you can edit and improve it. When I make some mistakes in toots which is common, I edit it. On Twitter, only premium users are allowed to edit. So, in Mastodon, you have premium features available for free. 😀 Furthermore, the word limit in Mastodon is also longer.

4. **Following**: Users can follow other users from their own instance or from other instances. This creates a connection between the users, allowing them to see each other's toots in their timelines. The federated nature of Mastodon means you can follow and interact with users on different instances as if they were all part of the same network.

> It's a bit hard to find your followers on Mastodon, especially if they are on a different instance because name search is unlikely to yield results on a different instance. Also, it will not provide personalized AI suggestions like on Twitter for followers. Although such tools could be built into Mastodon, Mastodon is not a big tech platform; it relies on donations and volunteer developers, and building such features can be costly in terms of server cost. You need to do some extra work, such as finding followers using hashtags, retweeting from other users, federated timeline, or communication through other platforms to get handle etc. Personally, I don't need AI suggestions for followers. It may also be problematic if the user has no control over what AI suggests as in Twitter. I am fine without it.

5. **Timeline**: Mastodon users have a timeline that displays toots from users they follow. This timeline can be customized to show different types of content, such as the local timeline (toots from users on the same instance) or the federated timeline (toots from across the entire Mastodon network). Users can also create custom timelines to filter content based on hashtags and keywords.

6. **Privacy Controls**: Mastodon places a strong emphasis on user privacy and control. Users can choose who can follow them, who can see their toots, and who can interact with their content. This allows for a more tailored and secure social media experience.

7. **Moderation**: Instance administrators have the authority to set and enforce rules within their own instances. They can moderate content, suspend or ban users, and establish community guidelines to ensure a safe and respectful environment.

8. **Open Source**: Mastodon is open-source software, which means the code is available for anyone to view, modify, and run their own Mastodon instance. This open nature encourages innovation and diversity within the Mastodon ecosystem.

9.  **Interoperability**: Mastodon is part of the ActivityPub protocol, which enables interoperability with other federated social media platforms. This means that Mastodon users can interact with users on other platforms like Pleroma, PeerTube, and Pixelfed.

> Interoperability makes it a different kind of beast, which means it's adaptable and future-proof. You can adapt it to use different decentralized protocols with many new features (e.g., using blockchain consensus to incentivize journalism) without destroying the existing network.

In summary, Mastodon works by decentralizing social media, allowing users to create accounts on independent instances, follow others, post content, and customize their experience while maintaining control over their privacy and interactions. The federated nature of Mastodon promotes diversity, moderation, and user choice, making it an appealing alternative to centralized social media networks.

## **How to move to Mastodon?**

- Choose your instance from [https://joinmastodon.org/](https://joinmastodon.org/) and register your account.

Don't overthink which instance to choose; you can change your instance anytime if you're not satisfied. Occasionally, certain instances may not permit new registrations due to reaching full capacity. Additionally, some instances might be unreliable in terms of speed and bandwidth performance. Register on an instance that allows new registrations, or if you don't have time to research servers, consider joining mastodon.social and change it at your preferred time if you wish.

- To use on mobile, you can use Android apps or just the website. I prefer the website because it provides a better user experience with quicker updates, and there are more websites available with different features.

![Install App](./images/install-app.jpg)

- If you want Android apps, there are about tens of apps. Install [F-Droid](https://f-droid.org/en/), a repository for open-source apps, and you can get all the apps to run Mastodon.

Use the 'Install' shortcut so that the website functions like an Android app, and you won't have to remember the URL.

### Moderators per user in fediverse

Assuming that Monthly Active Users (MAUs) are the relevant quantity, and assuming further that there is at least one admin or moderator per server, the ratio is (1 million) to (27 thousand) which is approximately 1/37. Though it's a very crude estimate which averages over wildly differently-sized instances.

![Moderators](./images/fediverse_moderators.png)

[Data Shows X Has Significantly Fewer Moderation Staff Than Other Platforms ](https://www.socialmediatoday.com/news/x-has-significantly-fewer-moderation-staff/714650/)

### Personalized Feeds

> For personalized feeds, you can use `foryoufeed`. With `foryoufeed`, you have control over personalization, not big tech companies that dictate what you see.

![Feed Algorithm](./images/feed-algorithm.png)

[Website Foryoufeed](https://foryoufeed.vercel.app/)

[Github link](https://github.com/pkreissel/foryoufeed)

> You can also create lists in mastodon, to create personalization. 

It's not just with Mastodon that you can get PubActivity; you can also access a decentralized Reddit-like experience with Lemmy

[https://github.com/LemmyNet/lemmy](https://github.com/LemmyNet/lemmy)

[https://join-lemmy.org/](https://join-lemmy.org/)


# What should you do if your followers are on Twitter?

There are two main reasons for not joining Mastodon. Firstly, people may not be aware of it and its benefits. Secondly, your followers are already on Twitter. Due to the authoritarian nature of Twitter, third-party access to apps has been restricted. This makes cross-posting challenging using a single app. However, Mastodon has an open API, allowing users to automate their posts. No one can take away or censor your access to the API. If a system admin censors you for any reason, you can quickly shift your account to a different server, taking your followers with you.

If you're concerned about losing followers, you can create two accounts and cross-post. Automation is much more straightforward and easy on Mastodon than on Twitter. Additionally, due to the network effect, the number of Mastodon users is growing.

> Thousands of accounts are now censored by authoritarian governments. It's the right choice to move away from Twitter.

![Mastodon Stats](./images/mastodon_stats.png)

<https://mastodon-analytics.com/>



# Mastodon clients for automation

- Rust client
<https://github.com/h3poteto/megalodon-rs>
- Python client
<https://mastodonpy.readthedocs.io/>

# Downfall of Elon Musk.

> Trust, inclusivity, transparency, everything is compromised.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q1STT9_XdUw?si=5KtFqYlxhScSNRyC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## OpenSource

![Open Source Developer](./images/open-source.png)

---


# what if crypto token prices are discovered through consensus rather than demand and supply

# What if crypto token prices are discovered through consensus of utility rather than demand and supply?

## date: "2022-12-19"

---
categories:

- "blockchain"
- "cryptocurrency"
- "dex"

---

> “The stock market is filled with individuals who know the price of everything, but the value of nothing.” — Phillip Fisher

Scams involving cryptocurrency are extremely prevalent.
The majority of coins on the cryptocurrency market are worthless meme coins, but they nevertheless manage to dupe individuals into parting by enticing them to grow their money and making them rich in no time.
Crypto scams are currently not limited to big cities now they have even begun targeting underdeveloped villages in nations like India.

The issue is caused by the price being determined by the supply and demand of tokens on exchanges without considering their utility. The prices of tokens depend on how many people you manage to fool, and the scammer's ability to make a sudden spike through pump and dump.

Crypto scams, also negatively impact useful coins, and all currency prices move in sync, both good coins, and bad coins get dumped in a beer market.

## Bad money drives out good, so we need to eliminate the bad money

The price of tokens derived through demand and supply is suboptimal. It doesn't include a consensus from [everyone or stakeholders](https://amiyatulu.github.io/blog/shivarthu/tyranny_of_the_majority.html), but just the interacting party. So, they are free to produce as much as negative externality they like without any consequences.

Can we discover prices through consensus and using human rationality rather than speculation, increase stability of coins prices and curtail [FUD](https://en.wikipedia.org/wiki/Fear,_uncertainty,_and_doubt)? There may be some way out.

The score schelling game can assist in determining cryptocurrency prices in decentralized exchanges by consensus and human reason.

The algorithm is provided in the following link:
[Score schelling game](./shivarthu/Shivarthu.md#price-discovery-of-positive-externality-through-score-schelling-game)

But setting an exchange using score schelling game is not without challenges. One of the problem is arbitrage. If the AMM price is lower than the market price, then people will drain all the liquidity and sell it at a higher price in the market. The solution can be the ability to withdraw after a month or have a KYC so that you can't withdraw tokens after certain limits.
Similarly, if the demand and utility of the token are more and the price is set lower, it can create a shortage, and more people will not be benefited, so, prices need to be increased through consensus.

> Another way is to tax the shit coins and subsidize the good coins based on the price discovery, and this won't impact the liquidity or create the problem of arbitrage, neither KYC is needed.
> Taxing can be done using market makers like Uniswap, and taxes collected are sold at lower discovered prices to buy or collect good coins and hence plummeting the shitcoin price and good coins collected are given as subsidies while exchanging the good coins . Liquidity providers can also be incentivized with tax collected.

## **Rationality, Disinformation and Nudge**

Only a nudge while buying from an exchange can work to many extents.
For example in real world, Adani stocks got plummeted by the Hindenburg report.

A decentralized cryptoexchange with [a good governance](https://amiyatulu.github.io/blog/shivarthu/tyranny_of_the_majority.html) can provide a nudge for discovered prices, or provide research review and discussion about the advantages, disadvantages, security and application of the cryptocurrency.

An example nudge: "The price of the coin derived by decentralized experts is this. Do you want to buy the token at this price?"

We also need to have good institutes to stop disinformation by scammers. [Social media](./what-do-we-need-to-decentralize-in-the-coming-years.md) are usually a good target for online fraud.

We can slowly increase the complexity of exchange with passing year that includes providing liquidity at predicted prices.

**An example exchange:**

Discovering price in crypto exchange using score Schelling game based on coin utility.

Bitcoin = 0.1
Ethereum = 0.4
Polkadot = 0.3
Near = 0.2

Exchange:

2 Near = 1 Ethereum

To calculate the price you need to take into account:

1) Utility of the token (Most priority)
2) Total Supply of token
3) Inflation or deflation of token
4) Demand for token

KYC of user, with limits to how much they can withdraw every day.

There can be incentives for providing liquidity, and the ability sale your token at the discovered price during the initial coin offering.

Price discovery every day or weekly.

## What will be impact of other exchanges?

[Details in the link.](https://amiyatulu.github.io/blog/shivarthu/consensus_price_discovery.html)

## A better method that don't require KYC

The problem lies in whether sufficient liquidity is available. To address this issue, each participating blockchain can provide incentives for providing liquidity, similar to staking mechanisms. By providing liquidity, individuals can earn more tokens through minting as rewards. This incentivizes the creation of a steady pool of liquidity.

> In this way, we can create an ecosystem of supply chains with more accurate price discovery, making money available to everyone in a fair and just manner. No more FUD (fear, uncertainty, and doubt) or trading based on speculation rather than utility.

Some work thats already done on prediction market:

[Zeitgeist](https://github.com/zeitgeistpm/zeitgeist/tree/main)

[Docs](https://docs.zeitgeist.pm/docs/category/learn)

## Prototype code:

[Code](https://github.com/reaudito/uniswap-tax)

A * B = constant_product

Predict bad token:

If B is bad token
  If swap A {{
      Substract from constant product
  }}

  If swap B {{
      Add to constant product
  }}


```rust
struct UniswapSimulator {
    reserve_a: f64,
    reserve_b: f64,
    constant_product: f64,
}

impl UniswapSimulator {
    fn new(reserve_a: f64, reserve_b: f64) -> Self {
        let constant_product = reserve_a * reserve_b;
        UniswapSimulator {
            reserve_a,
            reserve_b,
            constant_product,
        }
    }

    fn get_price(&self) -> f64 {
        self.reserve_b / self.reserve_a
    }

    fn swap(&mut self, amount_in: f64, token_in: &str) -> f64 {
        match token_in {
            "A" => {
                let new_reserve_a = self.reserve_a + amount_in;
                let new_reserve_b = self.constant_product / new_reserve_a;
                let amount_out = self.reserve_b - new_reserve_b;
                self.reserve_a = new_reserve_a;
                self.reserve_b = new_reserve_b;
                amount_out
            }
            "B" => {
                let new_reserve_b = self.reserve_b + amount_in;
                let new_reserve_a = self.constant_product / new_reserve_b;
                let amount_out = self.reserve_a - new_reserve_a;
                self.reserve_a = new_reserve_a;
                self.reserve_b = new_reserve_b;
                amount_out
            }
            _ => panic!("Invalid token type. Use 'A' or 'B'."),
        }
    }

    fn add_liquidity(&mut self, amount_a: f64, amount_b: f64) {
        self.reserve_a += amount_a;
        self.reserve_b += amount_b;
        self.constant_product = self.reserve_a * self.reserve_b;
    }

    fn remove_liquidity(&mut self, liquidity_fraction: f64) -> (f64, f64) {
        let amount_a = self.reserve_a * liquidity_fraction;
        let amount_b = self.reserve_b * liquidity_fraction;
        self.reserve_a -= amount_a;
        self.reserve_b -= amount_b;
        self.constant_product = self.reserve_a * self.reserve_b;
        (amount_a, amount_b)
    }

    fn change_constant_product(&mut self, value: f64) {
        self.constant_product += value;
    }
}

fn pool_swap_a() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_b_received = pool.swap(10.0, "A");
    println!("Swapped 10 A for {:.2} B", amount_b_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_plus_constant_product_swap_a() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_b_received = pool.swap(10.0, "A");
    println!("Swapped 10 A for {:.2} B", amount_b_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_minus_constant_product_swap_a() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(-50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_b_received = pool.swap(10.0, "A");
    println!("Swapped 10 A for {:.2} B", amount_b_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_plus_constant_product_swap_b() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_a_received = pool.swap(10.0, "B");
    println!("Swapped 10 B for {:.2} A", amount_a_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn pool_minus_constant_product_swap_b() {
    let mut pool = UniswapSimulator::new(5000.0, 1000.0);

    pool.change_constant_product(-50.0);

    println!("Initial price of A in terms of B: {:.2}", pool.get_price());

    let amount_a_received = pool.swap(10.0, "B");
    println!("Swapped 10 B for {:.2} A", amount_a_received);

    pool.add_liquidity(500.0, 500.0);
    println!("Added 500 A and 500 B to the pool.");

    let (amount_a_removed, amount_b_removed) = pool.remove_liquidity(0.5);
    println!(
        "Removed {:.2} A and {:.2} B from the pool.",
        amount_a_removed, amount_b_removed
    );
}

fn main() {
    pool_swap_a();
    println!("


Swap A, add to constant factor");
    pool_plus_constant_product_swap_a();
    println!("


Swap A, substract from constant factor");
    pool_minus_constant_product_swap_a();
    println!("


Swap B, add to constant factor");
    pool_plus_constant_product_swap_b();
    println!("


Swap B, substract from constant factor");
    pool_minus_constant_product_swap_b();

    println!(r#"
        If B is bad token:

        If swap A {{
            Substract from constant product
        }}

        If swap B {{
            Add to constant product
        }}
    "#);

    pool_minus_constant_product_swap_a();
    pool_plus_constant_product_swap_b();

}
```

## Memecoins Drain Liquidity from the Broader Altcoin Market

[Waiting for altcoin season? Data suggests it’s already here](https://cointelegraph.com/news/waiting-for-altcoin-season-data-suggests-it-s-already-here)

Every time Bitcoin dominance drops, analysts say altcoin season is coming. But data suggests that the altseason already came and went.

### 1. **Concentration of Capital in Memecoins**
Memecoins, such as Dogecoin (DOGE), Shiba Inu (SHIB), and newer iterations like PEPE or WIF, often attract significant attention due to their viral nature, community-driven hype, and low entry costs. These coins can experience massive price surges in short periods, drawing in both retail and institutional investors looking for quick profits.

- **Liquidity Shift**: When investors allocate funds to memecoins, they are effectively pulling capital away from other altcoins. This reduces the available liquidity in the broader altcoin market, as money that could have been invested in more established projects or innovative blockchain solutions is instead concentrated in memecoins.
- **Opportunity Cost**: The opportunity cost of investing in memecoins is high. Funds locked into speculative memecoins are not available to support other projects, potentially stifling innovation and growth in the broader crypto ecosystem.

### 2. **Speculative Behavior and Market Sentiment**
Memecoins thrive on speculation and social media-driven FOMO (fear of missing out). This creates a feedback loop where investors prioritize short-term gains over long-term value creation.

- **Diversion of Attention**: Memecoins often dominate headlines and social media discussions, overshadowing meaningful developments in the broader altcoin space. Investors may focus disproportionately on memecoins, neglecting projects with stronger fundamentals or real-world use cases.
- **Volatility and Risk**: The highly volatile nature of memecoins can lead to rapid inflows and outflows of liquidity. When memecoins crash, investors may withdraw entirely from the crypto market rather than reallocating funds to other altcoins, further reducing overall liquidity.

### 3. **Market Fragmentation**
The proliferation of memecoins contributes to market fragmentation, where liquidity is spread thinly across thousands of tokens. This fragmentation has several implications:

- **Dilution of Liquidity**: Instead of concentrating liquidity in a smaller number of high-quality projects, the crypto market becomes fragmented, with liquidity dispersed across countless memecoins. This makes it harder for individual altcoins to maintain sufficient trading volume and price stability.
- **Barriers for New Projects**: Established altcoins and emerging projects face increased competition for funding and attention. With so many memecoins vying for investor interest, legitimate projects may struggle to attract the liquidity needed to grow and innovate.

### 4. **Retail Investor Dominance**
Memecoins tend to attract a large number of retail investors who may lack the sophistication or knowledge to evaluate the broader altcoin market. This demographic shift can have several effects:

- **Short-Term Focus**: Retail investors are often more interested in quick profits than long-term investment strategies. This mindset encourages frequent trading and speculative behavior, which can destabilize the broader market.
- **Reduced Institutional Participation**: Institutional investors, who typically seek stable and predictable markets, may be deterred by the volatility and unpredictability caused by memecoins. Their reduced participation can further erode liquidity in the broader altcoin market.

### 5. **Regulatory and Reputational Risks**
The rise of memecoins has drawn scrutiny from regulators and critics, who often view them as speculative bubbles or even scams. This negative perception can have ripple effects on the broader crypto market:

- **Loss of Credibility**: The association of cryptocurrencies with memecoins can damage the reputation of the entire industry, making it harder for legitimate projects to gain trust and attract investment.
- **Regulatory Crackdowns**: If regulators target memecoins due to concerns about fraud or market manipulation, the resulting uncertainty can lead to a liquidity crunch across the crypto market.

### Conclusion
In summary, memecoins can drain liquidity from the broader altcoin market by concentrating capital in speculative assets, diverting attention from meaningful projects, fragmenting the market, encouraging short-term behavior, and creating reputational risks. While memecoins can provide entertainment and opportunities for profit, their dominance may hinder the development of a more mature and sustainable crypto ecosystem.

**Memecoins drain liquidity from the broader altcoin market by concentrating capital in speculative assets, diverting attention from meaningful projects, fragmenting the market, encouraging short-term behavior, and creating reputational risks.**


### **Key Idea: Median Price Discovery with Commit-and-Reveal Scheme**

The core concept here is to use a **median price discovery mechanism** to determine the price of a token based on rational participants' inputs (e.g., bids and asks). A **commit-and-reveal scheme** ensures that participants cannot manipulate the process by observing others' actions before committing their own. Additionally, **time locks** and **circuit breakers** are used to prevent bulk arbitrage and drastic price changes.

Let’s examine each component:

---

### **1. Median Price Discovery**
#### **How It Works**
- Participants submit their proposed prices for the token.
- The system calculates the **median price** from these submissions, which becomes the reference price for trades.
- This approach minimizes the influence of outliers (e.g., manipulative bids or asks) because the median is less sensitive to extreme values than the mean.

#### **Strengths**
- **Resilience to Manipulation**: The median reduces the impact of malicious actors submitting artificially high or low prices.
- **Decentralized Price Discovery**: Multiple participants contribute to price determination, avoiding reliance on a single source.

#### **Weaknesses**
- **Rationality Assumption**: The system assumes that participants are rational and aim to provide accurate price estimates. However, irrational or malicious actors could still submit skewed prices.
- **Low Participation Risk**: If participation is low, the median may not reflect true market demand, leading to inefficiencies.

---

### **2. Commit-and-Reveal Scheme**
#### **How It Works**
- Participants commit to their price submissions without revealing them publicly.
- After a predefined period, participants reveal their committed prices.
- The system then calculates the median price based on the revealed submissions.

#### **Strengths**
- **Prevents Front-Running**: Since participants cannot see others' submissions during the commit phase, they cannot adjust their own submissions to manipulate the outcome.
- **Fairness**: All participants have an equal opportunity to influence the price discovery process.

#### **Weaknesses**
- **Complexity**: The commit-and-reveal process introduces additional steps, which may deter casual users.
- **Coordination Overhead**: Ensuring timely commitment and revelation requires coordination and trust in the system.
- **Revelation Risks**: If some participants fail to reveal their commitments, the process may become incomplete or biased.

---

### **3. Time Locks**
#### **How It Works**
- Trades or price updates are locked for a specific time period (e.g., 5 minutes, 1 hour).
- During this period, no new trades or price adjustments can occur.

#### **Strengths**
- **Reduces Arbitrage Opportunities**: By locking prices, you prevent rapid price swings caused by arbitrageurs exploiting discrepancies between your platform and external markets.
- **Stabilizes Prices**: Time locks give the market time to absorb information and stabilize.

#### **Weaknesses**
- **Reduced Liquidity**: Time locks limit trading activity, which can reduce liquidity and increase slippage.
- **User Frustration**: Traders may find the delays inconvenient, especially if they need to react quickly to market conditions.

---

### **4. Circuit Breakers**
#### **How It Works**
- If the price moves beyond a predefined threshold (e.g., ±10% within a short period), trading is paused temporarily.
- Once the circuit breaker is triggered, the system evaluates whether to resume trading or implement additional measures (e.g., recalculating the median price).

#### **Strengths**
- **Prevents Flash Crashes**: Circuit breakers protect against extreme price swings caused by large trades or arbitrage attacks.
- **Promotes Stability**: They give the market time to recover and reassess the situation.

#### **Weaknesses**
- **Disruption**: Frequent circuit breaker activations can disrupt trading and erode confidence in the platform.
- **Threshold Sensitivity**: Setting the right threshold is challenging. Too tight, and the circuit breaker triggers unnecessarily; too loose, and it fails to prevent significant price swings.

---

### **5. Simple Order Book**
#### **How It Works**
- A traditional order book is used to match buy and sell orders.
- The order book operates based on the median price determined by the commit-and-reveal scheme.

#### **Strengths**
- **Familiarity**: Order books are widely understood and trusted by traders.
- **Transparency**: Participants can see the state of the order book, fostering trust.

#### **Weaknesses**
- **Liquidity Dependency**: An order book requires sufficient liquidity to function effectively. Low liquidity can lead to wide spreads and poor price discovery.
- **Arbitrage Risks**: Without additional safeguards, arbitrageurs can exploit price differences between your order book and external markets.

---

### **6. Rational Price Discoverers**
#### **Assumption**
- The system relies on "rational price discoverers" who submit accurate price estimates based on market conditions.

#### **Challenges**
- **Incentives**: How do you incentivize participants to act rationally? Without proper incentives, participants may submit arbitrary or manipulative prices.
- **Participation**: Attracting enough rational participants to ensure accurate price discovery is non-trivial.

---

### **Evaluation of the Overall Idea**

#### **Strengths**
1. **Mitigates Arbitrage**: The combination of time locks, circuit breakers, and a median price discovery mechanism reduces opportunities for arbitrage.
2. **Fair Price Discovery**: The commit-and-reveal scheme ensures fairness and minimizes manipulation risks.
3. **Stability**: Circuit breakers and time locks promote price stability, reducing volatility.

#### **Weaknesses**
1. **Complexity**: The multi-layered approach (median price, commit-and-reveal, time locks, circuit breakers) introduces significant complexity, which may deter users.
2. **Liquidity Concerns**: Time locks and circuit breakers reduce liquidity, making the platform less attractive to traders.
3. **Adoption Challenges**: Convincing users to adopt a new system (especially one requiring KYC or other restrictions) is difficult, particularly in decentralized ecosystems.

---

### **Practical Implementation Considerations**

1. **Incentivizing Rational Participants**
   - Offer rewards (e.g., tokens, discounts on fees) to participants who consistently submit accurate prices.
   - Penalize malicious behavior (e.g., skewing prices) by slashing deposits or banning accounts.

2. **Hybrid Approach**
   - Combine the median price discovery mechanism with a traditional AMM (Automated Market Maker) to balance fairness and liquidity.

3. **Community Governance**
   - Allow the community to vote on parameters like circuit breaker thresholds, time lock durations, and incentives for price discoverers.

4. **Testing and Iteration**
   - Pilot the system on a small scale to identify and address potential issues before full deployment.

---

### **Conclusion**

Your idea of using a **median price discovery mechanism** with a **commit-and-reveal scheme**, **time locks**, and **circuit breakers** is a creative and theoretically sound approach to mitigate arbitrage and promote fair price discovery. However, its success depends on overcoming challenges related to complexity, liquidity, and user adoption.

By carefully designing incentives, testing the system iteratively, and combining it with existing mechanisms (e.g., order books or AMMs), you can create a robust framework that balances fairness, stability, and usability.

**This idea has potential but requires careful design and implementation to address challenges like complexity, liquidity, and user adoption. Combining it with incentives, community governance, and hybrid mechanisms can enhance its effectiveness.**


## **Challenges in Eliminating Shitcoins**

#### **a. Human Psychology and Speculation**
- **Meme Coins Thrive on Hype**: Meme coins often gain popularity due to viral marketing, celebrity endorsements, or community-driven narratives. These factors are difficult to quantify or regulate through voting or price discovery mechanisms.
- **Speculative Behavior**: Many investors buy meme coins not because they believe in their utility but because they hope for quick profits. This behavior persists even if the token is flagged as low-quality.

#### **b. Decentralization and Forking**
- **Forking**: If a token is delisted or flagged as low-quality, its creators or supporters can fork it into a new version. This undermines the effectiveness of any filtering mechanism.
- **Off-Chain Trading**: Even if a token is removed from your platform, users can trade it off-chain or on other platforms, bypassing your restrictions.

#### **c. Community Resistance**
- **Token Communities**: Meme coins often have strong, vocal communities that resist attempts to delist or devalue their tokens. These communities may retaliate (e.g., by creating forks or migrating to other platforms).

#### **d. Lack of Objective Criteria**
- Defining what constitutes a "shitcoin" is subjective. Some tokens may appear low-quality initially but gain utility later. Overly restrictive criteria could stifle innovation.

---

### **Potential Benefits of Commit and Reveal voting**

Despite the challenges, commit-and-reveal voting and rational price discovery can offer some benefits in reducing the prevalence of shitcoins:

#### **a. Improved Token Quality**
- By requiring tokens to pass a voting or price discovery process, you can filter out tokens with no utility, clear signs of manipulation, or fraudulent intent.

#### **b. Community Engagement**
- Involving the community in decision-making fosters trust and transparency. Users are more likely to support a platform where they have a say in governance.

#### **c. Reduced Manipulation**
- Commit-and-reveal voting and median price discovery reduce the ability of bad actors to manipulate token listings or prices.

---

### **Limitations in Practice**

#### **a. Cannot Fully Eliminate Shitcoins**
- Shitcoins and meme coins thrive on decentralized ecosystems where barriers to entry are low. Even if you eliminate them from your platform, they can exist elsewhere.

#### **b. Speculative Behavior Persists**
- The root cause of meme coin popularity—human psychology and the allure of quick profits—cannot be eliminated by technical or governance mechanisms alone.

#### **c. Regulatory Risks**
- Enforcing strict token listing criteria or voting mechanisms may attract regulatory scrutiny, especially if perceived as censorship or centralization.

---

### **Recommendations for Implementation**

If you want to use commit-and-reveal voting and rational price discovery to reduce the prevalence of shitcoins, consider the following recommendations:

#### **a. Hybrid Approach**
- Combine voting mechanisms with other filters, such as:
  - Minimum trading volume requirements.
  - Proof of utility or development activity.
  - Reputation systems for token creators.

#### **b. Incentivize Rational Participation**
- Reward participants who consistently provide accurate votes or price estimates.
- Penalize malicious behavior (e.g., submitting false votes or skewed prices).

#### **c. Educate the Community**
- Educate users about the risks of investing in low-quality tokens and promote transparency in token issuance.

#### **d. Allow Appeals**
- Provide a mechanism for token creators to appeal delisting decisions, ensuring fairness and reducing backlash.

#### **e. Focus on Utility**
- Prioritize tokens with clear use cases, active development teams, and real-world applications. This shifts the focus away from speculative assets.

---

### **Conclusion**

Commit-and-reveal voting and rational price discovery can help **reduce the prevalence of shitcoins or meme coins** by introducing objective criteria and community-driven governance. However, these mechanisms cannot fully eliminate shitcoins due to the decentralized nature of cryptocurrencies, human psychology, and the ease of forking or trading elsewhere.

To maximize effectiveness, combine these mechanisms with other filters, incentives, and educational efforts. Ultimately, the goal should be to promote high-quality tokens while maintaining the principles of decentralization and user empowerment.

**Final Answer**: **Commit-and-reveal voting and rational price discovery can help reduce shitcoins but cannot fully eliminate them due to human psychology, decentralization, and speculative behavior. A hybrid approach combining these mechanisms with additional filters and incentives is more effective.**




## Supply Chains

**Different supply chains can be built with their own cryptocurrency.**

Supply chains can use free market pricing derived from demand and supply where required rather than consensus pricing, or price derived by governance.

1) No price ceiling or floor so that there are no shortage or wastage.
2) A large number of buyers and sellers
3) Subsidize positive externality and tax negative externality
4) Perfect information with all information of utilities available
5) No more than average 5 hours of working hours per day for employees and no [bullshit jobs](https://en.wikipedia.org/wiki/Bullshit_Jobs)
6) Sustainable production
7) Governance with expertise that takes care of the whole system like setting taxes or subsidies.
6) Equitable token distribution, so that everyone can create a demand and rich doesn't get richer.

## Food Delivery
**Take for example modified version of the cooked food supply chain such as Zomato.**

1) Free monthly tokens can be given to kyc users collected from the [randomized tax]([https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#randomized-tax-collection). With monthly token you can make some purchases for free.
2) Large number of buyers and sellers
3) Tax unhealthy food, which means a percentage of transaction cost is collected and added to a governance account.
4) Subsidize healthy food like fruits and vegetables which means the buyers or sellers are given a few additional tokens during the transaction.
5) Governance with expertise that takes care of the whole system like setting taxes or subsidies.
6) No commission by the trade maker or app provider

Subsidies cause more trade and can be wasteful due to deadweight loss if it's not a positive externality.

To enhance the platform, it is necessary to develop a Decentralized Autonomous Organization (DAO) for shipment management, as well as a reputation system for both buyers and sellers. This reputation system should incorporate attributes such as the quality of food offered by sellers, and handle issues related to information asymmetry.

## Ride sharing

**Now look at ride-sharing supply chain like ola:**

1) Free monthly tokens can be given to KYC user collected from the randomized tax. It keeps the currency deflationary with a fixed supply. ([https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#randomized-tax-collection](https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md#randomized-tax-collection))
2) Large number of buyers and sellers
3) Tax fossil fuel bikes or cars
4) Subsidize electric bikes or bicycle ride
5) Governance with expertise that takes care of the whole system like setting taxes or subsidies and women's safety.
6) No commission by the trade maker or app provider


## Agriculture

**Another example can be the supply chain of precision farming** (like hydroponics agriculture, biofloc fish farming, [hydroponics livestock feed](https://agricultureguruji.com/hydroponic-fodder/)) :

[The Netherlands might be a small country, but it's the second-largest exporter of agriculture in the world.](https://www.weforum.org/agenda/2019/11/netherlands-dutch-farming-agriculture-sustainable/?utm_source=Facebook%20Videos&utm_medium=Facebook%20Videos&utm_campaign=Facebook%20Video%20Blogs)

1) Governance to allocate money to farmers through algorithm like score schelling game for buying equipment for precision farming that can be paid through installment.
2) [Expertise governance](https://github.com/amiyatulu/shivarthu) for collecting data and analyzing data collected from precision farming and providing feedback to farmers.
3) Decentralized supply chain tracking system from production to consumers, so that both consumer and producers get fair prices, and there is no surplus/wastage or shortages.
4) Some UBI to consumers so that they can always create a demand.
5) Incentivizing learning for precision farming.

Vertical farming offers several benefits compared to traditional agricultural methods:

1. Increased crop yield: Vertical farming maximizes the use of space by stacking plants vertically, allowing for multiple layers of cultivation. This approach can significantly increase crop yields per square meter of land compared to traditional farming methods.

2. Efficient land use: Vertical farms can be built in urban areas, unused buildings, or even indoors, making them independent of arable land availability. This enables farming in densely populated areas, reducing the need for long-distance transportation of produce.

3. Year-round cultivation: Vertical farming utilizes controlled environments, such as indoor facilities or greenhouses, which enable year-round cultivation regardless of external weather conditions. This leads to consistent crop production and reduces the risks associated with seasonal variations.

4. Water conservation: Vertical farming employs hydroponic or aeroponic systems that recycle and conserve water. These methods use significantly less water than conventional farming, as water is efficiently delivered directly to the roots of plants, minimizing wastage through evaporation or runoff.

5. Reduction in pesticide use: The controlled environment of vertical farms reduces the risk of pest infestations, decreasing the need for chemical pesticides. Additionally, vertical farming systems often incorporate integrated pest management techniques and can employ natural predators to control pests effectively.

6. Energy efficiency: Although vertical farms require energy for lighting, heating, and cooling, advancements in LED technology and energy management systems have made them more energy-efficient over time. Furthermore, renewable energy sources, such as solar panels or wind turbines, can be integrated into vertical farming systems, further reducing the carbon footprint. The photosynthesis process has an upper limit of around 11% in terms of its maximum theoretical efficiency. Consequently, LED lights utilized in vertical farming exhibit inefficiency. However, it remains possible to employ natural light/sunlight for vertical farming purposes.

7. Reduced transportation and logistics: By establishing vertical farms close to urban centers or directly within them, the distance between the farm and consumer is significantly reduced. This reduces the time and energy required for transportation, leading to fresher produce and lower carbon emissions associated with food transportation.

8. Enhanced food security: Vertical farming can contribute to local food production, reducing dependence on long-distance imports and enhancing food security. It provides the opportunity to cultivate a wide variety of crops, including specialty or exotic produce, that may not be locally available through conventional farming.

9. GMOs in Controlled Environments: The possibility of using GMOs exists in precision agriculture, such as precision vertical farming or hydroponics, where cultivation occurs in controlled environments without [leakage into the surrounding environment](https://cban.ca/gmos/issues/environmental-impacts/). GMOs with high yields and nutritional benefits can be considered, but their use requires appropriate regulations and rigorous testing (e.g. [Nontarget Effects of Genetic Manipulation](http://natureinstitute.org/nontarget/)) to ensure their safety for human health. Additionally, the crops are not patented, which prevents the creation of monopolies and protects farmers. One example of GMOs involves producing genetically modified sugarcane or corn using aeroponics or hydroponics, and then utilizing them to [produce vegetable oil with yeast](https://grist.org/food/cooking-oil-deforestation-startup-sugarcane-solution/). This approach can help address the deforestation problem and reduce environmental impact, making it conducive to positive outcomes in life cycle assessments (LCAs).

10. Mitigation of environmental impact: By minimizing land use, conserving water, reducing pesticide usage, and optimizing energy consumption, vertical farming has the potential to mitigate some of the negative environmental impacts associated with conventional agriculture, such as deforestation, water pollution, and greenhouse gas emissions.

11. Educational and research opportunities: Vertical farming serves as a platform for education, research, and innovation in agriculture and sustainable food production. It allows for experimentation with new techniques, crop varieties, and cultivation methods, fostering advancements in agricultural practices and knowledge.

While vertical farming has numerous benefits, it also faces challenges related to initial investment costs, energy consumption, and scalability. However, ongoing technological advancements and increasing interest in sustainable food production are expected to address these challenges over time.

> The high upfront costs of precision vertical farming, which amount to crores, pose a significant barrier for individuals to establish such operations. However, through the power of collective funding and governance, vertical farming can become both accessible and practical. One possible approach is to consider community investment, with each person contributing around $25 (which [can be paid back in form of UBI or agricultural outputs](./empowering-communities-decentralizing-supermarkets-through-public-ownership-and-control.md)), to establish community-run vertical farming ventures.

Privacy and large-scale computation are an important requirements for building decentralized supply chains. [New blockchains](https://fleek.network/) and [zero knowledge proofs](https://www.risczero.com/) are do made to solve these issues.

---


# what if we limit the expression of these two important words share and adapt

[![](images/90c20-screenshot-2bfrom-2b2018-01-01-2b10-49-31.png)](http://iambrainstorming.files.wordpress.com/2018/01/90c20-screenshot-2bfrom-2b2018-01-01-2b10-49-31.png)

  
Attribution 4.0 International (CC BY 4.0)  
You are free to:  
Share — copy and redistribute the material in any medium or format  
Adapt — remix, transform, and build upon the material  
for any purpose, even commercially.  
  
  
What happens when you limit the voicing of these two important words?  
**1) Nescience : (Ignorance is a lack of knowledge)**  
Our eyes and senses are limited by many ways. _We are adapted to view the world perfectly only at a particular zooming level_. The world becomes blurred when we increase or decrease the zooming level. We can't know what is happening in another country just by our senses. Increasing and decreasing the zooming level requires indirect measurements that are tedious and sophisticated. You need to learn the outcomes of the research, and techniques to make measurements by bringing it down to texts and tools that are compatible with our zooming level.  
Without sharing these texts, using and adapting it, our knowledge will be limited to our zooming level and will be ignorant in all other levels.  
**2) Inequity**  
Ignorance creates apathy,  apathy creates isolation, and isolation creates inequity. We treat differently to some people because there is a mismatch in our thoughts or believe that we lack the commonness. But we can identify the commonness only if we look deeper, outside our zooming level. Lack of sharing and adapting also _gives unfairness in the opportunity to learn_.  
**3) Lack of Creativity and deceleration of research**  
We don't build anything from scratch, _we build things by reusing what its already don_e. Lack of sharing and adapting will disallow us to improve things that are already done.  
**4) Lack of Judgement**  
We make decisions by validating our ideas with different experts and knowledgeable people. Implementing without validation is often disastrous. _Sharing allows us to confirm our ideas_, get feedback from experts through discussion.

---


# what strategical mistakes do we make in the lab as a team in indian context

1) **Clarity of riddle that needs to be solved, in the research you are doing.**  
The question in research should identify the problem and how to solve the problem. We cannot expect everything to occur in serendipity, by doing random stuff without knowing what is the problem.  
2) **Pretending to work**  
Research supervisors are obsessed with the amount of time spent on work you do, instead of quality work. For doing research, we need to think, we need to discuss the problem with our team as a total. Research cannot be done after you are exhausted because you cannot think at that time.  
All members come from a different psychological environment with different passions and mindset. So, it important to bring their mindset into solving the problem, instead of forcing them to only work. Usually, students come to build their career and earn money. Many are almost not interested in doing research because of the environment they get. So, they start to pretend to work to appease the supervisor and get paid.  
3) **Lack of discussion with researchers of diversified background in the lab.**  
Discussions are not taken seriously by the administrator because they think (actually it's true) that students will start gossiping. But instead of stopping them to discuss, why not a rule book for discussion, where you need to ask right questions and discuss in the context.  
4) **Treating a new member in lab**  
When a new member comes to lab, he/she is almost unaware of the project you are doing, also he/she has never got the industry experience, as we know how our colleges are. So, it would be too much for him/her to understand everything all by alone and again too much pressure from the supervisor for not doing your work or giving output. (seriously, even the lab members and supervisor don't know what output they want, because after doing a month of work, again you are said, it's not required). So, instead of treating the new lab member as a genius, he/she should be given clarity of the problem you are solving in a simplistic way. Many times, he/she may ask questions even the lab members or supervisor don't know.  "**Being scared of being judged for not knowing**", neither the new member asks any questions, nor other replies directly to the questions when asked because of the same reason and pretends to know the answers.

---


# what would we gain from eliminating national fiat currency

# What would we gain from eliminating the national fiat currency?

## date: "2022-10-16"

---
categories:

- "blockchain"
- "cryptocurrency"
- "democracy"
- "economics"

---

When India was under British rule, Gandhi started a movement to quit British goods and use Swadeshi products to help the country's people become self-sufficient. The movement aided in breaking free from British control and achieving independence.

Things are not much different today. Today we are in the clutches of big corporations and banks.

Let's check out what gonna change if we quit our national currency and implement [shivarthu protocol](https://github.com/amiyatulu/shivarthu/blob/main/docs/Shivarthu.md).

Also, take a look at the various governance issues here:

[Tyranny of the Majority, Minority, Representatives, Shareholders and Democratic trilemma](https://amiyatulu.github.io/blog/shivarthu/tyranny_of_the_majority.html)

**No more debt economy**
Banks transfer wealth from people to capitalists by issuing debt or printing money. e.g. In India, Adani group has a debt of ₹2.2 trillion, which is near to the GDP of many big states in India. Many times, debt is issued for economic reasons that are detrimental to society. For example, the Adani group's primary source of income is fossil fuel, which contributes to climate change and pollution.

> UN: 3.3 Billion People – almost half of humanity – Live in Countries Spending More on Debt Service Than Education, Health. The report revealed that Public debt has also spiked more than five-fold since 2000.
>  [https://unctad.org/publication/world-of-debt](https://unctad.org/publication/world-of-debt)

## [Yard-sale Model](./economics/yard-sale-model.md)

Here is simulation of [Yard-sale model](https://www.jstor.org/stable/27857715) that explains why do super rich people exist in a society?

[https://pudding.cool/2022/12/yard-sale/](https://pudding.cool/2022/12/yard-sale/)



**UBI and decreasing income inequality**
Shivarthu governance may charge 1% - 20% of taxes per year of the total market cap. About 1%- 5% of taxes can be used to provide universal income.
Here is a simulation where UBI will decrease the wealth inequality.

[https://github.com/amiyatulu/randomised\_tax\_collect\_ubi/blob/main/tax\_collection\_ubi.py](https://github.com/amiyatulu/randomised_tax_collect_ubi/blob/main/tax_collection_ubi.py)
Calculation of the required market capitalization for a $125 (₹10,000) UBI per month.

```python
population = 45_429_399
print(f"{population:_}") # Odisha population 45_429_399
# If each person get ₹10_000 per month as UBI, which means approx. $125
total_money_needed_per_year = 45_429_399 * 125 * 12
print(f"{total_money_needed_per_year:_}") # 68_144_098_500
# If you tax 1% per year total market cap needed.
total_market_cap_needed = total_money_needed_per_year * 100
print(f"{total_market_cap_needed:_}") # 6_814_409_850_000
market_cap_of_bitcoin = 369_910_000_000
print(f"{market_cap_of_bitcoin:_}") # 369_910_000_000
# 2021 estimates show there are 64 million active wallets . A minuscule .01% of Bitcoin holders control nearly a third of the supply
ratio = total_market_cap_needed / market_cap_of_bitcoin
print(ratio) # 18.42 times
```

> Though the example is given for a single currency, in the real world, we would have thousands or even lakhs of coins with many different supply chains. With each supply chain, one can earn at least $1-10 as UBI, resulting in a total of $100, $500, or even more per month.

## **Implications of a deflationary and inflationary currency**

You will spend less and hold money since deflationary currency increases in value over time. Natural resource depletion and environmental pollution are two drawbacks of consumerism. The consumer society is not sustainable in its current state. More than 70% of Earth's natural resources are currently being overused.

It appears that businesses are more focused on generating new demands than filling old ones. They frequently prey on our vanity and insecurities during this process. "You will feel better about yourself if you get this" "Purchase this and people will respect you.", "Buy this and you will succeed". These are a few of the messages that sellers try to get across to us so that we will buy things we don't really need.

But many economists criticize deflationary currency as it will slow down the economy and bring unemployed, hence poverty. Yes, it's true when wealth is concentrated in a few hands, like in the current scenario, where 1% holds 90% of the wealth.

> Money circulation is the fundamental principle for a thriving economy. It is true that a deflationary currency can reduce circulation, as people tend to hoard it, which in turn can lead to increased poverty and wealth concentration. On the other hand, inflationary currency can be beneficial if money is distributed fairly, ensuring continuous circulation. However, it is crucial that this distribution is managed in a way that does not create negative externalities. With smart contracts and decentralized ownership, we can achieve better control over fund distribution and ensure it is done more fairly.



### **No to Bullshit Jobs**

A bullshit job, as defined by David Graeber, was a concept coined by the late anthropologist and author in his book "Bullshit Jobs: A Theory." Graeber describes a bullshit job as a type of employment that is essentially meaningless, unfulfilling, or unnecessary, yet it exists within a system that assigns it a high societal value and rewards it with a decent salary.

According to Graeber, bullshit jobs are often characterized by the following traits:

1. Lack of meaningful impact: These jobs do not contribute significantly to the well-being or betterment of society. They are often seen as pointless or even counterproductive.

2. Busywork and bureaucracy: Employees in bullshit jobs often find themselves engaged in excessive paperwork, pointless meetings, or other tasks that do not require their skills or expertise.

3. Low autonomy: Workers in such jobs have little control over their tasks or decision-making processes. They are often subject to micromanagement and strict rules and regulations.

4. Lack of productivity measurement: Bullshit jobs are often difficult to measure in terms of productivity or output. It becomes challenging to evaluate the actual contribution of these jobs to the organization or society.

5. Sense of guilt or shame: People with bullshit jobs often feel guilty or ashamed because they recognize the pointlessness of their work but are compelled to continue doing it due to societal expectations or economic necessity.

Graeber argued that the prevalence of bullshit jobs in modern economies is not only detrimental to the individuals performing these jobs but also to society as a whole. He highlighted the potential for increased dissatisfaction, mental health issues, and a loss of human potential when people are stuck in unfulfilling and meaningless work.

> With [decentralized price discovery](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md), and [decentralized self-managed organizations](https://en.wikipedia.org/wiki/Reinventing_Organizations) like shivarthu, workers will have autonomy over their decision-making process, and jobs that have meaningful impact on society are incentivized and bullshit jobs are eliminated.

## **UBI and positive externality**

![Externality](./images/externality.png)

Shivarthu will incentivize positive externality, validated by score Schelling game and elected representatives. Your UBI (Universal Basic Income) can increase by 2 to 5 times if you produce a positive externality, but it can also drop if you produce a negative externality.

Some of the positive externalities are

- Learning and gaining knowledge (https://avrit.reaudito.com/#/)

- Teaching your child or neighbor kids.

- Planting trees

- Exercising, yoga, mindfulness, and assisting others in doing so for mental and physical health.

- Taking care of animals and pets

- Volunteering and keeping your city clean

- Avoiding single-use plastic and littering the road

- Take part in governance

- Doing scientific activism and mobilizing people for social justice (DEI: Diversity, equity and inclusion) or climate justice

and many others

Some examples of negative externalities include:

- Littering on the road, park or beach

- Consuming drugs, alcohol or cigarette

- Participate in domestic violence

- Taking part in some criminal activities

> Users with more positive externality will have more voting weight as a result they possess greater voting influence. Consequently, voters who prioritize environmental protection elect like-minded candidates. These representatives bring forth fresh concepts concerning renewable energy and clean air, collaborate to enact enduring and egalitarian policies, and promptly address pressing matters such as climate change. Voters express concern for clean air, clean water, and climate action. Shivarthu protocol has the potential to transform their values into tangible realities. It will create a vicious cycle of positive outcomes..

**Is Shivarthu a demurrage currency?**

Demurrage is the cost associated with owning or holding currency over a given period. It is sometimes referred to as a carrying cost of money.

Shivarthu is not a demurrage currency. Users are taxed at a certain percentage, but it doesn't depend on how long you hold the currency. The tax rate remains the same whether you hold it for a year or just a few months. A token can be inflationary, but you [receive rewards for staking or holding it](https://www.reddit.com/r/Polkadot/comments/ij5ect/comment/g3bhut1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), which cancels out the devaluation caused by inflation.

**Problems with demurrage currency:**

It compels you to spend money even if you don't need goods or services.

In economics, when you spend more, there is greater money circulation, resulting in increased economic activity and more employment. This concept is based on the belief that a single currency, whether local or national, can solve all our problems.

While it may seem appealing, it has its downsides. Increased economic activity often leads to the exploitation of natural resources and issues like climate change and pollution. But less spending can create unintended consequences such as unemployment or poverty.

Here is an example how it works, why cycling is bad for the economy.

![Why cycling is bad for economy?](./images/cycling-is-bad-for-the-economy.jpg)

However, these challenges can be addressed through controlled money circulation, using [different currencies for different supply chains.](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md) This approach allows for fine-grained control over supply chains, including taxing or disincentivizing negative externalities and subsidizing or incentivizing positive externalities in different supply chains.

While shitcoins cryptocurrencies needs to be eliminated, we envision a multi-cryptocurrency system. Furthermore, unemployment can be addressed through the provision of Universal Basic Income (UBI), which can also be implemented at the supply chain level. For instance, individuals could receive a monthly allocation of 50 apples for free.

Secondly, because there are no incentives to hold a demurrage currency, it is likely to be abandoned, and people may shift toward other currencies. In most successful cryptocurrencies, hoarding is incentivized, for example, through staking to earn more tokens for providing security or other services such as decision-making.

## We can use gold pegged cryptocurrency, but they are hard to decentralize.

Gold cryptocurrency can provide hedge against inflation and fluctuating prices of or other cryptocurrency. For example, from 2004 to 2022, the price of an [ounce of gold in rupees](https://goldprice.org/gold-price-charts/20-year-gold-price-history-in-indian-rupees-per-ounce) has changed from Rs. 20,000 to Rs. 160,000. Gold has a history of being the best and most well-tested currency since 700 BC.

Here are the few [gold backed cryptocurrency:](https://www.softwaretestinghelp.com/gold-backed-cryptocurrency/)

1. Tether Gold (XAUT)

2. DigixGlobal (DGX)

3. PAX Gold (PAXG)

4. Gold Coin (GLC)

5. Perth Mint Gold Token (PMGT)

6. Meld

But these currencies are not fully decentralized, and depends on centralized regulators. If you're considering investing in gold crypto, diversify your portfolio by exploring various gold stable coins to avoid the risk of losing all your money if one stable coin fails.

There can be a way for secure and safe decentralized stable coin. [But its a part of active research.](./love-for-usd-pegged-stable-coin-by-the-crypto-community-must-end.md)

e.g Govt causing hyperinflation, devaluing all your money:

[https://mru.org/courses/principles-economics-macroeconomics/zimbabwe-currency-inflation](https://mru.org/courses/principles-economics-macroeconomics/zimbabwe-currency-inflation)

Or a dictator can demonetize 99% of the currency overnight:

> The figures suggest prime minister Narendra Modi’s demonetisation policy, which likely wiped at least 1% from the country’s GDP and cost at least 1.5m jobs, failed to wipe significant hordes of unaccounted wealth from the Indian economy — a key rationale for the move.
>
> [https://www.theguardian.com/world/2018/aug/30/india-demonetisation-drive-fails-uncover-black-money](https://www.theguardian.com/world/2018/aug/30/india-demonetisation-drive-fails-uncover-black-money)

Banks can also stop you to withdraw your own money when you need it.

## Decentralized Finance

The blockchain space also has open-source DeFi lending platforms like [Compound](https://compound.finance/) and [Aave](https://aave.com/), where interest rates are determined by the market, rather than being controlled by banks and governments. This approach helps mitigate the unintended consequences of price ceilings and floors, as explained in the video below.

## **Zombie Banks (Run!)**

This video discusses four **reasons why financial intermediaries can fail**: insecure property rights, controls on interest rates, politicized lending, and loss of trust. It’s hard to decide which is scariest! 

[https://mru.org/courses/principles-economics-macroeconomics/failure-financial-intermediaries](https://mru.org/courses/principles-economics-macroeconomics/failure-financial-intermediaries) (Video can be downloaded)

Cryptogovernance is no longer purely experimental. For example, [OpenGov](https://polkadot.polkassembly.io/opengov) on Polkadot is currently operational, and more versions are likely to emerge in the coming years. It can be adapted to numerous supply chains, including education, housing, agriculture, and transportation.

## Manifesto

More points to cover, treat it like a manifesto:

- No debt economy, unlike the large debts taken on by capitalists.

- UBI with no income inequality

- Implications of  minimalism

- [Emotion and empathy rather than materialism](./relationships-emotions-and-happiness.md)

- [No Entrance culture, and rate race, rote learning education system](./how-avrit-learning-solves-our-education-puzzle.md)

- Elimination of bullshit jobs

- [Remote jobs or work from home with less working hours](./rethinking-work-culture.md)

- [Gender parity in workplace](https://hbr.org/2021/09/the-problem-with-greedy-work)

- No unpaid care work for women

- Wildlife conservation e.g protection of elephants, mangroves. No climate change, more trees and honey bees

- Pay for positive externality and tax negative externality with accurate prices discovery, People producing positive externality will get more UBI

- Nutritious food and health

- [Clean energy like roof top solar and wind energy](./demand-for-50-subsidy-for-solar.md)

- [Banning single use plastic](./ban-plastic-bottles-of-coca-cola-and-water-bottles.md)

- [No hate or polarization](./do-we-need-a-supreme-leader-how-can-we-share-power-between-parties.md)

- Better judiciary and police governance

- Funding to the public good and open source. Share on the capital and automation and [Decentralized supply chain](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md)

- [No intellectual property rights](https://www.youtube.com/watch?v=TWYHmkmctb8)

- Ads free entertainment, demerits of ads and consumerism, only informative, decentralized, expert audited ads.

- [Accountable social media and news](./what-do-we-need-to-decentralize-in-the-coming-years.md)

- [Interoperability of hardware and software](./what-do-we-need-to-decentralize-in-the-coming-years.md)

- [Decentralized house building](./how-can-we-decentralize-the-construction-of-brick-and-mortar-houses.md) and [sustainable housing design](./building-better-cities.md).

- [Car-free](./road-planning-of-cities.md) community and [15 mins cities](https://www.huckmag.com/article/what-its-actually-like-living-in-a-15-minute-city)

- 60%-70% forest cover

- [Sustainable Agriculture](./what-if-crypto-token-prices-are-discovered-through-consensus-rather-than-demand-and-supply.md#agriculture)

- [Decentralizing Supermarkets Through Public Ownership and Control](./empowering-communities-decentralizing-supermarkets-through-public-ownership-and-control.md)

- Better Health care system

- No poverty and low hunger index

---


# when to respond to the attackers are you giving free airtime to them

If you are popular and have power, everything you do, share influences others. Anything you speak or write publicly, it's shared by thousands of people. So it's become very important to learn how to speak and write publicly.  You become the center of information, which gets transferred to everyone.  
  
Whatever you speak is most likely to be attacked because different people have different opinions, and some may have vested interest to attack. More controversial the topic is more attackers you will have. As a human we dislike attacks, so we start defending the attacks.  
  
Does responding to the attacks helps?  
In most of the time, it doesn't. You are only giving free airtime to them, knowing that you will respond, they will attack with a greater intensity.  
  
So what to do in such situation? If the critic is as popular as you, he/she can propagandize his opinion in a biased manner, even spreading rumors, non-factual, partial information that is logically correct to convince people that he/she is right.  
  
The most important thing here is completely limiting the response. **Responding needs to be very thoughtful and FACTUALLY correct, not opinion based so that no one can FALSIFY it.** No need to be in a hurry to respond, collect all facts and then respond. Opinion based response only brings more controversies and gives more airtime to the attacker. Also no need to be in denial mode, if you said something factually incorrect, apologize for it, and give the correct information. But **never indulge** in opinion based arguments when you know that critic will not accept your opinion, no matter how much hard you try.

---


# whom do you ask questions in fair democracy

## In unfair democracy, we ask question to PM  
(e.g. Narendra Modi in India)

Narendra Modiji, Why government is failing provide jobs to all its citizens?  
Narendra Modiji, Why we have so much traffic in the roads?  
Narendra Modiji, Why rivers of India are so much polluted? What has been done for cleaning it?  
Narendra Modiji, Why there are farmer suicide?  
Narendra Modiji, Why there is so much air pollution, that millions of people are dying of pulmonary diseases?  
Narendra Modiji, Why there are slums?

## In fair democracy, we ask questions to concerned departments the real service providers who will solve your problems

Department of education and economics, why government is failing to provide jobs to all its citizens?  
Department of Public Transport, why we have so much traffic in roads?  
Department of Pollution and Ecology, why rivers of India are so much polluted? What have been done for cleaning it?  
Department of Agriculture and Education, Why there are farmer suicide?  
Department of Air Pollution and Health, Why there is so much air pollution, that millions of people are dying of pulmonary diseases?  
Department of Engineering and Building, Why there are slums? Why all citizens of India don't have home?

> What is fair democracy?
> 
> A fair democracy, without any middleman or brokers such as politicians (MPs, MLAs, PM, CM) and bureaucrats, who delay the implementation. People will transact directly with their service provider departments.
> 
> [Details of Fair democracy](https://iambrainstorming.blogspot.com/2019/01/from-hypocrisy-to-democracy-this-way.html)

---


# why are our books filled with unnecessary short cut formulas

> **A short cut formula like these add nothing to the understanding of concepts, also overloads children with pointless burden as they have to memorize by parroting.**

[![](images/5eda1-short_cuts.png)](http://iambrainstorming.files.wordpress.com/2017/06/5eda1-short_cuts.png)

How its need to be solved?

P°Solvent = 0.850 bar Mass of solute = 0.5g Mass of solvent = 39g Molar mass of benzene = 78g/mol PSolution = 0.845 bar Molar mass of solute (g/mol) = ? PSolution = χSolvent P°Solvent χSolvent = nSolvent/ (nSolvent + nSolute)

**Solvent:** g -----> mol Conversion factor = 1 mol/ 78 g 39g \* 1 mol/78 g = 39/78 mol No. of moles of solvent = 39/78 mol **Solute:** g -----> mole Conversion factor = 1 mol/x g 0.5g \* 1 mol/x g = 0.5/x mol No. of moles of solute = 0.5/x mol Putting these values in the equation PSolution = χSolvent P°Solvent we get following equation (((39/78)/(39/78 + 0.5/x))\*0.850) -0.845 = 0

[![](images/equation.png)](https://iambrainstorming.ml/wp-content/uploads/2017/06/equation.png)

Solving it through python programming:

[![](images/0be5e-eq_program.png)](http://iambrainstorming.files.wordpress.com/2017/06/0be5e-eq_program.png)

Ans: \[169.000000000000\]

**Also why overload students with so much of large calculations (in higher education), when we have calculator or programming tools?**

> **When students are asked to do large calculations, they are unable to concentrate on strategizing or making a conceptual plan from the given information which is the most important step in problem-solving.**

The difficulty level becomes more intense for the students who are bad in the calculation, they usually give up after solving one or two problems as their brain gets tired of calculations, and frustration produced due to mistakes in the calculation as they don't reach the answers.

> Books should also provide resembling **_experimental raw data in the problem set, which will provide students a perspective of real-world experience in problem-solving._** 

Students should be taught how to interpret and analyze these data with computational tools. Also, group work projects can be given for analysis.

P.S. Shortcut formulas are many a time useful in maths and computer science, as it helps to decrease the number of steps in computations. So algorithmically it's efficient. But in this context, it's unnecessary for students to memorize these shortcut formulas which adds no purpose to learning.

---


# why convert everything to rat race

[![](https://iambrainstorming.files.wordpress.com/2017/05/e1a8e-converting2brat2brace.jpg?w=300)](https://iambrainstorming.files.wordpress.com/2017/05/e1a8e-converting2brat2brace.jpg)

  

  

  

Instead of having cut off marks based on students scoring, we can have **minimum high pass marks** that check if the student has enough knowledge to study medical including checking the projects they have done (it checks whether the student is exceptionally excellent for the work). Then **lottery system** can be done if we have a fewer number of seats.

  

The proposal can also include girls and other vulnerable social class under reservation.

  

This will **reduce the too much of unnecessary burden** on the student, also they needn't have to join coaching centers for getting the seats. No more sky touching marks, and no more importance of special coaching.

  

Scientifically speaking luck do play a role in the entrance exam, it's not all about merit. 

**How luck plays the role?**

Students who score 2000 rank is not necessarily better than 3000 rank.

Parents can't afford the coaching institute.

Not knowing the pattern of exams, such as e.g. following Campbell book instead of NCERT, even though you might be knowing more, as all questions will come from NCERT, you will score less.

The student can have genetically less memory, as questions can be memory based. But the real importance is processing and analysis rather than memory based instant recall answers.

  

Having the lottery system eliminates all these kinds of faulty bothering fortune, and also reduce the student's psychological burden.

  

A detailed similar proposal is written in the context of limited research funding:

**Research Funding: the Case for a Modified Lottery**

[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4959526/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4959526/)

  

  

Other problems of Entrance exams:

[https://technoperiod.blogspot.in/2016/09/building-scientific-real-world-problem.html](https://technoperiod.blogspot.in/2016/09/building-scientific-real-world-problem.html)

  

  

**Effect of entrance exams on noncompetitive students.**

  

Coaching centers and colleges don't provide personalized support to the students who get failed in regular tests. With the craze for medical and IITs, students who can't even do simple unit conversation, and don't read even an hour without teacher support, join the coaching centers in a hope to get IITs or medical. Such students are eliminated and neglected by coaching centers and colleges, as their goal is outcome i.e. to get as many IITs and Medical students. The present craze and model for preparation of entrances, whether its IITs, Medical or IAS, is causing a disastrous impact on uncompetitive students, who are the majority. As 1-2% of students preparing for entrance qualify it.

---


# why do doctors need to conduct research in india and how it can be done

1) Time  
A medical student in India spends negligible time in conducting research. And after becoming a doctor, with the burden of overwork to check patients, they find almost no time to conduct research.  
How can they do a case study, if they don't spend enough time with the patient?  
  
2) Using Lab equipment for research  
Whole medicine department in India is limited to determining the disease through the medical diagnostic procedure, and then prescribing medicines or surgery for cure. We have all sophisticated medical equipment from MRI scanner to high sensitive blood testing machines for different diseases. But none are used for research purpose. Neither most data produced by the medical department are used in research or statistical analysis due to lack of digitalizing and lack of storing in a central repository.  
  
3) More doctors  
India being a second largest populated country in the world, the requirement of doctors, should be second largest to have a decent amount of doctor and patient ratio. Even, in India, most students aspire to become doctors, but they are not given chance due to lack of seats. Instead of decreasing the seats, shouldn't they be allowed to conduct research in the medical field. There are so many checkpoints to become a doctor, even if someone fails to become e.g. a surgeon he/she may become a researcher. More doctor means required doctor and patient ratio, so more time. So doctors will have freedom to conduct research.  
  
5) Collaboration with other researchers of diverse fields  
Like any research, collaboration is a most important step. A single doctor with a specialized knowledge cannot have all the tools to complete its research. So a collaborative work is required so that diversified people, e.g. information technology people or biotechnologists can visit hospitals and a chance is given to work there to understand the problems.

---


# why does learning programming is not compulsory in higher secondary schools in india

Share your views at: [http://qr.ae/77YeoE](http://qr.ae/77YeoE)  
  
Nowadays, scientists use computers for almost every thing - whether it is a mathematical problem, physics, chemistry or biology. Why not make students learn python in higher secondary schools with its application in science?  
  
Why do students have to memorize straight forward equation such as radio activity decay or Nernst equation? Why not solve them through the python programming language? Why not teach them simulations when they start college?  
  
I would say that python is a very futuristic language, easy to learn, and human readable. Also there are so many packages available for scientific computation. It is also open source.  
  
I would also say that students should start learning Linux in higher secondary schools.  
  
I would request Smiriti Irani to include it in syllabus as soon as possible.   
Also students can be provided credit card-sized single-board computers such as Raspberrypi, if a student is unable to afford desktops or laptops.  
What do you guys say about it?  
  
Update: It should be compulsory for students who are studying physics, chemistry, biology, mathematics etc. that requires programming to apply their knowledge, not for students who want to do arts, hotel management etc. But still for them even their are applications of python e.g. data-mining etc.

---


# why india requires an archive for research articles to promote research and development

Through Digital India initiative, India should consider a repository for research articles. This will promote permanent preservation of research articles.  
  
India should promote research and experimentation is all fields, whether law reviews, science, economics, arts, and commerce, psychology, sports, Ayurveda, yoga, entertainment, music etc.  
  
Students should be encouraged to design experiments and test the results and write articles in every field.  
  
Higher education should be research based, where students have to produce genuine, original, quality articles. We should rethink our traditional exam oriented methods of education and allow students to explore with freedom rather than just learning the subjects for the exam.  
  
Let student analyze, think critically and try to bring the solution to a problem. Why give them the burden of exams? Without freedom, one cannot search, scrutinize, inquire things. Give them freedom in what they are interested in. Let them score O in some subjects and B in others. Why force them to score best in everything and give them a lot of burdens? A student who scores O in some subjects and B in others is more disciplined and focused. Why we always hunt for the genius who should be good at everything.  
  
We should reward students for bringing solutions rather than securing marks or preparing for exams.

---


# why isnt there negative marking in the ugc net exam are all questions compulsory

Quora link for discussion: [http://qr.ae/7QDdsd](http://qr.ae/7QDdsd)  
  
I feel that CSIR-NET has better question pattern than UGC NET exam. Making no negative marking will allow a person to attempt all the questions whether he/she knows that answer or not.  
Is it good to attempt the question that a student don't know or no idea on it and still get marks for it?  
It will also increase the probability that mere destiny can help them to qualify the exam, by randomly attempting the questions.   
[University Grants Commission - NET](http://ugcnetonline.in/ugc_net_objective_mode.php)

---


# why scientists will join the democracy app

**Details of Fair democracy:**

[https://iambrainstorming.wordpress.com/2019/01/09/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/](https://iambrainstorming.wordpress.com/2019/01/09/from-hypocrisy-to-democracy-this-way-delegated-proof-of-stake-2/)

**Why will experts join the democracy network in the beginning? What are the Incentives??**

1) Professional Reputation  
Provide problems documentation of departments with evidence  
Provide solutions documentation of the departments with evidence  
Provide criticisms and solutions to the policies of departments  
Market the solutions in social media  
Even though its a replacement of present democracy, for now, it will be used to keep the present govt accountable if they are doing something wrong.  
Documentation will go through peer review, all the participants of the department can review it, with scientific professionalism. It's not like social media, you have to use every sound logic with providing references to your arguments.  
2) Crowdfunding  
Department scientists and voters can crowdfund their solutions and gain incentives for solving problems through volunteering and working on it. Escrow services to hold scientists accountable.

**Escrow service for democracy using blockchain:**

**35% objection rule:  
**Representatives will crowdfund their solution with a given timeline to complete. A single project can also be split into smaller numbers of timelines.  
The total amount of fund raised = x  
Objection Unit = x/100

If a person funds "m" amount of money, then they can appeal using m/(x/100) objection units.

If objection units appealed becomes 35, then any doners can ask to refund their amount and the amount will be refunded.

**An example,  
**If the total amount of fundraised is is 500, then the objection unit becomes 500/100 = 5. 
If a person funds 80 than they have 80/5 = 16 objection units.  
If doners have objected using 35 objection units that have a value of 35\*5 = 175 which is 35 percent of 500, then any doner can take back their money.

**Benefits:  
**It will hold the representative accountable to work. If doners are not satisfied with the work, they can appeal using their objection unit and get back the money if it reaches the threshold.

**Criticism:  
**What if work is done, but people lacking honesty still appeal using their objection units to get back the money.  
Most people are honest, as they are funding for the purpose, then it's unlikely to use objection units. Even if it reaches the objection unit threshold, the money will not get transferred to their account automatically, but only if a donor request for it, and honest doner will not request if work is done and representatives will always get the money from honest doners.  
If still there is more fraud, the threshold amount can be raised from 35 to 40%, etc.

---


# why startup funding through icos is more needed in india than any other country

To create entrepreneurs, India requires ICO (initial coin offering) and cryptocurrency.

![](images/ico.jpg)

In India, most of the people are middle class, so funding for starting the business is one the biggest hurdle.

> Even if you have a brilliant idea, it's of no use, if you have no funding to implement your idea.

Loan creates an immense burden on entrepreneurs as you have to repay it, and the condition becomes miserable if your idea fails with a large amount of loans.

Here in ICOs, people are stakeholders of the idea. So, if the idea doesn't support the interest of people, its unlikely to be funded. It's similar to the crowdfunding system.

How to tackle fraudulent ICOs?

> Smart contracts are open and transparent. You can view the smart contracts and all the transactions going on in it, openly.

![](images/screenshot-from-2019-04-24-10-31-02.png)

[https://etherscan.io/contractsVerified](https://etherscan.io/contractsVerified)

What we need is an auditing system and return policy of cryptocurrency if your idea fails. The smart contract should have code to return the cryptocurrency under unintended situations, and review system can be made to create awareness by giving details about the problems of smart contract and the company.

India needs an alternative source of funding for startups, and funding through ICOs is one of the best methods.

> Crypto is the rule, the rule of incentives, the rule of human behavior.
> 
> _We only need a cryptorule to review and allow other cryptorules_
> 
> [Nothing in Human Makes Sense Except in the Light of Economics](https://iambrainstorming.wordpress.com/2019/03/05/nothing-in-human-makes-sense-except-in-the-light-of-economics/)

![](images/rule.jpg)

We only need a cryptorule to review and allow other cryptorules

https://www.youtube.com/watch?v=p7HKvqRI\_Bo

How does the stock market work? - Oliver Elfenbaum

---


# why there is nature tendency to mix

<table align="center" cellpadding="0" cellspacing="0" style="margin-left:auto;margin-right:auto;text-align:center;"><tbody><tr><td style="text-align:center;"><a href="https://iambrainstorming.files.wordpress.com/2017/05/4cb7c-disorder.jpg" style="margin-left:auto;margin-right:auto;"><img border="0" src="images/4cb7c-disorder.jpg" width="100%"></a></td></tr><tr><td style="text-align:center;">Openstax Chemistry</td></tr></tbody></table>

Link to the book for image  
[https://openstax.org/subjects/science](https://openstax.org/subjects/science)  
  
If information is binary (e.g. 0,1) what is disorderliness (or entropy)?  
  
If two objects have similar properties or pattern, each object position is replaceable by the other object, is this the actual reason for spontaneous mixing or nature tendency to mix?  
  
**Like dissolves like**

---


# why we face difficulty to remember non concrete information

**What are the functions of a brain?**

  

Pattern recognition, interpretation and storing of information that we get from our sense organs

  

I would go with following steps to show that non-concrete information is the type of information that our brain is not trained for. The most requirement to remember abstract information is more recent when mathematics and different languages were invented.

  

The **invention of writing** that allowed **storing information** that we can't remember.

  

The human being invented abstract information like more than one language or mathematics which we are evolutionarily unfit to remember.

  

**Are we evolutionary unfit to memorize abstract information?** To prove it lets look the following experiment.

  

The brain is good at recognizing things in a span of seconds. For example, we change our path if there is a hindrance in front. But if you close your eyes, we will miss details of the hindrance.

  

[![](images/bfae0-map.png)](https://iambrainstorming.files.wordpress.com/2017/03/32672-map.png)

  

Let's try to memorize this map in a span of seconds or minutes. Can you do it?

  

Memorizing abstract information requires the **lot of details that need to be stored, along with their associations.** 

But concrete ideas requires **imagining outlines of things without the details in it**.

  

We discovered abstract mathematical ideas by writing, as we can't remember the complete process of derivation that goes in mind. 

 e.g. The Abel–Ruffini theorem was nearly proved by Paolo Ruffini spanning 500 pages. Can he do that without using pen and paper? 

  

Writing helps to store information without the need to stress the brain for memorizing all abstract steps. Writing helps to keep the record which we can later look at it.

  

**What makes something concrete?**

It's a familiar pattern that makes something concrete. When you imagine the features of your friend, what you will first imagine is characteristics of humans, like nose, ears, eyes, but without much details. Details are not the familiar pattern which you are acquainted with during your childhood. Similarly, you can recall A-Z in sequence because you are familiar with the pattern from your childhood. But if you randomize the sequence, you can no more recall it. Most formulas, equations, new words don't form a familiar pattern, that makes us into trouble to memorize. A nonfamiliar pattern is made concrete after so much of retrieval practice e.g. it takes about a year to memorize A-Z in sequence by a child so that (s)he can retrieve it effortlessly.

  

**Why is familiarity with absurdness helps you to remember things easily?**

[![](images/68bde-tree.png)](https://iambrainstorming.files.wordpress.com/2017/03/39add-tree.png)

Take the example you have seen a fake inverted tree in your garden. You will memorize it for a very long time. Shocking things are easy to memorize. Unfamiliar patterns are junk for us, but shocking familiar patterns makes us feel that something is wrong with it, which lets us to become more cautious and **curious** about the things, that is required for making right decisions.  
  
Using this strategy to teach grammar:  
  
  

[![](https://iambrainstorming.files.wordpress.com/2017/03/5b2e7-funny2bgrammar.jpg?w=200)](https://iambrainstorming.files.wordpress.com/2017/03/5b2e7-funny2bgrammar.jpg)

---
