const getItemFromNBT = (nbtStr) => {
  let nbt = net.minecraft.nbt.JsonToNBT.func_180713_a(nbtStr); // Get MC NBT object from string
  let count = nbt.func_74771_c('Count'); // get byte
  let id = nbt.func_74765_d('id') || nbt.func_74779_i('id'); // get short || string
  let damage = nbt.func_74765_d('Damage'); // get short
  let tag = nbt.func_74781_a('tag'); // get tag
  let item = new Item(id); // create ct item object
  item.setStackSize(count);
  item = item.getItemStack(); // convert to mc object
  item.func_77964_b(damage); // set damage of mc item object
  if (tag) item.func_77982_d(tag); // set tag of mc item object
  item = new Item(item); // convert back to ct object
  return item;
}

export const buttons = [
  {
    iconItem: new Item("minecraft:chest"),
    title: "Storage",
    func: () => {
      ChatLib.command('storage')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"6ba54607-3d0c-4bac-8da8-5398ed77ce69",hypixelPopulated:1b,Properties:{textures:[0:{Value:"ewogICJ0aW1lc3RhbXAiIDogMTU5MTMxMDU4NTYwOSwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODBhMDc3ZTI0OGQxNDI3NzJlYTgwMDg2NGY4YzU3OGI5ZDM2ODg1YjI5ZGFmODM2YjY0YTcwNjg4MmI2ZWMxMCIKICAgIH0KICB9Cn0="}]},Name:"§6ba54607-3d0c-4bac-8da8-5398ed77ce69"},display:{Lore:[0:"§7A sack which contains other sacks.",1:"§7Sackception!",2:"",3:"§eClick to open!"],Name:"§aSack of Sacks"}},Damage:3s}'),
        title: "Sacks",
        func: () => {
          ChatLib.command('sacks')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"00a2aac9-3b5b-3c01-8d41-b33acbfa24ff",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"hYQ9Xj504bWi1w4uszxPDdmX/6N6kig0sS9uWvtY5990nvNyZbp6H3RFKH0U0IHCZTtpRSNozShvKK/NTWZQgcLJ6N7XNAph3Ahh2EKz+RgCukY41m9TkSjpQP+ILESeT2qj2e3MbJ7iLN037xEHtTx4DLTn2zy3huleThhXr4y50I+dRcTKcqGPsZr3U2gnC0oFkoh4gj3SMjF6Q4TS5GRiiQ0zoxTpVFvB+jf+UDj5339uxN8zyPDBzgWx5H/IDH7LgtssVpkwBX4pQyf1mnHXxDDG58F3wer4vTez9qjjUCyN9+T2hPrOmyf12iNxyNC+mSQz2PPCVNFbSQjD2/YxC7tNqJaXLkU/bVEBk9uFB5opgoTNDHwhSlry8aqnT+NFEqjC2fZLR9hEjGtGB2RRDyfTbYfeLzPpz3TCuVPAHlHRY9UuNMhkB8S8Lcs3dwbDJOIMngpyQBD7YWJFBE3wsgYbsrBZmJ2JhgLK39h++il5wc8xgYrzPJ9KaN59ENjbatEVn3ahMVzLsKyKO0OpX/EGuzZCe0hvWON5DUbQYHJgPwtxayJllAbJNam0lZN7RJ9ZlUgMmwv/NgDKuqiQBuAmvZ2aZaE1n3oxQEfDVTSYWswJGrVr5T6hP3guDFG8+qW2/beX1B7F7GWa0i1ykhE7ksT3KvrvgcOHyBI=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY5NTE4MzY0MTA2MywKICAicHJvZmlsZUlkIiA6ICI0M2NmNWJkNjUyMDM0YzU5ODVjMDIwYWI3NDE0OGQxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJrYW1pbDQ0NSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9lYWI4MTBiMWI0ZmY1OThkMWQ5OTMzNmU3MWRhNGUzNTZkM2FkMzIxZTE2OWRiZDFmYTlkNTA2YWFlNjE3MTdkIgogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§7A useful bag which can hold all",1:"§7types of fish, bait, and fishing loot!",2:"",3:"§eClick to open!"],Name:"§aFishing Bag"}},Damage:3s}'),
        title: "Fishing Bag",
        func: () => {
          ChatLib.command('fb')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"f4478f97-1a30-3106-b4e0-14a8cc6524e8",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"MT1z6+5I+XJzSmUHnjdaybvecex0QKfpDrFLNEJSPwUAa5yXW9e+xUMa+zNPtXxuhd0aoEsnwWfwxrM/HBD4SxaT+9G9aDsUAmCTG7y21XfLZZHOtPLK/Zs3ntn5Z0upgZ6I8xRzAUBVOVMYSHBZiyt7xxLMs9lWP4N6bkvJv1osMnka1h30C9FRiYcSS4tKFintXgLnTD1izKW12on3mFgnqib1qGRBLG9jgEfCWdi2qEav6ANjXUkffDzTbH/XwUOH7AKODteJeHtCiPOfwqJIdqOI/JRZVoaYIL1DskatVSyYaTC6N/eAZ4FkkIc4//49sT4z57+MonhOB3TtC2Pmul4IWMLeU5jfrRVxotVSNqvRdj6PdQNtF+r/jvRiDYNlBynyWMujUr4G/l0nxHN6KQRH5bJ9Qa7KOel20ohqAqg0QclUefu23goRNj2JFEk2HWtTZGvGzgIED1EpxJwVsnKwF3ePQu1MevjPFn+twjXkQmxxpNk5XeteHXNpRmvsnrtrDQ4kusij/RmCjVkmrYFCCSPsqc3fDCuma7UC+duCiwSj7wDddLQp/5a5/hSxZn/D55SHUQpfH8Sl5Lm4wU2+l7ZgcY8NyH5qD2M0K7/EEfvgI0b/l3mumfjGfmRHnjtM9l0gmpyKPsTR4+7pI8qx1+Y0hYR8rmWEbIk=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY3NTQ4OTMyOTc0OCwKICAicHJvZmlsZUlkIiA6ICIwNTVhOTk2NTk2M2E0YjRmOGMwMjRmMTJmNDFkMmNmMiIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGVWb3hlbGxlIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzJmYzYyNmIzYTEyZDA5OWM0NGRhMDRiNWYxNWM5NWYyZTM2MGUwNzg5YmNjZWNmODQyZWYwOWM3MmI5M2Q4NDIiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§7A handy bag for holding your",1:"§7Potions in.",2:"",3:"§eClick to open!"],Name:"§aPotion Bag"}},Damage:3s}'),
        title: "Potion Bag",
        func: () => {
          ChatLib.command('pb')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"605fcedf-4381-3114-8f3d-18ae63d46b9c",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"aFOrHGVY0FFBWuDk8KQgTfey2NIGtQprC6EoGS5FjT/PxHVyzlI023FQ1V8xPi7L1/FDYNEfFHlh485oNXk11mN+TwC3xVfqd9QmxiOlSZoPmXUQO2AaCQ9COz7ejYOTVkRq9fpBTsmPTNErHsJG9blM1qXdbMA+SzFa4CWckRUWngUzm8SW8nsqnPguVl2akMKSRn6rD0Vv6FC8znlPRhyXWCXdseR8f+mkteU5lmjeiLD92da/7kv15YnqNephk6q05obGxKJ0OLIVcWBhpzPFnQrn/I+rSW76pWBsIMpraU54G/YvVjr6qhOWNGZDri0+mlaADBooVm/o4eB1/WHf8M/lmWm8pPU+S+5ZABKsiR1d2VvE+N8eZF6NbYghstVZRgUmfKzaiBgi+IbITFF/tzf9AzeRUh2bGQc8jDmBQyCqSLZCHNY76q8jqIvYDOeSUu9YIdZnxXjHBNFw7D1KOCmk/VrRwtplzSKoyjYGv53ty+3mcJFEeFaaWNqpe1MnZhYRUrErR4IoJlSBNMOe+pzWxYKypEae0Akk0Ms+WsH+AGfsHjPsXxUMkiX6pwn8zA0DfVWBov5tMmGtu1WOWyANSWkVyrJGE8AOZ6kW9ls8fAaIkhFXyWOj98Ad869oIjL8dv22MQ9j0RGRhCluUXbg6SJfUTlcAhV8qd0=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTU4OTI3ODU4MDM2NCwKICAicHJvZmlsZUlkIiA6ICJhNzdkNmQ2YmFjOWE0NzY3YTFhNzU1NjYxOTllYmY5MiIsCiAgInByb2ZpbGVOYW1lIiA6ICIwOEJFRDUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDRlMTg0M2RmOGY5MWE3MDMzZTRjODEwZjEwYjAwM2UwN2FkZTUxMDAwNzlhYzQ0ZGY3NGE0ZTQ2YTQ4OTQ0NyIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7A masterfully crafted Quiver which",1:"§7holds any kind of projectile you can",2:"§7think of!",3:"",4:"§eClick to open!"],Name:"§aQuiver"}},Damage:3s}'),
        title: "Quiver",
        func: () => {
          ChatLib.command('quiver')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"d040cbb2-a40f-31d2-8be4-45db42883de2",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"CW97vR5ZNE/4iIuh8TShg01a0h9gqN0Os4LFVW+tEwM1RttphU9mUtjyuUquZLWQ9rqZ8Q1DI7uRbZoKDSgQ5agyuaFV4wEFSYAyzYWUmVhGagQF18PdmuzBNaArHHQ5LXuxPBfoCH+VKjeKvcPftyfiurqpNQ9ydFuTGVx+Q7dGpzEUv1xVKNdiw1HEADUSB7rkZYkx31z9hwHZK4Q8X3LPZDAVBKFJexhvZO2fu8Do60IN9/+Ug04ibqI+/OX18timkSG8pb186F7VjQh7n/3g9Yv1XPhT+FZ5P7Z7ymIQeOhkJJE5RpHdzidbviZ9j9u1bOs8b3jbz1CuFhbsOe5DO/0UOQaGpqDW6/oSfHC7iDkT+UE77YROzte+2HcDJnvA68nxKo3Xyzhf4vdvCFGZId5M7VFTb2E/0miS456Qhiqbpn+8F3iSNmZoXQE88IMC8PfdHnMI6zZ8l07gytRRVVuWfCftsQvzYPQeNYeqimbgVuQdJxRl2oh2YE7dFi/wifnYhXTkeXyAv+A6qf0d7Yp5kQhmxoKqsKW+9WFWFUYxtGBtiptU6cUHaNWreZiFjGtODItr3IKia54XaEtrwJNM+KlL8zu2M8pFEYYLgWE3MohWNjEiiI78OdozcQdT6Y8c9ato1gpDmN3RX+jDRCaAkcpx21ZrRjXmI0w=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYwMDYxNTg5ODc1MCwKICAicHJvZmlsZUlkIiA6ICJhNzdkNmQ2YmFjOWE0NzY3YTFhNzU1NjYxOTllYmY5MiIsCiAgInByb2ZpbGVOYW1lIiA6ICIwOEJFRDUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWExMWE3ZjExYmNkNTc4NDkwM2M1MjAxZDA4MjYxYzRkZjgzNzkxMDlkNmU2MTFjMWNkM2VkZWRmMDMxYWZlZCIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7A special bag which can hold",1:"§7Talismans, Rings, Artifacts, and Orbs",2:"§7within it. All will still work while in this",3:"§7bag!"],Name:"§aAccessory Bag"}},Damage:3s}'),
        title: "Accessories",
        func: () => {
          ChatLib.command('ab')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"96a01f8b-c0b5-3613-8f86-91e0ae2b8548",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"OZBE0jqM3Fg6IscBo0s2ov/Wg5FObxgYj53BSs5NNL6G9o3ZqvnllWdgarDLS4IOAzCWWNN4bFy27aN5kgbb7KV7uaxnpFoLZs4PpfbkkJAaWgNlf7TSNh/gYKoMngFR0E6rJm6t8F6E2fbEUzS77VtHgH5Xe7+3nobcY0uST6PH+kEIOAFjGCxORiPdPnC9I/Jn5tNXO1vCtJuyrZ1Q7NXYh62RM1V8Zqi1xupKHoPraSR68Y3b4D9Srt1xw/chdQHhBLjX9fHJU9Y7HG5/xioNUrAMGl0BGV20I193lXms8hvM3XiOepvY/KmMwdT/OJCSQ/J5X88TobENGsjq5wfXOEfxhs7kdci6by1xo9JDOMDvXRHKmlgG589y02Bj14r4byqTKVm7WvhoL95kQ5/EfcZW39FxtfYik2IEQyW0n4mdatAPEg4D6Nn+/+JggR36elefI9nt+KHw1VXF8ch7xZAYGaS4B6BDfttvIegY+1OmhnZiRydWXBcPGkqiA6VTaTcKHoPV2YNaiCb7ZJ5kG5pfl3U0z9TBR8BG95NlnPeAmpqEd8JtdDo0WtOnV3hnD2LHb6biqRmABfgWKHqjIohuoDNn8suIA4rKmLhewjBSAr69Pj7874oTFMp1xr9FyUEyS/TOxjoNYa8gtdPK80v6EaBH0jrnFZEOOrc=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcyMzY2OTA0MDAxNywKICAicHJvZmlsZUlkIiA6ICI3Mjc2ZThmYzVkNjE0ODNjYmMwN2IxYjIzNjI3MDA4ZSIsCiAgInByb2ZpbGVOYW1lIiA6ICJXYWJvV2ViaSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kN2ZiZWFiZDBlOTFiYzRmZWNlNTAyNjQ0MWRmMDgzMTJmMGRlNGYzMzM3Mzk3MjRhZTI1NmVhNjcyMTFiYWRlIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7A bag which holds items that evolve",1:"§7over time. Time flows twice as fast in",2:"§7here!",3:"",4:"§eClick to open!"],Name:"§aTime Pocket"}},Damage:3s}'),
        title: "Time Pocket",
        func: () => {
          ChatLib.command('timepocket')
        }
      },
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:leather_chestplate",Count:1b,tag:{overrideMeta:1b,display:{color:8339378}},Damage:0s}'),
    title: "Wardrobe",
    func: () => {
      ChatLib.command('wardrobe')
    },
    subOptions: [
      {
        iconItem: new Item("minecraft:bone"),
        title: "Pets",
        func: () => {
          ChatLib.command('pets')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"840907b5-d1aa-341e-b83a-f16aba3207ba",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"EiL7gheqqWgfYuid+Zlh1NisVV6LuoMTjhfrtRakNYSkQCl0jHcdCy/Ss/pZlyQAe45kFw4eZOJmcehzlAi9YrMlVFPSmq0ayicRCd2fhei7bQK2d9NwRrL3NeCNsnMgeKiAEOyNEAASlo5+d6BYBB3UsKLu6k4F2KHx+3U0F0alq1JxIaof6auWopUyO9EQUoKkDQdeOMWP8gpdv5inXKQqyH7wJ4vyq5gOfxCHC4wY5R7NmvtyFiahlgI/T6Y49sJBapO+mJdTd3Sw8p/qgpiyzNRtEUrNNSfX88JFoMsesBMs0GAydEHJQdtwHcz4iFhkPqvqaNerz/d71pa1s5dk4upH2sd6c0ejDSn+ghOofvjU5o/QQoqeMxUghRwGm0h9XARcaxjaPm38w3/Vg5gApOlM5OjwQ62X0X+/tTbACGzGHcRAqFDJAUi1RmP/EQ+nE5wmn35eZs9e3XmwwbRLI1hXQycXHunnniJwnGhGeGYPoO7po6LA65GZ7Nxl0j/dkBMouJZkVEdkjh72mCZ58gF3sK8CyAwk9242DGbYbAgq4EvNGCqcdMJzzIFgPm6tDT/+T7S0X2ItAsZkJYCKQ5l+DIKWIoOYx8+sNLjVAdEgM+LQNa1+6CrC0ErNppSn7qqxBIVw7uJCAdVQjBECBZloiKUlKmLfE8/ZtnI=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY0ODQ5NTM1Mjg0MCwKICAicHJvZmlsZUlkIiA6ICI1MTY4ZjZlMjIyM2E0Y2FjYjdiN2QyZjYyZWMxZGFhOSIsCiAgInByb2ZpbGVOYW1lIiA6ICJkZWZfbm90X2FzaCIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8yNTE2OTE1MmEzNjI2YTE2NjliZmMzODhiZGU3NTIwYTNlYzVkZGYxMDY1ZmNlYTMzZTAzYjA2NjIzMjIwYjFhIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="}]}},display:{Lore:[],Name:"§9Glowstone Gauntlet"},ExtraAttributes:{id:"GLOWSTONE_GAUNTLET",uuid:"18128745-be95-4b36-bda1-4abb22c1c45e",timestamp:1720882035804L}},Damage:3s}'),
        title: "Equipment",
        func: () => {
          ChatLib.command('equipment')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{HideFlags:254,SkullOwner:{Id:"221b4800-d33c-363f-aa39-de9cb0f8d8fe",Properties:{textures:[0:{Value:"eyJ0aW1lc3RhbXAiOjE1NzMyMjM2NDc4NDcsInByb2ZpbGVJZCI6IjQxZDNhYmMyZDc0OTQwMGM5MDkwZDU0MzRkMDM4MzFiIiwicHJvZmlsZU5hbWUiOiJNZWdha2xvb24iLCJzaWduYXR1cmVSZXF1aXJlZCI6dHJ1ZSwidGV4dHVyZXMiOnsiU0tJTiI6eyJ1cmwiOiJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2MyMzJlMzgyMDg5NzQyOTE1NzYxOWIwZWUwOTlmZWMwNjI4ZjYwMmZmZjEyYjY5NWRlNTRhZWYxMWQ5MjNhZDcifX19"}]}},display:{Lore:[0:"§8/bz",1:"",2:"§7Access the Bazaar from anywhere in",3:"§7SkyBlock!",4:"",5:"§cRequires Cookie Buff!"],Name:"§6Bazaar"}},Damage:3s}'),
    title: "Bazaar",
    func: () => {
      ChatLib.command('bz')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:golden_horse_armor",Count:1b,Damage:0s}'),
        title: "Auction House",
        func: () => {
          ChatLib.command('ah')
        }
      },
      {
        iconItem: new Item("minecraft:crafting_table"),
        title: "Craft",
        func: () => {
          ChatLib.command('craft')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"9dd5008a-08a1-3f4a-b8af-2499bdb8ff3b",Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTM2ZTk0ZjZjMzRhMzU0NjVmY2U0YTkwZjJlMjU5NzYzODllYjk3MDlhMTIyNzM1NzRmZjcwZmQ0ZGFhNjg1MiJ9fX0="}]}},display:{Lore:[0:"§7Contact your Banker from anywhere.",1:"§7Cooldown: §e20 minutes",2:"",3:"§7Banker Status:",4:"§aAvailable",5:"",6:"§7Interest in: §b19 Hours",7:"§7Co-op Projection: §626,398.1 coins §b(2%)",8:"§7Last Co-op Interest: §618,086 coins",9:"",10:"§eClick to open!"],Name:"§aPersonal Bank"}},Damage:3s}'),
        title: "Personal Bank",
        func: () => {
          ChatLib.command('bank')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"0181077c-8141-4b56-9cfd-22dc35994c41",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzljODg4MWU0MjkxNWE5ZDI5YmI2MWExNmZiMjZkMDU5OTEzMjA0ZDI2NWRmNWI0MzliM2Q3OTJhY2Q1NiJ9fX0="}]},Name:"§0181077c-8141-4b56-9cfd-22dc35994c41"},display:{Lore:[0:"§8/warp home",1:"",2:"§7Your very own chunk of SkyBlock. Nice",3:"§7housing for your minions.",4:"",5:"§aYou are here!"],Name:"§bPrivate Island"}},Damage:3s}'),
    title: "Island",
    func: () => {
      ChatLib.command('is')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"75b36c83-7925-453c-9c40-aa00c0eecb61",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjQ4ODBkMmMxZTdiODZlODc1MjJlMjA4ODI2NTZmNDViYWZkNDJmOTQ5MzJiMmM1ZTBkNmVjYWE0OTBjYjRjIn19fQ=="}]},Name:"§75b36c83-7925-453c-9c40-aa00c0eecb61"},display:{Lore:[0:"§8/warp garden",1:"",2:"§7Spawn on your very own §aGarden§7.",3:"",4:"§eClick to warp!"],Name:"§aThe Garden"}},Damage:3s}'),
        title: "The Garden",
        func: () => {
          ChatLib.command('warp garden')
        }
      },
      {
        iconItem: new Item('minecraft:fence'),
        title: "Garden Barn",
        func: () => {
          ChatLib.command('plottp barn')
        }
      },
      {
        iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"e95e6c8e-4756-478f-85f5-9670ce7c8020",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmRkNjYzMTM2Y2FmYTExODA2ZmRiY2E2YjU5NmFmZDg1MTY2YjRlYzAyMTQyYzhkNWFjODk0MWQ4OWFiNyJ9fX0="}]},Name:"§e95e6c8e-4756-478f-85f5-9670ce7c8020"},display:{Lore:[0:"§7Teleports you to §cJerry's Workshop§7.",1:"§7Available for a limited time!",2:"",3:"§cIsland is closed until Winter!"],Name:"§bWarp to: §cJerry's Workshop"}},Damage:3s}`),
        title: "Jerry's Workshop",
        func: () => {
          ChatLib.command('warp jerry')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"f5a3c783-ad64-4049-9ac3-307edbddcbf8",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0aW1lc3RhbXAiOjE1NTkyMTU0MTY5MDksInByb2ZpbGVJZCI6IjQxZDNhYmMyZDc0OTQwMGM5MDkwZDU0MzRkMDM4MzFiIiwicHJvZmlsZU5hbWUiOiJNZWdha2xvb24iLCJzaWduYXR1cmVSZXF1aXJlZCI6dHJ1ZSwidGV4dHVyZXMiOnsiU0tJTiI6eyJ1cmwiOiJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2Q3Y2M2Njg3NDIzZDA1NzBkNTU2YWM1M2UwNjc2Y2I1NjNiYmRkOTcxN2NkODI2OWJkZWJlZDZmNmQ0ZTdiZjgifX19"}]},Name:"§f5a3c783-ad64-4049-9ac3-307edbddcbf8"},display:{Lore:[0:"§8/warp hub",1:"",2:"§7Where everything happens and",3:"§7anything is possible.",4:"",5:"§8Right-Click to warp!",6:"§eLeft-Click to open!"],Name:"§bSkyBlock Hub"}},Damage:3s}'),
    title: "Hub",
    func: () => {
      ChatLib.command('hub')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"8e88f07f-d588-399d-b124-cb66a9d1d412",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"Lppk5MuRLIvTWK8rbk5gOalDNPMvgshBR8z/5zBkuw/QNhtr6MIDV3EHArsPPSylwM4rKmIJkmZxLUvjbDX2d9k5aNaDEpUPHVyW0GLbawdYj2Z+O7qo7EAY9p0cICBAg4dd36tpZuyuCIL7RLRycTNNbJ79/kQK+c4Ei9xY4DxxA+9EE+OK2OOL/LpHBQRLdfhvKIJaPU+Yhlc9CVtorMWKC9hpcNvIjDRKFvUkriw47Dg8yDI/gqTawdgNlssF4uYXlEwd/xxr1CxU5HYSBsYhvduyAB/uO2j9Ni035UE81mkbpOQQ61+t0S048xWRNLysEh1FeXAffFYxb23qQdUvlEpUXQjvllZVVNlNnwNpIy4QPGWmpQtGSBYD3quGSmwaRiUcIMhlsOko9UuififH3s3/bVRKpaVxFWquTExxTKLIbUxrvE/vs3CDCZH2yB+A7IuAUlVVBYqzlrv5JKhQpRhC69GCzaMb7ftbVb5JIMSW2NGmZ0tkCGtst6B9QVfEU8NRl9kRON+vApwGZ5qv5P7EBrarVL/s0DxsNlXS8na4Dl/RaEbv69m0PqRfqdifhZzTyZgMxACJRKwYJMxvWhagYL7y8G5xAz80JzoTJbNP9HWhDU95Q0rrgiFtQprG09niBAhA5ik1mD3+EnACkK2nVwEndaz2T4iRAhc=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxMTU5MzM4MzQxNSwKICAicHJvZmlsZUlkIiA6ICJiYjdjY2E3MTA0MzQ0NDEyOGQzMDg5ZTEzYmRmYWI1OSIsCiAgInByb2ZpbGVOYW1lIiA6ICJsYXVyZW5jaW8zMDMiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmI3ZTEwNTZmMmI3ZTk4ODg0NWY4M2RjYWE5ZTY4Y2I4NTFmNjE0YzA1ZjcyMjdlOGM4N2MwZDhmODdkZjUzZiIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§8/warp castle",1:"",2:"§7Spawn near the ruined castle of the",3:"§7past in the hub.",4:"",5:"§eClick to warp!"],Name:"§bHub§7 - §bCastle"}},Damage:3s}'),
        title: "Castle",
        func: () => {
          ChatLib.command('warp castle')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"9dd5008a-08a1-3f4a-b8af-2499bdb8ff3b",Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTM2ZTk0ZjZjMzRhMzU0NjVmY2U0YTkwZjJlMjU5NzYzODllYjk3MDlhMTIyNzM1NzRmZjcwZmQ0ZGFhNjg1MiJ9fX0="}]}},display:{Lore:[0:"§7Contact your Banker from anywhere.",1:"§7Cooldown: §e20 minutes",2:"",3:"§7Banker Status:",4:"§aAvailable",5:"",6:"§7Interest in: §b19 Hours",7:"§7Co-op Projection: §626,398.1 coins §b(2%)",8:"§7Last Co-op Interest: §618,086 coins",9:"",10:"§eClick to open!"],Name:"§aPersonal Bank"}},Damage:3s}'),
        title: "Sirius' Shack",
        func: () => {
          ChatLib.command('warp da')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"a8a00318-af93-3767-bb94-48eb99ed1f67",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"l77FNYzt8xyDIuxmT6Q/3bFUbr566leOXI/I6yqM0B9YGPrEpPo/NQ9wTYx4pzoj4exvZRlfJ2rXqZ3hGdK2IVohQ1FPUBB2ZZRo+rUJ4d1jEosLzAfL3K24+bqOQLF6RIfJN7Q007T+Kne80ZfukV9jU2fDB2ySGQ53LHAPLIieZ27tLmSMcgcyFXM6eH1irHY5rQ+kOiVtQRH4FkrA2Y+Z8kdkbNulOLrTxVBMpvLPaTm3hivHpfbou1ig7GQhtzgNBG7cfDChADntyXACt2bi7gn+vWvc3tAasg7iJazt/QjCEHLe/d1fKaxEufAVCLmySMKw+VKrTPGhsuRu96Y26COlcFXffJugE3jH9xWCYJkwx0Dg9sF/qiTOjLp5ACOdngnwQloSUkkwc+nITVMbVdRwTk5HYs85LkjrR4+wEKu4PiNoW4V7gLgDo3ITO9mLMPEJDshqJPa7urCPwaO6/RjDj8HNBddCKnOsNhR4URuHB+CsVP/eNJN8DrBg/UrbXU+kYK4lYW63XlVJ5Vg4FBc0Vt1SoGxj8RxhfViRks9hM2gzDcQJ5HpP+jvQAMIOqkd3mex/nfRv+/iFO5TMcG3Owtd6PiEay/GE2J6GAty4IoktWfKx+dy1IMMYeh8Q9IUc6yqS3dZsIIomEEnJsxl2mrtYnwOmKAENg3s=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTU5MDQ2MzA1NywKICAicHJvZmlsZUlkIiA6ICIxNzM1MGE5OWQ3MzQ0NDBjYTY0YzJjMDU3YTNjMWM4ZSIsCiAgInByb2ZpbGVOYW1lIiA6ICJHaWxkZWRoZXJvNTY5MSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8xZWZlMWQ0ODFjMjRjZGI2YmUwN2NiMWI3ZTEzODdhMzA2NTg5N2EwNTM0ZTUzYWY0ZGI2OTRlN2RhNjU4YWI2IgogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp crypt",1:"",2:"§7Spawn in the §6Crypts §7below the",3:"§7§cGraveyard §7in the hub.",4:"",5:"§eClick to warp!"],Name:"§bSkyBlock Hub§7 - §bCrypts"}},Damage:3s}'),
        title: "Crypts",
        func: () => {
          ChatLib.command('warp crypt')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"69c1b2e3-563d-3955-ac36-1e780f820726",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"JQ6nkbZxRshLTn03sDokbL0S14mP/AQyxGhG1kmXBWRHXKxCmiXLN4T8l/k9FYtx9ihJ+sl2TH9ATJLWx0RGFbywJpJN2Lel0nLhB3RWO5oYlUpbbWco3LWBpBXJikBLSXQLSYRe/UbIzVAgZLrVfkRtJJkNVQCiCiIrZWN15Z7iI2zqY6M6tJPHuli7ecE1MfV+FQvnjJwY/wM99W3hXl1yKaNi6xQ3cFEl+0rCozbsuK5A43ABE6XDgKHGNoH7d33GCPE1PdsDJDWgz5lbjdM1A881Tn3mCzlrKNsbeI8+EwBiU2tciKv/nz0kTZkisSlBi+Svf0u6sxcVZ9ge6QPhfpiI5/Zf3OLZdSnOq3LLM5YYz7UcR/dIobD8HXjBXNYU7JU/11OWZF4Swln6JlVpdyY19B7G1ax+hGl3sSm+dStcIO6qxR4Gy2tqsBl2C3d/VvkqmJ5Xl2IroC+zyxirsBc+WqRUMcFYiEGq+tHrMT/oT1TkQc0IQjMFfGkO1+jlwN7B657FaIe8v8TOiECkNhAqXSH65u3xWwtICCPuZOvN3mwvOiOs1iKS50mZtoOnJNcuNsFHDSPkbO9oDDI/Rl0zuKmJUEa2zBx7AGY140voebrpuPCiNkFP1EdhdMRTRbFjVuQBDCc0sna1xqovudoj1Z/YUL719ph4Ww4=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxMjA0NTg3MDc1NywKICAicHJvZmlsZUlkIiA6ICI2MTZiODhkNDMwNzM0ZTM3OWM3NDc1ODdlZTJkNzlmZCIsCiAgInByb2ZpbGVOYW1lIiA6ICJfX25vdGFodW1hbl9fIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzQzOGNmM2Y4ZTU0YWZjM2IzZjkxZDIwYTQ5ZjMyNGRjYTE0ODYwMDdmZTU0NTM5OTA1NTUyNGMxNzk0MWY0ZGMiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§8/warp museum",1:"",2:"§7Spawn in the §9Museum §7at the foot of the",3:"§7§bmountain §7in the hub.",4:"",5:"§eClick to warp!"],Name:"§bSkyBlock Hub§7 - §bMuseum"}},Damage:3s}'),
        title: "Museum",
        func: () => {
          ChatLib.command('warp museum')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"f4f98878-9afc-3f65-b934-27c32686ac7e",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"kpXW7JRb4LzbGqcEtI688Rx52IdgdqYRzev9lTqoV5sM33Sx0SXkl5skoT04wXbCyhDoybhSyEG8nluPvOBo8XvA6EHsyiRVUpMbKxPj0vqjvv+VkXR5ESwI5dPdM6yAge+S73Zac60Sln0WZi4bzTNnhOQSLLLLxxhVcK8G2CPEUnrl+WWB2nLFzyntDCd7kL91vPxCTlMu2tndlSDeBKRJAIpyOHnhBNZCXiejNsKPegYpqh971pGUdpJCHaZkuGXrOTjDCOkt+3XDEDhZi7I+ydM692FaY7L/u05c1CFqJ63k0w4RO71ZZyyH9rWU0Pb6t0Z+706tjkHJEtKlv7/lLKuHr7kXGhT182MZQjAUgVwWaiwfM2+EdbRpDilwAWdX/ZhGT+Ldd7IF0CIeIhGXI4aklRvomyLBugfcFd1Wb6JxxOr8/eHK76FFSSWFN6cFX3kTzYmgG7tEmmsFBB7aARir7Cco6FO9WeztyS7DkR/+eQV+9ficBit5QxH/o1MoGP7vDK9/QQopr4vW54wH6Ia9VZKf6iVoYyCHDfKsNgRfEFUHSapQY75qnsQiBbhmCM+Ma2z5M8TZolSElqMU6k1zolkSqz8cKxcLAWjWjPh2RNRzxigRhJCy6wS+4hMoWtybF8iSfU4yV6tihDUavlH7Lin0dU1U6qvpkpU=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY3ODg5NDkyNTMxNSwKICAicHJvZmlsZUlkIiA6ICIwNDNkZWIzOGIyNjE0MTg1YTIzYzU4ZmI2YTc5ZWZkYyIsCiAgInByb2ZpbGVOYW1lIiA6ICJWaXRhbFNpZ256MiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS84Mzg1NjRlMjhhYmE5ODMwMWRiZGE1ZmFmZDg2ZDFkYTRlMmVhZWVmMTJlYTk0ZGNmNDQwYjg4M2U1NTkzMTFjIgogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp wizard_tower",1:"",2:"§7Spawn in the §dWizard Tower §7in the hub.",3:"",4:"§eClick to warp!"],Name:"§bSkyBlock Hub§7 - §bWizard Tower"}},Damage:3s}'),
        title: "Wizard Tower",
        func: () => {
          ChatLib.command('warp wizard')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"f50e4c6c-39f2-47ef-90b8-efb29c50684a",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0aW1lc3RhbXAiOjE1Nzg0MDk0MTMxNjksInByb2ZpbGVJZCI6IjQxZDNhYmMyZDc0OTQwMGM5MDkwZDU0MzRkMDM4MzFiIiwicHJvZmlsZU5hbWUiOiJNZWdha2xvb24iLCJzaWduYXR1cmVSZXF1aXJlZCI6dHJ1ZSwidGV4dHVyZXMiOnsiU0tJTiI6eyJ1cmwiOiJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliNTY4OTViOTY1OTg5NmFkNjQ3ZjU4NTk5MjM4YWY1MzJkNDZkYjljMWIwMzg5YjhiYmViNzA5OTlkYWIzM2QiLCJtZXRhZGF0YSI6eyJtb2RlbCI6InNsaW0ifX19fQ=="}]},Name:"§f50e4c6c-39f2-47ef-90b8-efb29c50684a"},display:{Lore:[0:"§8/warp dungeon_hub",1:"",2:"§7Group up with friends and take on",3:"§7challenging Dungeons.",4:"",5:"§eClick to warp!"],Name:"§aDungeon Hub§7 - §bSpawn"}},Damage:3s}'),
    title: "Dungeon Hub",
    func: () => {
      ChatLib.command('warp dhub')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"f95edf62-6343-329f-a4cf-f4fa25b64cfe",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"R10WxlH21g2+xhr47UrYO2iwTmwaWmmVdJjRNc8oyOzYKFh55ZhXlWFr5PQz/+DdEuPrOgwAdW12WNXiTmNDpvr3xL+G10mDfqswaVoWPtGUpeT3gwo8Foj0K7ZxO4lJ14YAF9khlQlbHzNgQeRAwKYI+CMjxKJaLYPGQQdmcrSIyiZ86/zPCHq5+olWrtXy7Kq8MWUXuWkcrcWjbKX5z+FmTV8k49M26d4dlniVkLfCs5g5p3oLlAJpCl9teeJzgV8MeB2IYlXQ7RWtaDG+fSOq+v1BU/WzWId8NdeVYStyph36s126+sJDhp+NVskiAE8j7pcNK1F0lAZ5mEqLexq+7WaZxliOZ1K7mJXQTWtqnmMk6HHbTyzIPT+uH4y+6jdBxwMJNE1dVwXSUyA/gCAy1XAev1dBcX8mG7Fk8mBAvHhRYzs2VGpdpYqy1zZxa+FCVf5wVVELibRsVQlxvBL9PvEpJyHg8pfw9zub5zo43XtIyx4VRPrKs3O84yVkmFKMm8Kqhl2pbi+tSjpin61W5RDiehMIaViIBn0fse/WaSHSq35rmVaLYfwBSY5D+vN8N3dRIQut6iosbrnzbKtTMeROODPGtxTLUOX+GPiMKkw0x+WcEPIG+IPWks9sQdvPltSO3KzYHqS52dcpkj3hE/fYa8Bug55Ot4I16AQ=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY4NDM1OTIzNjI3NywKICAicHJvZmlsZUlkIiA6ICIzOTVkZTJlYjVjNjU0ZmRkOWQ2NDAwY2JhNmNmNjFhNyIsCiAgInByb2ZpbGVOYW1lIiA6ICJzcGFyZXN0ZXZlIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzVhMmY2NzUwMGE2NWYzY2U3OWQzNGVjMTUwZGU5M2RmOGY2MGViZTUyZTI0OGY1ZTFjZGI2OWIwNzI2MjU2ZjciCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bTiny",2:"",3:"§7Mini-Boss: §cThe Watcher§a ✔",4:"§8Stalker",5:"§7§7This strange creature is roaming the Catacombs",6:"§7to add powerful adventurers to its collection.",7:"",8:"§7Requirements:",9:"§7§a✓ §aCombat Skill 15.",10:"",11:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eEntrance"}},Damage:3s}'),
        title: "Entrance",
        func: () => {
          ChatLib.command('joindungeon catacombs_entrance')
        }
      },
      {
        iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"238199a6-9115-3861-bb29-242e4b9d3fe0",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"KfRorQ8arhPHJwpDiBB7zSXK5NTeJfH69JdhdLIUo36qYBdcYRN+y9biSknh3mCRgxn+f9/eAFRDrkBG7T3j9x0GVeBnz28F4eeFzRW3teT+dO7c+izYcexy8cB3SSvxObeWEtlzF7CN84Uyn+FPmJhh1Fm7CMpn4GKTtSr8v/ACzafWaaC17lUMqu5UmOfolUciDxY2lNWhKZDWJsZCWr0kmzvp+gnDY7bj7P/hSCaxPpLM97+8xbwGudX2iqFfPdC3jyHe67GxfbJ1Gp21jG1nr/9ND2Ionty3/sr+T/4VTL7tbXBIEwGzqiJIrengfzU7pXEvPQT+gjIU7lANZQh6TMVnXxrbNO1XKMbDkDDkP5aqBVX7d5QAjRZX0UvWuAg1SJrly95+5MOu01c6nM2X9braUFLBGm4Qi21hPratt9DmVi+BB2yccN3fzzGbHqQRuUS+S95It3UXjrcmE+OnHOXTpl3i/O3F3HjzVQ17IMuXwI6McHZNc91MjcvkWi+UMuxm6MCv6trJtn6Gc+HhVuRXKPapOr4NRFxIIv5ZRZMyjNpmyq7xVYulKPYdhoR4ceVPP5hpSsA7aaU9nKsgGT1Y/Vyz45xGcSX/iBuwEPpHpqueEUbtqTGieeyFPuQK7AI7cdwdHZMhpQJcnUOMB/tUBU4s2jg10vgVEKQ=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcwODUxODEzMjcyMywKICAicHJvZmlsZUlkIiA6ICJlODhjMjBiOTUyMTA0NTA0OThkMDU4OTA5ODVhOTQ2OSIsCiAgInByb2ZpbGVOYW1lIiA6ICJTY2huZWxsZXJUYWc0MjciLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTcyMDkxN2NkYTA1Njc0NDI2MTdmMjcyMWU4OGJlOWQyZmZiYjBiMjZhM2Y0YzJmZTIxNjU1ODE0ZDRmNDQ3NiIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bTiny",2:"",3:"§7Boss: §cBonzo§a ✔",4:"§8New Necromancer",5:"§7§7Involved in the dark arts due to his parents'",6:"§7insistence. Originally worked as a Circus clown.",7:"",8:"§7Requirements:",9:"§7§a✓ §cCatacombs Skill 1.",10:"§7§a✓ §cThe Catacombs Entrance",11:"§cCompletion.",12:"",13:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor I"}},Damage:3s}`),
        title: "Floor 1",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_one')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"238199a6-9115-3861-bb29-242e4b9d3fe0",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"KfRorQ8arhPHJwpDiBB7zSXK5NTeJfH69JdhdLIUo36qYBdcYRN+y9biSknh3mCRgxn+f9/eAFRDrkBG7T3j9x0GVeBnz28F4eeFzRW3teT+dO7c+izYcexy8cB3SSvxObeWEtlzF7CN84Uyn+FPmJhh1Fm7CMpn4GKTtSr8v/ACzafWaaC17lUMqu5UmOfolUciDxY2lNWhKZDWJsZCWr0kmzvp+gnDY7bj7P/hSCaxPpLM97+8xbwGudX2iqFfPdC3jyHe67GxfbJ1Gp21jG1nr/9ND2Ionty3/sr+T/4VTL7tbXBIEwGzqiJIrengfzU7pXEvPQT+gjIU7lANZQh6TMVnXxrbNO1XKMbDkDDkP5aqBVX7d5QAjRZX0UvWuAg1SJrly95+5MOu01c6nM2X9braUFLBGm4Qi21hPratt9DmVi+BB2yccN3fzzGbHqQRuUS+S95It3UXjrcmE+OnHOXTpl3i/O3F3HjzVQ17IMuXwI6McHZNc91MjcvkWi+UMuxm6MCv6trJtn6Gc+HhVuRXKPapOr4NRFxIIv5ZRZMyjNpmyq7xVYulKPYdhoR4ceVPP5hpSsA7aaU9nKsgGT1Y/Vyz45xGcSX/iBuwEPpHpqueEUbtqTGieeyFPuQK7AI7cdwdHZMhpQJcnUOMB/tUBU4s2jg10vgVEKQ=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcwODUxODEzMjcyMywKICAicHJvZmlsZUlkIiA6ICJlODhjMjBiOTUyMTA0NTA0OThkMDU4OTA5ODVhOTQ2OSIsCiAgInByb2ZpbGVOYW1lIiA6ICJTY2huZWxsZXJUYWc0MjciLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTcyMDkxN2NkYTA1Njc0NDI2MTdmMjcyMWU4OGJlOWQyZmZiYjBiMjZhM2Y0YzJmZTIxNjU1ODE0ZDRmNDQ3NiIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bSmall",2:"",3:"§7Boss: §cScarf§a ✔",4:"§8Apprentice Necromancer",5:"§7§7First of his class. His teacher said he will do",6:"",7:"",8:"§7Requirements:",9:"§7§a✓ §cCatacombs Skill 3.",10:"§7§a✓ §cThe Catacombs Floor I Completion.",11:"",12:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor II"}},Damage:3s}'),
        title: "Floor 2",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_two')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"801be98c-2737-372a-87d0-aa390e7b9979",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"YzZcdbXDo3zluULGXjqyhNK+aUXdV3iqkyYDvZSxRKwgFcqWojv6ddXH7raYl5srVR/RRuNYr+uqvZ8eY2SUWoAl5vZFaS6jU54RWfWy9QbqGhmj8zsGYqtIJx+OZdf14XtXYDZjPdjUbCUOXrP4zx9io4VrN8wngTRhGe9xQ7NzXE6ruNAXG6Z/xgP42NB9MLmvN7Dl2ZHEIBHetD0vYYS8XkYldsJlLqmzEwlPE7wf0IaUwVLmo/K9eBKqIIILzn+CV+VMKfxlx9q3tvS0SZmQyt4IKOca9o7l4nln3j7L8I3GDfwTRiyo8vmiXfmI2gQh/RZLUbuaW7801BY80WUH7cqybT+DB4qAKu6rcHR8WAJWIb5RpnOlzypM4Idw4QL48ps6RLd6cqD+jIS4wPgtQFrAAuYGAnl5nSnUkANpBXCuoo0D24OzcriEAMTw5erV8QAEFSGeufs98lZKhwm+HZXnX6vJFG9qldhyp+yQFL1kId9xelVshOdKY29ZUNND1Th2q96E5ZrXSfKSbkQhjSzfQnMabwR27kNX/WuTu5LgH8wjsZTGgmh7nfLe+zjyyQqa559DgBbBxpgvOfmb8pKxfm6ZoAAmfZvogmI3f41EhtE4bd64Im8eCVvvCJfPbhVOSDkSTp2jtQU8AF33h0+ydkCuNBOFeI+GaJs=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTg3MjI4MDQxMywKICAicHJvZmlsZUlkIiA6ICJjOTZiOWNhZDgzNTA0MjgzYjcwNGI1NTdiNTRhYjUxYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJNYXJrb3gzNiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8zY2U2OWQyZGRjYzgxYzlmYzJlOTk0OGM5MjAwM2ViMGY3ZWJmMGU3ZTk1MmU4MDFiN2YyMDY5ZGNlZTc2ZDg1IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bSmall",2:"",3:"§7Boss: §cThe Professor§a ✔",4:"§8Professor",5:"§7§7Despite his great technique, he failed the",6:"§7Masters exam three times. Works from 8 to 5.",7:"§7Cares about his students.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 5.",11:"§7§a✓ §cThe Catacombs Floor II Completion.",12:"",13:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor III"}},Damage:3s}'),
        title: "Floor 3",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_three')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"2e587a77-69f3-37fb-bca9-55a29f6770af",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"GuHZWOmnXm6HKemp/nHt/MU1IiSrKeL4rJYS29kkR8kHhTE9dwHh5p07IDbk2yQTnbUlG/VCY5ycIQWGv+J/XZsKU3ev5xkZ7HWPIXdB26MZPRO8d/GzRgcKz/3x8uYWVM89kETJOslk6cTsew0SS3PiynShgEnsBt4qDYSplpmVOJipNgfr8pnlUW8v9TVROwTjAGsOGkyyBuv031+7S6IIdyvKLRKZimrmofgFcWwmEqniURR+UsbVRf2L/7BbXlEnYPcEiVUL9zJJTuAAQWzfziWVKSj2nxb7lk5R/Jqwlr3XS+ezMQPuX5xyJJbTmHnXT24pdrJu0WKGh0Aecx/NGerVz6oir1p2tPfiTmfxUOXU56tTJSG48Hm9JyLCf33eGs/8FCkQaEZ1j5UQZQr4Cya/ot4sDZgjXLLBepzMwYwTXlq5k9DBwwiS6ZDS9ACFPynQ1xfhrqZN2pu6DveOD+ubDVjN4/rKRYnNt8iM/wtrj9w0x2VoLK4NrdBs1gOHlOXH1sosfchJDG8lcmOWrAlQEnTCo26g8sVn+ZWbC5IQJNJQM87Pdvogro60qK1LVgScuEyYwoIUw+D9Fm1l/iqyxCc9aOgH7nztmdjYxyXtNsCzKQbnEDi+dj0dj0pPttGQiJE5YNiOiXBO3tE5aKmugbgqzMdhlT598E8=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTg3MjMxODIzNywKICAicHJvZmlsZUlkIiA6ICIyMmNhZTExMTU4MzA0MjU5OGQ3Nzc2ZGI4YzlhZjZmNiIsCiAgInByb2ZpbGVOYW1lIiA6ICJHcmFuZ2VyVGhlRG9nIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzc2OTY1ZTNmZDYxOWRlNmIwYTdjZTE2NzMwNzI1MjBhOTM2MDM3OGUxY2I4YzE5ZDRiYWYwYzg2NzY5ZDM3NjQiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bSmall",2:"",3:"§7Boss: §cThorn§a ✔",4:"§8Shaman Necromancer",5:"§7§7Powerful Necromancer that specializes in",6:"§7animals. Calls himself a vegetarian, go figure.",7:"",8:"§7Requirements:",9:"§7§a✓ §cCatacombs Skill 9.",10:"§7§a✓ §cThe Catacombs Floor III Completion.",11:"",12:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor IV"}},Damage:3s}'),
        title: "Floor 4",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_four')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"306fec07-3adb-3cb8-b174-6639946e1134",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"OnztRQ/bnQxgmRmDOCY6P449pPc+S215XGtNf+9MxQ5ZBXp8Anky3WS718SSXXD4tu4WNtxgLpjNBhS7gknXzspd5beW8gl/Q+Oj5U2ajkBtZ34VfYlmdYiP5Rx+JTO/JIKROVy0cMkXOgf9gACwemU3i5t+afSw/e1TExb7lVb5l+pjnkdWcYsVq++rQqV2u+2dSXgrxZFOwhD6XN45fFnBE+f0h/p2iuXKqg/kF2Q0EjEYfg+k0KCHqLez2D+dI1xnIOuXlLm2zE81t8CHbHLKP9t2duxv+sKtX3XYsh72wvODqll/cLfTjGZoT6Kbx2uCCOXADBFgGzlO5TpZgaI1hEdCZMyiTHMuh4xy/fMlgMqVgPxuS1ew/9W50QGjoc697UOAbUgyvmwERQxRV35xXtWEu8MCoM83VOrF2K2JhuibQ+O1HCl0W6uXQZaqEQGs7X973XyBPy2Pd5p5i1vzZMskaJDr5j89uTKn2qmliATPk0+DGFivP4tp2c8V71OKEzrjkMQiB1imNpmYYJmhZ7run2RyQAn4NZv7AoRmpt6DD7cMLsx9UpTp5KXvu3zpnXbpb9m33bk6BysdkEQR7kIEa1lzsr982OMluMq+LFJgukN38Wf2O3+d7Fk7YXy4WcyiwQSgfQYUFJXi+cYoLc0mtO3hlZ2bBKa87Ng=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTg3MjM1ODMyMSwKICAicHJvZmlsZUlkIiA6ICIxYjQwYzcxMGZjMTY0NmQ2OTIxOTVmYzY3YzZlMTE0ZCIsCiAgInByb2ZpbGVOYW1lIiA6ICJ3c3pvbHNvbiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8zM2EwMjQ2ZDUxMzUwYjc3MGRlMjdmMWExOTI1YjExY2VjZTU3YjNjOWIyMDllMmI2YmYyNzVkMzJkMDE1NGMzIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bMedium",2:"",3:"§7Boss: §cLivid§a ✔",4:"§8Master Necromancer",5:"§7§7Strongly believes he will become the Lord one",6:"§7day. Subject of mockeries, even from his",7:"§7disciples.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 14.",11:"§7§a✓ §cThe Catacombs Floor IV Completion.",12:"",13:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor V"}},Damage:3s}'),
        title: "Floor 5",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_five')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"efe0e683-2684-3394-b724-95eebdc7861e",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"FpVyQPsdJzqc6TAl3Usag3/5EM89GQ4CELbpBRc5XbhuVvkOPDFkCp06tc20YvPIc9BB0V1ju2G3098XyU0Lro/NPuWEW1UdsaXG/NP6AzjM+DHuhgqlqdMPHbT0JTq0NBfFepLoCHVFMj1uI3OYFfBl8k6nrhi5jkrZyFeodPY6GU1d3+N21uyfVJxn0n1ejDCbRDd/Zoxd0XhQ8FiFjUFR492m5hH1cngEZPaPlzxlS3qZfs6aUBUOA3PlGJw03q6SGPZv3+nJcvzyG4Ndg7N+iu9gqZMV7DvWRkWzOp3o5W/WKwLtSJewNpJoi0nyW9Igi5COqrXxDbBh3J1C6wF1+q2VKrndsRYvmdL6xLTxIZgsLTAaHlWvNCzzV6b4+lSOd5M+oINC0NTxz8HZgkquDW/1lAwmC7rhOBndy+72PebMKLyzyAir+0Uai9vLmi38WevHbG2Vc9r1AmstBEmoH13UfWGU0zuDEDzBPVCWmfAJ5NHUVGfyk4BuhsXkXjSAU2a3kPomPM6ExWOD9xkqIJRAKhsP/j25qkCCkOONVB++6fd+bPx83lGNPQPK6ZEAJaKN8Wb4DhTQhhqw14uvqypkF/gB+MCnZiC3/btOwiLkrckgozlzmpCSv088PJTXBAZF+5bbkpCj4qmEE956HaZpjcCz/Yw6BLl1/eE=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTg3MjM5NjEwOSwKICAicHJvZmlsZUlkIiA6ICI3NzkyNjJjYzRhZjc0NGU1OWJlYTEwNWEyOGExMWM1MSIsCiAgInByb2ZpbGVOYW1lIiA6ICJMaWFuYW5Qcm9NYXgiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTFhODFmOWIwYTEzNzU2ODFhZTdkOWRmNjVlNGQzNzIzYjFmMGZhNzQ0M2U3NmRkM2JjNjNkZDM4NjRmZjM0MyIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bMedium",2:"",3:"§7Boss: §cSadan§a ✔",4:"§8Necromancer Lord",5:"§7§7Necromancy was always strong in his family.",6:"§7Says he once beat a Wither in a duel. Likes to",7:"§7brag.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 19.",11:"§7§a✓ §cThe Catacombs Floor V Completion.",12:"",13:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor VI"}},Damage:3s}'),
        title: "Floor 6",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_six')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"fbd4991f-d906-3bab-b751-c898e8fec234",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"K93XDuVoITGweKNy0HWGarZPFmMND6HVr/bJ70Myn+E6ERrpsIFKMSYNb3ULuex/4/MD4+fXcCTTbwRo6bWuiZqgErTgbSmUroVY6naBcpfTfhZFsjDPTVBIO2ESnFm0zNgbNuqGjOm0oAT6x1OqFAyXUOYrgWGDGwQ76Vae8RIwCvobqt/pk5CQWmVkROEdj8brpwwfBLUqTr2jxcO8gyjCBt88Mt7/yT/hjapmDWkcp6oSraviSVT5VTyLdIu5PCQIbmqEExqfsnFzaELj6CjwBCs2Bse67WxZRJkPKlEoU5iIRALm28kS7GyzgwxAUJSqepjjp3yqs5gXG61O7kYOIO/SHeQ7dDrNH6eLd2FCNNEgX1bs6YfOiKSVB3aFpkWUA2jXYEy4fJQ14f7ouvxGF+TO/eRZkN+xQuOZQ1Qh1WKHj3dr6e8hXJUZYLG1pHkSyp9TR8vF7q1sKW7BllIgQGao3YVWnwww/GH64YjplXJowbvQ2Lvc7VirFzDmqQZFbzRUYUAXbV4YO/DR2jBFwxUqOL0QFSXZ7K0DSStDOIm9rDg4qnM1Tu8WZRuSlWNDzl+HUKNMLyz5DVznkfZgYTO8i+XkwTlMThtzr4UTsbh7GEVPy+z8zO8nx1jtukm1tu8nqUz4wurPYySWrWsIZDijNPtXAlLxCIuhoww=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTg3MjQzODU5NSwKICAicHJvZmlsZUlkIiA6ICJmY2ZhYTg0MzA0YjE0NDUxOThkNWYxNzQ3ZjI0Y2Q5MCIsCiAgInByb2ZpbGVOYW1lIiA6ICJMYXJzVGhlV29sZiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YTQwNjc1ZDMzM2FkY2NhNzViMzViNmJhMjliNGZkN2U1ZWFlYjk5ODM5NTI5NTM4NWI0OTQxMjg3MTVkYWIzIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §92-5",1:"§7Dungeon Size: §bLarge",2:"",3:"§7Boss: §cMaxor, Storm, Goldor, and Necron§a ✔",4:"§8The Wither Lords",5:"§7§7Disciples of the Wither King. Inherited the",6:"§7Catacombs eons ago. Never defeated, feared by",7:"§7anything living AND dead.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 24.",11:"§7§a✓ §cThe Catacombs Floor VI Completion.",12:"",13:"§eClick to join!"],Name:"§a§aThe Catacombs §8- §eFloor VII"}},Damage:3s}'),
        title: "Floor 7",
        func: () => {
          ChatLib.command('joindungeon catacombs_floor_seven')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"fed95410-aba1-39df-9b95-1d4f361eb66e",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"QAy8ibJWR89++h4wygk9vbzGtCn7r4fHfHZVUvn6L168FyDXUyvZ3jzibPdog9F7SxycsyseHfjEcACxpgkoAjF6LdNlxMqjrK9hkI5NvEeXQqdGTPwNmb17GJ6YVb6q9tBSocB5eAFzjFw0kQCdbtziaHa2QNzKs5o4l9qDK4H2atjcXvJxEBk5Wf3brhEDL8TLFkOlPAHO/qMUyD8fK0h0ehyOqhqZTXMGgkBW49tkhGQCoAmRnAITnaM5ZwFNFmXoVYvex+2Tvf8lyzYalSnSt+ZhUmP/IeABPah7mxQWl2elJkUTpOmYrLrmTGLK0Dfba2Cw6MEnk2hU/KV78+mLxXcm0D7/As+8+AvH3XTltu1aSm2H+ABkjaieszWgHwlGNNbTWrYRC+3X7ZCSywMxAwB3XARcRyl+XlRlMa5v26c+jbcHeEMPeL+jwKWzMDzpEXu9rNsuNicGKOXZJCMjDhFEdoIsOcEU0W9SD3ZhLqvMEfTPNmQY00KC2SLw1J9VtxCeBqSESXIc8K/B9DH/NdYEY1Gv4aUKyZ4Iif5KvfK03N7k8j4/KDWNUB4v1s7JRFU6/CE0VRP+h3cZpqMN239ZcGYYk20GZcMIEicFQZgtlrY7YxuONzRJOm5PwE7qIDWMrbHx0G5x5s/erph/cRVnaEESgKhgvLXkhk0=",Value:"eyJ0aW1lc3RhbXAiOjE1NzA5MTUxODU0ODUsInByb2ZpbGVJZCI6IjVkZTZlMTg0YWY4ZDQ5OGFiYmRlMDU1ZTUwNjUzMzE2IiwicHJvZmlsZU5hbWUiOiJBc3Nhc2luSmlhbmVyMjUiLCJzaWduYXR1cmVSZXF1aXJlZCI6dHJ1ZSwidGV4dHVyZXMiOnsiU0tJTiI6eyJ1cmwiOiJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2EyMjNlMzZhYzEzZjBmNzFhYmNmYmYwYzk2ZmRjMjAxMGNjM2UxMWZmMmIwZDgxMTJkMGU2M2Y0YjRhYWEwZGUifX19"}]}},display:{Lore:[0:"§7§8§oLike normal Dungeons... but more",1:"§8§ohardcore.",2:"",3:"§eClick to toggle!"],Name:"§cMaster Mode"}},Damage:3s}'),
    title: 'Master Mode',
    func: () => {
      ChatLib.command('warp dhub')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"145755ba-d413-3368-895a-95866436e6b4",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"gVzWhJ8YDAk+3ZqDZ+djn9ABfCoiaR51sy1t3DccmuW/vx0aqOXuu0p38V618JRXbJxuf6WpFR8bdr9smLGFou0tw1wJvqnzpr55oT9hN0NuljOx2CT4JoNgvqzwKmca65Zu+aHA02mUevuqrqUySxwGMJjZYElZW3hHtjGizHnTkcrs8P+3b5C1y4IIqxmbjagLnNrYH4CtGGtAVlUD1cIAXqgAznnAlnygjiH03ABpTilQe8hcgDMI1TDxJ8kss0O622X2TSVMjjtfEyXEXMxalTBVQRJ+Tv1pmHS6y3zKnFUrerwa86/IG0PApX+xAc5fG0RUXPqQsQkrIbKO3fCORWwkrq2Gg3tputaz1zYbdSBFc9KaQAz6L/OJvXaGLRUlvZgeREiiOZaEqsBTJrgXMY8Vp0IfFPuTFSqMnQyelxB+AjqJpzxEzdLaXwIuu/fdRwcddonv3HfqYvs+KcuW2AGYODnihAeFq+1ZENpbjfZl3lWbDWk9pttTcRA1AK0GId7SJGf6+5B+fUO1S7eueck+ATfMHnzpNLv9I4+wsDEoGfMkXv1qwAYSKqYCbIAZ4/qTTMZZF2KGhxXku1lcDGa+nmjp+8A/rp4DHgWwT9L/FoWd1FtlWBg9PYbEL976s2Up68weGhiKGMBLoi4Qq5xmi0oKUv/NQ28i4lU=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDU1MDEyNSwKICAicHJvZmlsZUlkIiA6ICI5ZDQyNWFiOGFmZjg0MGU1OWM3NzUzZjc5Mjg5YjMyZSIsCiAgInByb2ZpbGVOYW1lIiA6ICJUb21wa2luNDIiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWViNWIyMWFmMzMwYWYxMjJiMjY4YjdhYTM5MDczM2JkMWI2OTliNGQwOTIzMjMzZWNkMjRmODFlMDhiOWJjZSIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §91-5",1:"§7Dungeon Size: §bTiny",2:"",3:"§7Boss: §c§lMASTER §r§cBonzo§a ✔",4:"§8New Necromancer",5:"§7§7Involved in the dark arts due to his parents",6:"§7insistence. Originally worked as a Circus clown.",7:"",8:"§7Requirements:",9:"§7§a✓ §cCatacombs Skill 24.",10:"§7§a✓ §cThe Catacombs Floor VII",11:"§cCompletion.",12:"",13:"§eClick to join!"],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor I"}},Damage:3s}'),
        title: "Master Floor 1",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_one')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"e80a850e-fd42-3493-a94f-8e2c32ebae0f",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"jxGX/p8B7Id8zLlJjMeiXypx3jFM3zyJ3IdmHeav9xMbTSi+uHmWdvq629BxQPoS/U/jk0xuLff4aj9Z9o0Doj1iGrVIS6p2YFl2yiLBzgay6Uprl5CctCCSV7gLasmsAtUWA9GV6jRBkpHyAoEq7LDabH2zpL54iQOYkl/TEheJvUuLfiwbxECZ5b0OiZchDYtWkeoOGTziVzBJmd6q6mHDWxJracQsugNxhEqxMXBHO/Ksis1De6xuvUI9KvO7M8BZgNDEJzLTMY/X1cXkcHnrC1QDp121vQWnAqN/LGJeROUcEqeTAv2PzDzzeoN57sqMYDxYsPf+14scbXacSMEzRZiPatjQnH01bhM6MnQqIw9++XDUeRlrwMy5IWkMB2n1KATCh+pvqORVo512dE3js6KjwgyJYfBaLyAPzYKScKqWoUje7+z9HkEMl/7PjCdcAJ+NQacVkNRey20/tsip6oI1WExUxy4LNR8TG/BXtdQFjvQKXqnt8d2+SP2avV3Nbh9E51llAlN0tj/Rn5FyQDBZ6ShCFTefMDVBTcsKnLSufA3qRLnk0/KxY6iu6G0fdPAxUhDMltSbvbN9VC2pea/n0o6n1IKvOayfmz5APk0lQoICfMvynP0PK4Uj9yBFeeGoEcb8AXRMhSNfDfEE8Rrc8QmRROd8/kOua1Q=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDcxNzIxMywKICAicHJvZmlsZUlkIiA6ICI5MzZmMTA3MTEzOGM0YjMyYTg0OGY2NmE5Nzc2NDJhMiIsCiAgInByb2ZpbGVOYW1lIiA6ICIwMDAwMDAwMDAwMDAwMDB4IiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzMyMjkyZTRlMGZhNjI2NjcyNTZlZjhkYTBmMDE5ODJhOTk2NDk5ZjRkNWQ4OTRiZDA1OGMzZTZmM2QyZmIyZDkiCiAgICB9CiAgfQp9"}]}},display:{Lore:[],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor II"}},Damage:3s}'),
        title: "Master Floor 2",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_two')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"af20d7ea-28ba-3c8d-82f9-41fbac6f30aa",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"j9+kDxqkEEQZKduj4MR+HDD3nLbQm7fZbKEGOVfy/yb8tz5mISOngqZg8ZMivwRlKhQ0AmzxTijaibzw8B3PRhjxda7ug1tgAd2UWluCp42o2LHklPXuv3FpbLKnql83QvTRnhyHDXa1DiQpR53ahVBRn85Qt7q8AYb9EG6SOEbyDKyQPd6koKjdFfVMG+xKHzCj/NoTPfHVL3f9lYFY6SmCKv0exhYb2RGxViehr7okW1W+87UEoHYF6nrEbt+9frTrVnix3pUSAkdQ2YwjRlRbCcORGkcm5uoFxs1Ri7BQENdOsWy5/NaWh8j0fjS6Wl0Y7xSOPKSDsuMjT/MsHQFGbjFlP+X/Cnw0HG/WcOKilkpVhnb8PqzYfRpLZzkQKiS7rU9qZsDFEGT5uhd4EXsXTWwC6Fa9kY7swNPF1H07Qp3LY0jo+v1Dlqp4vZM961r1Ab6zuWFremziGGjvUy6XimKxfvqEK5vtSXqlP/xtRSgsHaHXm7binXGx98fRSCBU265Zk6KXoT1iN9uT0Z1eaTbuh1krB+cijMnOZgMmLlqVucLP9riVp2pO0M94VR10/sgsY4vLYfpXxzoZlpDSyg93ZHbWR8RSzjgk5lhmldVJU5VEfe0Xoek4vioXAaFAZ8moMM4EqJsb1hsW3ep+SicJCswr/EwNomhxZbQ=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDczNDE2NiwKICAicHJvZmlsZUlkIiA6ICJjMGYzYjI3YTUwMDE0YzVhYjIxZDc5ZGRlMTAxZGZlMiIsCiAgInByb2ZpbGVOYW1lIiA6ICJDVUNGTDEzIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2M5NjlmNmIxNDg2NDhhYThkMDI3MjI4YTUyZmI1YTNjYTFlZTg0ZGM3NmU0Nzg1MWYxNGRiMDI5YTczMGE4YTMiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §91-5",1:"§7Dungeon Size: §bSmall",2:"",3:"§7Boss: §c§lMASTER §r§cThe Professor§a ✔",4:"§8Professor",5:"§7§7Despite his great technique, he failed the",6:"§7Masters exam three times. Works from 8 to 5.",7:"§7Cares about his students.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 28.",11:"§7§a✓ §cMaster Mode The Catacombs Floor",12:"§cII Completion.",13:"",14:"§eClick to join!"],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor III"}},Damage:3s}'),
        title: "Master Floor 3",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_three')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"2dea13f5-bf63-3c58-8225-8d89df7a2bc0",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"Upr6h34/mcy+yT7sQO7x5iX5RHnf/NWMZTioCogMJT5/XBe8sHxTfonI60zMYbPrrmQBdk8dbEf4scV7OL3iMiKvqDbCrlYayt7z0IcjyHak1FIUFGT9aVg0gzmTl+atKSxuqM1BHSwa9NDkfemn1Ci81kzd3H8NhozzKSC6r8RFWCkOnw7TVKZgKj/pA5yijfe2wgVtWoeg7bhL0ZjXqe7Bh5NwVRPhveG0o8leKB6GJ9uyIoBYjTdIyPRwk2lBspjevr01T9umDcxERMC8QI8mLZefDvxBx6Nk92dv/hB7TsM7DtwNpAu+R0qQ27yQz+9Sv37seR01fx51pAz8XmlzWPotrg0qbrnVG8maflyk9KezcqRdLzNjVaRdKQrPkvMSmrrNoFyfdJp8pJnzRQ7V95cHt60kMqJkuVXKCISfOpSElY3e7zWeZcv6UGSzMIW+QI5GCxBM9p5ZL/BIVBgFVrjOSqBS9uTYGinVIYttM9L6s0Zf2mCYfIPIc3UOE2UMyHwc5p/2L94ybnYsURbB96bPDoq1f9UCOeShlAlwiPPEOYJvWoeAOS6mao0qRj2cchFaIZnkXi3aKFfL9App5n87t+eeddaJT9pdkvlHd/4QBRUB5lhyYFGsYRAViw6deMipGAnPwGR1aYJGxXngwzWagX24p5bnO2F3rq8=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDc1MDAxMiwKICAicHJvZmlsZUlkIiA6ICI1N2IzZGZiNWY4YTY0OWUyOGI1NDRlNGZmYzYzMjU2ZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJYaWthcm8iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDdiNjkwMjFmOWMwOTY0N2RmZDliMzRkZjNkZWFmZjcwY2ZjNzQwZjZhMjZmNjEyZGQ0NzUwM2ZjMzRjOTdmMCIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §91-5",1:"§7Dungeon Size: §bSmall",2:"",3:"§7Boss: §c§lMASTER §r§cThorn§a ✔",4:"§8Shaman Necromancer",5:"§7§7Powerful Necromancer that specializes in",6:"§7animals. Calls himself a vegetarian, go figure.",7:"",8:"§7Requirements:",9:"§7§a✓ §cCatacombs Skill 30.",10:"§7§a✓ §cMaster Mode The Catacombs Floor",11:"§cIII Completion.",12:"",13:"§eClick to join!"],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor IV"}},Damage:3s}'),
        title: "Master Floor 4",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_four')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"5959470d-2636-3d85-970f-f754e80a25e5",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"lo3B1JEkizigsPnigrFyXDlrsE3DW3vyfppV4hA4S7N7hN4Rjgt6ZKOtXQdzNFOuG7ntaMwcbTXjbGcCeICJVOuG/NkghkhTpe4ow6yJ+7tM7BXKS3cGmYJiRyuqh02ZL38nH3liAbaac4LtyGyxKF5FpGQzRyFgRBZE4uJ2ubqxb+2c4QS/tr39SxESxY1fvaccmJ0EBdhVDGvlYXlz7AfTkW8i4+vt3/+pzuO3y8lYiCB0Cgwkl8t/s1q91ZbH8b8loc+HT7kADB+E1TSLtI9SOcwTox7rzoHMDHXfKZnrDK4MuvZfvC+T/W+A7dH3+FakPEGpvPj13MZCyKuifcaYRxwBz104zAdkxLN/g6r876LMnMfqCdUN00Jm8BiM+MErl+gdG2zdAEKRuHxQ4DTKhoBgBtVESxKoGrBUTf9v1J5nwcGWnh2G1AjvO4AJrIl9L//6gOv7uuzugD/fHlzSRlXB5IunJRCPkKo2/5XE1cajYMUvYOzkdMqqM/VnY2uv6zaNAbWLrQXMjjOWtENZfZdKsiGGxuKhnwYfiFoF/ffXpsW1zU2XvcykbdOBjMZWC18JQ9Zha5rbLrlaiZa9c9MjRC+bGrwWXUZvrnEQkla8Js1ick0c2/MxKLYfXa/Bcf5Oz3UdmMrx7No/YFGQBa8TBnKYDTzDnOIyLsg=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDc2NTU5OCwKICAicHJvZmlsZUlkIiA6ICI3NzI3ZDM1NjY5Zjk0MTUxODAyM2Q2MmM2ODE3NTkxOCIsCiAgInByb2ZpbGVOYW1lIiA6ICJsaWJyYXJ5ZnJlYWsiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDY1Y2JjZTQwZTYwZTdhNTlhODdmYThmNGVjYjZjY2ZjMTUxNDMzOGMyNjI2MTRiZjMzNzM5YTYyNjNmNTQwNSIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §91-5",1:"§7Dungeon Size: §bMedium",2:"",3:"§7Boss: §c§lMASTER §r§cLivid§a ✔",4:"§8Master Necromancer",5:"§7§7Strongly believes he will become the Lord one",6:"§7day. Subject of mockeries, even from his",7:"§7disciples.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 32.",11:"§7§a✓ §cMaster Mode The Catacombs Floor",12:"§cIV Completion.",13:"",14:"§eClick to join!"],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor V"}},Damage:3s}'),
        title: "Master Floor 5",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_five')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"e18205f4-731f-3fe7-9f92-fe20f4cca97f",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"msEt11B3RbKgNXoHBQ9x/eSt3w8mD1jjxmpa/4TLILBTZeG10nHhSOd/LplTrL+MPcs4/WkYy3B9qCbnsJv5PpI73rRSA+cvQ3dpQVSoHylSASfjj67VmJBjqVGzDJ3zwodbfXvtY1gH+lC+XG94Y8GQG8EZGa1DE63chKN3nzYVvOfnCXKCow8xmWI6ZzlgsZ5HYS94Pdu9XQMKqbCV5HujxcdjkcENgOBIRGm4leHBUgKs+d1gLyK7ubgSalnNzp6KJueDh9W722zzLXBWrLOCKyC01ylAc1QQCyqTo0rMKOQpr8nQ4iLq9vsSwX964qqTh14GrRuhQNietilW1HtAqz0VDug+qPQtk+bym4YCVNvjJo50xP5pr/zhjPg0NaybesVgXNyVvm/N/T7RgLdWAuRnw4WIHtR3aYFQ9VY4UtuIuhgYCy8xi89kk282ZqwqvPRjcAc2mjwZdBje2ZNaLH8jN6k0nqZFGqDgV7CNOf97nzfcxqSFvjMJieXjcCRoMaCV4GfaTvC188JE3w2qlF2f5KW+gy7TRgcgH3OmP3yPoP/86wXuUMlYQPw8y0Q3xhCVM/tonXvwEsGyNeC6QOg+Tz0lBS+pTMZ3ousGYUhzrSq6bWksx3KNekdWh4VzKsr2lmzkUD2EXc451O3yE+sZJ2sGsqC0c3pVcbA=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDc4MTM4OCwKICAicHJvZmlsZUlkIiA6ICJmZDYwZjM2ZjU4NjE0ZjEyYjNjZDQ3YzJkODU1Mjk5YSIsCiAgInByb2ZpbGVOYW1lIiA6ICJSZWFkIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2FjM2Q0NWZmNjcyOTg4YjQ2MzU4MTM3YmUzMmMzYzlhZGZkOWE2MjkxOTVjMmI2NDgxNGE5MzQ5OWRkNjYwNiIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §91-5",1:"§7Dungeon Size: §bMedium",2:"",3:"§7Boss: §c§lMASTER §r§cSadan§a ✔",4:"§8Necromancer Lord",5:"§7§7Necromancy was always strong in his family.",6:"§7Says he once beat a Wither in a duel. Likes to",7:"§7brag.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 34.",11:"§7§a✓ §cMaster Mode The Catacombs Floor",12:"§cV Completion.",13:"",14:"§eClick to join!"],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor VI"}},Damage:3s}'),
        title: "Master Floor 6",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_six')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"486f1f0c-91c4-3461-bac8-a4d8caff9dff",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"XEC1xNZ4fSpAnH7qwaLB5DC332w203hf27BV7OWPm1/ARXgJugvl2gUN4qfn/u9J6uMiuQ09Sf6nq6281IQNRI552NAKBanSUvIaisW9IeSCvpmH1SPraSXqVK2oPmsH5siSdIGJqVOosSwzYYwJpMa/GdNvLZ9q0GSwAd0D8oP+1guNMmwkfEJtE0UftQkgigEklbL0Ky6EldsCZxQayuRHQ2+oCXS6xic+dDEmNcbG46k8CNTDmfQhYnLWt719cOt5FtTgY12qElUNNrJqe3wh9P8ZvbBzXccvxRkCYcoFXvC74i19atPlGSVTzDlMqO4YIL2ZzEolU+IPAF/hKZrPRxi00Rrum0pvZDULcvsS9zEuSIYxErVkQo435ILEowdCjvd9vWSJWsnQISy0p6rsd6K1hhaBrQHby3maGcUoGQwjwe5gkIvYxtUTc0GlankPCKBywWxhqkFNgwQeI3oB0bUzhSiWFNu9bAqh6KI1L2vPhMBdeGnwH1FfnKnqNyO9xPTZQW4kvtnSsxvf+srsS+RyzCiGieXhWRGmxpd0OCtPkF6qEs5wc6wsIPD3m+TeWYZBDcTscRASiv8AfsSNchoJa3bneuhHK23enMaqFpHjYcOiYCrR+B/AKxBBj8QKFSUGYWSKS8mVM9I37qk+huYzDIWMHDXSIesmTXU=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxNzExMDc5MzYwNSwKICAicHJvZmlsZUlkIiA6ICIxZDUyMzNkMzg4NjI0YmFmYjAwZTMxNTBhN2FhM2E4OSIsCiAgInByb2ZpbGVOYW1lIiA6ICIwMDAwMDAwMDAwMDAwMDBKIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2YwYzY4N2EyMDI2YjY5MzQ0YjVhZGRiYmVmYTM4MWQxNTRkNmJjODBjOGMwMTc0NTMxMWJmYmJmOGJiZjAwOWMiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §91-5",1:"§7Dungeon Size: §bLarge",2:"",3:"§7Boss: §c§lMASTER §r§cMaxor, Storm, Goldor, and Necron§a ✔",4:"§8The Wither Lords",5:"§7§7Disciples of the Wither King. Inherited the",6:"§7Catacombs eons ago. Never defeated, feared by",7:"§7anything living AND dead.",8:"",9:"§7Requirements:",10:"§7§a✓ §cCatacombs Skill 36.",11:"§7§a✓ §cMaster Mode The Catacombs Floor",12:"§cVI Completion.",13:"",14:"§eClick to join!"],Name:"§a§a§c§lMM§c The Catacombs §8- §eFloor VII"}},Damage:3s}'),
        title: "Master Floor 7",
        func: () => {
          ChatLib.command('joindungeon master_catacombs_floor_seven')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"f66bb1cd-868f-4502-9904-bac304716eef",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzM2ODdlMjVjNjMyYmNlOGFhNjFlMGQ2NGMyNGU2OTRjM2VlYTYyOWVhOTQ0ZjRjZjMwZGNmYjRmYmNlMDcxIn19fQ"}]},Name:"§f66bb1cd-868f-4502-9904-bac304716eef"},display:{Lore:[0:"§8/warp nether",1:"",2:"§7Fight challenging bosses, discover new",3:"§7Sea Creatures, complete epic quests,",4:"§7and join your favorite faction!",5:"",6:"§7Main skill: §bCombat",7:"§7Island tier: §eIV",8:"",9:"§8Right-Click to warp!",10:"§eLeft-Click to open!"],Name:"§aCrimson Isle§7 - §bSpawn"}},Damage:3s}'),
    title: 'Crimson Isle',
    func: () => {
      ChatLib.command('warp nether')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"af340ebd-ff35-329e-8bcd-361bc4d9382e",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"KAIupKyyLZ8mLW+Ukoa09UpEU8XT7vnGfuuP13bVcSPhE1rIjBDJ/1F8ccPME38nN6rpG4SlUkPHcPdHCSVpjXfBwTFXZ/rXa1SPZVzDSkrQjy8MF+t9FizYvTPxof+LgFEj1kvIuRevqxwAwfUutZzVxR8XIreMFqEM2lTxD8ADHF1L/HwGODsP07p4qKx77ATtpoBsgw+gEpkAbjgmzfelRG/X7YOiHgq946Sn4PbFTgb+gdWfuhYvq5OexqYCILScgkgDFk41dIg94XwFsQMTKl17S/1PgaTauJE1JQdMyVvH2PFdcPzz32kHnAt/EyTswhXv2QOxP87ncd5QrVzfgrVq4EmLj70W3NEr8M5lrh2aq/JeRiZBMVh4GzoF36+xwNLcQB5SVlHYx63Gk9mEMgP2274I7ZjeHDvh5+N1D0JHrgNVflZIEO49h4xlxKkYhfMzHZFdjz5IPjT+/35BTTOeEnAiUJiVMYwBcWiM80u0DXvZfLhvZu/CKlblgu+FM2gAWs5QN4djDjuZY/muM1FreWX1IfibxFQnInQthb0OQyimPF5LvoC7ClHFOJH3TK15Vcfr/Puc0awbr0vQRdZSbfnafc3To9evIhPBzJddFSHMAif3XZsKJ1rVJrI4lH/VtYqR11OCHL02j++2aCD5UBZDkLXDftTmwD4=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY0MzY1MjgzNTU0NCwKICAicHJvZmlsZUlkIiA6ICJkYmQ4MDQ2M2EwMzY0Y2FjYjI3OGNhODBhMDBkZGIxMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJ4bG9nMjEiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmZkM2U3MTgzOGMwZTc2Zjg5MDIxMzEyMGI0Y2U3NDQ5NTc3NzM2NjA0MzM4YThkMjhiNGM4NmRiMjU0N2U3MSIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §92-4",1:" ",2:"§7Boss: §cKuudra §a✔",3:"§8Lava Kraken",4:"§7Overgrown lava Kraken. The more Sulphur it",5:"§7consumes the stronger it becomes.",6:"",7:"§7Requirements:",8:"§7§a✓ Have Elle take you to Kuudra!",9:"",10:"§eClick to join!"],Name:"§a§cKuudras Hollow §8- §eBasic Tier"}},Damage:3s}'),
        title: "Kuudra Basic",
        func: () => {
          ChatLib.command('joindungeon kuudra_normal')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"80a91601-ac87-302b-ac6a-4c635b73c2a2",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"XH+ez9zIlZ1DINfonekJ5ptZYYu2B5hFZPqutgcWmmgqEtJC/u9IxUFLylXADvgRi5vYrXStPqHPxoBQmmN4bsxvb30j1Ounlz3rR7s7TH+yKheMM8+lH187VcEmHoZVSAg6unuNERorWiSR1S6ZTZKURDznBAZ9MABGSBNheqBY/lNlsu/zS9g2rcS6CGKzda/ZtrjSSEAl3xbrd5nMJ4sLQDPFiTv84Fk6sgBHG5rEKo9IqDTA1FOu66dG6yifubKT3kaLDclCswEux6ZrE8NY8mmPig3oEKSQViOAdUvSpW26/TOPe8uhHHRaH57vH7cmUdm330x+gJbH0OhzG5UeDSJZc5xikqTtnzojVOB75iJUGRa/K9ezWmUJ4+4fSgwVbanlv3Gr1QP3gWLxE9J5A2fXIt1lnNjkY9Fr/5gm2W++T+j2aswMMR3XC5wFWk6BCj9QxmKSAL/kNlc+Wlt/MP/eCgfvGCMxAL4LCedujn0j8i6o3dSXjy3gStVXpt96eCwTL0iaHks9rg1/6ZHRQ5Fwd7eHryy0Fr3CoIb7tWrB9yZC+pu+hN+o/rnTLZ+OGh1jNVZv0XK/ylk1WsYIo+Pcpd2k3HyqaQtcPg6BnyUkz/TuVUhQ6JZ5gQ3dlZkbl6+n8/AoEkRbMU76iyMsEHQFPgqdB1fB8YiDmJE=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY0MzY1Mjg2NTc1MiwKICAicHJvZmlsZUlkIiA6ICJkMGI4MjE1OThmMTE0NzI1ODBmNmNiZTliOGUxYmU3MCIsCiAgInByb2ZpbGVOYW1lIiA6ICJqYmFydHl5IiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2MwMjU5ZTg5NjRjM2RlYjk1YjEyMzNiYjJkYzgyYzk4NjE3N2U2M2FlMzZjMTEyNjVjYjM4NTE4MGJiOTFjYzAiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-4",1:" ",2:"§7Boss: §cKuudra §a✔",3:"§8Lava Kraken",4:"§7Overgrown lava Kraken. The more Sulphur it",5:"§7consumes the stronger it becomes.",6:"",7:"§7Requirements:",8:"§7§a✓ Complete the main quest!",9:"§7§a✓ 1,000 Reputation in any faction.",10:"§7§a✓ Beat the previous tier.",11:"",12:"§eClick to join!"],Name:"§a§cKuudras Hollow §8- §eHot Tier"}},Damage:3s}'),
        title: "Kuudra Hot",
        func: () => {
          ChatLib.command('joindungeon kuudra_hot')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"74ceda89-849d-35b4-b0fb-00083f599c02",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"JY5bVZiX9vccku3FJBQu5M6JBPTGOH+Y9B5yNoZB9STRSU8zyy2RuFSNXUeGDGux5+l3M0v5mztISMpgwVqobX7Ph9tSzLUvGDYI4ShjTy0wY7edSUJNaqt8l/THwL8Kvr3sZVgKaNvpN4UWyQ6529ndbXwihrzd+MevTqxaPP+nXUX5VGn5EWj6BOtNnHrqU1lWj8+h2JmkOR7DbmyRxD5Hq7aIQTgmO4c1fC3zBIjhcRMMhwY/EPUEtTd6oaQ4YSFfnsh36vBm1IJO/v3kiFc6C56yBZVjKK7ypobAJSiLrW9m/k0qgV+69iWi43A9R0w6vKcKaDouD5fK+PJhOr36WA9HRmzq+yjeLfV5SqTa/POFKD29TzqLvHVK74yOChXZXlwcZJOkuQM3BMfcwGKZ+QMc9nx+DIPlWwm/xTSqXnU/pnLYc/p/t8e49TN4x/Yx4+PfeqtQ6gyOxAR8zbm1P3hs3ByApD9IoSqCF2lRlwH7Q/NwkjArQHyP3WV/0DUpyETwy7y6/b4o/5BYDB2xbbygtAh4Y+eP7+076gr0uQXTwd1+Kf6cTNetHaDvnU9jgoAx1av9oFL8MP6L+/9sHkyUAJsYfHNNi96OTlsB7QfMreBpCe2cevrpeZeXeovSwd4Jt8HSzfB7GTcUcngHuWwUCIcmhlpitRpfFDo=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY0MzY1Mjg4MjI5NSwKICAicHJvZmlsZUlkIiA6ICI1YjY2YzNkZWZhYTI0NWMzYTcwNjM3OTA3NTQ0Yjg3MCIsCiAgInByb2ZpbGVOYW1lIiA6ICJSZWFuX1JhaWNvMDgxNiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8zMzBmNmY2ZTYzYjI0NWY4MzllM2NjZGNlNWE1ZjIyMDU2MjAxZDAyNzQ0MTFkZmU1ZDk0YmJlNDQ5YzRlY2UiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-4",1:" ",2:"§7Boss: §cKuudra ",3:"§8Lava Kraken",4:"§7Overgrown lava Kraken. The more Sulphur it",5:"§7consumes the stronger it becomes.",6:"",7:"§7Requirements:",8:"§7§c✗ 3,000 Reputation in any faction.",9:"§7§a✓ Beat the previous tier.",10:"",11:"§eClick to join!"],Name:"§a§cKuudras Hollow §8- §eBurning Tier"}},Damage:3s}'),
        title: "Kuudra Burning",
        func: () => {
          ChatLib.command('joindungeon kuudra_burning')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"3cb95c6f-c4c1-366a-aec7-74ec076ff072",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"MxFghnShR4bjK34QxM0stUaayhG8+15w+vBccS8mtN6Qwyp3HeD4SPKKP2hnervCVD3Ey/jEkM39O8E/onAjciKT7qQe+wSqWTGpVOAlk0EhxPCkP2M85JQiyPkYKtRq2IiLJQ111xRTOJeFahAxBaBfder+37Rzyd/F0vYg4KYRoamblxvfw2hB0vwS6WTvIDT6BLjnAoeodB0JQOWRw6G27g9uGrkbev1hferUTwfDK3ZSW0tLqGUBWN2Kyix2mwIvpRdt07NncnKCI/6r+D9h73zBpiiUbmWl/6cUuy4EtKR6TFyde2KE+lka2EUNcffoI81F997HIw0INrVNAz2T1PqUbtsuFJXfFORYVBHbzh7Irox6lQqTswtlJ3TVmpdgSvdnE7vhCHSkYbJyTYrGyVyFQXOYV7k7HvCmrRGtpk87AUOwGKsrzL1wlbNRDXhpzoqZheeayjQq6UZr7/6osh10bh7TynFb/O7y5UANOerQ+NTpSomEtS/1JuuH6YmeXegiJdQBLKRJYZQHoOUSkxqcUmlW6H3JK4XZdrssz1IEtNmMR4DMnYta5M/XO40qJPCqv6nsKsSzrMdLcopx+fx9HYcUgcuH7Ia3kmbAxnwB1hGvsms/gFUuWrtcjKOVFi6iVHaf7DiGLemN+1C4BwYShJggcbgnFhS+FdQ=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY0MzY1Mjg5ODM0MSwKICAicHJvZmlsZUlkIiA6ICI5ZDQyNWFiOGFmZjg0MGU1OWM3NzUzZjc5Mjg5YjMyZSIsCiAgInByb2ZpbGVOYW1lIiA6ICJUb21wa2luNDIiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmQ4NTQzOTNiYmY5NDQ0NTQyNTAyNTgyZDRiNWEyM2NjNzM4OTY1MDZlMmZjNzM5ZDU0NWJjMzViYzdiMWMwNiIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§7Party size: §92-4",1:" ",2:"§7Boss: §cKuudra ",3:"§8Lava Kraken",4:"§7Overgrown lava Kraken. The more Sulphur it",5:"§7consumes the stronger it becomes.",6:"",7:"§7Requirements:",8:"§7§c✗ 7,000 Reputation in any faction.",9:"§7§c✗ Beat the previous tier.",10:"",11:"§eClick to join!"],Name:"§a§cKuudras Hollow §8- §eFiery Tier"}},Damage:3s}'),
        title: "Kuudra Fiery",
        func: () => {
          ChatLib.command('joindungeon kuudra_fiery')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"3877a428-ace8-3faf-9992-4644fbd87f4c",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"qydHUUydOycKIFRKlbJla9fWMhyISpu/6IkueMvhWrpNUqmUUp0IRGFmP+qaps+CbZH0JDBMoj38Z4H1MVHXziyYG/1uDbB4y/hNKJNPHNjGubzwKqnmxSeuUogOdqX7SQ5nHVW+csPiVfawIV/TBVQOmtFCyqDe9pQCWHlkjmfIMilmtBx6tLnhnPpetoTBt5ClhWcHeAxHNc+JgvkUl0oORylkdK7iQWl1f06/iCgycT04oRvALAvJIOV4BLApfkHGJk2tTdVOFdNYq0f8EzY6wiaqP9g62mWHRIJQs619mx4Oogka6BuIPlrOXXOaz0JTyITBncTFdAuHqjw3f45hPEVcGSRYDk5QEwiT56gYTKkHxHljkawruWuw0Ea6TKMVIyd5qk/vjEqIOjCBsp5XYDeIrL6+GldS3zQrFu8NKF5jOH+Im5ySY16ZCP2tKDCKYo5e9N/k/TPA/rpWOw4D5RqTsBBDw4hwdlLarMj7KcXI4JNDBfWkYwcEkLyli2weliscP1Nn4c/hSmxzQLPUo1W0D1W2hQiVedmcpbDyAkU4JpEVSnBeLLPpu/CbJI+W1Uy20083E6fb9d27kLJ47x8+09pc6U24V+P2SQNfeDQ+lHpRdKM3NCKKcSJ+ENRhf2BgxFPErSm5DQMx+wf4J+CEQgBlZjk8Q53Rjts=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY0MzY1MjkxMzA5NiwKICAicHJvZmlsZUlkIiA6ICJjNTlkMDFlMDI4MWI0MGNhOTczNjc5ODc4NmRmN2FmNiIsCiAgInByb2ZpbGVOYW1lIiA6ICJvWm9va3hQYXJjY2VyIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzgyZWUyNTQxNGFhN2VmYjRhMmI0OTAxYzZlMzNlNWVhYTcwNWE2YWIyMTJlYmViZmQ2YTRkZTk4NDEyNWM3YTAiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§7Party size: §92-4",1:" ",2:"§7Boss: §cKuudra ",3:"§8Lava Kraken",4:"§7Overgrown lava Kraken. The more Sulphur it",5:"§7consumes the stronger it becomes.",6:"",7:"§7Requirements:",8:"§7§c✗ 12,000 Reputation in any faction.",9:"§7§c✗ Beat the previous tier.",10:"",11:"§eClick to join!"],Name:"§a§cKuudras Hollow §8- §eInfernal Tier"}},Damage:3s}'),
        title: "Kuudra Infernal",
        func: () => {
          ChatLib.command('joindungeon kuudra_infernal')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"4690ced4-389d-4a84-9d75-6be25a96c4bb",hypixelPopulated:1b,Properties:{textures:[0:{Value:"ewogICJ0aW1lc3RhbXAiIDogMTYwODMxNDY5NDY2OSwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmIyMGIyM2MxYWEyYmUwMjcwZjAxNmI0YzkwZDZlZTZiODMzMGExN2NmZWY4Nzg2OWQ2YWQ2MGIyZmZiZjNiNSIKICAgIH0KICB9Cn0="}]},Name:"§4690ced4-389d-4a84-9d75-6be25a96c4bb"},display:{Lore:[0:"§8/warp dwarves",1:"",2:"§7Discover new ores and minerals and",3:"§7level up your Heart of the Mountain",4:"§7whilst completing commissions from the",5:"§7Dwarven King himself.",6:"",7:"§7Main skill: §bMining",8:"§7Island tier: §eIII",9:"",10:"§8Right-Click to warp!",11:"§eLeft-Click to open!"],Name:"§aDwarven Mines§7 - §bSpawn"}},Damage:3s}'),
    title: "Dwarven Mines",
    func: () => {
      ChatLib.command('warp mines')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"a53266a8-8056-4533-9d17-e454c63a8e5a",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjFkYmUzMGIwMjdhY2JjZWI2MTI1NjNiZDg3N2NkN2ViYjcxOWVhNmVkMTM5OTAyN2RjZWU1OGJiOTA0OWQ0YSJ9fX0="}]},Name:"§a53266a8-8056-4533-9d17-e454c63a8e5a"},display:{Lore:[0:"§8/warp crystals",1:"",2:"§7A vast series of caves and random",3:"§7structures with tougher Stone and",4:"§7special gems!",5:"",6:"§7Main skill: §bMining",7:"§7Island tier: §eIV",8:"",9:"§7You have a free pass to the Crystal",10:"§7Hollows for helping §6Dulin§7!",11:"",12:"§8Right-Click to warp!",13:"§eLeft-Click to open!"],Name:"§aCrystal Hollows§7 - §bEntrance"}},Damage:3s}'),
        title: 'Crystal Hollows',
        func: () => {
          ChatLib.command('warp ch')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"bd4fa6b7-d6bf-393d-8601-00e048d57d91",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"hHsg3BLekf9Es/L3QwhinEJtaXOg74kvDzrINne2uEANsNYnaVGlKBKLNyhSlBQT3/42v8R8gY8/fulG4Iho0ynICGEqvypvD07Ox0vP7ebXdpEIlLa4/qdRyeTIn+RVeQJRnn1XbfD/BzZR/3gF/WImQBVGBJ36uDD/L0T4nQky8vwp4HxrGZwiyoenVFuB3UgUZfdR8PY8YCpKsFJL01j21vetyqL+jZam+fhuVAR8B/ebNgYDWLq/wbiTvmeExYrL19HdWNIweB1xh21PQsqYuAkmVqON8/KAbieCfYqHSooxq8emtBwawGNmZU/mp01UqW0l+mSm3xdwUCu2+tPxD14HCpoOI6z/ao5l7nhtMdQeBzONheCj/yhNwudfsuXGymiTV//0HLAFfz5BGad7pS7b9IerUH4L3XLhesns6jDSEqK25O6WiePj5f4Sra5ktcwHx6yDfl49gi45/D23Ufxj+dEvq0xsyxQwmN5Y2sJprL9A4NZR3yTgBnPAD0Rb2ghuxNGVzrBjKbbo4PHvnKyocPy/5+egKX4ONktN/p2TbOHfLF4yw7E8XXjjZslw7Dl3+2ekPx1d1fsF0dOLY9U1nAmJhiOCN1akbSM+mBIz5OMT+KOSfQtrqyZgPcfvbUDL54D0Lr49170iw33daBuwNuzsIDAnERbxiyA=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYyNTQ5MjQ2MDEzMSwKICAicHJvZmlsZUlkIiA6ICI0ZWQ4MjMzNzFhMmU0YmI3YTVlYWJmY2ZmZGE4NDk1NyIsCiAgInByb2ZpbGVOYW1lIiA6ICJGaXJlYnlyZDg4IiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzM0ZDQyZjljNDYxY2VlMTk5N2I2N2JmMzYxMGM2NDExYmY4NTJiOWU1ZGI2MDdiYmY2MjY1MjdjZmI0MjkxMmMiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp nucleus",1:"",2:"§7The central hub for the Crystal",3:"§7Hollows where you can collect",4:"§7commissions, refill your Drill, and",5:"§7deposit rare Crystals.",6:"",7:"§7Main skill: §bMining",8:"§7Island tier: §eIV",9:"",10:"§eClick to warp!"],Name:"§aCrystal Hollows§7 - §bCrystal Nucleus"}},Damage:3s}'),
        title: 'Crystal Nucleus',
        func: () => {
          ChatLib.command('warp cn')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"7250f46c-cc7c-3128-a69c-52216d84b0a6",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"ZCrPPN1vbkkZx60Lk+4zKapxvMy9qxF+TGY2wFtdkKEpZDs14CI5UIP1GGWe/C/PwSpj4Fv2kqFgeGTRr0SsiVCQH9jFf0iRkLTUQHoarn98oUA2Kz2YN2K4MzAZ1NlFzoKXw+z+DTuFxvkwn9kK/gZg7om/pvnUNsldMdcMbfgU6m/Fn2tkhbVSlVp/+59Vs4cJQK7sNwztQ6yiBTfkmQ65WRoa56Kbipns9G5q9HvV58utQvHcoqKajm8SVL1BX2WM82WDEiTTfjOx9IUyckkVJLO9ii3jP/XOMYbrZbzMy0bbtDZ1kiDi6k5X3KyJVEA4ry8PNJGujrftg8qT7SeHIzL4PUCTwHKR8wprEoYgZnBvfFEG/6WynjDrBI9narfyhAHFA4G5vvOo1fODCAN1SfiMtzfK4YJ6EpMwx8wvOAu49WC/AAdNmr8jTcPpjpXDg5MvyuKP1PdbEPyFabviZmnkpFcfXnwWfh272ktwUR8fr90qk6uPcIOKHYGc5NvWWEktfHJmRIhqZImDrNLrWslqg5Mk+n+qk1X2nnScuf+SfPv+zXzXONHa4V30wegmwOMef+G/8MVi90onK4d5z8v8EeaGW3oNabMNfmTt6UJ8alVmhJANSbJawrjUu0NeMQtFKwUGc8Vs4Kfd7ZnQcVplqhr9BjfcouERuxs=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcwOTMyNzA0OTI4NiwKICAicHJvZmlsZUlkIiA6ICIzNzRhZGZlMjkyOWI0ZDBiODJmYmVjNTg2ZTI5ODk4YyIsCiAgInByb2ZpbGVOYW1lIiA6ICJfR2xvenpfIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzI0NjFlYzNiZDY1NGY2MmNhOWEzOTNhMzI2MjllMjFiNGU0OTdjODc3ZDNmMzM4MGJjZjJkYjBlMjBmYzAyNDQiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp basecamp",1:"",2:"§7Lost long ago to the cold, find brand",3:"§7new Gemstones and Glacite Mineshafts!",4:"",5:"§7Main skill: §bMining",6:"§7Island tier: §eV",7:"",8:"§eClick to warp!"],Name:"§aDwarven Mines§7 - §bBase Camp"}},Damage:3s}'),
        title: 'Base Camp',
        func: () => {
          ChatLib.command('warp base')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"20fba086-af95-3002-b6b5-39d988fcb162",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"chDx23IShLR9NNar9jCEVYuaRY0MRGcn/rxQtkEMkzgYkzYqSbt8xaUhEhna0YVlE6PtisUXKkgtQFimJKX8bJ61t9MXlhTy3fuQfciKDHczaS6VC6UN8K1Z62fWRn143Z/5SMQfuik+jvykxs/6HlDpwCg/kubN+TsZyRcVNZcoVNI3aS1csV6fSPkPfXQGeFz+YYlrXKau1DvAbXe6jMe7EnxENPgNgC0HKI0W7MFiEDomCgI6mRehe4uRfpCjed+4snPJwk983Pt3FeT1kik0jT29lBc0aEMwVDTILCAEVVm6iz7ejDTK3gvnwjXrDYKmRGyTszjguoTWwX8c2sBTFcV6l5vXEqY0HCfYfWrMAdbtuJjdlzivLHltQG/Xacs2zjAGhgSXB+BXwcTvsJtL2KQ2puSDkTnaFhUlXCsxfMTln00fPknKONgAR6yCtQ2Tfr9x+Gpswwz11/GGCg/MWpQuiWe9nsKZtqm4m+krnQQVLi7RGOi3/ozQ8EwuRFuON60lfJCFH+cNuEl9j6ECf4PQuzIJmrtueU0ca403e694UrKvYp0Yh2BUH9MQuD48tGOBf2gDiaULaacvraOzwJYKOIwObF9QWy/3mae9Ohnw3aFv0TnLOeE6b9eiWz0/KkwVKq+GDQeKOq0MnY/ZQddKqgxbBffehjDZArI=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYyODg5ODQzMDUxNiwKICAicHJvZmlsZUlkIiA6ICI0ZWQ4MjMzNzFhMmU0YmI3YTVlYWJmY2ZmZGE4NDk1NyIsCiAgInByb2ZpbGVOYW1lIiA6ICJGaXJlYnlyZDg4IiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzZiYzc0MDg5ODNhOTM5MDJlODdiYzIxZGJhMzA2OWIyZmVlYWRjOWJjYzdhNzY3OTJmMTBkN2IzMWMxNmQ4YWUiCiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§8/warp forge",1:"",2:"§7An ancient Dwarven Forge that lets",3:"§7you forge, refine, or cast new items,",4:"§7tools, weapons, and more!",5:"",6:"§7Main skill: §bMining",7:"§7Island tier: §eIII",8:"",9:"§eClick to warp!"],Name:"§aDwarven Mines§7 - §bForge"}},Damage:3s}'),
        title: 'The Forge',
        func: () => {
          ChatLib.command('warp forge')
        }
      },
      {
        iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"88658796-e22a-4a34-8842-9b3901180b04",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzNiYzk2NWQ1NzljM2M2MDM5ZjBhMTdlYjdjMmU2ZmFmNTM4YzdhNWRlOGU2MGVjN2E3MTkzNjBkMGE4NTdhOSJ9fX0="}]},Name:"§88658796-e22a-4a34-8842-9b3901180b04"},display:{Lore:[0:"§8/warp gold",1:"",2:"§7Your first stop for extended mining",3:"§7related activities and home to",4:"§7SkyBlock's local janitor Rusty.",5:"",6:"§7Main skill: §bMining",7:"§7Island tier: §eI",8:"",9:"§eClick to warp!"],Name:"§aGold Mine§7 - §bSpawn"}},Damage:3s}`),
        title: 'Gold Mines',
        func: () => {
          ChatLib.command('warp gold')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"dafa65c5-89d1-4dfe-a74c-532634e25cac",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTY5YTFmMTE0MTUxYjQ1MjEzNzNmMzRiYzE0YzI5NjNhNTAxMWNkYzI1YTY1NTRjNDhjNzA4Y2Q5NmViZmMifX19"}]},Name:"§dafa65c5-89d1-4dfe-a74c-532634e25cac"},display:{Lore:[0:"§8/warp deep",1:"",2:"§7An island that gets progressively",3:"§7deeper and contains 6 layers of",4:"§7dangerous mobs and new resources.",5:"",6:"§7Main skill: §bMining",7:"§7Island tier: §eII",8:"",9:"§eClick to warp!"],Name:"§aDeep Caverns§7 - §bSpawn"}},Damage:3s}'),
        title: 'Deep Caverns',
        func: () => {
          ChatLib.command('warp deep')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"88a239a2-17cc-4dde-85c1-90362539af25",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTIyMWY4MTNkYWNlZTBmZWY4YzU5Zjc2ODk0ZGJiMjY0MTU0NzhkOWRkZmM0NGMyZTcwOGE2ZDNiNzU0OWIifX19"}]},Name:"§88a239a2-17cc-4dde-85c1-90362539af25"},display:{Lore:[0:"§8/warp park",1:"",2:"§7Chop down trees and explore to meet",3:"§7various characters across different",4:"§7biome layers.",5:"",6:"§7Main skill: §bForaging",7:"§7Island tier: §eI",8:"",9:"§8Right-Click to warp!",10:"§eLeft-Click to open!"],Name:"§aThe Park§7 - §bSpawn"}},Damage:3s}'),
    title: 'The Park',
    func: () => {
      ChatLib.command('warp park')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"69eeef13-c89f-3fab-b1c4-bbaa1001e32e",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"wtMd7dg4iC0QiEIiE5nlZQokCzelfyrj+wfmiuHB8GjFsb1ZXSWKdDwhCdc5mFH7ss0Ze1cgFDlY79+gfAF1CDinxYmTZNTEEbN8m/qeHtIAiaQXT0M7EXZp9KMYu8K3oNwno/MFfTT9hkIyWIBTOm8EJAd6aXhVI9sF5HMRVxg+XfWFOTx1n2oKTvl34LeBEU9w5LS6rRHLB4h72dg/fakm3tT5NT5WHL8HweJ0wyb1BdXqJAXx17iRK2jLHYfwgMpZscATiJ9tFayJ7SdI2RuyzupNMjvpPAuRWTjrSsrnrf0R+FzjvTz1OTArdjJ0PVEevhVRTXj6w+Tcc9ASoiYP1ZoX14/Fcl0BqcVwzibAfYeFp4XToOG3NjHnTYtYIXLwsiHpvzyzF7o+hv4PKy8vIwUJSUNekLIChFXKQgvWobAc8UbEqf9ITZNVKC9GJUgabLN72VGKHwe5hl/QfQvhOIZwqLLk94jZHkzj+VfC81T0/osruUVOR23e+Rc9c89fNGv0gRS3tS4vvZkAUcRKRpFhWTUyHQkKYygffX2FzAdE3Rrxn5gJqwi/POfYtHKnEus+INGPqRE9E10JbR6/tkD7WQUZ8MbHR+uyFOV0QHgwgBOGEtOCxnHtvbdMZ0iS/iOO8fnnUweKdGBqMbZ+YWqQnOGP79K19TtFc/I=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxMDI1Mjg1NTQyMywKICAicHJvZmlsZUlkIiA6ICJiMGQ0YjI4YmMxZDc0ODg5YWYwZTg2NjFjZWU5NmFhYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNaW5lU2tpbl9vcmciLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTNhZjhlZjJlZDc0MDZhNjc0NzE0YmI1ZmFlZDZjODU0NTcxMjAyYWExMzA2YzA3YzZiYTA2MTgyMTkzZWI2ZCIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"}]}},display:{Lore:[0:"§8/warp jungle",1:"",2:"§7Spawn at the top of The Park.",3:"",4:"§eClick to warp!"],Name:"§aThe Park§7 - §bJungle"}},Damage:3s}'),
        title: 'Jungle',
        func: () => {
          ChatLib.command('warp jungle')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"44515989-5699-308a-8fcd-598b528865f0",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"RmzFdh+uREIdC+2mqq6S7GvEHMrCXr9B4qD4EKCO7Ln+u66wd31jBfwdmG+ZP+KJ7I7JZPreeeUozJZhveh23j4gaYh+6Xghf0VUEvk3Gvuce8QT+pmpBlKOngwwQtePaJzxxPbInAuWbHnZiRl+AuM9tvb2qBx1eTYiPzCMkwkEihNT46nQU51B7xqa+SeGGJyAmAREKwsAdol5UKscbUXDL0Dg37e+wRpRCi4HgRndEU93Murypm6V1JoNnHTrNo/9WHCQ0TkqyQ/rR8T5ow4Jxu/c7grFL8CNnMRZjVjttRPbGYtjcsMTQ7kM16kzHkIMU0IcXz32WedQ7WhncMQTDBcpZ1qgZ/5Woj90zEUDu+LN2oYwagUzs41V9YquFS41ZS+J7lydg22V+gxlFgcAqf5WDUGQNRA5fUVMVA/YqZGA9IoFKPlYdrJdNamUkiSTKJ0AUeltBZPAmAHHfxUKvQYrrG+49Z+wPfs3LUs6iy4GHJWufJMnMyMEFU1cSHEOm7BEMXuT+PeJ+O0S6wQJXJd5GTAtlUlVaC0/zjhYEDuWwpJLYQmCUlMPQiJ2/58aFOKAKgaqhuAJRo7w1owyGKSWyeJZwyfk3ja2BcuUG3UHoG3hyFTebqLPbsUXov1OIsSzdibE1PhD9zewD+oWab7y9llAwg0MWUsary4=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTU5NjcxODk4OTIyNywKICAicHJvZmlsZUlkIiA6ICJiMGQ3MzJmZTAwZjc0MDdlOWU3Zjc0NjMwMWNkOThjYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJPUHBscyIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8zMzEyMDk0M2I1NWE5NzI4ZGQ2ZGYzOWZhNTFmZDU5Y2E1MTQ4NjlmZjM2OWIzOWUwMWFkMmVhZjgxNTg0MzAwIgogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp howl",1:"",2:"§7Spawn in the Howling Cave, behind the",3:"§7fragile wall.",4:"",5:"§eClick to warp!"],Name:"§aThe Park§7 - §bHowling Cave"}},Damage:3s}'),
        title: 'Howling Cave',
        func: () => {
          ChatLib.command('warp howl')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"9ab6b4de-0f6f-466f-8ca5-2fec8f4ef4d3",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGQzYTZiZDk4YWMxODMzYzY2NGM0OTA5ZmY4ZDJkYzYyY2U4ODdiZGNmM2NjNWIzODQ4NjUxYWU1YWY2YiJ9fX0="}]},Name:"§9ab6b4de-0f6f-466f-8ca5-2fec8f4ef4d3"},display:{Lore:[0:"§8/warp barn",1:"",2:"§7Collect basic farming resources from",3:"§7plentiful crops or the local animal",4:"§7population.",5:"",6:"§7Main skill: §bFarming",7:"§7Island tier: §eI",8:"",9:"§8Right-Click to warp!",10:"§eLeft-Click to open!"],Name:"§aThe Barn§7 - §bSpawn"}},Damage:3s}'),
    title: 'The Barn',
    func: () => {
      ChatLib.command('warp barn')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"713952e8-58f3-3f6b-a548-3b485d607592",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"EdYX0Z0RbVAPdgxfTBShXGNJh1A68IEnDfR1ay5xwPsDFY/mEZ0IuMTCPzPUIZPP16voKWyDcAQXt5qkysGRCbj91Vmttd4uUSn7gqbUc5GkDFBUEjAJJHn9yH9pbDnNBDXrFDHst5e6rHd1Z+YxtWvP0sudFArpM5FhRxESu2jFMiBfCnXr7Jkt14OpxK2sjnJBi0L54T3wTqYsjwOLIR06ytiv2JYelvshUZVmo3XBO91BI+5MnJjZt9/zOKkrKp1pOOoK7ibvhESdBsK9GvFPi4vqgXYPO+Vzxuv3YHYvRYFVzhPnnknImtmQufdxlTnvlzv+WlWArW+ZU+R97gRULbeZFIiXVSVuv7O1ZuC0vLrF1U3UyFF0zNhn0Ko/3f3rzYLIfPesYztnV5c2gGJFmNj8xsLrZaLBD4SEwxnBifJGezFUg/3MhCS5t8Ox+Z9Sh3nFCEzzeDeUbxIBFZE8vzIWLxndH5TAZekod5CF+yhqkhemV0LgXmrhDAT6MDWDSadiRPpuCm2GIYrPs7G17XY7ydByLZvEwz0WPkFlzgUIjBG7ykikhC6fp8P98+7yxo0ewdnB2z0zX6h1vE2E8V9WhO4+RHoQ+TbYpCXBSdIFRJM6HJXGObWHUzoIFpbpbCPWxusQS8KO97KehUMbrtZiecoWHQkAgx/nEGY=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTcxOTU5MzMwMjk1OSwKICAicHJvZmlsZUlkIiA6ICIyNGFjYWZhMmVlNDA0ZGMwYmRjMjViNWVjNjgxZmRjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJXaWxsZXJtaW5hRDM0dGgiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTM5Y2EzM2JmOGZlMWFiYjI4MWU5YzNjMzYyZjY1MmY3NTM5MzhiZWUyMjFjOGIyNTk1ZTBkYzU2NTczNjNiMiIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§8/warp desert",1:"",2:"§7The second farming island where you",3:"§7can find more plentiful resources, dig",4:"§7for treasure, and hunt for animals.",5:"",6:"§7Main skill: §bFarming",7:"§7Island tier: §eII",8:"",9:"§eClick to warp!"],Name:"§aMushroom Desert§7 - §bSpawn"}},Damage:3s}'),
        title: 'Mushroom Desert',
        func: () => {
          ChatLib.command('warp desert')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"06fe96b8-9b54-3ecd-950c-c5624395a911",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"OdFbTqBzikan1syCASs6IOgVLcEiKahV0P2Px8yKkTBapug8aPBCT2XaiBsliN8e/xM7RWcOxJOeofT9RwgLjRgFT2vvTgFnvmRmEYRtAXd7lvpJFcKn1M3OCh+rfgZ2o8Kp1S4uGbfOLW+yNyftnagRYH996P0/NujNyOLgSF4HIcbgCqqudN2fMugoUJvvVDAifE43RnT3IKySCylUc+JzrJa04TufAB+fQKnQhYKCdztuSCzXJT13SE9OcY3R7uOfRq2C4nYhQ2TSDcRiXldV3E1NDADDCX9GlIE+6NFFvVr6/raaAb6DmIeq6anIu7/QIjW6e4Y3CpftpCtSiSujS9hycyzaMgzwLsYqlDNgtJXFmEBy9Fd5dnIrzJxozGHVqk8lEYmtKUnfltbNeSDCAbeRm6tCgdzTkycKusO4EfDvFoRKNDs8knHE8Xl5/BTtcw4XUIENsYT8V6BUKHrBpNpUMif7rBRZR3+e37sEHt3xs7EI4IYtSRFjtMyV6SDSL6WWpar/aGXpBt6O5+93Jycv/nv75uxP0FzVFAKewCq2alq/GjdgfIamik/+KXtXBe7Biz699Fx35+o79ZztxDMCYXYkxeLZGNpElBBzTHEjOFWeOwoR58OphhBa6W1xlhCWVoPdZK93lgQIBsYh2WSCHnM2kYN3Pj/pZZc=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxODI2MzEwNDI4NywKICAicHJvZmlsZUlkIiA6ICI3NTE0NDQ4MTkxZTY0NTQ2OGM5NzM5YTZlMzk1N2JlYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGFua3NNb2phbmciLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjEwMmY4MjE0ODQ2MWNlZDFmN2I2MmUzMjZlYjJkYjNhOTRhMzNjYmE4MWQ0MjgxNDUyYWY0ZDhhZWNhNDk5MSIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§8/warp trapper",1:"",2:"§7Spawn right next to Trevor the",3:"§7Trapper!",4:"",5:"§eClick to warp!"],Name:"§aMushroom Desert§7 - §bTrappers Den"}},Damage:3s}'),
        title: 'Trevor the Trapper',
        func: () => {
          ChatLib.command('warp trapper')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"9feb0ce8-5734-4b05-8551-1d2359f05aa7",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzc1NDMxOGEzMzc2ZjQ3MGU0ODFkZmNkNmM4M2E1OWFhNjkwYWQ0YjRkZDc1NzdmZGFkMWMyZWYwOGQ4YWVlNiJ9fX0="}]},Name:"§9feb0ce8-5734-4b05-8551-1d2359f05aa7"},display:{Lore:[0:"§8/warp spider",1:"",2:"§7Explore a dangerous nest, discover",3:"§7the Bestiary, hunt for Relics, and fight",4:"§7all kinds of Spiders!",5:"",6:"§7Main skill: §bCombat",7:"§7Island tier: §eI",8:"",9:"§8Right-Click to warp!",10:"§eLeft-Click to open!"],Name:"§aSpider's Den§7 - §bSpawn"}},Damage:3s}`),
    title: "Spider's Den",
    func: () => {
      ChatLib.command('warp spider')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"522f39bc-127d-35bf-8bbb-fa45a71c444c",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"C08Cl3RCVFyDUrBwP837kwklsxqsV83OTn28+fEQ1T1H+pUE7zsnljCBC9HXhb8NUKWMvjVWCl76oCDrIQ4voUlGQBt1W4vmCN3ECi+cs5RDPWsooFh2xvhsldJr3UhB4eUG4jwZ2WaNfFb69oAx+HrFpnuT+5s3naVPOO0CJ47EWdevXYI0mi+3pY9G1fp6Cm4C5Ogd/nXjfXaYuCuJAjI13wW7y4Ih6VcXsCIbCls9mBhYnFWecuLNCqGFkSEkgSCWkBbK30IZiJwWPkhFGl45C02h9oJM+dPMxutGH27K+dAqsL/zlAJRGDsUuKHJr+aozwfG3o48rUMuQpzJG5gV6K7sedMYVWcmqKfmLzllR90i9NWSQoeUW+VZN9Y9wo620i5Bo5TW6Bl4cogdnKOqJLtTTBz1bI1ZAWp65GYjIAk2NCCNzioK3jrGB3c1XxLj3Nk6VMcTUhknbpdWtiNEBCmJyAVGreiHOfegl+O4JN5iMUc3NMhgxNXM9xnyMWoEEBuUnc8dT7kNN+R3XbXPoDXowPHUGzJUoWzyoa+8fqS4341KGvBHoQ8/7HvPw/wzBuwlckgQYqewCfCAwlYZnonIII4Eh7/5eLjQsHcyy/SGSqE5OKiadc0soUKcuQmmGIRJFKqW3XuqPrX8eLOASEm51aIoQTkdHr9selo=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYxMjgyMzg3NjUxMywKICAicHJvZmlsZUlkIiA6ICI3MzgyZGRmYmU0ODU0NTVjODI1ZjkwMGY4OGZkMzJmOCIsCiAgInByb2ZpbGVOYW1lIiA6ICJJb3lhbCIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS85ZDgzZDA0OTQ5MzlkYmE1ZjI3YTFkY2JhNzAzMWQ1ZmVmZjQ0ZDZlZmU4ZDg2MjNlMTIwNTI0NzBkMGE2Njc0IgogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp top",1:"",2:"§7Spawn at the top of the nest in the",3:"§7spider's den.",4:"",5:"§eClick to warp!"],Name:"§aSpider's Den§7 - §bTop of Nest"}},Damage:3s}`),
        title: 'Top of Nest',
        func: () => {
          ChatLib.command('warp top')
        }
      },
      {
        iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"3a990f55-ac0d-38c1-9deb-fdbf1be1bcde",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"k6Tq0UrV3cUk2Np/EWWiuqxgVK0Cnzl0j/imDzgiUrYFyuIAG13EFiuoRQ6z3tzvICpdnwf7Yk4cIAOmhqTu538jUGevqUy0YqW8GD3VKJWa9+h8BJNaiV99KFSdswKhMVrURyoUAY3N//x8KZgv8/geI7IGpQrZmTgDbgyrPBGdB9+5XOGbwctRz6DPs18KyHfsjeQURpd/wuD9GAR1n0vsbwUW7bXItuXbDDofzlxGndcsM1BaIzBZLJdAfRX3ytt6Ts1qJ1VdXesW8eiAU55HPxfBBFA1njA//PZ8zrimFqroD7F3onzzrsdirIh9P1IxBcO1FTcVaJ58NRuP6IDL0YuiuPLfTuS43lWGQ7SHFfWSq+txt425sy92vEiy5ntExtUsyo/kbyTvf8muQTskydQVvNyUz2HNwz+9VREfAYU1n6gyGp03fAmwgz+yIozoTrdXNf6aorGxbt0NGeuKbXxaSPHC+CMl+kcJIkoprV0xTM1KBfKYTOalnoWR5JmozsH2joL0R40KASyqiw7xMMOT3x/SEOB9lhP8rL4gXlTaQsOJd9qKyIC0LeeDDjDx27Tky5mLH2ntQ/04bZ4mL3YmFlZhSmtIenJCODrcJBMeBCCmogDrCM+Qwp3nDaJZ/acGBYmQHy2syuZ3xTR2A/3zNDuSkDLqtAWEllI=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY3MDQ3OTE5ODQyOCwKICAicHJvZmlsZUlkIiA6ICJmMTA0NzMxZjljYTU0NmI0OTkzNjM4NTlkZWY5N2NjNiIsCiAgInByb2ZpbGVOYW1lIiA6ICJ6aWFkODciLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzVlMjQ4ZGEyZTEwOGYwOTgxM2E2Yjg0OGEwZmNlZjExMTMwMDk3ODE4MGVkYTQxZDNkMWE3YThlNGRiYTNjMyIKICAgIH0KICB9Cn0="}]}},display:{Lore:[0:"§8/warp arachne",1:"",2:"§7Spawn at the entrance of Arachne's",3:"§7Sanctuary.",4:"",5:"§eClick to warp!"],Name:"§aSpider's Den§7 - §bArachne's Sanctuary"}},Damage:3s}`),
        title: "Arachne's Den",
        func: () => {
          ChatLib.command('warp arachne')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"534ca757-c94c-423a-9766-4c4929476ed2",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzg0MGI4N2Q1MjI3MWQyYTc1NWRlZGM4Mjg3N2UwZWQzZGY2N2RjYzQyZWE0NzllYzE0NjE3NmIwMjc3OWE1In19fQ=="}]},Name:"§534ca757-c94c-423a-9766-4c4929476ed2"},display:{Lore:[0:"§8/warp end",1:"",2:"§7Fight Zealots, mine End Stone, and",3:"§7defeat ancient Dragons!",4:"",5:"§7Main skill: §bCombat",6:"§7Island tier: §eIII",7:"",8:"§8Right-Click to warp!",9:"§eLeft-Click to open!"],Name:"§aThe End§7 - §bSpawn"}},Damage:3s}'),
    title: "The End",
    func: () => {
      ChatLib.command('warp end')
    },
    subOptions: [
      {
        iconItem: getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"86927fb8-b20a-34f7-9c41-327567dd6a1d",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"dDacUZW7SCKgmUai+vrbZ/2/b83RSX269Jf5KcIKaQT4KWXtzTl0PJuVjccXmh8x1w7nnYlYJHajg17asmdaqh+ATKUNAkPparREJPEmAUqMZ3AQ2PkYOwvnUR1PVOtbYBQMvFN+b482J65o5XdaNo2d4wUSdhWh5dfGGQeVYQ2JP6BEgN4Ff+2KBUVOZp+ae1YaJ6u2pLdT0F2ksD20wiEOFE1OZeTabK3h0CfRunEwv0h6nIj73QKyuflGPvMsuLA77a7uNlJpuSxzTWUJywv5yX0vfH7bwXa0CUKVXDHArNt3NuaBiuwkUwcSYWz6IbRBQRgYDL2Qu+Qs/IyodDXxYLvlmZBH/Woi1ms4Tlpzt2zPxls9xh6msk8b5UVq6s3bbcPZZ50NPeUtWocowNoTOWLHYKKIHIrSY/2DeTaQpgONqE8Mh2+qdE7G06Way/UXwYFKHF1FH31qj2GRsJsiY9HqY0lRvsrx4xy0SyH/psUTkmi8CAj6HGNbS4ycHKglPM1ld6OJF8Oi4istBdGGcabE+t/yb93JniZTPSkmRK1B8Aa+BrxgPkxohtw8Coh+Yfg4apCfi9vy64IQVXsiNSI2AUXM30Mhnfd0GXmvLLFf2BhHd9zOqco0tUXewvfZ9IRjcBgmei2f5bdw+svL3VeBjgKzeBuElPXwfg8=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTYyMDY2NDExNDg5NiwKICAicHJvZmlsZUlkIiA6ICI2MWVhMDkyM2FhNDQ0OTEwYmNlZjViZmQ2ZDNjMGQ1NyIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGVEYXJ0aEZhdGhlciIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9lY2YxYjM1NDBmZDJmNjAzY2NmNDI2NzdjOGU4Y2FlN2NmZmIwZTFhZTIzYzYxYzUyMjI5OGVjNDRkMzEyZGNjIgogICAgfQogIH0KfQ=="}]}},display:{Lore:[0:"§8/warp drag",1:"",2:"§7Spawn inside the Dragon's Nest, ready",3:"§7to grind Zealots.",4:"",5:"§eClick to warp!"],Name:"§aThe End§7 - §bDragon's Nest"}},Damage:3s}`),
        title: "Dragon's Nest",
        func: () => {
          ChatLib.command('warp drag')
        }
      },
      {
        iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"8299b04a-1524-31da-bfd3-6ee25ceddfd3",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"Xv+6HkCSYL3k5j5oTcl1TY9ZFoCJWiwqcydVHW63wOAN3ZztulyDSHGU8TzzsKZXrHIC63RpcpXXDE6e++CIVOBPvx7IhlkMI+dgB5kjZl4Yjou6zdsuIy0aSSvbfQZsx4IyEb4n4DgYZO4VSmaVr8OKdGRmrrUN392WxNf3IqHGzEKEngiyB9kcJBmtfVEvCuQL7PFEZhN9pQubLQbrQ/Bm94aYmTs82c46dPX9kJMmRBKwqyL9Hcaa6PIg922i0xgn2dF3rBW4Jm8ax4sLKUR3yUyLgT2UAqkCeBgy8xeAFl5jdbfOF/P5N4jK6ysOuHk1q0I4SdjrIVToTmGgKHB76hF+iPBAxW+4J6FZy4gm7tMYwhdJkttsECd6SgYDGtDmyp1ymYLozPFB+cz9z4czEv6VIC+VCzZKNYY76X0ZmXLfdQPtaJh8eCglfopWhyy1jQjOGPW1ww26Dd3HPuMW/NUm69qVVUfD8jtheq312tF1xxSO/1CUyflaZwptJZ13qo/FqAMhzRPdg1cv8aI9kshzkGXZ15sI81yWt5x8ELIegAUoOD/q3Yu6CL+Ib4QOs5XzqZiDljk96VGVZFR2Gf1Gou4H9Pcj0syZ8b4KZJs6FIWlM1S7rgRqqc6lA+XuPHNDUk5xnzfZGIiJGBMHK74Ax1P24zYAkiTUCP0=",Value:"eyJ0aW1lc3RhbXAiOjE1MzQ5NjM0MzU5NjIsInByb2ZpbGVJZCI6ImQzNGFhMmI4MzFkYTRkMjY5NjU1ZTMzYzE0M2YwOTZjIiwicHJvZmlsZU5hbWUiOiJFbmRlckRyYWdvbiIsInNpZ25hdHVyZVJlcXVpcmVkIjp0cnVlLCJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWIwNzU5NGUyZGYyNzM5MjFhNzdjMTAxZDBiZmRmYTExMTVhYmVkNWI5YjIwMjllYjQ5NmNlYmE5YmRiYjRiMyJ9fX0="}]}},display:{Lore:[0:"§8/warp void",1:"",2:"§7Spawn inside the dangerous Void",3:"§7Sepulture.",4:"",5:"§eClick to warp!"],Name:"§aThe End§7 - §bVoid Sepulture"}},Damage:3s}'),
        title: "Void Sepulture",
        func: () => {
          ChatLib.command('warp void')
        }
      }
    ]
  },
  {
    iconItem: getItemFromNBT('{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"6ee4b9f5-66e9-4849-aade-eb81e5f9034f",hypixelPopulated:1b,Properties:{textures:[0:{Signature:"r1nhxEkrUzTuG/xD/b12ftynAy/1jHGOjsm4ulKJmrClmLmLA+XXtpdj2iuRS5LwLfskm5/dnfCcJirY9heXeD4XQ6e+evD0/QF6idjwrudoPAuhHImFvyOO23WmpiOYKtZQSA3ARLLlPWKpKohOrbCDB3CCBryuO2EYvTUHz7z75dZZ4gz20bR+kKBHrlZ7FRgRfPrZgbITrjNpFTSqfK4t1rfVFGvj0tQ5rTIRog/fr6Z23CePfE/u+zC4g2HX5ac+JjFU6nK95BPuelczOCCG2iSW6eIQy1mA6p3jrN0wo5zyq1NgTmJ2nY+QdjS2qLlCLnriYjNRhwR1Z32E6wHfb+DmEzOIhuVTegQI6gV0u51zN3U+ueyuJ2bMbSm6K9DVYeQ2Nn/UNhgxTmoToFGk5EB3H4xy2ZKV1FvmM6kM+OGO7SLaYawf9dgBhT29U2bWxCjJtj/FfZgb3O/+zx3E16CBga6xkToERk4vD6TGzEqrKK045O4fBusJL/EtkGWE8ZC/c4MLBvNWQsn9wpa3pO2NAiS3SNbuT5GFTqIvrGTxpDVEY4VWbN+2Mv4TWUMfi0k/cqyug0akgZaGFB/38W0LZycMg7HB+6fWYKBjPepUrtNc2yCGXVIBYDpCd23h76Kpuf3dVIJ5CsDVXbmebE/zrkSXj542D2QqLw4=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTczNzIxMDU3NTM5MywKICAicHJvZmlsZUlkIiA6ICI2ZWU0YjlmNTY2ZTk0ODQ5YWFkZWViODFlNWY5MDM0ZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJwcnRsIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2I1ZGY1NTU5MjY0MzBkNWQ3NWFkZWQyMWRkOTYxOWI3NmM1YjdjYTJjN2Y1NDAxNDQwNTIzZDUzYThiY2ZhYWIiCiAgICB9CiAgfQp9"}]},Name:"hypixel_skull"},display:{Lore:[0:"§7Players:",1:"§8 - §b[MVP§c+§b] prtl§f",2:"§8 - §c[§fYOUTUBE§c] PortalHub§f",3:"§8 - §7visit1§7",4:"§8 - §b[MVP§f+§b] Splooder§f",5:"",6:"§7Profile: §eCoconut",7:"",8:"§7Server: §amini185S",9:"",10:"§aAlready on island!"],Name:"§aVisit player island"}},Damage:3s}'),
    title: "prtl's Island",
    func: () => {
      ChatLib.command('visit prtl')
    }
  }
]
