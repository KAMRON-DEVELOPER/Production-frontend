import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Notes, Bookmarks, News, Posts, Chats, Groups, Courses, Books, Movies, Series, Cartoons, Walpapers, ImageEditor, TextToImage, Jobs, Register, Login, Verify, ErrorPage } from "./pages/index"
import { HomeLayout, CommunityLayout, EducationLayout, EntertainmentLayout, AILayout, JobLayout, AuthenticationLayout, WelcomeLayout, RootLayout } from "./layouts/index"


function App() {


  const routes = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'dashboard',
          element: <HomeLayout />,
          children: [
            { path: '', element: <Dashboard /> },
            { path: 'notes', element: <Notes /> },
            { path: 'bookmarks', element: <Bookmarks /> },
            { path: 'posts', element: <Posts /> },
            { path: 'chats', element: <Chats /> },
            { path: 'groups', element: <Groups /> },
            { path: 'movies', element: <Movies /> },
            { path: 'courses', element: <Courses /> },
          ]
        },
        {
          path: 'community',
          element: <CommunityLayout />,
          children: [
            { path: '', element: <News /> },
            { path: 'posts', element: <Posts /> },
            { path: 'chats', element: <Chats /> },
            { path: 'groups', element: <Groups /> },
          ]
        },
        {
          path: 'education',
          element: <EducationLayout />,
          children: [
            { path: '', element: <Courses /> },
            { path: 'books', element: <Books /> },
          ]
        },
        {
          path: 'entertainment',
          element: <EntertainmentLayout />,
          children: [
            { path: '', element: <Movies /> },
            { path: 'cartoons', element: <Cartoons /> },
            { path: 'series', element: <Series /> },
            { path: 'walpapers', element: <Walpapers /> },
          ]
        },
        {
          path: 'job',
          element: <JobLayout />,
          children: [
            { path: '', element: <Jobs /> },
          ]
        },
        {
          path: 'ai',
          element: <AILayout />,
          children: [
            { path: '', element: <ImageEditor /> },
            { path: 'text_to_image', element: <TextToImage /> },
          ]
        },
        {
          path: 'auth',
          element: <AuthenticationLayout />,
          children: [
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            { path: 'verify', element: <Verify /> },
          ]
        },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App