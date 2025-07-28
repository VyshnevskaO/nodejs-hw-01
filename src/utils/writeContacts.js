import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.writeFile(PATH_DB, updatedContacts);
    return data;
  } catch (err) {
    console.log(err);
  }
};
