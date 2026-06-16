import { StackItem } from "@/app/types";
import {
  N8nIcon,
  OpenClawIcon,
  MakeIcon,
  ZapierIcon,
  HubSpotIcon,
  SalesforceIcon,
  SlackIcon,
  DiscordIcon,
  TelegramIcon,
  WhatsAppIcon,
  AirtableIcon,
  NotionIcon,
  GoogleSheetsIcon,
} from "@/app/components/icons/StackIcons";

export const stack: StackItem[] = [
  { id: "n8n", name: "n8n", category: "Orchestration", icon: N8nIcon },
  { id: "openclaw", name: "OpenClaw", category: "AI Agent", icon: OpenClawIcon },
  { id: "make", name: "Make", category: "Automation", icon: MakeIcon },
  { id: "zapier", name: "Zapier", category: "Automation", icon: ZapierIcon },
  { id: "hubspot", name: "HubSpot", category: "CRM", icon: HubSpotIcon },
  { id: "salesforce", name: "Salesforce", category: "CRM", icon: SalesforceIcon },
  { id: "slack", name: "Slack", category: "Comms", icon: SlackIcon },
  { id: "discord", name: "Discord", category: "Comms", icon: DiscordIcon },
  { id: "telegram", name: "Telegram", category: "Comms", icon: TelegramIcon },
  { id: "whatsapp", name: "WhatsApp", category: "Comms", icon: WhatsAppIcon },
  { id: "airtable", name: "Airtable", category: "Database", icon: AirtableIcon },
  { id: "notion", name: "Notion", category: "Workspace", icon: NotionIcon },
  { id: "gsheets", name: "Google Sheets", category: "Database", icon: GoogleSheetsIcon },
];
