import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  let contacts = [];
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(fileData);
    return contacts;
  } catch (err) {
    console.log(err);
  }
};

console.log(await getAllContacts());
