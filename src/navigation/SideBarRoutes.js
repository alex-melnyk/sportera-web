import i18n from '../i18n';
import {Routes} from "./Routes";

const SideBarRoutes = [
    {
        path: Routes.DASHBOARD,
        label: i18n.t('dashboard__sidebar_label'),
        icon: 'dashboard'
    },
    {
        path: Routes.TEAMS,
        label: i18n.t('teams__sidebar_label'),
        icon: 'command'
    },
    {
        path: Routes.PLAYERS,
        label: i18n.t('players__sidebar_label'),
        icon: 'user'
    },
    {
        path: Routes.DOCUMENTS,
        label: i18n.t('documents__sidebar_label'),
        icon: 'docs'
    },
    {
        path: Routes.CALENDAR,
        label: i18n.t('calendar__sidebar_label'),
        icon: 'calendar'
    },
    {
        path: Routes.CLUB,
        label: i18n.t('club__sidebar_label'),
        icon: 'club'
    },
    {
        path: Routes.PAYMENTS,
        label: i18n.t('payments__sidebar_label'),
        icon: 'payment'
    },
    {
        path: Routes.TOURNAMENTS,
        label: i18n.t('tournaments__sidebar_label'),
        icon: 'tourney'
    },
    {
        path: Routes.CHAT,
        label: i18n.t('chat__sidebar_label'),
        icon: 'chat'
    },
    {
        path: Routes.CRM,
        label: i18n.t('crm__sidebar_label'),
        icon: 'crm'
    },
    {
        path: Routes.SETTINGS,
        label: i18n.t('settings__sidebar_label'),
        icon: 'settings'
    }
];

export {SideBarRoutes};