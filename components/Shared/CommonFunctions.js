import { sum, map, uniq, filter, find, propEq, values } from "ramda";
import {
  STATUS_LIST_PROJECT,
  STATUS_LIST_ROOM,
  STATUS_LIST_QUOTATION,
  PROJECT_URGENCY,
  PART_TYPES,
} from "@/components/Shared/ConstantItems.js";

export default {
  getQtyOfBoard(quotations) {
    //所有板材的Using Qty之和
    let allBoards = filter((q) => q.type === PART_TYPES.Board, quotations);
    if (allBoards.length > 0) {
      return sum(map((q) => q.usingQty, allBoards));
    }
    return 0;
  },
  getQtyOfPB24121(quotations) {
    //PB241216的数量 QTY(PB）. '15079', 'Board', 'PB white 241216'
    let allPB241216 = filter((q) => q.partId === 15079, quotations);
    if (allPB241216.length > 0) {
      return sum(map((q) => q.usingQty, allPB241216));
    }
    return 0;
  },
  getQtyOfEdgetape(quotations) {
    let allEdgetape = filter((q) => q.type === PART_TYPES.Edgetape, quotations);
    if (allEdgetape.length > 0) {
      return sum(map((q) => q.usingQty, allEdgetape));
    }
    return 0;
  },

  transferContent: function (content) {
    if (content == null) return "";

    let string = "";
    var contentArray = content.split("");
    for (var i = 0; i < contentArray.length; i++) {
      var c = contentArray[i];
      if (c == '"') string += '\\"';
      else if (c == "“") string += '\\"';
      else if (c == "‘") string += "\\'";
      else if (c == "'") string += "\\'";
      else if (c == "\\") string += "\\\\";
      else string += c;
    }
    return string;
  },

  filterByName(items) {
    return filter((i) => !!i.name, items);
  },

  refineData(items) {
    return filter((i) => !!i, uniq(items));
  },

  getNameListByType(editedItemType, allOptions) {
    if (allOptions) {
      return this.refineData(
        map(
          (o) => {
            return o.name;
          },
          filter((o) => o.type == editedItemType, allOptions)
        )
      );
    } else return null;
  },

  getColorByUrgency(urgency) {
    if (urgency == values(PROJECT_URGENCY)[0].urgency) return "white";
    else return "black";
  },
  getBkColorByUrgency(urgency) {
    var ProjectUrgency = values(PROJECT_URGENCY);
    var foundItem = find(propEq("urgency", urgency), ProjectUrgency);
    return foundItem ? foundItem.color : "";
  },

  findStatus(status) {
    var foundItem = find(propEq("status", status), values(STATUS_LIST_PROJECT));
    if (!foundItem)
      foundItem = find(propEq("status", status), values(STATUS_LIST_ROOM));
    if (!foundItem)
      foundItem = find(propEq("status", status), values(STATUS_LIST_QUOTATION));
    return foundItem;
  },

  getColorByStatus(status) {
    var foundItem = this.findStatus(status);
    if (foundItem?.color?.indexOf("darken") >= 0) return "white";
    else return "black";
  },
  getBkColorByStatus(status) {
    var foundItem = this.findStatus(status);
    return foundItem ? foundItem.color : "white";
  },

  getSimplifiedStatus(status) {
    var foundItem = this.findStatus(status);
    return foundItem?.simplifiedStatus;
  },

  generateProjectText(project) {
    return (
      (project.projectNo ? project.projectNo + ". " : "") +
      (project.status ? "Status:" + project.status + ". " : "") +
      (project.urgency ? "Urgency:" + project.urgency + ". " : "")
    );
  },

  generatePersonText(person, dontNeedType = false) {
    return (
      (!dontNeedType ? person.type + " - " : "") +
      (person.givenname ? person.givenname + " " : "") +
      (person.surname ? person.surname + ". " : "") +
      (person.company ? "Company:" + person.company + ". " : "") +
      (person.category ? "Category:" + person.category + ". " : "") +
      (person.mobile ? "P:" + person.mobile + ". " : "") +
      (person.email ? "E:" + person.email + ". " : "") +
      (person.suburb ? "Suburb:" + person.suburb + ". " : "")
      //+ (person.address ? "A:" + person.address : "")
    );
  },
  generatePartText(part) {
    return (
      (part.category ? part.category + ". " : "") +
      (part.subCategory ? part.subCategory + ". " : "") +
      (part.brand ? "Brand:" + part.brand + ". " : "") +
      (part.model ? "Model:" + part.model + ". " : "") +
      (part.finish ? "Finish:" + part.finish + ". " : "") +
      (part.color ? "Color:" + part.color + ". " : "") +
      (part.length ? "L:" + part.length + ". " : "") +
      (part.width ? "W:" + part.width + ". " : "") +
      (part.height ? "H:" + part.height : "")
    );
  },

  generateOwnerText_2Letters(owners, people) {
    var ownersArray = owners?.split(",");
    var personNames = "";
    ownersArray?.forEach((personId) => {
      var person = find(propEq("id", Number(personId)))(people);
      if (person) {
        if (personNames != "") personNames += ", ";
        personNames +=
          person.givenname.charAt(0).toUpperCase() +
          person.surname.charAt(0).toUpperCase();
      }
    });
    return personNames;
  },
  generateOwnerText(owners, people) {
    var ownersArray = owners?.split(",");
    var personNames = "";
    ownersArray?.forEach((personId) => {
      var person = find(propEq("id", Number(personId)))(people);
      if (person) {
        if (personNames != "") personNames += ", ";
        personNames += person.givenname + " " + person.surname;
      }
    });
    return personNames;
  },
};
