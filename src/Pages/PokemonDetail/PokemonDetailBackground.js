export const back=(type)=>{
  let backgroundimg=''
    switch (type) {
      case 'normal':
        return backgroundimg='https://external-preview.redd.it/y3Q5Tdo1uARHSxWt6A58M3TVLbWmx-Tbd6KWvCf53-c.jpg?auto=webp&s=2fb61960233e5585493288eb0c478e6c66e17fe2'
      case 'fighting':
        return backgroundimg='https://pbs.twimg.com/media/EpIKn5kUYAMxOmz?format=jpg&name=medium'
      case 'flying':
        return backgroundimg='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c2b4cc2-d07d-4fbd-b02e-2080981b29a1/deifq5d-4f3b8e0c-cff1-4a1e-969b-774e04a2c531.jpg/v1/fill/w_1192,h_670,q_70,strp/kingdom_by_t1na_deifq5d-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMGMyYjRjYzItZDA3ZC00ZmJkLWIwMmUtMjA4MDk4MWIyOWExXC9kZWlmcTVkLTRmM2I4ZTBjLWNmZjEtNGExZS05NjliLTc3NGUwNGEyYzUzMS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.trOmJ99Mw5rhUgchvb9zZnsV8-dalT7zBb_fpFaCG-E'
      case 'poison':
        return backgroundimg='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba3fc59b-d440-4a2f-972c-121163b722ab/dbfc1nn-d9022a4b-8d19-4b0e-85b3-cff4d5338867.jpg/v1/fill/w_1192,h_670,q_70,strp/saylua___dark_side_by_lyraina_dbfc1nn-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmEzZmM1OWItZDQ0MC00YTJmLTk3MmMtMTIxMTYzYjcyMmFiXC9kYmZjMW5uLWQ5MDIyYTRiLThkMTktNGIwZS04NWIzLWNmZjRkNTMzODg2Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rtJcRErV6Mm8CpdGBYjbk7tqAyEtzX4AZcT77EiN5vA'
      case 'ground':
        return backgroundimg='https://pbs.twimg.com/media/Dt0An4CUwAAIlYn?format=png&name=medium'
      case 'rock':
        return backgroundimg='https://cdnb.artstation.com/p/assets/images/images/008/425/923/large/guest-artist-series-canyon-west3.jpg?1512676594'
      case 'bug':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/006/297/664/large/yog-joshi-tropical-environment-yog-joshi.jpg?1497494056'
      case 'ghost':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/003/552/194/large/yog-joshi-haunted-house-yog-joshi.jpg?1474931671'
      case 'steel':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/002/816/060/large/yog-joshi-planet-x-may17th-12.jpg?1466038100'
      case 'fire':
        return backgroundimg='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a005f14-91b9-4326-b824-f28860c87eb3/d91ne3r-2dc0d52a-9ea9-428c-93b8-d096c3a62ede.png/v1/fill/w_1163,h_687,q_70,strp/dark_seed_by_shahabalizadeh_d91ne3r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM5IiwicGF0aCI6IlwvZlwvMWEwMDVmMTQtOTFiOS00MzI2LWI4MjQtZjI4ODYwYzg3ZWIzXC9kOTFuZTNyLTJkYzBkNTJhLTllYTktNDI4Yy05M2I4LWQwOTZjM2E2MmVkZS5wbmciLCJ3aWR0aCI6Ijw9MTI1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1pxC1BYc5QH_GZoUU3CRGG48hqC7C0C7lEJ6XLLXP4o'
      case 'water':
        return backgroundimg='https://i.pinimg.com/originals/bc/db/21/bcdb219a3cbd3b233492e48325da6c70.jpg'
      case 'grass':
        return  backgroundimg='https://cdna.artstation.com/p/assets/images/images/023/667/194/large/yang-sohyeon-4.jpg?1579956465'
       case 'electric':
        return backgroundimg='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ae5f732-e525-4baa-ad3b-73bd3d6076b7/d30gdqs-8dee34ff-2825-4491-b649-6f99e6738df2.jpg/v1/fill/w_1131,h_707,q_70,strp/lightning_by_fel_x_d30gdqs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MCIsInBhdGgiOiJcL2ZcLzBhZTVmNzMyLWU1MjUtNGJhYS1hZDNiLTczYmQzZDYwNzZiN1wvZDMwZ2Rxcy04ZGVlMzRmZi0yODI1LTQ0OTEtYjY0OS02Zjk5ZTY3MzhkZjIuanBnIiwid2lkdGgiOiI8PTE2ODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hPK1r1F5oS36QPi7Sl0OzRmNEUI5GK_6n3vI3o35N5k'
      case 'psychic':
        return backgroundimg='https://cdnb.artstation.com/p/assets/images/images/013/112/609/large/shahab-alizadeh-jungle-3.jpg?1538103381'
      case 'ice':
        return backgroundimg='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba3fc59b-d440-4a2f-972c-121163b722ab/dcs7ua9-9cecaff5-eb33-42fc-9989-f46a306a3245.jpg/v1/fill/w_1024,h_613,q_75,strp/glacier_by_lyraina_dcs7ua9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6IlwvZlwvYmEzZmM1OWItZDQ0MC00YTJmLTk3MmMtMTIxMTYzYjcyMmFiXC9kY3M3dWE5LTljZWNhZmY1LWViMzMtNDJmYy05OTg5LWY0NmEzMDZhMzI0NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.U5_-3tjZUdvcM4-WWfgYeZDgf1a9E25AfbEbGLRVgaQ'
      case 'dragon':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/006/991/884/large/xiwen-chan-2bb.jpg?1502850710'
      case 'dark':
        return backgroundimg='https://cdnb.artstation.com/p/assets/images/images/032/726/561/large/geoffrey-ernault-lostcastle.jpg?1607297568'
      case 'fairy':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/000/356/296/large/geoffrey-ernault-cozlq.jpg?1443929386'
      case 'unknown':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/001/019/908/large/geoffrey-ernault-aj-done.jpg?1443928379'
      case 'shadow':
        return backgroundimg='https://cdna.artstation.com/p/assets/images/images/039/345/132/large/didier-konings-didier-konings-forestscene-mattepaint-cnpt-v007-hq.jpg?1625635397'   
      default:
        return backgroundimg='https://i.pinimg.com/originals/3f/96/6b/3f966be1f3a6246992aadb4a1971fa20.jpg';
    }}