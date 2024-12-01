import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated, 
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { AuthPage,ErrorComponent
,useNotificationProvider
,ThemedLayoutV2
,ThemedSiderV2} from '@refinedev/antd';
import "@refinedev/antd/dist/reset.css";

import { App as AntdApp } from "antd"
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BlogPostList, BlogPostCreate, BlogPostEdit, BlogPostShow } from "./pages/blog-posts";
import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "./pages/categories";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";





function App() {
    

    
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            <ColorModeContextProvider>
<AntdApp>
            <DevtoolsProvider>
                <Refine notificationProvider={useNotificationProvider}
routerProvider={routerBindings}
dataProvider={dataProvider("https://api.fake-rest.refine.dev")} 
                        resources={[
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                                show: "/blog-posts/show/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                            {
                                name: "categories",
                                list: "/categories",
                                create: "/categories/create",
                                edit: "/categories/edit/:id",
                                show: "/categories/show/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                        ]}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                            projectId: "Vstfh2-TACTm7-1pFfHB",
                        
                    }}
                >

                    <Routes>
                        <Route
                            element={(
                                    <ThemedLayoutV2
                                        Header={() => <Header sticky />}
                                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                                    >
                                        <Outlet />
                                    </ThemedLayoutV2>
                            )}
                        >
                            <Route index element={
                                    <NavigateToResource resource="blog_posts" />
                            } />
                            <Route path="/blog-posts">
                                <Route index element={<BlogPostList />} />
                                <Route path="create" element={<BlogPostCreate />} />
                                <Route path="edit/:id" element={<BlogPostEdit />} />
                                <Route path="show/:id" element={<BlogPostShow />} />
                            </Route>
                            <Route path="/categories">
                                <Route index element={<CategoryList />} />
                                <Route path="create" element={<CategoryCreate />} />
                                <Route path="edit/:id" element={<CategoryEdit />} />
                                <Route path="show/:id" element={<CategoryShow />} />
                            </Route>
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes> 

                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            <DevtoolsPanel />
            </DevtoolsProvider>
            </AntdApp>
</ColorModeContextProvider>
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import CodeAssistance from "./pages/CodeAssistance";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chat" component={Chat} />
                <Route path="/code-assistance" component={CodeAssistance} />
            </Switch>
        </Router>
    );
};

export default App;
