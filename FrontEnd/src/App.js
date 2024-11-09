import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
//main pages
import HomePage from './pages/Home_Page';
import Layout from './pages/Layout';
import SignUpPage, {action as signUpAction} from './pages/Sign_Up';
import LoginPage, {action as loginAction} from './pages/Login_Page';
import { LogoutAction } from './pages/Logout_page';
import SellNowPage, {action as sellAction} from './pages/Sell_Now_Page';
import ListingPage, { ListingLoader } from './pages/Listing_Page';
import ContactPage, {action as ContactAction } from './pages/Contact_Page';
import TeamPage from './pages/Team_Page';
import AssetPage ,{loader as assetLoader} from './pages/Assets_Page';
import { tokenLoader, checkSellerAuthLoader, checkAdminAuthLoader, checkBuyerAuthLoader } from './util/auth';
import ErrorPage from './pages/Error_page';
import ServicesPage from './pages/Services_Page';
import AboutPage from './pages/About_Page';
//admin pages 
import AdminPageLayout from './pages/Admin/AdminPageLayout';
import AdminPage, {loader as AdminDashboardLoader} from './pages/Admin/Admin_Home_Page';
import Reviews, {loader as reviewsLoader} from './pages/Admin/ReviewsPage';
import CustomersPage, {loader as customerLoader} from './pages/Admin/CustomersPage';
import CustomerDetailPage, {loader as customerDetailsLoader} from './pages/Admin/CustomerDetailPage';
import SellersPage, {loader as sellerLoader} from './pages/Admin/SellersPage';
import SellerDetailPage, {loader as sellerDetailsLoader} from './pages/Admin/SellerDetailPage';
import TransactionsPage, {loader as AdminTransLoader} from './pages/Admin/TransactionsPage';
import AdminListingPage, {loader as AdminListingLoader } from './pages/Admin/ListingsPage';
import ListingDetails, {loader as adminListingDetailsLoader} from './pages/Admin/ListingDetailsPage';
import { ErrorPage as AdminErrorPage } from './pages/Admin/ErrorPage';
import AdminDisputePage, {loader as AdminDisputeLoader} from './pages/Admin/Admin_Dispute_Page';
//seller pages
import SellerPageLayout from './pages/Seller/SellerPageLayout';
import SellerHomePage, {loader as SellerDashLoader} from './pages/Seller/HomePage';
import NewAsset from './pages/Seller/NewAsset';
import SellerListingPage, {loader as SellerListingLoader} from './pages/Seller/SellerListingPage'
import SellerListingDetailsPage, {loader as SellerListingDetailLoader} from './pages/Seller/SellerListingDetailsPage'
import SellerTransactionPage, {loader as SellerTransLoader} from './pages/Seller/SellerTransactionPage'
import OverduePage, {loader as SellerOverdueLoader} from './pages/Seller/OverduePage'
import SellerPaymentPage, {loader as SellerPaymentLoader} from './pages/Seller/SellerPaymentPage'
import SellerDisputePage, {loader as SellerDisputeLoader} from './pages/Seller/SellerDisputePage'

// buyer pages
import BuyerPageLayout from './pages/Buyer/BuyerPageLayout';
import BuyerHomePage, {loader as BuyerDashboardLoader} from './pages/Buyer/BuyerHomePage';
import BuyerProfilePage, {loader as profileLoader} from './pages/Buyer/BuyerProfilePage';
import BuyerInterestPage,{loader as InterestLoader} from './pages/Buyer/BuyerInterestPage'
import BuyerOffersPage,{loader as BuyerOffersLoader} from './pages/Buyer/BuyerOffersPage'
import BuyerTransactions, {loader as BuyerTransLoader} from './pages/Buyer/BuyerTransactions'
import BuyerPayments, {loader as BuyerPaymentLoader} from  './pages/Buyer/BuyerPayments'
import BuyerDisputePage, {loader as BuyerDisputeLoader} from './pages/Buyer/BuyerDisputePage'

const router = createBrowserRouter([
  {path: '/', element: <Layout/>, errorElement: <ErrorPage/>, loader: tokenLoader, id:'root',
  children: 
    [{index: true, element: <HomePage/>, loader: assetLoader, action: ContactAction},
    {path: 'assets/:listId', element: <ListingPage/>, loader: ListingLoader}, 
    {path: 'signup', element: <SignUpPage/>, action: signUpAction},
    {path: 'login', element: <LoginPage/>, action: loginAction},
    {path: 'SellNow', element: <SellNowPage/>, loader: checkSellerAuthLoader, action: sellAction},
    {path: 'services', element: <ServicesPage/>},
    {path: 'about', element: <AboutPage/>},
    {path: 'contact', element: <ContactPage/>, action: ContactAction},
    {path: 'team', element: <TeamPage/>}, 
    {path: 'assets', element: <AssetPage/>,loader: assetLoader},
    {path: 'logout', action: LogoutAction},
  ]
  },
  {path: '/admin', element: <AdminPageLayout/>,loader: checkAdminAuthLoader ,errorElement: <AdminErrorPage/>, children:[
    {index: true, element: <AdminPage/>, loader: AdminDashboardLoader},
    {path: 'listing', element: <AdminListingPage/>, loader: AdminListingLoader,},
    {path: 'listing/:listingId', element: <ListingDetails/>, loader: adminListingDetailsLoader,},
    {path: 'customers', element: <CustomersPage/>, loader: customerLoader},
    {path: 'customers/:customerId', element: <CustomerDetailPage/>, loader: customerDetailsLoader},
    {path: 'seller', element: <SellersPage/>, loader: sellerLoader},
    {path: 'seller/:sellerId', element: <SellerDetailPage/>, loader: sellerDetailsLoader},
    {path: 'reviews', element: <Reviews/>, loader:reviewsLoader},
    {path: 'transaction', element: <TransactionsPage/>, loader: AdminTransLoader},
    {path: 'dispute', element: <AdminDisputePage/>, loader: AdminDisputeLoader},
  ]},
  {path: '/seller', element: <SellerPageLayout/>,loader: checkSellerAuthLoader ,errorElement: <AdminErrorPage/>, children:[
    {index: true, element: <SellerHomePage/>, loader: SellerDashLoader},
    {path:'profile', element: <BuyerProfilePage/>, loader: profileLoader},
    {path:'new', element: <NewAsset/>, action: sellAction},
    {path:'listing', element: <SellerListingPage/>, loader: SellerListingLoader},
    {path:'listing/:listId', element: <SellerListingDetailsPage/>, loader:SellerListingDetailLoader},
    {path:'transaction', element: <SellerTransactionPage/>, loader: SellerTransLoader},
    {path:'overdue', element: <OverduePage/>, loader: SellerOverdueLoader},
    {path:'payments', element: <SellerPaymentPage/>, loader: SellerPaymentLoader},
    {path:'disputes', element: <SellerDisputePage/>, loader: SellerDisputeLoader}
  ]}, 
  {path: '/buyer' , element: <BuyerPageLayout/>, loader: checkBuyerAuthLoader, errorElement: <AdminErrorPage/>, children:[
    {index: true, element: <BuyerHomePage/>, loader: BuyerDashboardLoader},
    {path:'profile', element: <BuyerProfilePage/>, loader: profileLoader},
    {path:'interests', element: <BuyerInterestPage/>, loader: InterestLoader},
    {path:'offers', element:<BuyerOffersPage/>, loader: BuyerOffersLoader}, 
    {path: 'transactions', element: <BuyerTransactions/>, loader: BuyerTransLoader},
    {path:'payments', element: <BuyerPayments/>, loader: BuyerPaymentLoader},
    {path:'disputes', element: <BuyerDisputePage/>, loader: BuyerDisputeLoader}
  ]
  }
]);


function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in milliseconds
      easing: 'ease-out-back', // animation easing function
      once: true // whether to only animate elements once on page load
    });
  }, []);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
