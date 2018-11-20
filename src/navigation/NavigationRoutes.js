import {Routes} from "./Routes";
import {DashboardScreen, TeamsInformationScreen, TeamsScreen} from "../components/screens";

const NavigationRoutes = [
    {
        path: Routes.DASHBOARD,
        exact: true,
        component: DashboardScreen
    },
    {
        path: Routes.TEAMS,
        exact: true,
        component: TeamsScreen
    },
    {
        path: Routes.TEAMS_INFORMATION,
        exact: true,
        component: TeamsInformationScreen
    },
    {
        path: Routes.PLAYERS,
        exact: true,
        component: null
    },
    {
        path: Routes.DOCUMENTS,
        exact: true,
        component: null
    },
    {
        path: Routes.CALENDAR,
        exact: true,
        component: null
    },
    {
        path: Routes.CLUB,
        exact: true,
        component: null
    },
    {
        path: Routes.PAYMENTS,
        exact: true,
        component: null
    },
    {
        path: Routes.TOURNAMENTS,
        exact: true,
        component: null
    },
    {
        path: Routes.CHAT,
        exact: true,
        component: null
    },
    {
        path: Routes.CRM,
        exact: true,
        component: null
    },
    {
        path: Routes.SETTINGS,
        exact: true,
        component: null
    }
];

export {NavigationRoutes};