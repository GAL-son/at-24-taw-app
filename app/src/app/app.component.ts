import { Component, Inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { BlogComponent } from "./components/blog/blog.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BlogComponent, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
}