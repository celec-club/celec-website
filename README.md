# CELEC Club - Official Website

This repository contains the **official website of CELEC Club**.

The website is built using the **Next.js framework** and runs on the **Bun runtime**, with **Docker** and **Nginx** used for production deployment.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Runtime:** Bun
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Deployment:** Docker + Nginx (VPS)

---

## Project Structure

### Root-Level Files and Folders

```
├── src/
├── types/
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── next.config.ts
├── tsconfig.json
```

### `src/` Folder Breakdown

The `src` directory contains the core application logic:

- **app/**
  Main entry point of the Next.js application (routing, layouts, and pages).

- **components/**
  Contains **shadcn/ui components only**.

- **hooks/**
  Custom React hooks used across the application.

- **lib/**
  shadcn-related utilities and helper functions.

- **shared/**
  Contains all feature- and section-based code.
  Each website section has its own folder, including:

  - About Us
  - Events
  - Header
  - Hero
  - Footer
  - Sponsors

- **utils/**
  Shared constants and configuration data, such as:

  - Events
  - External links
  - Sponsors data

### `types/` Folder

- Contains global and reusable TypeScript types used throughout the project.

---

## ⚠️ Important Rules ⚠️

### Do **NOT** modify the following files:

- `docker-compose.yml`
- `Dockerfile`
- `.dockerignore`
- `nginx.conf`
- `next.config.ts`

These files are critical to the **production hosting setup**.

Modifying them and pushing changes to GitHub may cause **deployment failures**, **downtime**, or **server misconfiguration** when the project is cloned or redeployed on the VPS.

---

## VPS & Server Configuration

- Project directory on the VPS:

```
/var/www/
```

- Nginx configuration files:

```
/etc/nginx/sites-available
```

Ensure you are working in the correct directories when managing the server or deploying updates.

---

## Docker & Nginx Notes

- A **basic understanding of Docker and Nginx** is required before making infrastructure-related changes.
- Avoid asking AI tools to blindly generate Dockerfiles or Nginx configurations.
- Understanding how these tools work is essential for validating, debugging, and safely improving the setup.

---

## Contribution Guidelines

- Follow the existing folder structure.
- Keep shared logic inside the `shared` folder.
- Do not introduce breaking changes to deployment-related files.
- Test changes locally before pushing to the repository.

---

If you have questions or need access-related information, please contact the code owner:
**Yasser Fedsi** - [fedsi.yasser@gmail.com](mailto:fedsi.yasser@gmail.com)

Happy coding !
