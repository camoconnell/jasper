test("matchesSelector",function(){equal(typeof matchesSelector,"function","typeof is function");var e=document.getElementById("alpha");equal(matchesSelector(e,"#alpha"),!0,"[#alpha] matches #alpha"),equal(matchesSelector(e,".item"),!0,"[#alpha] matches .item"),equal(matchesSelector(e,"div"),!0,"[#alpha] matches div"),equal(matchesSelector(e,"p"),!1,"[#alpha] does not match p"),equal(matchesSelector(e,".baz"),!1,"[#alpha] does not match .baz"),equal(matchesSelector(e,"#alpha.item"),!0,"[#alpha] matches #alpha.item"),equal(matchesSelector(e,"#alpha, foo"),!0,"[#alpha] matches #alpha, foo"),equal(matchesSelector(e,"foo, .item"),!0,"[#alpha] matches foo, .item");var t=document.createElement("div");t.id="beta",t.className="foo bar",equal(matchesSelector(t,"div"),!0,"[#beta] matches div"),equal(matchesSelector(t,"#beta"),!0,"[#beta] matches #beta"),equal(matchesSelector(t,".bar"),!0,"[#beta] matches .bar"),equal(matchesSelector(t,"p"),!1,"[#beta] does not match p"),equal(matchesSelector(t,".baz"),!1,"[#beta] does not match .baz"),equal(matchesSelector(t,"#beta.bar"),!0,"[#alpha] matches #alpha.item"),equal(matchesSelector(t,"#beta, qux"),!0,"[#beta] matches #beta, qux"),equal(matchesSelector(t,".qux, .bar"),!0,"[#alpha] matches .qux, .bar")});