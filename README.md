# Portfolio Website - Angular

A modern, responsive portfolio website built with **Angular 18** and **PrimeNG** components. This project showcases your professional work, skills, and projects in an elegant and interactive manner.

**Live Demo:** [rahulsalunkhe.me](https://rahulsalunkhe.me)

## Project Screenshot

![Portfolio Website](public/assets/images/portfolio-website.png)

## Technology Stack

### Frontend
- **Angular 18** - Progressive web framework
- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced styling
- **PrimeNG** - UI component library
- **Bootstrap** - Responsive design framework

### Development & Deployment
- **Node.js** - JavaScript runtime
- **Docker** - Container orchestration
- **Docker Compose** - Multi-container management
- **Git** - Version control
- **Azure** - Cloud hosting

### Additional Technologies
- **JavaScript** - Core scripting language
- **Vite** - Build tool (if applicable)
- **GitHub** - Repository hosting

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Docker & Docker Compose (optional, for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rsrahulsalunkhe/portfolio-website-angular.git
cd portfolio-website-angular
```

2. Install dependencies:
```bash
npm install
```

## Development Server

To start a local development server, run:

```bash
npm start
```

or

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project for production, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Docker Deployment

### Running with Docker Compose

1. Ensure Docker and Docker Compose are installed on your system.

2. Build and start the application:
```bash
docker-compose up --build
```

The application will be available at `http://localhost:80`

3. **To stop and remove containers:**
```bash
docker-compose down
```

4. **To stop containers without removing them:**
```bash
docker-compose stop
```

5. **To view logs:**
```bash
docker-compose logs -f
```

### Building Docker Image Manually

```bash
docker build -t portfolio-website-angular .
docker run -p 4200:4200 portfolio-website-angular
```

## Testing

### Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm test
```

or

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

## Code Generation

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── home/
│   │       ├── home.component.ts
│   │       ├── home.component.html
│   │       └── home.component.scss
│   ├── shared/
│   │   └── components/
│   │       ├── header/
│   │       └── footer/
│   ├── app.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── index.html
├── main.ts
└── styles.scss
```

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [PrimeNG Components](https://primeng.org)
- [Docker Documentation](https://docs.docker.com)

## License

This project is open source and available under the MIT License.

## Contact

For more information, visit [rahulsalunkhe.me](https://rahulsalunkhe.me) or check out the [GitHub repository](https://github.com/rsrahulsalunkhe/portfolio-website-angular).
