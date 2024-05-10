import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  const { i18n } = useTranslation();

  return (
    <div className={i18n.language === 'ar' ? 'arabic-text' : ''} >
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{margin:"8px"}}
          toastOptions={{
            success: {
              duration:2000,
            },
            error: {
              duration: 5000,
              
            },
            style: {
              maxWidth: "500px",
              fontSize: "16px",
              padding: "16px 24px",
              color:"var(--color-gray-700)",
              // backgroundColor: "var(--color-gray-0)",

            }
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
