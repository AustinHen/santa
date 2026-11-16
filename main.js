/*
DONE:
TODO:
 todo:
*/


const people = [
    {
        name: "Avani",
        syllables: 3,
    },

    {
        name: "Tim",
        syllables: 1,
    },

    {
        name: "Austin",
        syllables: 2,
    },

    {
        name: "Colin",
        syllables: 2,
    },

    {
        name: "Itsara",
        syllables: 3,
    },

    {
        name: "Lily",
        syllables: 2,
    },

    {
        name: "Lars",
        syllables: 1,
    },

    {
        name: "Logan",
        syllables: 2,
    },

    {
        name: "Kate",
        syllables: 1,
    },

    {
        name: "Kaden",
        syllables: 2,
    },

    {
        name: "Moira",
        syllables: 2,
    }
];
const seed = "kerfuffle5"

function set_text(get_lines, name) {
    const idx = get_index(name)
    const person = get_match(seed, people, idx)
    const lines = get_lines(person, name)
    document.getElementById("main_text").insertAdjacentHTML("beforeend", lines.join("<br>"));
}

function get_index(name) {
  return people.findIndex(person => person.name === name);
}

function get_generic_lines(person, name) {
    return [
        name,
        `you have <span class="person_name">${person.name}</span>`
    ]
}

function get_logan_text(person, _) {
    return [
        `Logan drown in a lake (also you have <span class="person_name">${person.name}</span>)`,
    ]
}
function get_itsara_text(person, _) {
    return [
        `${person.name}`,
    ]
}

function get_lily_text(person, _) {
    return [
        `- ${person.name}`,
    ]
}

function get_avani_text(person, _) {
    return [
        "Avani",
        `you have <span class="avani_secondary">${person.name}</span>`,
        "Zzzzzzzzzz"
    ]
}

function get_haiku(person, _) {
    const lines = [
        "Tim K is big gay",
        "",
        "Tim Kwok likes big cock"
    ];

    switch (person.syllables) {
        case 1:
            lines[1] = `Big Tim is molesting <span class="person_name">${person.name}</span>`;
            break;
        case 2:
            lines[1] = `Big Tim will molest <span class="person_name">${person.name}</span>`;
            break;
        case 3:
            lines[1] = `Big Tim molests <span class="person_name">${person.name}</span>`;
            break;
    }

    return lines
}

function get_match(seed, list, i){
    matches = shuffle(seed, list)
    return matches[i]
}


function assert_no_overlap(seed, list){
    rand_list = shuffle(seed, list)
    for(let i = 0; i < list.length; i++){
        if (rand_list[i] == list[i]){
            console.log("bad_list", i)
        }
    }
}


function shuffle(seed, list) {
  const ret = list.map(x => x); // clone list
  const rng = new Math.seedrandom(seed);

  for (let i = ret.length - 1; i > 0; i--) {
    const swap_idx = rand_int(i, rng)

    const temp = ret[i];
    ret[i] = ret[swap_idx];
    ret[swap_idx] = temp;
  }

  return ret;
}

function rand_int(max, myrng) {
    return Math.floor(myrng() * (max + 1));
}

