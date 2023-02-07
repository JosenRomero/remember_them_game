export const getIAData = async (input) => {

  const IA_API_KEY = import.meta.env.VITE_IA_API_KEY
  const IA_API_URL = import.meta.env.VITE_IA_API_URL

  const data = {
    model: 'command-xlarge-nightly',
    prompt: `This program generates a simple list of things.
    --
    List name: Food
    List length: 8
    Items:'Apple','Banana','Beer','Blueberry','Bread','Breadsticks','Broccoli','Butter'
    --
    List name: Animal
    List length: 5
    Items:'Alligator','Alpaca','Antelope','Armadillo','Bear'
    -- 
    List name: Anime
    List length: 10
    Items:'Akatsuki no Yona','Another','Astro Boy','Attack on Titan','Azumanga Daioh','Bakuman','Banana Fish','Beastars','Berserk','Beyblade'
    --
    List name: Programming Language
    List length: 4
    Items:'JavaScript','Python','Rust','C'
    --
    List name: ${input}
    List length: 25
    Items:`,
    max_tokens: 40,
    temperature: 0.9,
    k: 0,
    p: 1,
    frequency_penalty: 0.6,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  }

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Cohere-Version': '2022-12-06',
      'content-type': 'application/json',
      authorization: `Bearer ${IA_API_KEY}`
    },
    body: JSON.stringify(data)
  }
  
  const { generations } = await fetch(IA_API_URL, options).then(res => res.json())

  if(!generations) return Promise.resolve([])

  return generations[0].text
    .replaceAll("'", "")
    .split(",")
    
}