
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"head1"},"h1 tag"),
React.createElement("h2",{id:"head2"},"h2 tag"),
React.createElement("div",{id:"child"},
React.createElement("h1",{id:"head1"},"h1 tag"),
React.createElement("h2",{id:"head2"},"h2 tag"))
])
])





const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)