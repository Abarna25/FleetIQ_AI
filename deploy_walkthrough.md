# FleetIQ AI - Deployment Guide

Since the system automatically approved the cloud deployment strategy, I have added a `render.yaml` file to your GitHub repository. This file allows Render to instantly detect and deploy your backend and AI services automatically.

Here is your step-by-step guide to deploying the entire microservice architecture:

> [!TIP]
> Make sure to do these steps in order, as the Frontend needs the Backend URL, and the Backend needs the Database URL!

## Step 1: Deploy the Database (Supabase)
1. Go to [Supabase.com](https://supabase.com) and create a free account.
2. Create a new Project. Choose a region close to you and set a strong database password.
3. Once the project is provisioned, go to **Project Settings -> Database**.
4. Scroll down to **Connection string** and select **URI**.
5. Copy the connection string. It will look like this: `postgresql://postgres.[YOUR-PROJECT]:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres`.

## Step 2: Deploy Backend & AI Service (Render)
1. Go to [Render.com](https://render.com) and sign in with GitHub.
2. Click **New +** -> **Blueprint**.
3. Connect your GitHub repository: `Abarna25/FleetIQ_AI`.
4. Render will automatically detect the `render.yaml` file I just pushed.
5. Click **Apply**. Render will start spinning up **both** the Node.js API and the Python AI Service.
6. **Crucial Step:** During setup, Render will ask you to provide the `DATABASE_URL`. Paste the Supabase connection string from Step 1 here (remember to replace `[YOUR-PASSWORD]` with your actual password!).
7. Once deployment finishes, Render will give you a public URL for your Backend API (e.g., `https://fleetiq-backend-xxx.onrender.com`). Copy this URL.

## Step 3: Deploy Frontend (Vercel)
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** -> **Project**.
3. Import your repository: `Abarna25/FleetIQ_AI`.
4. Before clicking Deploy, look for the **Framework Preset**. Vercel usually detects Next.js, but make sure the **Root Directory** is set to `frontend`. To do this, click **Edit** next to Root Directory and select the `frontend` folder.
5. Expand the **Environment Variables** section. Add the following variable:
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** Paste the Backend URL from Step 2 (e.g., `https://fleetiq-backend-xxx.onrender.com/api`)
6. Click **Deploy**.

## Final Step: Initialize the Database
Once the backend is live, the final step is to push the database schema to Supabase.
Open your local terminal and run:
```bash
# Set your DATABASE_URL locally
set DATABASE_URL=postgresql://postgres... (your supabase URL)

# Push the Prisma schema to Supabase
cd database
npx prisma db push

# (Optional) Seed the database with mock data
npx prisma db seed
```

> [!SUCCESS]
> You're done! Visit your Vercel deployment URL and your production-ready FleetIQ AI app will be live and talking to your actual database and AI endpoints!
