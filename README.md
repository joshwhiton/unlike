# Unlike                                                                                                                                                                                                                                                                                                                  
   
  A script that unlikes everything you've ever liked on Instagram.                                                                                                                                                                                                                                                          
                                                            
  https://github.com/user-attachments/assets/77afb43d-9073-459a-9f72-19d8f19b1132

  What's the point of all those likes after your friends have already seen them? They're just getting mined by Meta and bots now.

  Tried Claude in Chrome for this but it was pretty bad (partly because web-IG is terrible) and blew through way too many tokens.

  Some custom bots exist for this but many are sketchy. This script is simple enough to see it's not malicious and just runs in your browser's JavaScript console.

  ## Usage

  1. Open Instagram in a browser
  2. Go to **More → Your Activity → Likes**
  3. Open Developer Tools (`Cmd+Option+J` / `Ctrl+Shift+J`)
  4. Paste the script into the Console and hit Enter
  5. Click **Unlike** once per batch when prompted

  ## Notes

  - **Batch size**: Instagram may error out beyond 27 at a time. Your mileage may vary.
  - Set `window.STOP = true` in the console to pause at any time.
