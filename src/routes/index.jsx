import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import MainLayout from "../layout/MainLayout";

//Home
import Dashboard from "../pages/Home/Dashboard";
import Notifications from "../pages/Home/Notifications";
import Users from "../pages/Home/Users";
import Analytics from "../pages/Home/Analytics";
import Activity from "../pages/Home/Activity";
import PromocodesDeposits from "../pages/Home/Promocodes/Deposits";
import PromocodesBonus from "../pages/Home/Promocodes/Bonus";
import SingleSlip from "../pages/Home/Sportsbook/SingleSlip";
import MultiSlip from "../pages/Home/Sportsbook/MultiSlip";
import Featured from "../pages/Home/Sportsbook/Featured";
import Telegram from "../pages/Home/Telegram/Templates";
import WalletDeposit from "../pages/Wallet/Deposit";
import WalletWithdraws from "../pages/Wallet/Withdraws";
import Plugins from "../pages/Settings/Plugins";
import Slider from "../pages/Settings/Slider";
import Themes from "../pages/Settings/Themes";
import Appearance from "../pages/Settings/Appearance";
import Roles from "../pages/Settings/Roles";
import SettingWallet from "../pages/Settings/Wallet";
import Banner from "../pages/Settings/Banner";
import Vip from "../pages/Settings/Vip";
import Bets from "../pages/Settings/Bots/Bets";
import Chat from "../pages/Settings/Bots/Chat";
import Games from "../pages/Settings/Games";
import License from "../pages/System/License";
import SSL from "../pages/System/SSL";
import Database from "../pages/System/Database";
import FileManager from "../pages/System/FileManager";
import Update from "../pages/System/Update";
import GamesDetails from "../pages/Settings/Games/GamesData/GamesDetails";
import TelegramDetails from "../pages/Settings/Games/TelegramData/TelegramDetails";
import PheonixDetail from "../pages/Settings/Games/PheonixGamblingSlotData/PheonixDetail";
import Casino from "../pages/Settings/Slider/SliderContent/Casino";
import Sport from "../pages/Settings/Slider/SliderContent/Sport";
// import Logs from "../pages/System/Logs";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/admin" />} />
          
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/games/stats" element={<Analytics />} />
          <Route path="/admin/activity" element={<Activity />} />
          <Route path="/admin/promocodes" element={<PromocodesDeposits />} />
          <Route path="/admin/promocodes/bonus" element={<PromocodesBonus />} />
          <Route path="/admin/sport/singleSlips" element={<SingleSlip />} />
          <Route path="admin/sport/multiSlips" element={<MultiSlip />} />
          <Route path="admin/sport/featured" element={<Featured />} />
          <Route path="admin/database/telegram_templates" element={<Telegram />} />
          <Route path="admin/deposits" element={<WalletDeposit />} />
          <Route path="admin/withdraws" element={<WalletWithdraws />} />
          <Route path="admin/plugins" element={<Plugins />} />
          <Route path="admin/slider" element={<Slider />} />
          <Route path="admin/themes" element={<Themes />} />
          <Route path="admin/appearance" element={<Appearance />} />
          <Route path="admin/roles" element={<Roles />} />
          <Route path="admin/wallet" element={<SettingWallet />} />
          <Route path="admin/banner" element={<Banner />} />
          <Route path="admin/vip" element={<Vip />} />
          <Route path="admin/bots/bets" element={<Bets />} />
          <Route path="admin/bots/chat" element={<Chat />} />
          <Route path="admin/games" element={<Games />} />
          <Route path="admin/license" element={<License />} />
          <Route path="admin/ssl" element={<SSL />} />
          <Route path="admin/database" element={<Database />} />
          <Route path="admin/files" element={<FileManager />} />
          <Route path="admin/ota" element={<Update />} />
          <Route path="/games/:gameName"  element={<GamesDetails />}/>
          <Route path="/games/telegram:slot"  element={<TelegramDetails />}/>
          <Route path="/games/external:gameName"  element={<PheonixDetail />}/>
          <Route path="/admin/slider/casino" element={<Casino />} />
          <Route path="/admin/slider/sports" element={<Sport />} />
          {/* <Route path="admin/logs" element={<Logs />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
