import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { HomeComponent } from "./sections/home/home.component";
import { JourneyComponent } from "./sections/journey/journey.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, JourneyComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  projectCards = [
    { name: 'Swift-Cart', description: 'E-commerce simulation project using ReactJS for the user interface, JavaScript for dynamic functionalities, NodeJS for the backend, ExpressJS for the web server and MySQL...E-commerce simulation project using ReactJS for the user interface,E-commerce simulation project using ReactJS for the user interface,', imgSrc: '/SwiftCart.jpg', github: '#', demo: '#' },
    { name: 'Weather Card', description: 'E-commerce simulation project using ReactJS for the user interface, JavaScript for dynamic functionalities, NodeJS for the backend, ExpressJS for the web server and MySQL...E-commerce simulation project using ReactJS for the user interface,E-commerce simulation project using ReactJS for the user interface,', imgSrc: '/SwiftCart.jpg', github: '#', demo: '#' },
    { name: 'Meu Portfólio', description: 'E-commerce simulation project using ReactJS for the user interface, JavaScript for dynamic functionalities, NodeJS for the backend, ExpressJS for the web server and MySQL...E-commerce simulation project using ReactJS for the user interface,E-commerce simulation project using ReactJS for the user interface,', imgSrc: '/SwiftCart.jpg', github: '#', demo: '#' },
    { name: 'Projeto 4', description: 'E-commerce simulation project using ReactJS for the user interface, JavaScript for dynamic functionalities, NodeJS for the backend, ExpressJS for the web server and MySQL...E-commerce simulation project using ReactJS for the user interface,E-commerce simulation project using ReactJS for the user interface,', imgSrc: '/SwiftCart.jpg', github: '#', demo: '#' },
    { name: 'Projeto 5', description: 'E-commerce simulation project using ReactJS for the user interface, JavaScript for dynamic functionalities, NodeJS for the backend, ExpressJS for the web server and MySQL...E-commerce simulation project using ReactJS for the user interface,E-commerce simulation project using ReactJS for the user interface,', imgSrc: '/SwiftCart.jpg', github: '#', demo: '#' },
    { name: 'Projeto 6', description: 'E-commerce simulation project using ReactJS for the user interface, JavaScript for dynamic functionalities, NodeJS for the backend, ExpressJS for the web server and MySQL...E-commerce simulation project using ReactJS for the user interface,E-commerce simulation project using ReactJS for the user interface,', imgSrc: '/SwiftCart.jpg', github: '#', demo: '#' }
  ];

  academicCards = [
    { name: "Análise e Desenvolvimento de Sistemas", author: "UNIP - Universidade Paulista", status: "Cursando", description: "Desenvolvendo habilidades em desenvolvimento de software, banco de dados, desenvolviento web e mobile, arquitetura de software, metodologias ágeis, engenharia de software e princípios de design de softwares."},
    { name: "C# Completo - Programação Orietada a Objetos", author: "Udemy - Prof° Nélio Alves", status: "Finalizado", description: "Curso de  Programação Orientada a Objetos, linguagem C#, criação de soluções flexíveis, arquitetura de software, testes, modelagem UML e aplicação de boas práticas no desenvolvimento de software."},
    { name: "Formação FullStack JavaScript", author: "Plataforma OneBitCode", status: "Finalizado", description: "Curso d desenvolvimento fullstack com JavaScript, criação de APIs com Node.js e Express, desenvolvimento front-end com React, HTML, CSS, Sass e Bootstrap, bancos de dados SQL e NoSQL (MongoDB), arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento web."},
    { name: "Teste 1", author: "Plataforma OneBitCode", status: "Finalizado", description: "Curso d desenvolvimento fullstack com JavaScript, criação de APIs com Node.js e Express, desenvolvimento front-end com React, HTML, CSS, Sass e Bootstrap, bancos de dados SQL e NoSQL (MongoDB), arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento web."},
    { name: "Teste 2", author: "Plataforma OneBitCode", status: "Finalizado", description: "Curso d desenvolvimento fullstack com JavaScript, criação de APIs com Node.js e Express, desenvolvimento front-end com React, HTML, CSS, Sass e Bootstrap, bancos de dados SQL e NoSQL (MongoDB), arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento web."},
    { name: "Teste 3", author: "Plataforma OneBitCode", status: "Finalizado", description: "Curso d desenvolvimento fullstack com JavaScript, criação de APIs com Node.js e Express, desenvolvimento front-end com React, HTML, CSS, Sass e Bootstrap, bancos de dados SQL e NoSQL (MongoDB), arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento web."},

 
  ]
}
