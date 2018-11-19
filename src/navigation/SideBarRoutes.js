import i18n from '../i18n';
import {Routes} from "./Routes";

const SideBarRoutes = [
    {
        path: Routes.DASHBOARD,
        label: i18n.t('sidebar_dashboard_label'),
        icon: 'dashboard'
    },
    {
        path: Routes.TEAMS,
        label: i18n.t('sidebar_teams_label'),
        icon: 'command'
    },
    {
        path: Routes.PLAYERS,
        label: i18n.t('sidebar_players_label'),
        icon: 'user'
    },
    {
        path: Routes.DOCUMENTS,
        label: i18n.t('sidebar_documents_label'),
        icon: 'docs'
    },
    {
        path: Routes.CALENDAR,
        label: i18n.t('sidebar_calendar_label'),
        icon: 'calendar'
    },
    {
        path: Routes.CLUB,
        label: i18n.t('sidebar_club_label'),
        icon: 'club'
    },
    {
        path: Routes.PAYMENTS,
        label: i18n.t('sidebar_payments_label'),
        icon: 'payment'
    },
    {
        path: Routes.TOURNAMENTS,
        label: i18n.t('sidebar_tournaments_label'),
        icon: 'tourney'
    },
    {
        path: Routes.CHAT,
        label: i18n.t('sidebar_chat_label'),
        icon: 'chat'
    },
    {
        path: Routes.CRM,
        label: i18n.t('sidebar_crm_label'),
        icon: 'crm'
    },
    {
        path: Routes.SETTINGS,
        label: i18n.t('sidebar_settings_label'),
        icon: 'settings'
    }
];

export {SideBarRoutes};