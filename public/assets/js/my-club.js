const dummyMembers = [
  "member 1",
  "member 2",
  "member 3",
  "member 4",
  "member 5",
  "member 6",
  "member 7",
  "member 8",
  //   "member 9",
  //   "member 10",
];

const dummyMessages = [
  {
    user: "User 1",
    message:
      "dales ut etiam sit amet. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Dictum non consectetur a erat nam at lectus urna. Consequat semper viverra nam libero justo laoreet. Leo vel orci porta non. Pulvinar etiam non quam lacus suspendisse. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Et netus et malesuada fames ac turpis. Auctor nequ",
  },
  {
    user: "User 2",
    message:
      "met facilisis magna etiam tempor orci. Sed tempus urna et pharetra pharetra. Accumsan in nisl nisi scelerisque eu ultrices. Ut eu sem integer vitae justo eget. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Donec massa sapien faucibus et molestie ac feugiat. Condimentum id venenatis a co",
  },
  {
    user: "User 3",
    message:
      "Habitant morbi tristique senectus et netus et malesuada fames. Risus ultricies tristique nulla aliquet enim tortor at auctor. Quam lacus suspendisse faucibus interdum posuere. Nulla facilisi nullam vehicula ipsum a arcu. Sit amet justo donec enim",
  },
];

$(function () {
  dummyMembers.forEach((member) => {
    const tableRow = $("<tr>");
    const memberNameCell = $("<td>").text(member);
    const contactCell = $("<td>").text("contact");
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
