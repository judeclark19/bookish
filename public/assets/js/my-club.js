const dummyMembers = [
  "judeclark2019@gmail.com",
  "codybonsma@gmail.com",
  "icecicle04@gmail.com",
  "amanda.fici@gmail.com",
  "pgunwestin@gmail.com",
  "cbanister812@gmail.com",
  "cpicard17@gmail.com",
];

const dummyMessages = [
  {
    user: "amanda.fici@gmail.com",
    message: "Can you believe what happened in chapter 14?!",
  },
  {
    user: "judeclark2019@gmail.com",
    message:
      "Possible spoiler but I am literally on the edge of my seat after page 203. WHAT!",
  },
  {
    user: "cpicard17@gmail.com",
    message:
      "Thoroughly enjoying this read so far. Can't wait for my new weekly ritual! See y'all on Wednesday :)",
  },
];

$(function () {
  dummyMembers.forEach((member) => {
    const tableRow = $("<tr>");
    const memberNameCell = $("<td>").text(member);
    const contactCell = $("<td>").text("Email");
    tableRow.append(memberNameCell, contactCell);
    $("#member-table-body").append(tableRow);
  });

  if (dummyMembers.length < 10) {
    $("#invite-btn").removeClass("hidden");
  }

  dummyMessages.forEach((message) => {
    const article = $("<article class='message is dark'>");
    const messageHeader = $("<div class='message-header'>").text(message.user);

    const messageBody = $("<div class='message-body'>").text(message.message);
    article.append(messageHeader, messageBody);

    $("#messages-container").prepend(article);
  });
});
$("#submit-message-btn").click(function () {
  const newMsgBody = $("#new-msg-body").val();

  const newMsgObj = { user: "TODO", message: newMsgBody };

  dummyMessages.push(newMsgObj);
  console.log(dummyMessages);
  //   location.reload();
});
