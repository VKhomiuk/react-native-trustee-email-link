/**
 * React Native Email Link
 *
 * This file supports both iOS and Android.
 */

import { openInbox, openComposer, getApps } from "./src/ios";
import { EmailException } from "./src/email-exception";

export { EmailException, openInbox, openComposer, getApps };
