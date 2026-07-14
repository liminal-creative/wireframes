# Proposal Builder — Team Setup & How-To

Two one-time setup options (A is easiest), then the same per-proposal workflow for everyone.

## One-time setup — Option A: Shared Claude Project (recommended)

Done once by Todd (or any Team member), **logged into the Liminal Team account**:

1. Go to claude.ai (or open the Claude desktop app) on the Team account.
2. Click **Projects → Create project**. Name it "Liminal Proposal Builder" and set it visible to the organization.
3. Open `claude-project-instructions.md` (in this folder). Copy everything **below the divider line**.
4. In the project, click **Set custom instructions** (or Edit instructions) and paste it in.
5. In the project's **knowledge** section, upload the two files from this folder's `template/` directory: `index.html` and `styles.css`.
6. Tell Bill and Kemah where the project is. That's it — they start every proposal as a new chat inside that project.

## One-time setup — Option B: Custom skill

Use this if you'd rather have it available in *any* chat instead of one project.

- **Per person:** In Claude Desktop, go to **Settings → Capabilities → Skills**, click to add a skill, and upload `liminal-proposal-skill.zip` (Todd has it; it's a zip of this folder).
- **Org-wide (Team plan owner only):** In claude.ai **Organization settings**, enable "Code execution and file creation" and "Skills," then upload the same zip under **Skills**. Every member gets it automatically.

## Prerequisite for publishing

Each person needs a **GitHub account with write access** to `github.com/liminal-creative/wireframes`. (Repo admin: Settings → Collaborators → add them.) No Claude-to-GitHub connection is needed.

## Creating a proposal (every time)

1. Start a new chat in the project (or any chat, if using the skill). Say something like:
   > New proposal for Capital City Church. Here are my discovery notes: …
2. Answer Claude's questions — it will ask for the client name, a folder slug (e.g. `capitalcity`), their budget ceiling, and their must-have features if you didn't provide them.
3. Claude produces two files: `index.html` and `styles.css`. Download both.
4. On your computer, make a folder named after the slug and arrange the files like this:
   ```
   capitalcity/
     index.html
     css/
       styles.css
   ```
   (Note: `styles.css` goes inside a `css` subfolder.)
5. In your browser, go to `github.com/liminal-creative/wireframes`, click **Add file → Upload files**, and drag the whole `capitalcity` folder onto the page.
6. Leave "Commit directly to the main branch" selected and click **Commit changes**.
7. Wait about a minute, then open `https://share.meetliminal.com/capitalcity/`. Proofread it there before sending the link to the client.

## Revising a proposal after budget feedback

Go back to the same chat (or start a new one and paste the client's feedback plus the current proposal HTML). Claude knows the revision playbook: reprice by trimming scope (usually swapping the full messaging strategy for the lighter survey-driven sprint), mark the page "Revised <Month Year>," badge the middle tier "Revised & Recommended," and add a "Phase Two — When Funding Allows" block. Then re-upload `index.html` the same way — GitHub will replace the old file.

## Rules of the road

- These pages are unlisted but **public**. Never include passwords, contracts, or personal data.
- Don't restyle the CSS — it's the house look. Content changes only.
- If a client stated a budget ceiling, the middle (recommended) tier should land within ~10–25% above it, never double it.
