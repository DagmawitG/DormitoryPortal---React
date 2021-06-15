export default function() {
  return [
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "request page",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Sent Requests",
      to: "/Sent_request",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },    
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },    
    {
      title: "Student Info",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },    
    {
      title: "User Profile admin",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite-admin",
    },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
