// TODO: Seed file for testing purposes
import {
  createCourt,
  getAllCourts,
  getCourtById,
  getCourtsByName,
} from "../data/courts.js";
import {
  createUser,
  getUserById,
  getUserByName,
  getUserByUsername,
  updateUser,
} from "../data/users.js";
import { dbConnection, closeConnection } from "../config/mongoConnection.js";
import {
  addToSchedule,
  getSchedule,
  removeFromSchedule,
  clearSchedule,
} from "../data/schedule.js";
import {
  appendToHistory,
  deleteHistoryItem,
  getHistory,
  getHistoryItem,
  getUpcomingHistory,
} from "../data/history.js";

// TODO: Open Db Connection
const db = await dbConnection();
// !DUMP DB : (careful)
await db.dropDatabase();

let user1 = undefined;
let user2 = undefined;

let court1 = undefined;
let court2 = undefined;

// TODO: Seed Users ************************************************************************************************************
//add user1
try {
  user1 = await createUser(
    "Isabella  ",
    "  Stone",
    "iStONe  ",
    "jwhef:LSJ",
    20,
    "Staten Island",
    "NY",
    "07030",
    "  iBelLarOSE1@gmaiL.coM  ",
    " begINNer ",
    true
  );
  console.log(user1);
} catch (e) {
  console.log(e);
}

//try to add duplicate username to user1
try {
  user1 = await createUser(
    "Bella  ",
    "  Stone",
    "IstOnE  ",
    "jwhef:LSJ",
    20,
    "Staten Island",
    "NY",
    "07030",
    "  iBelLarOSE1@gmaiL.coM  ",
    " begINNer "
  );
  console.log(user1);
} catch (e) {
  console.log(e);
}

//add user2
try {
  user2 = await createUser(
    "  Ryan  ",
    "Giovanniello",
    "rGIoV22  ",
    "fiuwefvjksfhe",
    21,
    "Hoboken",
    "NJ",
    "07030",
    "  rgIOv123@gMAiL.coM  ",
    " INtermEdiate   ",
    false
  );
  console.log(user2);
} catch (e) {
  console.log(e);
}

//invalid firstName
try {
  user2 = await createUser(
    true,
    "Giovanniello",
    "rGIoV22  ",
    "fiuwefvjksfhe",
    21,
    "Hoboken",
    "NJ",
    "07030",
    "  rgIOv123@gMAiL.coM  ",
    " INtermEdiate   "
  );
  console.log(user2);
} catch (e) {
  console.log(e);
}

//invalid last name
try {
  user2 = await createUser(
    "  Ryan  ",
    ["Giovanniello"],
    "rGIoV22  ",
    "fiuwefvjksfhe",
    21,
    "Hoboken",
    "NJ",
    "07030",
    "  rgIOv123@gMAiL.coM  ",
    " INtermEdiate   "
  );
  console.log(user2);
} catch (e) {
  console.log(e);
}

//invalid username
try {
  user2 = await createUser(
    "  Ryan  ",
    "Giovanniello",
    100,
    "fiuwefvjksfhe",
    "21",
    "Hoboken",
    "NJ",
    "07030",
    "  rgIOv123@gMAiL.coM  ",
    " INtermEdiate   "
  );
  console.log(user2);
} catch (e) {
  console.log(e);
}

//invalid age
try {
  user2 = await createUser(
    "  Ryan  ",
    "Giovanniello",
    "rGIoV22  ",
    "fiuwefvjksfhe",
    "21",
    "Hoboken",
    "NJ",
    "07030",
    "  rgIOv123@gMAiL.coM  ",
    " INtermEdiate   "
  );
  console.log(user2);
} catch (e) {
  console.log(e);
}

// TODO: Seed Courts ************************************************************************************************************
try {
  court1 = await createCourt(
    "Court 1",
    "basketball",
    "100 Washington Street",
    "Hoboken",
    "NJ",
    "07030",
    8,
    50,
    100,
    "09:00",
    "19:00",
    user1._id.toString
  );
  let courtId = court1._id.toString();
  let sched = await getSchedule(courtId);
  console.log(court1);
  //console.log(sched);
  //console.log("Schedule TEST");
  let sched2 = await addToSchedule(
    court1._id.toString(),
    user1._id,
    "05/15/2023",
    "10:00",
    "11:00",
    4
  );
  //console.log("seed sched 2 result:");
  //console.log(sched2);
  let sched3 = await addToSchedule(
    court1._id.toString(),
    user1._id,
    "05/18/2023",
    "16:00",
    "17:00",
    2
  );
  //console.log("seed sched 3 result:");
  //console.log(sched3);
  //let sched4 = await addToSchedule(court1._id.toString(), user1._id, "05/18/2023", "12:00", "13:00", 1);
  //let schedFail = await addToSchedule(court1._id.toString(), user1._id, "04/16/2023", "10:30", "12:00", 1);
  //let schedFail2 = await addToSchedule(court1._id.toString(), user1._id, "02/16/2024", "10:30", "12:00", 1);
  //console.log("seed sched 4 result:");
  //console.log(sched4);

  //remove from schedule
  // let bookingId = sched2["04/15/2023"][0]._id.toString();
  // let remSched = await removeFromSchedule(courtId, bookingId, "04/15/2023");
  // console.log(remSched);
  // bookingId = sched3["04/18/2023"][0]._id.toString();
  // let remSched2 = await removeFromSchedule(courtId, bookingId, "04/18/2023");
  // console.log(remSched2);

  //clear schedule
  // let clearedSched = await clearSchedule(courtId, "04/18/2023");
  // console.log(clearedSched);

  //invalid date testing
  //let sched5 = await addToSchedule(court1._id.toString(), user1._id, "02/30/2023", "13:00", "14:00", 1);
  //console.log("seed sched 5 result:");
  //console.log(sched5);
} catch (e) {
  console.log(e);
}

try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    200,
    "12:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid name
try {
  court2 = await createCourt(
    ["court"],
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    200,
    "12:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid type
try {
  court2 = await createCourt(
    "Court 2",
    true,
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    200,
    "12:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid capacity
try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    "5",
    80,
    200,
    "12:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid length
try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    [80],
    200,
    "12:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid width
try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    "200",
    "12:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid open time
try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    200,
    "9:00",
    "18:00",
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid close time
try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    200,
    "12:00",
    2,
    "6434bca3a383aa375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

//invalid owner id
try {
  court2 = await createCourt(
    "Court 2",
    "tennis",
    "500 Jackson Street",
    "Hoboken",
    "NJ",
    "07030",
    5,
    80,
    200,
    "12:00",
    "18:00",
    "6434bca375a96458e"
  );
  console.log(court2);
} catch (e) {
  console.log(e);
}

// TODO: seed schedules ************************************************************************************************************

// TODO: seed history ************************************************************************************************************
console.log("--- History ---");
try {
  //valid calls
  let history1 = appendToHistory(
    user1._id.toString(),
    court1._id.toString(),
    "04/28/2023",
    "18:00",
    "19:00"
  );
  console.log(history1);
  let history2 = appendToHistory(
    user1._id.toString(),
    court1._id.toString(),
    "04/29/2023",
    "18:00",
    "19:00"
  );
  console.log(history1);
  let history3 = appendToHistory(
    user1._id.toString(),
    court1._id.toString(),
    "04/16/2023",
    "18:00",
    "19:00"
  );
  console.log(history3);

  let historyGetUser = getHistory(user1._id.toString());
  consolelog(historyGetUser);

  let historyGetItem = getHistoryItem(history2._id.toString());
  console.log(historyGetItem);
  //invalid calls

  let historyUpcoming = getUpcomingHistory(user1._id.toString()); // Should not have history 3.
  console.log(historyUpcoming);

  let deletedHistory1 = deleteHistoryItem(history2._id.toString());
} catch (e) {
  console.log(e);
}

// TODO: seed reviews ************************************************************************************************************

// TODO: test user getters ************************************************************************************************************

// TODO: test court getters ************************************************************************************************************
//get all
//working
try {
  let courts = await getAllCourts();
  // console.log('***********************************');
  console.log(courts);
} catch (e) {
  console.log(e);
}

// find court by id
//working
try {
  let court = await getCourtById(court1._id.toString());
  console.log(court);
} catch (e) {
  console.log(e);
}

//invalid id
try {
  let court = await getCourtById("badinput");
  console.log(court);
} catch (e) {
  console.log(e);
}

//id not found
try {
  let court = await getCourtById("643617375f52b6748b06c321");
  console.log(court);
} catch (e) {
  console.log(e);
}

//find court by name
//working
try {
  let court = await getCourtsByName(" cOUrT 2  ");
  console.log(court);
} catch (e) {
  console.log(e);
}

//not found
try {
  let court = await getCourtsByName(" no court Like THIs  ");
  console.log(court);
} catch (e) {
  console.log(e);
}

// TODO: Close Connection
await closeConnection();
console.log("\nDone!");