import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  let contacts = [];
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(fileData);
    return contacts.length;
  } catch (err) {
    console.log(err);
  }
};

console.log(await countContacts());
