import Note from './Note';
import Loading from '../common/Loading';

interface Props {
  notes: [];
  isLoading?: boolean;
}

const NoteList: React.FC<Props> = ({ notes, isLoading }) => {

  return (
    <div className=' flex flex-col flex-1'>
      <h2 className='text-2xl text-dark dark:text-white font-medium px-4 sm:px-0 transition-all'>Notes</h2>
      {
        isLoading ? <Loading /> :
          <div className='note_list grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0 mt-5 sm:max-h-[72vh] sm:overflow-auto flex-1 sm:pr-2'>
            {
              notes?.map((note: any, index: number) => (
                <Note title={note.title} color={note?.color} key={index} content={note?.content} />
              ))
            }
          </div>
      }
    </div>
  );
};

export default NoteList;
