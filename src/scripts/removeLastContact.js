import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  let contacts = [];
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(fileData);
    if (contacts.length > 0) {
      contacts.pop();
    }
  } catch (err) {
    console.log(err);
  }

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

removeLastContact();
