import { Routes } from '@angular/router';
import { GetAllCitiesComponent } from './Pages/City/get-all-cities/get-all-cities.component';
import { AddCityComponent } from './Pages/City/add-city/add-city.component';
import { CityByIdComponent } from './Pages/City/city-by-id/city-by-id.component';
import { GetAllMultiplexesComponent } from './Pages/Multiplex/get-all-multiplexes/get-all-multiplexes.component';
import { AddMultiplexComponent } from './Pages/Multiplex/add-multiplex/add-multiplex.component';
import { MultiplexByIdComponent } from './Pages/Multiplex/multiplex-by-id/multiplex-by-id.component';
import { GetAllMoviesComponent } from './Pages/Movie/get-all-movies/get-all-movies.component';
import { AddMovieComponent } from './Pages/Movie/add-movie/add-movie.component';
import { MovieByIdComponent } from './Pages/Movie/movie-by-id/movie-by-id.component';
import { GetAllShowsComponent } from './Pages/Show/get-all-shows/get-all-shows.component';
import { AddShowComponent } from './Pages/Show/add-show/add-show.component';
import { ShowByIdComponent } from './Pages/Show/show-by-id/show-by-id.component';
import { GetAllBookingsComponent } from './Pages/Booking/get-all-bookings/get-all-bookings.component';
import { AddBookingComponent } from './Pages/Booking/add-booking/add-booking.component';
import { BookingByIdComponent } from './Pages/Booking/booking-by-id/booking-by-id.component';
import { GetAllWalletsComponent } from './Pages/Wallet/get-all-wallets/get-all-wallets.component';
import { AddWalletComponent } from './Pages/Wallet/add-wallet/add-wallet.component';
import { GetAllCouponsComponent } from './Pages/Coupon/get-all-coupons/get-all-coupons.component';
import { AddCouponComponent } from './Pages/Coupon/add-coupon/add-coupon.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Pages/customer-dashboard/customer-dashboard.component';
import { GetAllMultiplexesadminComponent } from './Pages/Multiplex/get-all-multiplexesadmin/get-all-multiplexesadmin.component';
import { GetShowsByMultiplexComponent } from './Pages/get-shows-by-multiplex/get-shows-by-multiplex.component';
import { GetShowByMovieIdComponent } from './Pages/Show/get-show-by-movie-id/get-show-by-movie-id.component';
import { AddUserComponent } from './Pages/User/add-user/add-user.component';
import { UploadImgComponent } from './Pages/upload-img/upload-img.component';

export const routes: Routes = [
    /*{path:'getallcities',component:GetAllCitiesComponent},
    {path:'addcity',component:AddCityComponent},
    {path:'search/:mid',component:CityByIdComponent},
    {path:'getallmultiplexes',component:GetAllMultiplexesComponent},
    {path:'addmultiplex',component:AddMultiplexComponent},
    {path:'multiplexbyid/:mid',component:MultiplexByIdComponent},
    {path:'getallmovies',component:GetAllMoviesComponent},
    {path:'addmovie',component:AddMovieComponent},
    {path:'getmoviebyid/:mid',component:MovieByIdComponent},
    {path:'getallshows',component:GetAllShowsComponent},
    {path:'addshow',component:AddShowComponent},
    {path:'getshowbyid/:mid',component:ShowByIdComponent},
    {path:'getallbookings',component:GetAllBookingsComponent},
    {path:'addbooking',component:AddBookingComponent},
    {path:'getbookingbyid/:mid',component:BookingByIdComponent},
    {path:'getallwallets',component:GetAllWalletsComponent},
    {path:'addwallet',component:AddWalletComponent},
    {path:'getallcoupons',component:GetAllCouponsComponent},
    {path:'addcoupon',component:AddCouponComponent},
    {path:'login',component:LoginComponent},*/
    {path:'adduser',component:AddUserComponent},
    {path:'login',component:LoginComponent},
    {path:'uploadimg',component:UploadImgComponent},
    {path:'edituser',component:ShowByIdComponent},
    {
    path:'admindashboard',
    component:AdminDashboardComponent,
    children:[
        {path:'getallcities',component:GetAllCitiesComponent},
        {path:'addcity',component:AddCityComponent},
        {path:'login',component:LoginComponent},
        {path:'addmultiplex',component:AddMultiplexComponent},
        {path:'getallmovies',component:GetAllMoviesComponent},
        {path:'addmovie',component:AddMovieComponent},
        {path:'getallshows',component:GetAllShowsComponent},
        {path:'addshow',component:AddShowComponent},
        {path:'getmoviebyid/:mid',component:MovieByIdComponent},
       // {path:'getallbookingsadmin',component:GetAllBookingsadminComponent},
        {path:'getshowbyid/:mid',component:ShowByIdComponent},
        {path:'getallmultiplexesadmin',component:GetAllMultiplexesadminComponent},
        {path:'adduser',component:AddUserComponent},
        {path:'uploadimg',component:UploadImgComponent},
    ],
},
{path:'customerdashboard',
component:CustomerDashboardComponent,
children:[
    {path:'getallcities',component:GetAllCitiesComponent},
    {path:'getallmultiplexes',component:GetAllMultiplexesComponent},
    {path:'getshowsbymultiplex',component:GetShowsByMultiplexComponent},
    {path:'login',component:LoginComponent},
    {path:'getallbookings',component:GetAllBookingsComponent},
    {path:'addbooking',component:AddBookingComponent},
    {path:'getshowbymovieid',component:GetShowByMovieIdComponent},
    {path:'addbooking',component:AddBookingComponent},
    {path:'adduser',component:AddUserComponent},
    {path:'getallwallets',component:GetAllWalletsComponent}
],
},
{path:'',component:LoginComponent}
];
